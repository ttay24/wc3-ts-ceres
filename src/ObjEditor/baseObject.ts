export class BaseObject {
  protected obj: WarObjects;
  protected objectId: string;
  protected baseObjectId: string;

  private objKey: string;

  constructor(objKey: string, objId: string, baseObjId: string) {
    this.objectId = objId;
    this.baseObjectId = baseObjId;
    this.objKey = objKey;
    this.obj = currentMap.objects[this.objKey][baseObjId].clone();
  }

  public compile(): void {
    currentMap.objects[this.objKey][this.objectId] = this.obj;
  }

}
