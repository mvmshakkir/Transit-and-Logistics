
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.InvoiceVehicleDetails")]
    [BasedOnRow(typeof(Entities.InvoiceVehicleDetailsRow), CheckNames = true)]
    public class InvoiceVehicleDetailsColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink]
        public String VehicleNumber { get; set; }
        [Hidden]
        [EditLink]
        public String Type { get; set; }
        [Hidden]

        public String DriverEmployeeName { get; set; }
        public String ShippingAreaFromAreaName { get; set; }
        public String ShippingAreaToAreaName { get; set; }
        [Hidden]
        public DateTime StartDate { get; set; }
        [Hidden]
        public DateTime EndDate { get; set; }
    }
}