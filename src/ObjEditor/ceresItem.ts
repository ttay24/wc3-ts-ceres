import { BaseObject } from './baseObject';

export class CeresItem extends BaseObject {

  /**
   * Expose the object (unit data) so its fields can be set
   */
  get i(): WarObjects { return this.obj; }

  constructor(itemId: string, baseItemId: string) {
    super('item', itemId, baseItemId);
  }

}
