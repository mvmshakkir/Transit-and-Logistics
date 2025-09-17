
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.ConsignmentVehicleDetails")]
    [BasedOnRow(typeof(Entities.ConsignmentVehicleDetailsRow), CheckNames = true)]
    public class ConsignmentVehicleDetailsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }

        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink]
        public String VehicleNumber { get; set; }
        [Hidden]
        [EditLink]

        public String Type { get; set; }
		[Hidden]
		[EditLink]

        public String DriverEmployeeName { get; set; }
        public String ShippingAreaFromAreaName { get; set; }
        public String ShippingAreaToAreaName { get; set; }
        //public DateTime StartDate { get; set; }
        //public DateTime EndDate { get; set; }
    }
}