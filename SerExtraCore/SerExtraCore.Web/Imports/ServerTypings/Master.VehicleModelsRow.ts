namespace SerExtraCore.Master {
    export interface VehicleModelsRow {
        Id?: number;
        ModelName?: string;
        Description?: string;
        Slno?: number;
    }

    export namespace VehicleModelsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ModelName';
        export const localTextPrefix = 'Master.VehicleModels';
        export const lookupKey = 'Master.VehicleModels';

        export function getLookup(): Q.Lookup<VehicleModelsRow> {
            return Q.getLookup<VehicleModelsRow>('Master.VehicleModels');
        }
        export const deletePermission = 'Master:VehicleModels';
        export const insertPermission = 'Master:VehicleModels';
        export const readPermission = 'Master:VehicleModels';
        export const updatePermission = 'Master:VehicleModels';

        export declare const enum Fields {
            Id = "Id",
            ModelName = "ModelName",
            Description = "Description",
            Slno = "Slno"
        }
    }
}
