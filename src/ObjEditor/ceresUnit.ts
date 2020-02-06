import { UnitFieldRawCodes } from '../war3/unitFieldMetadata';
import { BaseObject } from './baseObject';

export class CeresUnit extends BaseObject {

  /**
   * Expose the object (unit data) so its fields can be set
   */
  get u(): WarObjects { return this.obj; }

  constructor(unitId: string, baseUnitId: string) {
    super(currentMap.objects.unit, unitId, baseUnitId);
  }

  //#region Abilities

  /**
   * Sets the normal abilities for a unit
   * @param abilityIds the IDs of the abilities for this unit
   */
  setNormalAbilities(abilityIds: string[]): CeresUnit {
    this.obj[UnitFieldRawCodes.Abilities.Normal] = abilityIds.join(',');
    return this;
  }

  /**
   * Sets the hero abilities for a unit
   * @param abilityIds the IDs of the abilities for this hero
   */
  setHeroAbilities(abilityIds: string[]): CeresUnit {
    this.obj[UnitFieldRawCodes.Abilities.Hero] = abilityIds.join(',');
    return this;
  }

  setDefaultActiveAbility(defaultActiveAbilityId: string): CeresUnit {
    this.obj[UnitFieldRawCodes.Abilities.DefaultActiveAbility] = defaultActiveAbilityId;
    return this;
  }

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
