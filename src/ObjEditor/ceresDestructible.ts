import { BaseObject } from './baseObject';

export class CeresDestructible extends BaseObject {

  /**
   * Expose the object (unit data) so its fields can be set
   */
  get d(): WarObjects { return this.obj; }

  constructor(destructibleId: string, baseDestructibleId: string) {
    super('destructable', destructibleId, baseDestructibleId);
  }

}
