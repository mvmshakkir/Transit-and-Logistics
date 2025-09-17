
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.InvoiceVehicleSpecifications")]
    [BasedOnRow(typeof(Entities.InvoiceVehicleSpecificationsRow), CheckNames = true)]
    public class InvoiceVehicleSpecificationsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String InvoiceVehicleDetailType { get; set; }
        public String SpecificationSpecifications { get; set; }
    }
}