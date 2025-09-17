
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.SuppliersPaymentInvoiceVehicleDetails")]
    [BasedOnRow(typeof(Entities.SuppliersPaymentInvoiceVehicleDetailsRow), CheckNames = true)]
    public class SuppliersPaymentInvoiceVehicleDetailsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        //public String SuppliersPaymentCode { get; set; }
        [EditLink]
        public String InvoiceVehicleDetailFullName { get; set; }
        [EditLink]
        public Decimal Amount { get; set; }

    }
}