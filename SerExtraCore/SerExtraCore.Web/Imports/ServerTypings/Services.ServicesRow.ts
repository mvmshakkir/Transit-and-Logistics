namespace SerExtraCore.Services {
    export interface ServicesRow {
        Id?: number;
        ServiceName?: string;
    }

    export namespace ServicesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ServiceName';
        export const localTextPrefix = 'Services.Services';
        export const lookupKey = 'Services.Services';

        export function getLookup(): Q.Lookup<ServicesRow> {
            return Q.getLookup<ServicesRow>('Services.Services');
        }
        export const deletePermission = 'Master:Services';
        export const insertPermission = 'Master:Services';
        export const readPermission = 'Master:Services';
        export const updatePermission = 'Master:Services';

        export declare const enum Fields {
            Id = "Id",
            ServiceName = "ServiceName"
        }
    }
}
