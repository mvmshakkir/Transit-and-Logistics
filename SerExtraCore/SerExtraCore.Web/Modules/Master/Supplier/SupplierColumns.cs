
namespace SerExtraCore.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Supplier")]
    [BasedOnRow(typeof(Entities.SupplierRow), CheckNames = true)]
    public class SupplierColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink]
        public String SupplierCode { get; set; }
        public String SupplierName { get; set; }
        public String Address { get; set; }
        public String TaxRegNo { get; set; }
        public String Place { get; set; }
        public String Telephone { get; set; }
        public String Email { get; set; }
        public String ContactPerson { get; set; }
        public String Mobile { get; set; }
        public DateTime CreationDate { get; set; }
        public String Description { get; set; }
    }
}