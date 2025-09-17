namespace SerExtraCore.Reports {
    export interface ReportParametersRow {
        Id?: number;
        ReportDesignId?: number;
        ParameterName?: string;
        DataType?: ParameterDataTypes;
        EditorType?: ParameterEditorTypes;
        LookupName?: string;
        DefaultValue?: string;
        IsRequired?: boolean;
        LookupType?: LookupType;
        CustomLookupId?: number;
        ReportDesignName?: string;
        ReportDesignDesign?: string;
    }

    export namespace ReportParametersRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ParameterName';
        export const localTextPrefix = 'Reports.ReportParameters';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            ReportDesignId = "ReportDesignId",
            ParameterName = "ParameterName",
            DataType = "DataType",
            EditorType = "EditorType",
            LookupName = "LookupName",
            DefaultValue = "DefaultValue",
            IsRequired = "IsRequired",
            LookupType = "LookupType",
            CustomLookupId = "CustomLookupId",
            ReportDesignName = "ReportDesignName",
            ReportDesignDesign = "ReportDesignDesign"
        }
    }
}
