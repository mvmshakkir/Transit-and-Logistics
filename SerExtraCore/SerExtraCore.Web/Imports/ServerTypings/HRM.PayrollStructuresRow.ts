namespace SerExtraCore.HRM {
    export interface PayrollStructuresRow {
        Id?: number;
        StructureName?: string;
        FromDate?: string;
        ToDate?: string;
        Remarks?: string;
        PayrollPayment?: PayrollPaymentRow[];
    }

    export namespace PayrollStructuresRow {
        export const idProperty = 'Id';
        export const nameProperty = 'StructureName';
        export const localTextPrefix = 'HRM.PayrollStructures';
        export const deletePermission = 'HRM:PayrollStructures';
        export const insertPermission = 'HRM:PayrollStructures';
        export const readPermission = 'HRM:PayrollStructures';
        export const updatePermission = 'HRM:PayrollStructures';

        export declare const enum Fields {
            Id = "Id",
            StructureName = "StructureName",
            FromDate = "FromDate",
            ToDate = "ToDate",
            Remarks = "Remarks",
            PayrollPayment = "PayrollPayment"
        }
    }
}
