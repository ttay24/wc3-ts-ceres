import { BaseObject } from './baseObject';

export class CeresAbility extends BaseObject {

  /**
   * Expose the object (unit data) so its fields can be set
   */
  get a(): WarObjects { return this.obj; }

  constructor(abilityId: string, baseAbilityId: string) {
    super('ability', abilityId, baseAbilityId);
  }

}
