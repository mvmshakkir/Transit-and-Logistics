namespace SerExtraCore.Master {
    export interface CurrenciesRow {
        Id?: number;
        CurrencyCode?: string;
        CurrencyName?: string;
        ExchangeRate?: number;
        CurrencyUnit?: string;
        SubCurrencyUnit?: string;
        Slno?: number;
    }

    export namespace CurrenciesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CurrencyCode';
        export const localTextPrefix = 'Master.Currencies';
        export const lookupKey = 'Master.Currencies';

        export function getLookup(): Q.Lookup<CurrenciesRow> {
            return Q.getLookup<CurrenciesRow>('Master.Currencies');
        }
        export const deletePermission = 'Master:Currencies';
        export const insertPermission = 'Master:Currencies';
        export const readPermission = 'Master:Currencies';
        export const updatePermission = 'Master:Currencies';

        export declare const enum Fields {
            Id = "Id",
            CurrencyCode = "CurrencyCode",
            CurrencyName = "CurrencyName",
            ExchangeRate = "ExchangeRate",
            CurrencyUnit = "CurrencyUnit",
            SubCurrencyUnit = "SubCurrencyUnit",
            Slno = "Slno"
        }
    }
}
