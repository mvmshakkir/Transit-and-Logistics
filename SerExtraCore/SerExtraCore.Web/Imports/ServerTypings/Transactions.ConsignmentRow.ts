namespace SerExtraCore.Transactions {
    export interface ConsignmentRow {
        Id?: number;
        Slno?: number;
        Date?: string;
        WayBillNo?: string;
        JobNo?: string;
        ClientJobNo?: string;
        ShipperId?: number;
        ConsigneeId?: number;
        VehicleId?: number;
        Type?: string;
        VehicleNumber?: string;
        Driver?: number;
        Payment?: ConsignmentPaymentTypes;
        TypeOfPkg?: string;
        TotalVolume?: string;
        TotalWeight?: string;
        TotalNoOfPkgs?: string;
        ShippingAreaFrom?: number;
        ShippingAreaTo?: number;
        TotalAmount?: number;
        Status?: ConsignmentStatus;
        Billing?: number;
        FullName?: string;
        ClearanceId?: number;
        BillingCustomerCode?: string;
        BillingCustomerName?: string;
        ChargeDetailList?: ConsignmentChargesRow[];
        PaymentMode?: ConsignmentPaymentMode;
        Expenses?: Accounts.PaymentRow[];
        ConsignmentVehicleDetails?: ConsignmentVehicleDetailsRow[];
        ConsignmentTripDates?: ConsignmentTripDatesRow[];
        StartDate?: string;
        EndDate?: string;
        SupplierAmount?: number;
        SupplierId?: number;
        AdvanceAmount?: number;
        AdvancePaymentType?: PymentTypes;
        AdvanceAccountId?: number;
        BalanceAmount?: number;
        AdvanceReceipt?: Accounts.ReceiptRow[];
        PdcPaymentDetails?: PDCPayments.PdcPaymentDetailsRow[];
        FromLocations?: string;
        ToLocations?: string;
        ShipperCustomerCode?: string;
        ShipperCustomerName?: string;
        ShipperAddress?: string;
        ShipperPlace?: string;
        ShipperTelephone?: string;
        ShipperEmail?: string;
        ShipperContactPerson?: string;
        ShipperMobile?: string;
        ShipperCreationDate?: string;
        ShipperDescription?: string;
        ConsigneeCustomerCode?: string;
        ConsigneeCustomerName?: string;
        ConsigneeAddress?: string;
        ConsigneePlace?: string;
        ConsigneeTelephone?: string;
        ConsigneeEmail?: string;
        ConsigneeContactPerson?: string;
        ConsigneeMobile?: string;
        ConsigneeCreationDate?: string;
        ConsigneeDescription?: string;
        InvoiceNumber?: string;
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
        TaxPaidBy?: TaxPaidBy;
        TotalTaxAmount?: number;
        Cgst?: number;
        Sgst?: number;
        Igst?: number;
        CgstAmt?: number;
        SgstAmt?: number;
        IgstAmt?: number;
        TotalFreightAmount?: number;
        Po?: string;
        LoadedDate?: string;
    }

    export namespace ConsignmentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FullName';
        export const localTextPrefix = 'Transactions.Consignment';
        export const lookupKey = 'Transactions.Consignment';

        export function getLookup(): Q.Lookup<ConsignmentRow> {
            return Q.getLookup<ConsignmentRow>('Transactions.Consignment');
        }
        export const deletePermission = 'Transactions:Consignment';
        export const insertPermission = 'Transactions:Consignment';
        export const readPermission = 'Transactions:Consignment';
        export const updatePermission = 'Transactions:Consignment';

        export declare const enum Fields {
            Id = "Id",
            Slno = "Slno",
            Date = "Date",
            WayBillNo = "WayBillNo",
            JobNo = "JobNo",
            ClientJobNo = "ClientJobNo",
            ShipperId = "ShipperId",
            ConsigneeId = "ConsigneeId",
            VehicleId = "VehicleId",
            Type = "Type",
            VehicleNumber = "VehicleNumber",
            Driver = "Driver",
            Payment = "Payment",
            TypeOfPkg = "TypeOfPkg",
            TotalVolume = "TotalVolume",
            TotalWeight = "TotalWeight",
            TotalNoOfPkgs = "TotalNoOfPkgs",
            ShippingAreaFrom = "ShippingAreaFrom",
            ShippingAreaTo = "ShippingAreaTo",
            TotalAmount = "TotalAmount",
            Status = "Status",
            Billing = "Billing",
            FullName = "FullName",
            ClearanceId = "ClearanceId",
            BillingCustomerCode = "BillingCustomerCode",
            BillingCustomerName = "BillingCustomerName",
            ChargeDetailList = "ChargeDetailList",
            PaymentMode = "PaymentMode",
            Expenses = "Expenses",
            ConsignmentVehicleDetails = "ConsignmentVehicleDetails",
            ConsignmentTripDates = "ConsignmentTripDates",
            StartDate = "StartDate",
            EndDate = "EndDate",
            SupplierAmount = "SupplierAmount",
            SupplierId = "SupplierId",
            AdvanceAmount = "AdvanceAmount",
            AdvancePaymentType = "AdvancePaymentType",
            AdvanceAccountId = "AdvanceAccountId",
            BalanceAmount = "BalanceAmount",
            AdvanceReceipt = "AdvanceReceipt",
            PdcPaymentDetails = "PdcPaymentDetails",
            FromLocations = "FromLocations",
            ToLocations = "ToLocations",
            ShipperCustomerCode = "ShipperCustomerCode",
            ShipperCustomerName = "ShipperCustomerName",
            ShipperAddress = "ShipperAddress",
            ShipperPlace = "ShipperPlace",
            ShipperTelephone = "ShipperTelephone",
            ShipperEmail = "ShipperEmail",
            ShipperContactPerson = "ShipperContactPerson",
            ShipperMobile = "ShipperMobile",
            ShipperCreationDate = "ShipperCreationDate",
            ShipperDescription = "ShipperDescription",
            ConsigneeCustomerCode = "ConsigneeCustomerCode",
            ConsigneeCustomerName = "ConsigneeCustomerName",
            ConsigneeAddress = "ConsigneeAddress",
            ConsigneePlace = "ConsigneePlace",
            ConsigneeTelephone = "ConsigneeTelephone",
            ConsigneeEmail = "ConsigneeEmail",
            ConsigneeContactPerson = "ConsigneeContactPerson",
            ConsigneeMobile = "ConsigneeMobile",
            ConsigneeCreationDate = "ConsigneeCreationDate",
            ConsigneeDescription = "ConsigneeDescription",
            InvoiceNumber = "InvoiceNumber",
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
            TaxPaidBy = "TaxPaidBy",
            TotalTaxAmount = "TotalTaxAmount",
            Cgst = "Cgst",
            Sgst = "Sgst",
            Igst = "Igst",
            CgstAmt = "CgstAmt",
            SgstAmt = "SgstAmt",
            IgstAmt = "IgstAmt",
            TotalFreightAmount = "TotalFreightAmount",
            Po = "Po",
            LoadedDate = "LoadedDate"
        }
    }
}
