namespace SerExtraCore.Master {
    export interface EmployeeTypeRow {
        Id?: number;
        Type?: string;
        Description?: string;
        Slno?: number;
    }

    export namespace EmployeeTypeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Type';
        export const localTextPrefix = 'Master.EmployeeType';
        export const lookupKey = 'Master.EmployeeType';

        export function getLookup(): Q.Lookup<EmployeeTypeRow> {
            return Q.getLookup<EmployeeTypeRow>('Master.EmployeeType');
        }
        export const deletePermission = 'Master:EmployeeType';
        export const insertPermission = 'Master:EmployeeType';
        export const readPermission = 'Master:EmployeeType';
        export const updatePermission = 'Master:EmployeeType';

        export declare const enum Fields {
            Id = "Id",
            Type = "Type",
            Description = "Description",
            Slno = "Slno"
        }
    }
}
