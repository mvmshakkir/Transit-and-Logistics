
namespace SerExtraCore.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.Quotations")]
    [BasedOnRow(typeof(Entities.QuotationsRow), CheckNames = true)]
    public class QuotationsForm
    {
        [HalfWidth]
        public String QuotNo { get; set; }
        [HalfWidth]
        public Int32 CustomerId { get; set; }
        [HalfWidth]
        public DateTime Date { get; set; }
        [HalfWidth]
        public String FaxNo { get; set; }


        [Category("Contact Details")]
        [HalfWidth]
        public String ContactPerson { get; set; }
        [HalfWidth]
        public String Mobile { get; set; }
        [HalfWidth]
        public String Email { get; set; }
        [HalfWidth]
        public String Enquiryref { get; set; }
        

        public String VehicleType { get; set; }

        [Category("Details")]
        [QuotationDetailsEditor]
        public List<Entities.QuotationDetailsRow> QuotationDetails { get; set; }
        public Decimal TotalAmount { get; set; }
        public String Note { get; set; }

        public Int32 QuotationType { get; set; }
        public String TermsAndConditions { get; set; }
    }
}