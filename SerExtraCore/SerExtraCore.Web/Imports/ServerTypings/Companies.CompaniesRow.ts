namespace SerExtraCore.Companies {
    export interface CompaniesRow {
        Id?: number;
        StateId?: number;
        Name?: string;
        Address?: string;
        StateCountryId?: number;
        StateName?: string;
    }

    export namespace CompaniesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Companies.Companies';
        export const deletePermission = 'Master:Companies';
        export const insertPermission = 'Master:Companies';
        export const readPermission = 'Master:Companies';
        export const updatePermission = 'Master:Companies';

        export declare const enum Fields {
            Id = "Id",
            StateId = "StateId",
            Name = "Name",
            Address = "Address",
            StateCountryId = "StateCountryId",
            StateName = "StateName"
        }
    }
}
