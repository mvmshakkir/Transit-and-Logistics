
namespace SerExtraCore.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.QuotationDetails")]
    [BasedOnRow(typeof(Entities.QuotationDetailsRow), CheckNames = true)]
    public class QuotationDetailsForm
    {
        [HalfWidth]
        public Int32 ChargeId { get; set; }
        [HalfWidth]
        public String Description { get; set; }
        [HalfWidth]
        public String Unit { get; set; }
        [HalfWidth]
        public Decimal Quantity { get; set; }
        [HalfWidth]
        public Decimal Rate { get; set; }
        [HalfWidth]
        public Decimal TaxableAmount { get; set; }
        [HalfWidth]
        public Decimal TaxPer { get; set; }
        [HalfWidth]
        public Decimal TaxAmount { get; set; }
        [HalfWidth]
        public Decimal TotalAmount { get; set; }
        [HalfWidth]
        public Int32 CurrencyId { get; set; }
        [HalfWidth]
        public Decimal ExchangeRate { get; set; }
        [HalfWidth]
        public Decimal TotalAmountInLocalCurrency { get; set; }
    }
}