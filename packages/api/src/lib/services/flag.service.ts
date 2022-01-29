import { Database } from "@disguard/database";
import { DisguardSnowflake } from "@disguard/snowflake-engine";
import { toTitleCase } from "#lib";

/**
 * Get a flag by id
 * @param id The id of the flag
 */
export const getFlagById = (id: string) => {
  return Database.client().flag.findUnique({
    where: {
      id
    }
  });
};

/**
 * Get a flag by name
 * @param name The name of the flag
 */
export const getFlagByName = (name: string) => {
  return Database.client().flag.findUnique({
    where: {
      name
    }
  });
};

/**
 * Get all flags
 */
export const getFlags = () => {
  return Database.client().flag.findMany();
};

/**
 * Create a flag
 * @param data The flag create data
 */
export const createFlag = async (data: FlagData) => {
  const name = toTitleCase(data.name);
  const flag = await getFlagByName(name);
  if (flag) return null;

  return Database.client().flag.create({
    data: {
      id: DisguardSnowflake.generate(),
      name,
      description: data.description,
      color: data.color
    }
  });
};

/**
 * Update a flag
 * @param data The flag update data
 */
export const updateFlag = async (data: Partial<FlagData> & { id: string }) => {
  const flag = await getFlagById(data.id);
  if (!flag) return null;

  const name = data.name ? toTitleCase(data.name) : undefined;

  if (name && flag.name !== name) {
    const existingFlag = await getFlagByName(name);
    if (existingFlag) return undefined;
  }

  return Database.client().flag.update({
    where: {
      id: flag.id
    },
    data: {
      name,
      description: data.description,
      color: data.color
    }
  });
};

/**
 * Delete a flag
 * @param id The id of the flag
 */
export const deleteFlag = async (id: string) => {
  const flag = await getFlagById(id);
  if (!flag) return null;

  // TODO: check if there are reports with this flag

  return Database.client().flag.delete({
    where: {
      id
    }
  });
};

export interface FlagData {
  name: string;
  description: string;
  color: number;
}
