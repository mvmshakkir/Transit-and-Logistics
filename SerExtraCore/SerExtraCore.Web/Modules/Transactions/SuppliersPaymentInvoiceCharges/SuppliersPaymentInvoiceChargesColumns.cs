
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.SuppliersPaymentInvoiceCharges")]
    [BasedOnRow(typeof(Entities.SuppliersPaymentInvoiceChargesRow), CheckNames = true)]
    public class SuppliersPaymentInvoiceChargesColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        //public String SuppliersPaymentCode { get; set; }
        //public String InvoiceChargesDescription { get; set; }
        [EditLink]
        public String InvoiceChargeFullName { get; set; }
        [EditLink]
        public Decimal Amount { get; set; }
    }
}