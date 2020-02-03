import { BaseObject } from './baseObject';

export class CeresBuff extends BaseObject {

  /**
   * Expose the object (unit data) so its fields can be set
   */
  get b(): WarObjects { return this.obj; }

  constructor(buffId: string, baseBuffId: string) {
    super('buff', buffId, baseBuffId);
  }

}
