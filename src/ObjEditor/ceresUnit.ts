import { UnitFieldRawCodes } from '../war3/unitFieldMetadata';

export class CeresUnit extends BaseObject {

  /**
   * Expose the object (unit data) so its fields can be set
   */
  get u(): WarObjects { return this.obj; }

  constructor(unitId: string, baseUnitId: string) {
    super(unitId, baseUnitId);
  }

  //#region Abilities
  //#endregion

  //#region Art
  //#endregion

  //#region Combat
  //#endregion

  //#region Editor
  //#endregion

  //#region Movement
  //#endregion

  //#region Pathing
  //#endregion

  //#region Sound
  //#endregion

  //#region Stats
  //#endregion

  //#region Techtree
  //#endregion

  //#region Text

  /**
   * Sets the name of the unit
   * @param n the name of the unit
   */
  setName(n: string): CeresUnit { 
    this.obj[UnitFieldRawCodes.Text.Name] = n;
    return this;
  }
  
  /**
   * Returns back the name of the unit
   */
  getName(): string { 
    return this.obj[UnitFieldRawCodes.Text.Name];
  }

  //#endregion

  //#region Misc
  //#endregion

}
