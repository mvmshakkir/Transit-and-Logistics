namespace SerExtraCore.Transactions {
    export interface ConsignmentVehicleDetailsRow {
        Id?: number;
        ConsignmentId?: number;
        VehicleId?: number;
        Type?: string;
        VehicleNumber?: string;
        Driver?: number;
        DriverAdvance?: number;
        ShippingAreaFrom?: number;
        ShippingAreaTo?: number;
        StartDate?: string;
        EndDate?: string;
        DriverKmFrom?: number;
        DriverKmTo?: number;
        GpskmFrom?: number;
        GpskmTo?: number;
        TypeOfPkg?: string;
        TotalVolume?: string;
        TotalWeight?: string;
        TotalNoOfPkgs?: string;
        ChargeId?: number;
        Description?: string;
        Amount?: number;
        Qty?: number;
        TotalAmount?: number;
        CurrencyId?: number;
        ExchangeRate?: number;
        TotalAmountInLocalCurrency?: number;
        Date?: string;
        TaxPer?: number;
        TaxAmount?: number;
        TaxableAmount?: number;
        Total?: number;
        DisAmount?: number;
        VehicleSpecifications?: number[];
        Slno?: number;
        TypeOfVehicle?: VehicleTypes;
        SupplierAmount?: number;
        SupplierId?: number;
        SupplierAdvanceAmount?: number;
        PaymentType?: AccountTypes;
        AccountId?: number;
        DriverAdvancePaymentType?: AccountTypes;
        DriverAdvanceAccount?: number;
        Payments?: Accounts.PaymentRow[];
        VehicleCharges?: ConsignmentChargesRow[];
        DriverName?: string;
        Number?: string;
        ResidentID?: string;
        CountryId?: number;
        CountryCountryCode?: string;
        CountryCountryName?: string;
        ConsignmentDate?: string;
        ConsignmentWayBillNo?: string;
        ConsignmentJobNo?: string;
        ConsignmentClientJobNo?: string;
        ConsignmentShipperId?: number;
        ConsignmentConsigneeId?: number;
        ConsignmentVehicleId?: number;
        ConsignmentType?: string;
        ConsignmentVehicleNumber?: string;
        ConsignmentDriver?: number;
        ConsignmentPayment?: number;
        ConsignmentTypeOfPkg?: string;
        ConsignmentTotalVolume?: string;
        ConsignmentTotalWeight?: string;
        ConsignmentTotalNoOfPkgs?: string;
        ConsignmentShippingAreaFrom?: number;
        ConsignmentShippingAreaTo?: number;
        ConsignmentTotalAmount?: number;
        ConsignmentStatus?: number;
        ConsignmentPaymentMode?: number;
        ConsignmentBilling?: number;
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
        ShippingAreaFromAreaName?: string;
        ShippingAreaFromDescription?: string;
        ShippingAreaToAreaName?: string;
        ShippingAreaToDescription?: string;
    }

    export namespace ConsignmentVehicleDetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'VehicleNumber';
        export const localTextPrefix = 'Transactions.ConsignmentVehicleDetails';
        export const lookupKey = 'Transactions.ConsignmentVehicleDetails';

        export function getLookup(): Q.Lookup<ConsignmentVehicleDetailsRow> {
            return Q.getLookup<ConsignmentVehicleDetailsRow>('Transactions.ConsignmentVehicleDetails');
        }
        export const deletePermission = 'Transactions:Consignment';
        export const insertPermission = 'Transactions:Consignment';
        export const readPermission = 'Transactions:Consignment';
        export const updatePermission = 'Transactions:Consignment';

        export declare const enum Fields {
            Id = "Id",
            ConsignmentId = "ConsignmentId",
            VehicleId = "VehicleId",
            Type = "Type",
            VehicleNumber = "VehicleNumber",
            Driver = "Driver",
            DriverAdvance = "DriverAdvance",
            ShippingAreaFrom = "ShippingAreaFrom",
            ShippingAreaTo = "ShippingAreaTo",
            StartDate = "StartDate",
            EndDate = "EndDate",
            DriverKmFrom = "DriverKmFrom",
            DriverKmTo = "DriverKmTo",
            GpskmFrom = "GpskmFrom",
            GpskmTo = "GpskmTo",
            TypeOfPkg = "TypeOfPkg",
            TotalVolume = "TotalVolume",
            TotalWeight = "TotalWeight",
            TotalNoOfPkgs = "TotalNoOfPkgs",
            ChargeId = "ChargeId",
            Description = "Description",
            Amount = "Amount",
            Qty = "Qty",
            TotalAmount = "TotalAmount",
            CurrencyId = "CurrencyId",
            ExchangeRate = "ExchangeRate",
            TotalAmountInLocalCurrency = "TotalAmountInLocalCurrency",
            Date = "Date",
            TaxPer = "TaxPer",
            TaxAmount = "TaxAmount",
            TaxableAmount = "TaxableAmount",
            Total = "Total",
            DisAmount = "DisAmount",
            VehicleSpecifications = "VehicleSpecifications",
            Slno = "Slno",
            TypeOfVehicle = "TypeOfVehicle",
            SupplierAmount = "SupplierAmount",
            SupplierId = "SupplierId",
            SupplierAdvanceAmount = "SupplierAdvanceAmount",
            PaymentType = "PaymentType",
            AccountId = "AccountId",
            DriverAdvancePaymentType = "DriverAdvancePaymentType",
            DriverAdvanceAccount = "DriverAdvanceAccount",
            Payments = "Payments",
            VehicleCharges = "VehicleCharges",
            DriverName = "DriverName",
            Number = "Number",
            ResidentID = "ResidentID",
            CountryId = "CountryId",
            CountryCountryCode = "CountryCountryCode",
            CountryCountryName = "CountryCountryName",
            ConsignmentDate = "ConsignmentDate",
            ConsignmentWayBillNo = "ConsignmentWayBillNo",
            ConsignmentJobNo = "ConsignmentJobNo",
            ConsignmentClientJobNo = "ConsignmentClientJobNo",
            ConsignmentShipperId = "ConsignmentShipperId",
            ConsignmentConsigneeId = "ConsignmentConsigneeId",
            ConsignmentVehicleId = "ConsignmentVehicleId",
            ConsignmentType = "ConsignmentType",
            ConsignmentVehicleNumber = "ConsignmentVehicleNumber",
            ConsignmentDriver = "ConsignmentDriver",
            ConsignmentPayment = "ConsignmentPayment",
            ConsignmentTypeOfPkg = "ConsignmentTypeOfPkg",
            ConsignmentTotalVolume = "ConsignmentTotalVolume",
            ConsignmentTotalWeight = "ConsignmentTotalWeight",
            ConsignmentTotalNoOfPkgs = "ConsignmentTotalNoOfPkgs",
            ConsignmentShippingAreaFrom = "ConsignmentShippingAreaFrom",
            ConsignmentShippingAreaTo = "ConsignmentShippingAreaTo",
            ConsignmentTotalAmount = "ConsignmentTotalAmount",
            ConsignmentStatus = "ConsignmentStatus",
            ConsignmentPaymentMode = "ConsignmentPaymentMode",
            ConsignmentBilling = "ConsignmentBilling",
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
            DriverAllowance = "DriverAllowance",
            ShippingAreaFromAreaName = "ShippingAreaFromAreaName",
            ShippingAreaFromDescription = "ShippingAreaFromDescription",
            ShippingAreaToAreaName = "ShippingAreaToAreaName",
            ShippingAreaToDescription = "ShippingAreaToDescription"
        }
    }
}
