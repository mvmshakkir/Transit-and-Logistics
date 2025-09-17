namespace SerExtraCore {
    export enum PymentTypes {
        Cash = 1,
        Bank = 2,
        Cheque = 3
    }
    Serenity.Decorators.registerEnumType(PymentTypes, 'SerExtraCore.PymentTypes');
}
