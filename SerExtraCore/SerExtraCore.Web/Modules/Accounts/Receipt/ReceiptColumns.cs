
namespace SerExtraCore.Accounts.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Accounts.Receipt")]
    [BasedOnRow(typeof(Entities.ReceiptRow), CheckNames = true)]
    public class ReceiptColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink]
        public DateTime TrxDate { get; set; }
        public Int32 VNo { get; set; }
        public String CustomerCustomerName { get; set; }

        public string TSNo;
        public String EmployeeEmployeeName { get; set; }
        public String CreditAccountHeadDescription { get; set; }
        public Decimal Amount { get; set; }
        public Int32 PaymentMethod { get; set; }
        public String DebitAccountAccountName { get; set; }
    }
}