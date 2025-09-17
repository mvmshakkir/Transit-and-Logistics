namespace SerExtraCore.UOM {
    export interface UOMRow {
        Id?: number;
        Unit?: string;
    }

    export namespace UOMRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Unit';
        export const localTextPrefix = 'UOM.UOM';
        export const lookupKey = 'UOM.UOM';

        export function getLookup(): Q.Lookup<UOMRow> {
            return Q.getLookup<UOMRow>('UOM.UOM');
        }
        export const deletePermission = 'Master:UOM';
        export const insertPermission = 'Master:UOM';
        export const readPermission = 'Master:UOM';
        export const updatePermission = 'Master:UOM';

        export declare const enum Fields {
            Id = "Id",
            Unit = "Unit"
        }
    }
}
