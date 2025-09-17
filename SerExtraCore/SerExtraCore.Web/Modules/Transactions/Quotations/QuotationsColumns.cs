
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.Quotations")]
    [BasedOnRow(typeof(Entities.QuotationsRow), CheckNames = true)]
    public class QuotationsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String CustomerCustomerName { get; set; }
        [EditLink]
        public DateTime Date { get; set; }
        [EditLink]
        public String QuotNo { get; set; }
        public String ContactPerson { get; set; }
        public String Mobile { get; set; }
        public String Email { get; set; }
        public String Enquiryref { get; set; }
        public String FaxNo { get; set; }
        public Decimal TotalAmount { get; set; }
        public String Note { get; set; }
        public String VehicleType { get; set; }
    }
}