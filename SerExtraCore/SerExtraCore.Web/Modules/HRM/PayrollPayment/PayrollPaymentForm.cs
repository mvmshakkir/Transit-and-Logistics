
namespace SerExtraCore.HRM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("HRM.PayrollPayment")]
    [BasedOnRow(typeof(Entities.PayrollPaymentRow), CheckNames = true)]
    public class PayrollPaymentForm
    {
        [Category("Genaral Details")]
        [HalfWidth]
        public DateTime TrxDate { get; set; }
        //public Int32 PayrollStructureId { get; set; }
        [HalfWidth]
        public Int32 EmployeeId { get; set; }
        [Category("Payment Details")]
        [HalfWidth]
        public Decimal BasicPay { get; set; }
        [HalfWidth]
        public Decimal Allowance { get; set; }
        [HalfWidth]
        public Decimal OverTime { get; set; }
        [HalfWidth]
        public Decimal Other { get; set; }
        [HalfWidth]
        public Decimal Total { get; set; }
        [HalfWidth]
        public String Remarks { get; set; }
        [Category("Account Details")]
        [HalfWidth]
        public Int32 PaymentType { get; set; }
        [HalfWidth]
        public Int32 AccountId { get; set; }
    }
}