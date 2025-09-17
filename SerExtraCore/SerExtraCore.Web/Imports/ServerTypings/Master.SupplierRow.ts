namespace SerExtraCore.Master {
    export interface SupplierRow {
        Id?: number;
        SupplierCode?: string;
        SupplierName?: string;
        Address?: string;
        Place?: string;
        Telephone?: string;
        Email?: string;
        ContactPerson?: string;
        Mobile?: string;
        TaxRegNo?: string;
        CreationDate?: string;
        Description?: string;
        OpeningDate?: string;
        Opening?: number;
        jVAdjustmentsRow?: Accounts.JVAdjustmentsRow[];
        Slno?: number;
        FullName?: string;
    }

    export namespace SupplierRow {
        export const idProperty = 'Id';
        export const nameProperty = 'SupplierName';
        export const localTextPrefix = 'Master.Supplier';
        export const lookupKey = 'Master.Supplier';

        export function getLookup(): Q.Lookup<SupplierRow> {
            return Q.getLookup<SupplierRow>('Master.Supplier');
        }
        export const deletePermission = 'Master:Supplier';
        export const insertPermission = 'Master:Supplier';
        export const readPermission = 'Master:Supplier';
        export const updatePermission = 'Master:Supplier';

        export declare const enum Fields {
            Id = "Id",
            SupplierCode = "SupplierCode",
            SupplierName = "SupplierName",
            Address = "Address",
            Place = "Place",
            Telephone = "Telephone",
            Email = "Email",
            ContactPerson = "ContactPerson",
            Mobile = "Mobile",
            TaxRegNo = "TaxRegNo",
            CreationDate = "CreationDate",
            Description = "Description",
            OpeningDate = "OpeningDate",
            Opening = "Opening",
            jVAdjustmentsRow = "jVAdjustmentsRow",
            Slno = "Slno",
            FullName = "FullName"
        }
    }
}
