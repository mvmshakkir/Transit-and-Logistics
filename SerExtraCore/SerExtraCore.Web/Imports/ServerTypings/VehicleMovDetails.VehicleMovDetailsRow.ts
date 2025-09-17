namespace SerExtraCore.VehicleMovDetails {
    export interface VehicleMovDetailsRow {
        Id?: number;
        TsNo?: string;
        VehicleId?: number;
        VehicleNumber?: string;
        Advance?: number;
        StartKm?: number;
        EndKm?: number;
        TotalKm?: number;
        TotalLiter?: number;
        Mileage?: number;
        Startdate?: string;
        Enddate?: string;
        Totaldays?: number;
        Rto?: number;
        Pc?: number;
        TotalFuelAmount?: number;
        TotalDriverCommission?: number;
        DrivertwoBata?: number;
        TotalCommison?: number;
        TotalLoadingExpense?: number;
        TotalUnloadExpense?: number;
        TotalOtherExpense?: number;
        TotalFright?: number;
        Profit?: number;
        VehicleTypeOfVehicle?: number;
        VehicleThrough?: number;
        VehicleVehicleNumber?: string;
        VehicleVehicleModel?: number;
        VehicleRegistraionNumber?: string;
        VehicleDescription?: string;
        VehicleRegistrationDate?: string;
        VehicleExpiryDate?: string;
        VehicleDriver?: number;
        VehiclePdoApproved?: boolean;
        VehiclePrimeMover?: string;
        VehicleSupplierId?: number;
        CommisionDetails?: CommisionDetails.CommisionDetailsRow[];
        ServiceAmount?: ServiceAmount.ServiceAmountRow[];
        FuelDetails?: FuelDetails.FuelDetailsRow[];
        VehicleFreight?: VehicleFreight.VehicleFreightRow[];
        Toll?: number;
        TotalExpense?: number;
        ExtraBill?: number;
        Remarks?: string;
        Receipts?: Accounts.ReceiptRow[];
        Payments?: Accounts.PaymentRow[];
        FuelId?: Accounts.MoneyOutRow[];
    }

    export namespace VehicleMovDetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'TsNo';
        export const localTextPrefix = 'VehicleMovDetails.VehicleMovDetails';
        export const lookupKey = 'VehicleMovDetails.VehicleMovDetails';

        export function getLookup(): Q.Lookup<VehicleMovDetailsRow> {
            return Q.getLookup<VehicleMovDetailsRow>('VehicleMovDetails.VehicleMovDetails');
        }
        export const deletePermission = 'Master:VehicleMovDetails';
        export const insertPermission = 'Master:VehicleMovDetails';
        export const readPermission = 'Master:VehicleMovDetails';
        export const updatePermission = 'Master:VehicleMovDetails';

        export declare const enum Fields {
            Id = "Id",
            TsNo = "TsNo",
            VehicleId = "VehicleId",
            VehicleNumber = "VehicleNumber",
            Advance = "Advance",
            StartKm = "StartKm",
            EndKm = "EndKm",
            TotalKm = "TotalKm",
            TotalLiter = "TotalLiter",
            Mileage = "Mileage",
            Startdate = "Startdate",
            Enddate = "Enddate",
            Totaldays = "Totaldays",
            Rto = "Rto",
            Pc = "Pc",
            TotalFuelAmount = "TotalFuelAmount",
            TotalDriverCommission = "TotalDriverCommission",
            DrivertwoBata = "DrivertwoBata",
            TotalCommison = "TotalCommison",
            TotalLoadingExpense = "TotalLoadingExpense",
            TotalUnloadExpense = "TotalUnloadExpense",
            TotalOtherExpense = "TotalOtherExpense",
            TotalFright = "TotalFright",
            Profit = "Profit",
            VehicleTypeOfVehicle = "VehicleTypeOfVehicle",
            VehicleThrough = "VehicleThrough",
            VehicleVehicleNumber = "VehicleVehicleNumber",
            VehicleVehicleModel = "VehicleVehicleModel",
            VehicleRegistraionNumber = "VehicleRegistraionNumber",
            VehicleDescription = "VehicleDescription",
            VehicleRegistrationDate = "VehicleRegistrationDate",
            VehicleExpiryDate = "VehicleExpiryDate",
            VehicleDriver = "VehicleDriver",
            VehiclePdoApproved = "VehiclePdoApproved",
            VehiclePrimeMover = "VehiclePrimeMover",
            VehicleSupplierId = "VehicleSupplierId",
            CommisionDetails = "CommisionDetails",
            ServiceAmount = "ServiceAmount",
            FuelDetails = "FuelDetails",
            VehicleFreight = "VehicleFreight",
            Toll = "Toll",
            TotalExpense = "TotalExpense",
            ExtraBill = "ExtraBill",
            Remarks = "Remarks",
            Receipts = "Receipts",
            Payments = "Payments",
            FuelId = "FuelId"
        }
    }
}