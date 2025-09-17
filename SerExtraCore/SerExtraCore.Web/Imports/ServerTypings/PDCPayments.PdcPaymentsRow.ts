namespace SerExtraCore.PDCPayments {
    export interface PdcPaymentsRow {
        Id?: number;
        PdcNumber?: string;
        TrxDate?: string;
        Company?: string;
        StartDate?: string;
        Installments?: number;
        EndDate?: string;
        InstallmentAmount?: number;
        Notes?: string;
        ChequeType?: ChequeType;
        Slno?: number;
        PdcPaymentDetails?: PdcPaymentDetailsRow[];
        SupplierId?: number;
        SupplierSupplierName?: string;
    }

    export namespace PdcPaymentsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'PdcNumber';
        export const localTextPrefix = 'PDCPayments.PdcPayments';
        export const deletePermission = 'PDCPayments:PdcPayments';
        export const insertPermission = 'PDCPayments:PdcPayments';
        export const readPermission = 'PDCPayments:PdcPayments';
        export const updatePermission = 'PDCPayments:PdcPayments';

        export declare const enum Fields {
            Id = "Id",
            PdcNumber = "PdcNumber",
            TrxDate = "TrxDate",
            Company = "Company",
            StartDate = "StartDate",
            Installments = "Installments",
            EndDate = "EndDate",
            InstallmentAmount = "InstallmentAmount",
            Notes = "Notes",
            ChequeType = "ChequeType",
            Slno = "Slno",
            PdcPaymentDetails = "PdcPaymentDetails",
            SupplierId = "SupplierId",
            SupplierSupplierName = "SupplierSupplierName"
        }
    }
}
