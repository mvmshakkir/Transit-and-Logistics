namespace SerExtraCore.CommisionDetails {
    export interface CommisionDetailsRow {
        Id?: number;
        TsId?: number;
        DriverId?: number;
        PercentageId?: number;
        Percentage?: number;
        CommissionAmount?: number;
        MobileNumber?: string;
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
        DriverEmployeeCode?: string;
        DriverEmployeeName?: string;
        DriverAddress?: string;
        DriverCountryId?: number;
        DriverEmployeeStatus?: number;
        DriverEmployeeTypeId?: number;
        DriverDesignationId?: number;
        DriverResidentId?: string;
        DriverRidExpiryDate?: string;
        DriverPassportNumber?: string;
        DriverPassportExpiryDate?: string;
        DriverMobileNumber?: string;
        DriverBasicSalary?: number;
        DriverAllowance?: number;
    }

    export namespace CommisionDetailsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'CommisionDetails.CommisionDetails';
        export const deletePermission = 'Master:CommisionDetails';
        export const insertPermission = 'Master:CommisionDetails';
        export const readPermission = 'Master:CommisionDetails';
        export const updatePermission = 'Master:CommisionDetails';

        export declare const enum Fields {
            Id = "Id",
            TsId = "TsId",
            DriverId = "DriverId",
            PercentageId = "PercentageId",
            Percentage = "Percentage",
            CommissionAmount = "CommissionAmount",
            MobileNumber = "MobileNumber",
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
            DriverEmployeeCode = "DriverEmployeeCode",
            DriverEmployeeName = "DriverEmployeeName",
            DriverAddress = "DriverAddress",
            DriverCountryId = "DriverCountryId",
            DriverEmployeeStatus = "DriverEmployeeStatus",
            DriverEmployeeTypeId = "DriverEmployeeTypeId",
            DriverDesignationId = "DriverDesignationId",
            DriverResidentId = "DriverResidentId",
            DriverRidExpiryDate = "DriverRidExpiryDate",
            DriverPassportNumber = "DriverPassportNumber",
            DriverPassportExpiryDate = "DriverPassportExpiryDate",
            DriverMobileNumber = "DriverMobileNumber",
            DriverBasicSalary = "DriverBasicSalary",
            DriverAllowance = "DriverAllowance"
        }
    }
}
