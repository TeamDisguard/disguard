import { Database } from "@disguard/database";
import { DisguardSnowflake } from "@disguard/snowflake-engine";
import { toTitleCase } from "#lib";

export const getFlag = (id: string) => {
  return Database.client().flag.findUnique({
    where: {
      id
    }
  });
};

export const getFlagByName = (name: string) => {
  return Database.client().flag.findUnique({
    where: {
      name
    }
  });
};

export const getFlags = () => {
  return Database.client().flag.findMany();
};

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

export const updateFlag = async (data: Partial<FlagData> & { id: string }) => {
  const flag = await getFlag(data.id);
  if (!flag) return null;

  return Database.client().flag.update({
    where: {
      id: flag.id
    },
    data: {
      name: data.name,
      description: data.description,
      color: data.color
    }
  });
};

export const deleteFlag = async (id: string) => {
  const flag = await getFlag(id);
  if (!flag) return null;

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
