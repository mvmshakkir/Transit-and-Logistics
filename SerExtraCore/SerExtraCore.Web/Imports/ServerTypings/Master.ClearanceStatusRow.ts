namespace SerExtraCore.Master {
    export interface ClearanceStatusRow {
        Id?: number;
        Status?: string;
        ChartOrder?: number;
    }

    export namespace ClearanceStatusRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Status';
        export const localTextPrefix = 'Master.ClearanceStatus';
        export const lookupKey = 'Master.ClearanceStatus';

        export function getLookup(): Q.Lookup<ClearanceStatusRow> {
            return Q.getLookup<ClearanceStatusRow>('Master.ClearanceStatus');
        }
        export const deletePermission = 'Master:ClearanceStatus';
        export const insertPermission = 'Master:ClearanceStatus';
        export const readPermission = 'Master:ClearanceStatus';
        export const updatePermission = 'Master:ClearanceStatus';

        export declare const enum Fields {
            Id = "Id",
            Status = "Status",
            ChartOrder = "ChartOrder"
        }
    }
}
