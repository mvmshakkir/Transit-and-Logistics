namespace SerExtraCore.Reports {
    export interface ReportDesignsRow {
        Id?: number;
        Name?: string;
        Design?: string;
        Category?: string;
        PermissionKey?: string;
        ReportType?: number;
        ReportDataSets?: ReportDataSetsRow[];
        ReportParameters?: ReportParametersRow[];
    }

    export namespace ReportDesignsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Reports.ReportDesigns';
        export const lookupKey = 'Reports.ReportDesigns';

        export function getLookup(): Q.Lookup<ReportDesignsRow> {
            return Q.getLookup<ReportDesignsRow>('Reports.ReportDesigns');
        }
        export const deletePermission = 'Administration:ReportDesigns';
        export const insertPermission = 'Administration:ReportDesigns';
        export const readPermission = 'Administration:ReportDesigns';
        export const updatePermission = 'Administration:ReportDesigns';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Design = "Design",
            Category = "Category",
            PermissionKey = "PermissionKey",
            ReportType = "ReportType",
            ReportDataSets = "ReportDataSets",
            ReportParameters = "ReportParameters"
        }
    }
}
