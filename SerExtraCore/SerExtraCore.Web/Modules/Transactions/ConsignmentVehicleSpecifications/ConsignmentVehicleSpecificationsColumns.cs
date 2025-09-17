
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.ConsignmentVehicleSpecifications")]
    [BasedOnRow(typeof(Entities.ConsignmentVehicleSpecificationsRow), CheckNames = true)]
    public class ConsignmentVehicleSpecificationsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String ConsignmentVehicleDetailType { get; set; }
        public String SpecificationSpecifications { get; set; }
    }
}