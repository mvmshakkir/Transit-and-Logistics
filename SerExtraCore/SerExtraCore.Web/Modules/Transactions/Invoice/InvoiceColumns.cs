
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SerExtraCore.Master.Entities;
    using SerExtraCore.Transactions.Entities;
    using Serenity.Reporting;

    [ColumnsScript("Transactions.Invoice")]
    [BasedOnRow(typeof(Entities.InvoiceRow), CheckNames = true)]
    public class InvoiceColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink, SortOrder(1, descending: true),DefaultValue("today")]
        public DateTime InvoiceDate { get; set; }
        [EditLink]
        //[SortOrder(0,true)]
        public String InvoiceNo { get; set; }
        [Hidden]
        public String JobNo { get; set; }
        [Hidden]
        public String ConsignmentJobNo { get; set; }
        [Hidden]
        public DateTime ConsignmentDate { get; set; }
        [Hidden]
        public DateTime EndDate { get; set; }
        [Hidden]
        public String WayBillNo { get; set; }

        // public String ClientJobNo { get; set; }
        [Hidden]
        public String ShipperCustomerName { get; set; }
        public String ConsigneeCustomerName { get; set; }
        //public String VehicleVehicleNumber { get; set; }
        //public String Type { get; set; }
        //public String VehicleNumber { get; set; }
        //public String DriverEmployeeName { get; set; }
        [Hidden]
        public Int32 Payment { get; set; }
        [Hidden]
        public String BillingCustomerName { get; set; }
        [Hidden]
        public Int32 PaymentMode { get; set; }
        //public String TypeOfPkg { get; set; }
        //public String TotalVolume { get; set; }
        //public String TotalWeight { get; set; }
        //public String TotalNoOfPkgs { get; set; }
        //public String ShippingAreaFromAreaName { get; set; }
        //public String ShippingAreaToAreaName { get; set; }

        //public DateTime StartDate { get; set; }
        //public DateTime EndDate { get; set; }

        [Hidden]
        public Decimal TotalAmount { get; set; }
        [Hidden]
        public Decimal DriverKmFrom { get; set; }
        [Hidden]
        public Decimal DriverKmTo { get; set; }
        [Hidden]
        public Decimal GpskmFrom { get; set; }
        [Hidden]
        public Decimal GpskmTo { get; set; }
        [Hidden]
        public Int32 Status { get; set; }
        [Hidden]
        public String StatusUserUsername { get; set; }
        [Hidden]
        public Int32 PaymentStatus { get; set; }

        [LookupEditor(typeof(InvoiceVehicleDetailsRow), Multiple = true)]
        [Width(250), EmployeeListFormatter, CellDecorator(typeof(EmployeeListDecorator))]
        public String InvoiceVehicleDetails { get; set; }

        [LookupEditor(typeof(ShippingAreasRow), Multiple = true)]
        [Width(250), FromLocationInvoiceFormatter]
        public String FromLocations { get; set; }
        [LookupEditor(typeof(ShippingAreasRow), Multiple = true)]
        [Width(250), ToLocationInvoiceFormatter]
        public String ToLocations { get; set; }
    }
}