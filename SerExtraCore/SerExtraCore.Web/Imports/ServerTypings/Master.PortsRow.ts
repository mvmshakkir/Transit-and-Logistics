namespace SerExtraCore.Master {
    export interface PortsRow {
        Id?: number;
        PortName?: string;
        CountryId?: number;
        CountryCountryCode?: string;
        CountryCountryName?: string;
    }

    export namespace PortsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'PortName';
        export const localTextPrefix = 'Master.Ports';
        export const lookupKey = 'Master.Ports';

        export function getLookup(): Q.Lookup<PortsRow> {
            return Q.getLookup<PortsRow>('Master.Ports');
        }
        export const deletePermission = 'Master:Ports';
        export const insertPermission = 'Master:Ports';
        export const readPermission = 'Master:Ports';
        export const updatePermission = 'Master:Ports';

        export declare const enum Fields {
            Id = "Id",
            PortName = "PortName",
            CountryId = "CountryId",
            CountryCountryCode = "CountryCountryCode",
            CountryCountryName = "CountryCountryName"
        }
    }
}
