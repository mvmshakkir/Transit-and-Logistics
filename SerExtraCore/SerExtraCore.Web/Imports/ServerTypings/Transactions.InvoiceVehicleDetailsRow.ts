namespace SerExtraCore.Transactions {
    export interface InvoiceVehicleDetailsRow {
        Id?: number;
        InvoiceId?: number;
        VehicleId?: number;
        Type?: string;
        VehicleNumber?: string;
        Driver?: number;
        ShippingAreaFrom?: number;
        ShippingAreaTo?: number;
        StartDate?: string;
        EndDate?: string;
        Slno?: number;
        FullName?: string;
        DriverKmFrom?: number;
        DriverKmTo?: number;
        GpskmFrom?: number;
        GpskmTo?: number;
        Total?: number;
        DisAmount?: number;
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
        TypeOfVehicle?: VehicleTypes;
        SupplierAmount?: number;
        SupplierId?: number;
        SupplierAdvanceAmount?: number;
        PaymentType?: AccountTypes;
        AccountId?: number;
        SupplierPaymentStatus?: PaymentStatus;
        ConsignmentVehicleDetailsId?: number;
        DriverName?: string;
        Number?: string;
        ResidentID?: string;
        CountryId?: number;
        CountryCountryCode?: string;
        CountryCountryName?: string;
        VehicleSpecifications?: number[];
        VehicleCharges?: InvoiceChargesRow[];
        InvoiceInvoiceDate?: string;
        InvoiceInvoiceNo?: string;
        InvoiceConsignmentId?: number;
        InvoiceConsignmentDate?: string;
        InvoiceWayBillNo?: string;
        InvoiceJobNo?: string;
        InvoiceClientJobNo?: string;
        InvoiceShipperId?: number;
        InvoiceConsigneeId?: number;
        InvoiceVehicleId?: number;
        InvoiceType?: string;
        InvoiceVehicleNumber?: string;
        InvoiceDriver?: number;
        InvoicePayment?: number;
        InvoiceTypeOfPkg?: string;
        InvoiceTotalVolume?: string;
        InvoiceTotalWeight?: string;
        InvoiceTotalNoOfPkgs?: string;
        InvoiceShippingAreaFrom?: number;
        InvoiceShippingAreaTo?: number;
        InvoiceTotalAmount?: number;
        InvoiceDriverKmFrom?: number;
        InvoiceDriverKmTo?: number;
        InvoiceGpskmFrom?: number;
        InvoiceGpskmTo?: number;
        InvoiceStatus?: number;
        InvoiceStatusUser?: number;
        InvoicePaymentStatus?: number;
        InvoicePaymentMode?: number;
        InvoiceBilling?: number;
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
        CurrencyCurrencyCode?: string;
        CurrencyCurrencyName?: string;
        ConsignmentId?: number;
    }

    export namespace InvoiceVehicleDetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FullName';
        export const localTextPrefix = 'Transactions.InvoiceVehicleDetails';
        export const lookupKey = 'Transactions.InvoiceVehicleDetails';

        export function getLookup(): Q.Lookup<InvoiceVehicleDetailsRow> {
            return Q.getLookup<InvoiceVehicleDetailsRow>('Transactions.InvoiceVehicleDetails');
        }
        export const deletePermission = 'Transactions:Invoice';
        export const insertPermission = 'Transactions:Invoice';
        export const readPermission = 'Transactions:Invoice';
        export const updatePermission = 'Transactions:Invoice';

        export declare const enum Fields {
            Id = "Id",
            InvoiceId = "InvoiceId",
            VehicleId = "VehicleId",
            Type = "Type",
            VehicleNumber = "VehicleNumber",
            Driver = "Driver",
            ShippingAreaFrom = "ShippingAreaFrom",
            ShippingAreaTo = "ShippingAreaTo",
            StartDate = "StartDate",
            EndDate = "EndDate",
            Slno = "Slno",
            FullName = "FullName",
            DriverKmFrom = "DriverKmFrom",
            DriverKmTo = "DriverKmTo",
            GpskmFrom = "GpskmFrom",
            GpskmTo = "GpskmTo",
            Total = "Total",
            DisAmount = "DisAmount",
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
            TypeOfVehicle = "TypeOfVehicle",
            SupplierAmount = "SupplierAmount",
            SupplierId = "SupplierId",
            SupplierAdvanceAmount = "SupplierAdvanceAmount",
            PaymentType = "PaymentType",
            AccountId = "AccountId",
            SupplierPaymentStatus = "SupplierPaymentStatus",
            ConsignmentVehicleDetailsId = "ConsignmentVehicleDetailsId",
            DriverName = "DriverName",
            Number = "Number",
            ResidentID = "ResidentID",
            CountryId = "CountryId",
            CountryCountryCode = "CountryCountryCode",
            CountryCountryName = "CountryCountryName",
            VehicleSpecifications = "VehicleSpecifications",
            VehicleCharges = "VehicleCharges",
            InvoiceInvoiceDate = "InvoiceInvoiceDate",
            InvoiceInvoiceNo = "InvoiceInvoiceNo",
            InvoiceConsignmentId = "InvoiceConsignmentId",
            InvoiceConsignmentDate = "InvoiceConsignmentDate",
            InvoiceWayBillNo = "InvoiceWayBillNo",
            InvoiceJobNo = "InvoiceJobNo",
            InvoiceClientJobNo = "InvoiceClientJobNo",
            InvoiceShipperId = "InvoiceShipperId",
            InvoiceConsigneeId = "InvoiceConsigneeId",
            InvoiceVehicleId = "InvoiceVehicleId",
            InvoiceType = "InvoiceType",
            InvoiceVehicleNumber = "InvoiceVehicleNumber",
            InvoiceDriver = "InvoiceDriver",
            InvoicePayment = "InvoicePayment",
            InvoiceTypeOfPkg = "InvoiceTypeOfPkg",
            InvoiceTotalVolume = "InvoiceTotalVolume",
            InvoiceTotalWeight = "InvoiceTotalWeight",
            InvoiceTotalNoOfPkgs = "InvoiceTotalNoOfPkgs",
            InvoiceShippingAreaFrom = "InvoiceShippingAreaFrom",
            InvoiceShippingAreaTo = "InvoiceShippingAreaTo",
            InvoiceTotalAmount = "InvoiceTotalAmount",
            InvoiceDriverKmFrom = "InvoiceDriverKmFrom",
            InvoiceDriverKmTo = "InvoiceDriverKmTo",
            InvoiceGpskmFrom = "InvoiceGpskmFrom",
            InvoiceGpskmTo = "InvoiceGpskmTo",
            InvoiceStatus = "InvoiceStatus",
            InvoiceStatusUser = "InvoiceStatusUser",
            InvoicePaymentStatus = "InvoicePaymentStatus",
            InvoicePaymentMode = "InvoicePaymentMode",
            InvoiceBilling = "InvoiceBilling",
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
            ShippingAreaToDescription = "ShippingAreaToDescription",
            CurrencyCurrencyCode = "CurrencyCurrencyCode",
            CurrencyCurrencyName = "CurrencyCurrencyName",
            ConsignmentId = "ConsignmentId"
        }
    }
}