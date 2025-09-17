namespace SerExtraCore.States {
    export interface StatesRow {
        Id?: number;
        CountryId?: number;
        Name?: string;
        Code?: string;
        CountryCountryCode?: string;
        CountryCountryName?: string;
    }

    export namespace StatesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'States.States';
        export const lookupKey = 'States.States';

        export function getLookup(): Q.Lookup<StatesRow> {
            return Q.getLookup<StatesRow>('States.States');
        }
        export const deletePermission = 'Master:States';
        export const insertPermission = 'Master:States';
        export const readPermission = 'Master:States';
        export const updatePermission = 'Master:States';

        export declare const enum Fields {
            Id = "Id",
            CountryId = "CountryId",
            Name = "Name",
            Code = "Code",
            CountryCountryCode = "CountryCountryCode",
            CountryCountryName = "CountryCountryName"
        }
    }
}
