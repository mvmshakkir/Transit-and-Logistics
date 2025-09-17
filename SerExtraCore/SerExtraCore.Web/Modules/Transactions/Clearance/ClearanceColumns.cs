
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.Clearance")]
    [BasedOnRow(typeof(Entities.ClearanceRow), CheckNames = true)]
    public class ClearanceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Mblno { get; set; }
        public DateTime Mbldate { get; set; }
        public String Hblno { get; set; }
        public DateTime Hbldate { get; set; }
        public String Eta { get; set; }
        public String Status1 { get; set; }
        public String PortLoadingPortName { get; set; }
        public String PortDischargePortName { get; set; }
        public String ShipperCustomerName { get; set; }
        public String ConsigneeCustomerName { get; set; }
        public String Vessel { get; set; }
        public String ContainerNo { get; set; }
        public String JobRef { get; set; }
        public String CustomerRef { get; set; }
        public String PackageType { get; set; }
        public String Weight { get; set; }
        public String ChargeableWeight { get; set; }
        public Decimal NoOfPackages { get; set; }
        public Decimal Volume { get; set; }
    }
}