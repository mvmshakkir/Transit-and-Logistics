
namespace SerExtraCore.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SerExtraCore.Accounts;

    [FormScript("Master.Supplier")]
    [BasedOnRow(typeof(Entities.SupplierRow), CheckNames = true)]
    public class SupplierForm
    {
        [HalfWidth]
        public String SupplierCode { get; set; }
        [HalfWidth]
        public String SupplierName { get; set; }
        [HalfWidth]
        public String Address { get; set; }
        [HalfWidth]
        public String Place { get; set; }
        public String TaxRegNo { get; set; }
        [HalfWidth]
        public String Telephone { get; set; }
        [HalfWidth]
        public String Email { get; set; }
        [HalfWidth]
        public String ContactPerson { get; set; }
        [HalfWidth]
        public String Mobile { get; set; }
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