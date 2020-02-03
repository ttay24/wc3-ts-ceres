import { BaseObject } from './baseObject';

export class CeresDoodad extends BaseObject {

  /**
   * Expose the object (unit data) so its fields can be set
   */
  get d(): WarObjects { return this.obj; }

  constructor(doodadId: string, baseDoodadId: string) {
    super(currentMap.objects.doodad, doodadId, baseDoodadId);
  }

}
