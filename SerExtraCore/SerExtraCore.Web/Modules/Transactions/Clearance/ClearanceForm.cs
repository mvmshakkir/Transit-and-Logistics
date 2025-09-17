
namespace SerExtraCore.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.Clearance")]
    [BasedOnRow(typeof(Entities.ClearanceRow), CheckNames = true)]
    public class ClearanceForm
    {
        [Category("Clearance Details")]
        [HalfWidth]
        public String Mblno { get; set; }
        [HalfWidth]
        public DateTime Mbldate { get; set; }
        [HalfWidth]
        public String Hblno { get; set; }
        [HalfWidth]
        public DateTime Hbldate { get; set; }
        [HalfWidth]
        public DateTime Eta { get; set; }
        [HalfWidth]
        public DateTime Etd { get; set; }
        [HalfWidth]
        public Int32 Status { get; set; }
        [HalfWidth]
        [Category("Port Details")]
        public Int32 PortLoading { get; set; }
        [HalfWidth]
       
        public Int32 PortDischarge { get; set; }
        [Category("Other Details")]
        [HalfWidth]
        public String Attachment { get; set; }
        [HalfWidth]
        public Int32 Shipper { get; set; }
        [HalfWidth]
        public Int32 Consignee { get; set; }
        [HalfWidth]
        public String Vessel { get; set; }
        [HalfWidth]
        public String ContainerNo { get; set; }
        [HalfWidth]
        public String JobRef { get; set; }
        [HalfWidth]
        public String CustomerRef { get; set; }
        [HalfWidth]
        public String PackageType { get; set; }
        [HalfWidth]
        public String Weight { get; set; }
        [HalfWidth]
        public String ChargeableWeight { get; set; }
        [HalfWidth]
        public Decimal NoOfPackages { get; set; }
        [HalfWidth]
        public Decimal Volume { get; set; }
    }
}