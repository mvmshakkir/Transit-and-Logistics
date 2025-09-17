namespace SerExtraCore.Master {
    export interface TaxCodeRow {
        Id?: number;
        Name?: string;
        Rate?: number;
        Description?: string;
    }

    export namespace TaxCodeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Master.TaxCode';
        export const lookupKey = 'Master.TaxCode';

        export function getLookup(): Q.Lookup<TaxCodeRow> {
            return Q.getLookup<TaxCodeRow>('Master.TaxCode');
        }
        export const deletePermission = 'Master:TaxCode';
        export const insertPermission = 'Master:TaxCode';
        export const readPermission = 'Master:TaxCode';
        export const updatePermission = 'Master:TaxCode';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Rate = "Rate",
            Description = "Description"
        }
    }
}
