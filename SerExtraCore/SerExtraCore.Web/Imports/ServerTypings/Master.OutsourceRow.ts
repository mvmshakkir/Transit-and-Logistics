namespace SerExtraCore.Master {
    export interface OutsourceRow {
        Id?: number;
        Name?: number;
        Description?: string;
        Slno?: number;
    }

    export namespace OutsourceRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Master.Outsource';
        export const lookupKey = 'Master.Outsource';

        export function getLookup(): Q.Lookup<OutsourceRow> {
            return Q.getLookup<OutsourceRow>('Master.Outsource');
        }
        export const deletePermission = 'Master:Outsource';
        export const insertPermission = 'Master:Outsource';
        export const readPermission = 'Master:Outsource';
        export const updatePermission = 'Master:Outsource';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            Slno = "Slno"
        }
    }
}
