namespace SerExtraCore.CommissionPercentage {
    export interface CommissionPercentageRow {
        Id?: number;
        Percentage?: number;
    }

    export namespace CommissionPercentageRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Percentage';
        export const localTextPrefix = 'CommissionPercentage.CommissionPercentage';
        export const lookupKey = 'CommissionPercentage.CommissionPercentage';

        export function getLookup(): Q.Lookup<CommissionPercentageRow> {
            return Q.getLookup<CommissionPercentageRow>('CommissionPercentage.CommissionPercentage');
        }
        export const deletePermission = 'Master:CommissionPercentage';
        export const insertPermission = 'Master:CommissionPercentage';
        export const readPermission = 'Master:CommissionPercentage';
        export const updatePermission = 'Master:CommissionPercentage';

        export declare const enum Fields {
            Id = "Id",
            Percentage = "Percentage"
        }
    }
}
