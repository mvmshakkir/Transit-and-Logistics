namespace SerExtraCore.Transactions {
    export interface InvoiceRow {
        Id?: number;
        InvoiceDate?: string;
        InvoiceNo?: string;
        ConsignmentId?: number[];
        ConsignmentDate?: string;
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
        DriverKmFrom?: number;
        DriverKmTo?: number;
        GpskmFrom?: number;
        GpskmTo?: number;
        Status?: InvoiceStatus;
        StatusUser?: number;
        Slno?: number;
        PaymentStatus?: PaymentStatus;
        Billing?: number;
        BillingCustomerCode?: string;
        BillingCustomerName?: string;
        FromLocations?: string;
        ToLocations?: string;
        ChargeDetailList?: InvoiceChargesRow[];
        PaymentMode?: ConsignmentPaymentMode;
        InvoiceDues?: InvoiceDueDetailsRow[];
        InvoiceVehicleDetails?: InvoiceVehicleDetailsRow[];
        StartDate?: string;
        EndDate?: string;
        ClearanceId?: number;
        SupplierAmount?: number;
        SupplierId?: number;
        SupplierPaymentStatus?: PaymentStatus;
        AdvanceAmount?: number;
        BalanceAmount?: number;
        InvoiceTripDates?: InvoiceTripDatesRow[];
        ConsignmentConsignmentDate?: string;
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
        StatusUserUsername?: string;
        StatusUserDisplayName?: string;
        StatusUserEmail?: string;
        StatusUserSource?: string;
        StatusUserPasswordHash?: string;
        StatusUserPasswordSalt?: string;
        StatusUserLastDirectoryUpdate?: string;
        StatusUserUserImage?: string;
        StatusUserInsertDate?: string;
        StatusUserInsertUserId?: number;
        StatusUserUpdateDate?: string;
        StatusUserUpdateUserId?: number;
        StatusUserIsActive?: number;
        Remarks?: string;
        Receipts?: Accounts.ReceiptRow[];
        Cgst?: number;
        Sgst?: number;
        Igst?: number;
        CgstAmt?: number;
        SgstAmt?: number;
        IgstAmt?: number;
    }

    export namespace InvoiceRow {
        export const idProperty = 'Id';
        export const nameProperty = 'InvoiceNo';
        export const localTextPrefix = 'Transactions.Invoice';
        export const lookupKey = 'Transactions.Invoice';

        export function getLookup(): Q.Lookup<InvoiceRow> {
            return Q.getLookup<InvoiceRow>('Transactions.Invoice');
        }
        export const deletePermission = 'Transactions:Invoice';
        export const insertPermission = 'Transactions:Invoice';
        export const readPermission = 'Transactions:Invoice';
        export const updatePermission = 'Transactions:Invoice';

        export declare const enum Fields {
            Id = "Id",
            InvoiceDate = "InvoiceDate",
            InvoiceNo = "InvoiceNo",
            ConsignmentId = "ConsignmentId",
            ConsignmentDate = "ConsignmentDate",
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
            DriverKmFrom = "DriverKmFrom",
            DriverKmTo = "DriverKmTo",
            GpskmFrom = "GpskmFrom",
            GpskmTo = "GpskmTo",
            Status = "Status",
            StatusUser = "StatusUser",
            Slno = "Slno",
            PaymentStatus = "PaymentStatus",
            Billing = "Billing",
            BillingCustomerCode = "BillingCustomerCode",
            BillingCustomerName = "BillingCustomerName",
            FromLocations = "FromLocations",
            ToLocations = "ToLocations",
            ChargeDetailList = "ChargeDetailList",
            PaymentMode = "PaymentMode",
            InvoiceDues = "InvoiceDues",
            InvoiceVehicleDetails = "InvoiceVehicleDetails",
            StartDate = "StartDate",
            EndDate = "EndDate",
            ClearanceId = "ClearanceId",
            SupplierAmount = "SupplierAmount",
            SupplierId = "SupplierId",
            SupplierPaymentStatus = "SupplierPaymentStatus",
            AdvanceAmount = "AdvanceAmount",
            BalanceAmount = "BalanceAmount",
            InvoiceTripDates = "InvoiceTripDates",
            ConsignmentConsignmentDate = "ConsignmentConsignmentDate",
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
            StatusUserUsername = "StatusUserUsername",
            StatusUserDisplayName = "StatusUserDisplayName",
            StatusUserEmail = "StatusUserEmail",
            StatusUserSource = "StatusUserSource",
            StatusUserPasswordHash = "StatusUserPasswordHash",
            StatusUserPasswordSalt = "StatusUserPasswordSalt",
            StatusUserLastDirectoryUpdate = "StatusUserLastDirectoryUpdate",
            StatusUserUserImage = "StatusUserUserImage",
            StatusUserInsertDate = "StatusUserInsertDate",
            StatusUserInsertUserId = "StatusUserInsertUserId",
            StatusUserUpdateDate = "StatusUserUpdateDate",
            StatusUserUpdateUserId = "StatusUserUpdateUserId",
            StatusUserIsActive = "StatusUserIsActive",
            Remarks = "Remarks",
            Receipts = "Receipts",
            Cgst = "Cgst",
            Sgst = "Sgst",
            Igst = "Igst",
            CgstAmt = "CgstAmt",
            SgstAmt = "SgstAmt",
            IgstAmt = "IgstAmt"
        }
    }
}