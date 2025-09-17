
namespace SerExtraCore.Accounts.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Accounts.Contra")]
    [BasedOnRow(typeof(Entities.ContraRow), CheckNames = true)]
    public class ContraForm
    {
        [HalfWidth]
        public DateTime TrxDate { get; set; }
        [HalfWidth]
        public Int32 VNo { get; set; }
        [HalfWidth]
        //public Int32 CustomerId { get; set; }
        //public Int32 EmployeeId { get; set; }
        public Int32 DebitAccountId { get; set; }
        [HalfWidth]
        public Decimal Amount { get; set; }
        [HalfWidth]

        public Int32 CreditAccountId { get; set; }
        public String Remarks { get; set; }

    }
}