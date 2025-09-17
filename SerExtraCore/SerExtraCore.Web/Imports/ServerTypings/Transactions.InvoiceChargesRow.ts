namespace SerExtraCore.Transactions {
    export interface InvoiceChargesRow {
        Id?: number;
        InvoiceId?: number;
        ChargeId?: number;
        Description?: string;
        Amount?: number;
        Qty?: number;
        TotalAmount?: number;
        CurrencyId?: number;
        ExchangeRate?: number;
        TotalAmountInLocalCurrency?: number;
        Slno?: number;
        FullName?: string;
        SupplierAmount?: number;
        SupplierId?: number;
        SupplierAdvanceAmount?: number;
        PaymentType?: AccountTypes;
        AccountId?: number;
        SupplierPaymentStatus?: PaymentStatus;
        InvoiceVehicleDetailId?: number;
        InvoiceChargeVehicleDetailId?: number;
        Date?: string;
        TaxPer?: number;
        TaxAmount?: number;
        TaxableAmount?: number;
        Total?: number;
        DisAmount?: number;
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
        ChargeChargeName?: string;
        ChargeDescription?: string;
        ChargeChartOrder?: number;
        CurrencyCurrencyCode?: string;
        CurrencyCurrencyName?: string;
        CurrencyExchangeRate?: number;
        ConsignmentId?: number;
    }

    export namespace InvoiceChargesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FullName';
        export const localTextPrefix = 'Transactions.InvoiceCharges';
        export const lookupKey = 'Transactions.InvoiceCharges';

        export function getLookup(): Q.Lookup<InvoiceChargesRow> {
            return Q.getLookup<InvoiceChargesRow>('Transactions.InvoiceCharges');
        }
        export const deletePermission = 'Transactions:Invoice';
        export const insertPermission = 'Transactions:Invoice';
        export const readPermission = 'Transactions:Invoice';
        export const updatePermission = 'Transactions:Invoice';

        export declare const enum Fields {
            Id = "Id",
            InvoiceId = "InvoiceId",
            ChargeId = "ChargeId",
            Description = "Description",
            Amount = "Amount",
            Qty = "Qty",
            TotalAmount = "TotalAmount",
            CurrencyId = "CurrencyId",
            ExchangeRate = "ExchangeRate",
            TotalAmountInLocalCurrency = "TotalAmountInLocalCurrency",
            Slno = "Slno",
            FullName = "FullName",
            SupplierAmount = "SupplierAmount",
            SupplierId = "SupplierId",
            SupplierAdvanceAmount = "SupplierAdvanceAmount",
            PaymentType = "PaymentType",
            AccountId = "AccountId",
            SupplierPaymentStatus = "SupplierPaymentStatus",
            InvoiceVehicleDetailId = "InvoiceVehicleDetailId",
            InvoiceChargeVehicleDetailId = "InvoiceChargeVehicleDetailId",
            Date = "Date",
            TaxPer = "TaxPer",
            TaxAmount = "TaxAmount",
            TaxableAmount = "TaxableAmount",
            Total = "Total",
            DisAmount = "DisAmount",
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
            ChargeChargeName = "ChargeChargeName",
            ChargeDescription = "ChargeDescription",
            ChargeChartOrder = "ChargeChartOrder",
            CurrencyCurrencyCode = "CurrencyCurrencyCode",
            CurrencyCurrencyName = "CurrencyCurrencyName",
            CurrencyExchangeRate = "CurrencyExchangeRate",
            ConsignmentId = "ConsignmentId"
        }
    }
}