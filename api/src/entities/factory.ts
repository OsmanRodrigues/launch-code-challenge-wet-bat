export class EntityFactory<DefaultModel, ExpectedModel> {

    constructor(public Model) { }

    build<InitialModel=DefaultModel, FinalModel=ExpectedModel>(
        model: InitialModel,
        implement?: (finalModel: FinalModel) => void
    ): FinalModel {
        const modelCopy = {...this.Model}
        Object.keys(model).forEach(prop => {
            modelCopy[prop] = model[prop]
        })

        implement?.(modelCopy)

        return modelCopy
    }

}
