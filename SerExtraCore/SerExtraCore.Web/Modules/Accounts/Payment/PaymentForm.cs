
namespace SerExtraCore.Accounts.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Accounts.Payment")]
    [BasedOnRow(typeof(Entities.PaymentRow), CheckNames = true)]
    public class PaymentForm
    {
        [HalfWidth]
        public DateTime TrxDate { get; set; }
        [HalfWidth]

        public Int32 FuelTsId { get; set;}

        [HalfWidth]
        public Int32 VNo { get; set; }
        [HalfWidth]
        public Int32 CustomerId { get; set; }
        [HalfWidth]
        public Int32 EmployeeId { get; set; }
        [HalfWidth]
        public Int32 SupplierId { get; set; }
        [HalfWidth]
        public Int32 VehicleId { get; set; }
        [HalfWidth]
        public Int32 ConsignmentId { get; set; }
        [HalfWidth]
        public Int32 DebitAccountHeadId { get; set; }
        [HalfWidth]
        public Decimal Amount { get; set; }
        [HalfWidth]
        public Int32 PaymentMethod { get; set; }
        [HalfWidth]
        public Int32 CreditAccountId { get; set; }
        public String Remarks { get; set; }
       
    }
}