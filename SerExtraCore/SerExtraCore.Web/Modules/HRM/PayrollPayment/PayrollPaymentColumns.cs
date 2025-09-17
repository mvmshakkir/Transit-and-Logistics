
namespace SerExtraCore.HRM.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("HRM.PayrollPayment")]
    [BasedOnRow(typeof(Entities.PayrollPaymentRow), CheckNames = true)]
    public class PayrollPaymentColumns
    {
        [EditLink]
        public DateTime TrxDate { get; set; }
        [EditLink]
        public String EmployeeEmployeeName { get; set; }
        public Decimal BasicPay { get; set; }
        public Decimal Allowance { get; set; }
        public Decimal OverTime { get; set; }
        public Decimal Other { get; set; }
        public Decimal Total { get; set; }
       
        public String Remarks { get; set; }
    }
}