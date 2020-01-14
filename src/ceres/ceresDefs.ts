import { UnitFieldRawCode } from "../index";

export interface CeresCurrentMap {
  kind: string;
  path: string;
  objects: CeresObjects;
  added: any;
}

export interface CeresObjects {
  doodad: CeresObject;
  unit: CeresObject;
  ability: CeresObject;
  destructable: CeresObject;
  item: CeresObject;
  buff: CeresObject;
  upgrade: CeresObject;
}

//export type CeresObject = { [k: string]: ObjectDefinition };
export type CeresObject = { [unitId: string]: ObjectDefinition };

/**
 * An object definition contains  
 */
export type ObjectDefinition = { [unitFieldRawCodes in UnitFieldRawCode]: string } & { clone: () => ObjectDefinition };

export let currentMap: CeresCurrentMap;
