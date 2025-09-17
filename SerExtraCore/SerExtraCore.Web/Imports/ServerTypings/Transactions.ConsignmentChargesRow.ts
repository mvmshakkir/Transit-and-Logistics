namespace SerExtraCore.Transactions {
    export interface ConsignmentChargesRow {
        Id?: number;
        ConsignmentId?: number;
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
        Slno?: number;
        Payments?: Accounts.PaymentRow[];
        SupplierAmount?: number;
        SupplierId?: number;
        SupplierAdvanceAmount?: number;
        PaymentType?: AccountTypes;
        AccountId?: number;
        ConsignmentChargesId?: number;
        ConsignmentVehicleDetailId?: number;
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
        ChargeChargeName?: string;
        ChargeDescription?: string;
        CurrencyCurrencyCode?: string;
        CurrencyCurrencyName?: string;
        CurrencyExchangeRate?: number;
        UOMId?: number;
        UomUnit?: string;
    }

    export namespace ConsignmentChargesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Transactions.ConsignmentCharges';
        export const deletePermission = 'Transactions:Consignment';
        export const insertPermission = 'Transactions:Consignment';
        export const readPermission = 'Transactions:Consignment';
        export const updatePermission = 'Transactions:Consignment';

        export declare const enum Fields {
            Id = "Id",
            ConsignmentId = "ConsignmentId",
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
            Slno = "Slno",
            Payments = "Payments",
            SupplierAmount = "SupplierAmount",
            SupplierId = "SupplierId",
            SupplierAdvanceAmount = "SupplierAdvanceAmount",
            PaymentType = "PaymentType",
            AccountId = "AccountId",
            ConsignmentChargesId = "ConsignmentChargesId",
            ConsignmentVehicleDetailId = "ConsignmentVehicleDetailId",
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
            ChargeChargeName = "ChargeChargeName",
            ChargeDescription = "ChargeDescription",
            CurrencyCurrencyCode = "CurrencyCurrencyCode",
            CurrencyCurrencyName = "CurrencyCurrencyName",
            CurrencyExchangeRate = "CurrencyExchangeRate",
            UOMId = "UOMId",
            UomUnit = "UomUnit"
        }
    }
}
