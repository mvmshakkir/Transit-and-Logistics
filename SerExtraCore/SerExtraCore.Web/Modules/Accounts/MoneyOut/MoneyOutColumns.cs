
namespace SerExtraCore.Accounts.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Accounts.MoneyOut")]
    [BasedOnRow(typeof(Entities.MoneyOutRow), CheckNames = true)]
    public class MoneyOutColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }

        [EditLink,SortOrder(1,descending:true)]
        public DateTime TrxDate { get; set; }
        public Int32 VNo { get; set; }
        [AlignRight,NumberFormatter(DisplayFormat = "#,##0.000")]
        public Decimal Amount { get; set; }
        [AlignRight, NumberFormatter(DisplayFormat = "#,##0.00")]
        public Decimal TaxPer { get; set; }
        [AlignRight, NumberFormatter(DisplayFormat = "#,##0.000")]
        public Decimal TaxAmount { get; set; }
        [AlignRight, NumberFormatter(DisplayFormat = "#,##0.000")]
        public Decimal TotalAmount { get; set; }
        public String AccountHeadCode { get; set; }
        public Int32 PaymentMethod { get; set; }
        public String AccountAccountName { get; set; }
        public String CustomerCustomerName { get; set; }
        public String EmployeeEmployeeName { get; set; }
        public String SupplierSupplierName { get; set; }
        public String VehicleVehicleNumber { get; set; }
        public String ConsignmentJobNo { get; set; }
        public string TSNo;
    }
}