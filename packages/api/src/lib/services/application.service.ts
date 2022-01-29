import { Database } from "@disguard/database";
import { DisguardSnowflake } from "@disguard/snowflake-engine";
import { sessionService, userService } from "#lib";
import { defaults } from "#consts";

/**
 * Get an application by id
 * @param id The id of the application
 */
export const getApplicationById = (id: string) => {
  return Database.client().application.findUnique({
    where: {
      id
    }
  });
};

/**
 * Get all the applications for a user
 * @param userId The id of the user
 */
export const getApplicationsForUser = (userId: string) => {
  return Database.client().application.findMany({
    where: {
      userId
    }
  });
};

export const createApplication = async (data: ApplicationData) => {
  const id = DisguardSnowflake.generate();

  const user = await userService.upsertUser({
    id,
    username: `app-${id}`,
    discriminator: "0000",
    avatar: null
  });

  const application = await Database.client().application.create({
    data: {
      id,
      name: data.name,
      requestCount: 0,
      requestLimit: defaults.requestLimit,
      requestCountResetAt: new Date(),
      owner: {
        connect: {
          id: data.userId
        }
      },
      user: {
        connect: {
          id
        }
      }
    }
  });

  const session = await sessionService.createSession({
    userId: id,
    accessToken: null,
    refreshToken: null,
    expiresIn: defaults.applicationSessionTokenExpiresIn,
    device: {
      system: "Application",
      browser: "Application",
      version: id
    }
  });

  return { ...application, user, session };
};

/**
 * Update an application
 * @param data The application update data
 */
export const updateApplication = async (
  data: Partial<ApplicationData> & { id: string }
) => {
  const application = await getApplicationById(data.id);
  if (!application) return null;

  return Database.client().application.update({
    where: {
      id: data.id
    },
    data: {
      name: data.name
    }
  });
};

/**
 * Delete an application
 * @param id The id of the application
 */
export const deleteApplication = async (id: string) => {
  const application = await getApplicationById(id);
  if (!application) return null;

  return Database.client().application.delete({
    where: {
      id
    }
  });
};

export interface ApplicationData {
  userId: string;
  name: string;
}
