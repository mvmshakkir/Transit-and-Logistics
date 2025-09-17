namespace SerExtraCore.Master {
    export interface SpecificationsRow {
        Id?: number;
        Specifications?: string;
        Description?: string;
        Slno?: number;
    }

    export namespace SpecificationsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Specifications';
        export const localTextPrefix = 'Master.Specifications';
        export const lookupKey = 'Master.Specifications';

        export function getLookup(): Q.Lookup<SpecificationsRow> {
            return Q.getLookup<SpecificationsRow>('Master.Specifications');
        }
        export const deletePermission = 'Master:Specifications';
        export const insertPermission = 'Master:Specifications';
        export const readPermission = 'Master:Specifications';
        export const updatePermission = 'Master:Specifications';

        export declare const enum Fields {
            Id = "Id",
            Specifications = "Specifications",
            Description = "Description",
            Slno = "Slno"
        }
    }
}
