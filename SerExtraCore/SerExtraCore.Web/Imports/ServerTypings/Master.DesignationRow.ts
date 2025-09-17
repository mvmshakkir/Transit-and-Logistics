namespace SerExtraCore.Master {
    export interface DesignationRow {
        Id?: number;
        Name?: string;
        Description?: string;
        Slno?: number;
    }

    export namespace DesignationRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Master.Designation';
        export const lookupKey = 'Master.Designation';

        export function getLookup(): Q.Lookup<DesignationRow> {
            return Q.getLookup<DesignationRow>('Master.Designation');
        }
        export const deletePermission = 'Master:Designation';
        export const insertPermission = 'Master:Designation';
        export const readPermission = 'Master:Designation';
        export const updatePermission = 'Master:Designation';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            Slno = "Slno"
        }
    }
}
