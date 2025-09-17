namespace SerExtraCore.Master {
    export interface ShippingAreasRow {
        Id?: number;
        AreaName?: string;
        Description?: string;
        Slno?: number;
    }

    export namespace ShippingAreasRow {
        export const idProperty = 'Id';
        export const nameProperty = 'AreaName';
        export const localTextPrefix = 'Master.ShippingAreas';
        export const lookupKey = 'Master.ShippingAreas';

        export function getLookup(): Q.Lookup<ShippingAreasRow> {
            return Q.getLookup<ShippingAreasRow>('Master.ShippingAreas');
        }
        export const deletePermission = 'Master:ShippingAreas';
        export const insertPermission = 'Master:ShippingAreas';
        export const readPermission = 'Master:ShippingAreas';
        export const updatePermission = 'Master:ShippingAreas';

        export declare const enum Fields {
            Id = "Id",
            AreaName = "AreaName",
            Description = "Description",
            Slno = "Slno"
        }
    }
}
