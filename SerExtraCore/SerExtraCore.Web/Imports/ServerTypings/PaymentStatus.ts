namespace SerExtraCore {
    export enum PaymentStatus {
        Value1 = 1,
        Value2 = 2
    }
    Serenity.Decorators.registerEnumType(PaymentStatus, 'SerExtraCore.PaymentStatus');
}
