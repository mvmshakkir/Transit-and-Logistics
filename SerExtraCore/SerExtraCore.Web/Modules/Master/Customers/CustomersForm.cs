
namespace SerExtraCore.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SerExtraCore.Transactions;
    using SerExtraCore.Accounts;

    [FormScript("Master.Customers")]
    [BasedOnRow(typeof(Entities.CustomersRow), CheckNames = true)]
    public class CustomersForm
    {
        [Category("Customer Details")]
        [HalfWidth]
        public String CustomerCode { get; set; }
        [HalfWidth]
        public String CustomerName { get; set; }
        [HalfWidth]
        public String Address { get; set; }
        [HalfWidth]
        public String Place { get; set; }

        [HalfWidth]
        public Int32 StateId { get; set; }

        public String TaxRegNo { get; set; }
        [HalfWidth]
        [Category("Contact Information")]
        public String Telephone { get; set; }
        [HalfWidth]
        public String Email { get; set; }
        [HalfWidth]
        public String ContactPerson { get; set; }
        [HalfWidth]
        public String Mobile { get; set; }
        [HalfWidth]
        public Int32? DueDays { get; set; }
        
        [Category("Other Details")]
        [HalfWidth]
        public DateTime CreationDate { get; set; }
        [HalfWidth]
        public String Description { get; set; }

        [Category("Opening")]
        [HalfWidth]
        public DateTime OpeningDate { get; set; }
        [HalfWidth]
        public Decimal Opening { get; set; }

        [JVAdjustmentsEditor]
        [Visible(false)]
        public List<Accounts.Entities.JVAdjustmentsRow> jVAdjustmentsRow { get; set; }
    }
}