namespace SerExtraCore {
    export enum PaymentType {
        Value1 = 1,
        Value2 = 2
    }
    Serenity.Decorators.registerEnumType(PaymentType, 'SerExtraCore.PaymentType');
}
