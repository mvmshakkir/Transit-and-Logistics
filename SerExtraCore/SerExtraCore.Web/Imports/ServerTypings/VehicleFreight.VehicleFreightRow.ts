namespace SerExtraCore.VehicleFreight {
    export interface VehicleFreightRow {
        Id?: number;
        TsId?: number;
        MaterialId?: number;
        UnitId?: number;
        FromPlace?: number;
        ToPlace?: number;
        TripDate?: string;
        PerTonRate?: number;
        TotalFreight?: number;
        LoadingExpense?: number;
        UnloadingExpense?: number;
        UnitPrice?: number;
        TotalCommission?: number;
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
        Materials?: string;
        Unit?: string;
        FromPlaceAreaName?: string;
        FromPlaceDescription?: string;
        ToPlaceAreaName?: string;
        ToPlaceDescription?: string;
        Party?: string;
        CashCredit?: AmountType;
        partys?: number;
        partyy?: string;
        PaymentMethod?: AccountTypes;
        DebitAccountId?: number;
        Receipts?: Accounts.ReceiptRow[];
    }

    export namespace VehicleFreightRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'VehicleFreight.VehicleFreight';
        export const lookupKey = 'VehicleFreight.VehicleFreight';

        export function getLookup(): Q.Lookup<VehicleFreightRow> {
            return Q.getLookup<VehicleFreightRow>('VehicleFreight.VehicleFreight');
        }
        export const deletePermission = 'Master:VehicleFreight';
        export const insertPermission = 'Master:VehicleFreight';
        export const readPermission = 'Master:VehicleFreight';
        export const updatePermission = 'Master:VehicleFreight';

        export declare const enum Fields {
            Id = "Id",
            TsId = "TsId",
            MaterialId = "MaterialId",
            UnitId = "UnitId",
            FromPlace = "FromPlace",
            ToPlace = "ToPlace",
            TripDate = "TripDate",
            PerTonRate = "PerTonRate",
            TotalFreight = "TotalFreight",
            LoadingExpense = "LoadingExpense",
            UnloadingExpense = "UnloadingExpense",
            UnitPrice = "UnitPrice",
            TotalCommission = "TotalCommission",
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
            Materials = "Materials",
            Unit = "Unit",
            FromPlaceAreaName = "FromPlaceAreaName",
            FromPlaceDescription = "FromPlaceDescription",
            ToPlaceAreaName = "ToPlaceAreaName",
            ToPlaceDescription = "ToPlaceDescription",
            Party = "Party",
            CashCredit = "CashCredit",
            partys = "partys",
            partyy = "partyy",
            PaymentMethod = "PaymentMethod",
            DebitAccountId = "DebitAccountId",
            Receipts = "Receipts"
        }
    }
}
