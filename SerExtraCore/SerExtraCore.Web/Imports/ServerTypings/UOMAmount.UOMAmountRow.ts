namespace SerExtraCore.UOMAmount {
    export interface UOMAmountRow {
        Id?: number;
        Rate?: number;
        MaterialsId?: number;
        UomId?: number;
        Materials?: string;
        UomUnit?: string;
    }

    export namespace UOMAmountRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'UOMAmount.UOMAmount';
        export const lookupKey = 'UOMAmount.UOMAmount';

        export function getLookup(): Q.Lookup<UOMAmountRow> {
            return Q.getLookup<UOMAmountRow>('UOMAmount.UOMAmount');
        }
        export const deletePermission = 'Master:UOMAmount';
        export const insertPermission = 'Master:UOMAmount';
        export const readPermission = 'Master:UOMAmount';
        export const updatePermission = 'Master:UOMAmount';

        export declare const enum Fields {
            Id = "Id",
            Rate = "Rate",
            MaterialsId = "MaterialsId",
            UomId = "UomId",
            Materials = "Materials",
            UomUnit = "UomUnit"
        }
    }
}
