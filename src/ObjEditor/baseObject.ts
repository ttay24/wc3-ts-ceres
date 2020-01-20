export class BaseObject {
  protected obj: WarObjects;
  protected objectId: string;
  protected baseObjectId: string;

  constructor(objId: string, baseObjId: string) {
    this.objectId = objId;
    this.baseObjectId = baseObjId;
    this.obj = currentMap.objects.unit[baseObjId].clone();
  }

  public compile(): void {
    currentMap.objects.unit[this.objectId] = this.obj;
  }

}
