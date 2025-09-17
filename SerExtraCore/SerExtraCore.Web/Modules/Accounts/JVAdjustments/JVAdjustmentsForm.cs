
namespace SerExtraCore.Accounts.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Accounts.JVAdjustments")]
    [BasedOnRow(typeof(Entities.JVAdjustmentsRow), CheckNames = true)]
    public class JVAdjustmentsForm
    {
       // [Hidden]
       // public Int32 FreightId { get; set; }

        [HalfWidth]
        public DateTime TrxDate { get; set; }
        [HalfWidth]
        public Int32 VNo { get; set; }

        [Category("Debit")]
        [HalfWidth]
        public Int32 CustomerId { get; set; }
        [HalfWidth]
        public Int32 EmployeeId { get; set; }
        [HalfWidth]
        public Int32 VehicleId { get; set; }
        [HalfWidth]
        public Int32 DebitSupplierId { get; set; }

        [HalfWidth]
        public Int32 DebitAccountHeadId { get; set; }
        [HalfWidth]
        public Int32 DebitAccountId { get; set; }

        [Category("Credit")]
        [HalfWidth]
        public Int32 CreditCustomerId { get; set; }
        [HalfWidth]
        public Int32 CreditEmployeeId { get; set; }
        [HalfWidth]
        public Int32 CreditVehicleId { get; set; }
        [HalfWidth]
        public Int32 CreditSupplierId { get; set; }

        [HalfWidth]
        public Int32 CreditAccountHeadId { get; set; }
        [HalfWidth]
        public Int32 CreditAccountId { get; set; }

        [Category("Payment Details")]
       
        [HalfWidth]
        public Decimal Amount { get; set; } 
        public String Remarks { get; set; }
       
       
    }
}