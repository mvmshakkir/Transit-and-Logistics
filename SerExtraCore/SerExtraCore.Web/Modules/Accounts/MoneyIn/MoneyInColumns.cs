
namespace SerExtraCore.Accounts.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Accounts.MoneyIn")]
    [BasedOnRow(typeof(Entities.MoneyInRow), CheckNames = true)]
    public class MoneyInColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink,SortOrder(1,descending:true)]
        public DateTime TrxDate { get; set; }
        public Int32 VNo { get; set; }
        [AlignRight, NumberFormatter(DisplayFormat = "#,##0.000")]
        public Decimal Amount { get; set; }
        [AlignRight, NumberFormatter(DisplayFormat = "#,##0.00")]
        public Decimal TaxPer { get; set; }
        [AlignRight, NumberFormatter(DisplayFormat = "#,##0.000")]
        public Decimal TaxAmount { get; set; }
        [AlignRight, NumberFormatter(DisplayFormat = "#,##0.000")]
        public Decimal TotalAmount { get; set; }
        public String AccountHeadDescription { get; set; }
        public Int32 PaymentMethod { get; set; }
        public String AccountAccountName { get; set; }
        public String CustomerCustomerName { get; set; }
        public String EmployeeEmployeeName { get; set; }
        public string TSNo;
    }
}