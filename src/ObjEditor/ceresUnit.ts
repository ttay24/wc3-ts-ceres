import { CeresCurrentMap, currentMap } from "../core/ceresDefs";

export class CeresUnit {
  private u: any;
  private unitId: string;

  constructor(unitId: string, baseUnitId: string) {
    // test
    print("created unit");
    this.unitId = unitId;
    this.u = currentMap.objects.unit[baseUnitId].clone();
  }

  public compile(): void {
    currentMap.objects.unit[this.unitId] = this.u;
  }

  set name(n: string) { 
    this.u[UnitFieldRawCodes.Text.Name] = n; 
  }
  
  get name(): string { 
    return this.u[UnitFieldRawCodes.Text.Name];
  }

}
