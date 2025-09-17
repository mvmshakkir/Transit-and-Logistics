namespace SerExtraCore {
    export enum ChequeType {
        Receipt = 1,
        Payment = 2
    }
    Serenity.Decorators.registerEnumType(ChequeType, 'SerExtraCore.ChequeType');
}
