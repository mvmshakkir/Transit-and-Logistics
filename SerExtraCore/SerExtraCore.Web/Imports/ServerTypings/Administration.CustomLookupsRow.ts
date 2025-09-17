namespace SerExtraCore.Administration {
    export interface CustomLookupsRow {
        Id?: number;
        LookupName?: string;
        SqlQuery?: string;
    }

    export namespace CustomLookupsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'LookupName';
        export const localTextPrefix = 'Administration.CustomLookups';
        export const lookupKey = 'Administration.CustomLookups';

        export function getLookup(): Q.Lookup<CustomLookupsRow> {
            return Q.getLookup<CustomLookupsRow>('Administration.CustomLookups');
        }
        export const deletePermission = 'Administration:ReportDesigns';
        export const insertPermission = 'Administration:ReportDesigns';
        export const readPermission = 'Administration:ReportDesigns';
        export const updatePermission = 'Administration:ReportDesigns';

        export declare const enum Fields {
            Id = "Id",
            LookupName = "LookupName",
            SqlQuery = "SqlQuery"
        }
    }
}
