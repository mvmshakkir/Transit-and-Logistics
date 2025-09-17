namespace SerExtraCore {
    export enum ChequeStatus {
        Issued = 1,
        Cleared = 2,
        Canceled = 3
    }
    Serenity.Decorators.registerEnumType(ChequeStatus, 'SerExtraCore.ChequeStatus');
}
