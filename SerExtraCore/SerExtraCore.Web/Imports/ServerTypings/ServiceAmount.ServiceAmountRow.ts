namespace SerExtraCore.ServiceAmount {
    export interface ServiceAmountRow {
        Id?: number;
        ServiceId?: number;
        TsId?: number;
        Amount?: number;
        ServiceServiceName?: string;
        TsTsNo?: string;
        TsVehicleId?: number;
        TsAdvance?: number;
        TsStartKm?: number;
        TsEndKm?: number;
        TsTotalKm?: number;
        TsTotalLiter?: number;
        TsMileage?: number;
        TsStartdate?: string;
        TsEnddate?: string;
        TsTotaldays?: number;
        TsRto?: number;
        TsPc?: number;
        TsTotalDriverCommission?: number;
        TsTotalCommison?: number;
        TsTotalLoadingExpense?: number;
        TsTotalUnloadExpense?: number;
        TsTotalOtherExpense?: number;
        TsTotalFright?: number;
        TsProfit?: number;
        Photo?: string;
    }

    export namespace ServiceAmountRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'ServiceAmount.ServiceAmount';
        export const lookupKey = 'ServiceAmount.ServiceAmount';

        export function getLookup(): Q.Lookup<ServiceAmountRow> {
            return Q.getLookup<ServiceAmountRow>('ServiceAmount.ServiceAmount');
        }
        export const deletePermission = 'Master:ServiceAmount';
        export const insertPermission = 'Master:ServiceAmount';
        export const readPermission = 'Master:ServiceAmount';
        export const updatePermission = 'Master:ServiceAmount';

        export declare const enum Fields {
            Id = "Id",
            ServiceId = "ServiceId",
            TsId = "TsId",
            Amount = "Amount",
            ServiceServiceName = "ServiceServiceName",
            TsTsNo = "TsTsNo",
            TsVehicleId = "TsVehicleId",
            TsAdvance = "TsAdvance",
            TsStartKm = "TsStartKm",
            TsEndKm = "TsEndKm",
            TsTotalKm = "TsTotalKm",
            TsTotalLiter = "TsTotalLiter",
            TsMileage = "TsMileage",
            TsStartdate = "TsStartdate",
            TsEnddate = "TsEnddate",
            TsTotaldays = "TsTotaldays",
            TsRto = "TsRto",
            TsPc = "TsPc",
            TsTotalDriverCommission = "TsTotalDriverCommission",
            TsTotalCommison = "TsTotalCommison",
            TsTotalLoadingExpense = "TsTotalLoadingExpense",
            TsTotalUnloadExpense = "TsTotalUnloadExpense",
            TsTotalOtherExpense = "TsTotalOtherExpense",
            TsTotalFright = "TsTotalFright",
            TsProfit = "TsProfit",
            Photo = "Photo"
        }
    }
}
