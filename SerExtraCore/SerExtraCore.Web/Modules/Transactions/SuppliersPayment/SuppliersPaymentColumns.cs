
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.SuppliersPayment")]
    [BasedOnRow(typeof(Entities.SuppliersPaymentRow), CheckNames = true)]
    public class SuppliersPaymentColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink]
        public String Code { get; set; }
        public DateTime Date { get; set; }
        public String SupplierSupplierName { get; set; }
        public Decimal OldBalance { get; set; }
        public Decimal TotalAmount { get; set; }

        public Int32 PaymentType { get; set; }
        public String AccountAccountName { get; set; }
        public Int32 Status { get; set; }
        public String StatusUserUsername { get; set; }
    }
}