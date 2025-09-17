namespace SerExtraCore.PumpDetails {
    export interface PumpDetailsRow {
        Id?: number;
        PumpName?: string;
        PumpPlace?: string;
        Address?: string;
    }

    export namespace PumpDetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'PumpName';
        export const localTextPrefix = 'PumpDetails.PumpDetails';
        export const lookupKey = 'PumpDetails.PumpDetails';

        export function getLookup(): Q.Lookup<PumpDetailsRow> {
            return Q.getLookup<PumpDetailsRow>('PumpDetails.PumpDetails');
        }
        export const deletePermission = 'Master:PumpDetails';
        export const insertPermission = 'Master:PumpDetails';
        export const readPermission = 'Master:PumpDetails';
        export const updatePermission = 'Master:PumpDetails';

        export declare const enum Fields {
            Id = "Id",
            PumpName = "PumpName",
            PumpPlace = "PumpPlace",
            Address = "Address"
        }
    }
}
