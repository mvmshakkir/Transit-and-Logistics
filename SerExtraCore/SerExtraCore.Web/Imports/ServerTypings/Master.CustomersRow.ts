namespace SerExtraCore.Master {
    export interface CustomersRow {
        Id?: number;
        CustomerCode?: string;
        CustomerName?: string;
        Address?: string;
        Place?: string;
        Telephone?: string;
        Email?: string;
        ContactPerson?: string;
        Mobile?: string;
        CreationDate?: string;
        Description?: string;
        DueDays?: number;
        TaxRegNo?: string;
        jVAdjustmentsRow?: Accounts.JVAdjustmentsRow[];
        OpeningDate?: string;
        Opening?: number;
        Slno?: number;
        FullName?: string;
        StateId?: number;
        StateName?: string;
    }

    export namespace CustomersRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FullName';
        export const localTextPrefix = 'Master.Customers';
        export const lookupKey = 'Master.Customers';

        export function getLookup(): Q.Lookup<CustomersRow> {
            return Q.getLookup<CustomersRow>('Master.Customers');
        }
        export const deletePermission = 'Master:Customers';
        export const insertPermission = 'Master:Customers';
        export const readPermission = 'Master:Customers';
        export const updatePermission = 'Master:Customers';

        export declare const enum Fields {
            Id = "Id",
            CustomerCode = "CustomerCode",
            CustomerName = "CustomerName",
            Address = "Address",
            Place = "Place",
            Telephone = "Telephone",
            Email = "Email",
            ContactPerson = "ContactPerson",
            Mobile = "Mobile",
            CreationDate = "CreationDate",
            Description = "Description",
            DueDays = "DueDays",
            TaxRegNo = "TaxRegNo",
            jVAdjustmentsRow = "jVAdjustmentsRow",
            OpeningDate = "OpeningDate",
            Opening = "Opening",
            Slno = "Slno",
            FullName = "FullName",
            StateId = "StateId",
            StateName = "StateName"
        }
    }
}
