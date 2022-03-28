
export interface AbstractFactory<MainObject, ProducedObject extends MainObject> {
    build(params: MainObject): ProducedObject,
    get currentBuilt (): MainObject
}
