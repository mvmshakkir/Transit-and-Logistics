namespace SerExtraCore.MaterialsDetails {
    export interface MaterialsDetailsRow {
        Id?: number;
        Materials?: string;
        Units?: UOMAmount.UOMAmountRow[];
    }

    export namespace MaterialsDetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Materials';
        export const localTextPrefix = 'MaterialsDetails.MaterialsDetails';
        export const lookupKey = 'MaterialsDetails.MaterialsDetails';

        export function getLookup(): Q.Lookup<MaterialsDetailsRow> {
            return Q.getLookup<MaterialsDetailsRow>('MaterialsDetails.MaterialsDetails');
        }
        export const deletePermission = 'Master:MaterialsDetails';
        export const insertPermission = 'Master:MaterialsDetails';
        export const readPermission = 'Master:MaterialsDetails';
        export const updatePermission = 'Master:MaterialsDetails';

        export declare const enum Fields {
            Id = "Id",
            Materials = "Materials",
            Units = "Units"
        }
    }
}
