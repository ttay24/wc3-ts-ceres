import { BaseObject } from './baseObject';

export class CeresUpgrade extends BaseObject {

  /**
   * Expose the object (unit data) so its fields can be set
   */
  get u(): WarObjects { return this.obj; }

  constructor(upgradeId: string, baseUpgradeId: string) {
    super('upgrade', upgradeId, baseUpgradeId);
  }

}
