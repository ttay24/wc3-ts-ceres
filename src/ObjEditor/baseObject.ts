export class BaseObject {
  protected obj: WarObjects;
  protected objectId: string;
  protected baseObjectId: string;

  private objectType: WarObjects;

  constructor(objectType: WarObjects, objId: string, baseObjId: string) {
    this.objectId = objId;
    this.baseObjectId = baseObjId;
    this.objectType = objectType;
    this.obj = objectType[baseObjId].clone();
  }

  public compile(): void {
    this.obj[this.objectId] = this.obj;
  }

}
