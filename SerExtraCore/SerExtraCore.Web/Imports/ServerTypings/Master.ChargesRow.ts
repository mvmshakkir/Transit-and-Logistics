namespace SerExtraCore.Master {
    export interface ChargesRow {
        Id?: number;
        ChargeName?: string;
        Description?: string;
        Slno?: number;
        TaxCodeId?: number;
        ChartOrder?: number;
        TaxPer?: number;
        TaxCode?: string;
        TaxRate?: number;
    }

    export namespace ChargesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ChargeName';
        export const localTextPrefix = 'Master.Charges';
        export const lookupKey = 'Master.Charges';

        export function getLookup(): Q.Lookup<ChargesRow> {
            return Q.getLookup<ChargesRow>('Master.Charges');
        }
        export const deletePermission = 'Master:Charges';
        export const insertPermission = 'Master:Charges';
        export const readPermission = 'Master:Charges';
        export const updatePermission = 'Master:Charges';

        export declare const enum Fields {
            Id = "Id",
            ChargeName = "ChargeName",
            Description = "Description",
            Slno = "Slno",
            TaxCodeId = "TaxCodeId",
            ChartOrder = "ChartOrder",
            TaxPer = "TaxPer",
            TaxCode = "TaxCode",
            TaxRate = "TaxRate"
        }
    }
}
