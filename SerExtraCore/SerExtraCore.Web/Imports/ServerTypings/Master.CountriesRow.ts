namespace SerExtraCore.Master {
    export interface CountriesRow {
        Id?: number;
        CountryCode?: string;
        CountryName?: string;
        Slno?: number;
    }

    export namespace CountriesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CountryName';
        export const localTextPrefix = 'Master.Countries';
        export const lookupKey = 'Master.Countries';

        export function getLookup(): Q.Lookup<CountriesRow> {
            return Q.getLookup<CountriesRow>('Master.Countries');
        }
        export const deletePermission = 'Master:Countries';
        export const insertPermission = 'Master:Countries';
        export const readPermission = 'Master:Countries';
        export const updatePermission = 'Master:Countries';

        export declare const enum Fields {
            Id = "Id",
            CountryCode = "CountryCode",
            CountryName = "CountryName",
            Slno = "Slno"
        }
    }
}
