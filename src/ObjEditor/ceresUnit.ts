import { UnitFieldRawCodes } from '../war3/unitFieldMetadata';

export class CeresUnit {
  private u: WarObjects;
  private unitId: string;

  constructor(unitId: string, baseUnitId: string) {
    this.unitId = unitId;
    this.u = currentMap.objects.unit[baseUnitId].clone();
  }

  public compile(): void {
    currentMap.objects.unit[this.unitId] = this.u;
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

  setName(n: string): CeresUnit { 
    this.u[UnitFieldRawCodes.Text.Name] = n;
    return this;
  }
  
  getName(): string { 
    return this.u[UnitFieldRawCodes.Text.Name];
  }

  //#endregion

  //#region Misc
  //#endregion

}
