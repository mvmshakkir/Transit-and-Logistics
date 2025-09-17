namespace SerExtraCore.Reports {
    export interface ReportDataSetsRow {
        Id?: number;
        ReportDesignId?: number;
        SqlQuery?: string;
        DataSetName?: string;
        ReportDesignName?: string;
        ReportDesignDesign?: string;
    }

    export namespace ReportDataSetsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'SqlQuery';
        export const localTextPrefix = 'Reports.ReportDataSets';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            ReportDesignId = "ReportDesignId",
            SqlQuery = "SqlQuery",
            DataSetName = "DataSetName",
            ReportDesignName = "ReportDesignName",
            ReportDesignDesign = "ReportDesignDesign"
        }
    }
}
