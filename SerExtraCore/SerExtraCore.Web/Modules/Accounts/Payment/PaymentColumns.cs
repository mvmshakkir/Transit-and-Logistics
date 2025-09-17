
namespace SerExtraCore.Accounts.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Accounts.Payment")]
    [BasedOnRow(typeof(Entities.PaymentRow), CheckNames = true)]
    public class PaymentColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink]
        public DateTime TrxDate { get; set; }
        [EditLink]
        public Int32 VNo { get; set; }
        public String CustomerCustomerName { get; set; }
        public String SupplierName { get; set; }
        public String EmployeeEmployeeName { get; set; }
        public String VehicleNumber { get; set; }
        public String ConsignmentJobNo { get; set; }
        public String DebitAccountHeadDescription { get; set; }
        public Decimal Amount { get; set; }
        public Int32 PaymentMethod { get; set; }
        public String CreditAccountAccountName { get; set; }
        public string TSNo;

    }
}