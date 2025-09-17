
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.SuppliersPaymentInvoices")]
    [BasedOnRow(typeof(Entities.SuppliersPaymentInvoicesRow), CheckNames = true)]
    public class SuppliersPaymentInvoicesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String SuppliersPaymentCode { get; set; }
        public String InvoiceInvoiceNo { get; set; }
    }
}