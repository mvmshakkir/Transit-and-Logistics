
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.QuotationDetails")]
    [BasedOnRow(typeof(Entities.QuotationDetailsRow), CheckNames = true)]
    public class QuotationDetailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String ChargeChargeName { get; set; }
        [EditLink]
        public String Description { get; set; }
        public String Unit { get; set; }
        public Decimal Quantity { get; set; }
        public Decimal Rate { get; set; }
        public Decimal TaxableAmount { get; set; }
        public Decimal TaxPer { get; set; }
        public Decimal TaxAmount { get; set; }
        public Decimal TotalAmount { get; set; }
        public String CurrencyCurrencyCode { get; set; }
        public Decimal ExchangeRate { get; set; }
        public Decimal TotalAmountInLocalCurrency { get; set; }
    }
}