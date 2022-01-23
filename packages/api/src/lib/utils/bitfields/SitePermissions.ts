import { BitField, BitFieldObject } from "#lib";

export const enum SitePermissionFlags {
  Administrator = "ADMINISTRATOR"
}

export class SitePermissions extends BitField<SitePermissionFlagsResolvable> {
  /**
   * The SitePermission flags
   */
  public static FLAGS = {
    [SitePermissionFlags.Administrator]: 1 << 0
  } as const;
}

export type SitePermissionFlagsResolvable =
  | SitePermissionFlags
  | number
  | BitFieldObject
  | (SitePermissionFlags | number | BitFieldObject)[];
