namespace SerExtraCore.Administration {
    export interface UserHierarchyRow {
        Id?: number;
        HierarchyName?: string;
        Descrription?: string;
        HierarchyOrder?: number;
    }

    export namespace UserHierarchyRow {
        export const idProperty = 'Id';
        export const nameProperty = 'HierarchyName';
        export const localTextPrefix = 'Administration.UserHierarchy';
        export const lookupKey = 'Administration.UserHierarchy';

        export function getLookup(): Q.Lookup<UserHierarchyRow> {
            return Q.getLookup<UserHierarchyRow>('Administration.UserHierarchy');
        }
        export const deletePermission = 'Administration:UserHierarchy';
        export const insertPermission = 'Administration:UserHierarchy';
        export const readPermission = 'Administration:UserHierarchy';
        export const updatePermission = 'Administration:UserHierarchy';

        export declare const enum Fields {
            Id = "Id",
            HierarchyName = "HierarchyName",
            Descrription = "Descrription",
            HierarchyOrder = "HierarchyOrder"
        }
    }
}
