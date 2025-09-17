
namespace SerExtraCore.Accounts.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Accounts.Receipt")]
    [BasedOnRow(typeof(Entities.ReceiptRow), CheckNames = true)]
    public class ReceiptForm
    {
        [HalfWidth]
        public DateTime TrxDate { get; set; }
        [HalfWidth]
        public Int32 VNo { get; set; }
        [HalfWidth]
        public Int32 CustomerId { get; set; }
        [HalfWidth]
        public Int32 EmployeeId { get; set; }
        [HalfWidth]
        public Int32 CreditAccountHeadId { get; set; }
        [HalfWidth]
        public Decimal Amount { get; set; }
        [HalfWidth]
        public Int32 PaymentMethod { get; set; }
        [HalfWidth]
        public Int32 DebitAccountId { get; set; }

        public String Remarks { get; set; }
    }
}