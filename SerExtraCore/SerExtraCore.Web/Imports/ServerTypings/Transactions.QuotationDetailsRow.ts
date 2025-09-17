namespace SerExtraCore.Transactions {
    export interface QuotationDetailsRow {
        Id?: number;
        QuotationId?: number;
        ChargeId?: number;
        Description?: string;
        Unit?: string;
        Quantity?: number;
        Rate?: number;
        TaxableAmount?: number;
        TaxPer?: number;
        TaxAmount?: number;
        TotalAmount?: number;
        CurrencyId?: number;
        ExchangeRate?: number;
        TotalAmountInLocalCurrency?: number;
        QuotationCustomerId?: number;
        QuotationDate?: string;
        QuotationQuotNo?: string;
        QuotationContactPerson?: string;
        QuotationMobile?: string;
        QuotationEmail?: string;
        QuotationEnquiryref?: string;
        QuotationFaxNo?: string;
        QuotationTotalAmount?: number;
        QuotationNote?: string;
        QuotationVehicleType?: string;
        ChargeChargeName?: string;
        ChargeDescription?: string;
        ChargeChartOrder?: number;
        ChargeTaxPer?: number;
        ChargeTaxCodeId?: number;
        CurrencyCurrencyCode?: string;
        CurrencyCurrencyName?: string;
        CurrencyExchangeRate?: number;
        CurrencyCurrencyUnit?: string;
        CurrencySubCurrencyUnit?: string;
    }

    export namespace QuotationDetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Transactions.QuotationDetails';
        export const deletePermission = 'Transactions:Quotations';
        export const insertPermission = 'Transactions:Quotations';
        export const readPermission = 'Transactions:Quotations';
        export const updatePermission = 'Transactions:Quotations';

        export declare const enum Fields {
            Id = "Id",
            QuotationId = "QuotationId",
            ChargeId = "ChargeId",
            Description = "Description",
            Unit = "Unit",
            Quantity = "Quantity",
            Rate = "Rate",
            TaxableAmount = "TaxableAmount",
            TaxPer = "TaxPer",
            TaxAmount = "TaxAmount",
            TotalAmount = "TotalAmount",
            CurrencyId = "CurrencyId",
            ExchangeRate = "ExchangeRate",
            TotalAmountInLocalCurrency = "TotalAmountInLocalCurrency",
            QuotationCustomerId = "QuotationCustomerId",
            QuotationDate = "QuotationDate",
            QuotationQuotNo = "QuotationQuotNo",
            QuotationContactPerson = "QuotationContactPerson",
            QuotationMobile = "QuotationMobile",
            QuotationEmail = "QuotationEmail",
            QuotationEnquiryref = "QuotationEnquiryref",
            QuotationFaxNo = "QuotationFaxNo",
            QuotationTotalAmount = "QuotationTotalAmount",
            QuotationNote = "QuotationNote",
            QuotationVehicleType = "QuotationVehicleType",
            ChargeChargeName = "ChargeChargeName",
            ChargeDescription = "ChargeDescription",
            ChargeChartOrder = "ChargeChartOrder",
            ChargeTaxPer = "ChargeTaxPer",
            ChargeTaxCodeId = "ChargeTaxCodeId",
            CurrencyCurrencyCode = "CurrencyCurrencyCode",
            CurrencyCurrencyName = "CurrencyCurrencyName",
            CurrencyExchangeRate = "CurrencyExchangeRate",
            CurrencyCurrencyUnit = "CurrencyCurrencyUnit",
            CurrencySubCurrencyUnit = "CurrencySubCurrencyUnit"
        }
    }
}
