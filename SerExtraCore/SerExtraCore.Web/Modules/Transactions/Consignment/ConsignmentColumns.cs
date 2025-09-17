
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serenity.Reporting;
    using SerExtraCore.Transactions.Entities;
    using SerExtraCore.Master.Entities;

    [ColumnsScript("Transactions.Consignment")]
    [BasedOnRow(typeof(Entities.ConsignmentRow), CheckNames = true)]
    public class ConsignmentColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink, SortOrder(1, descending: true)]
        public DateTime Date { get; set; }
        [Hidden]
        [EditLink]
        public DateTime EndDate { get; set; }
     
        [EditLink]
        public String JobNo { get; set; }
		public DateTime LoadedDate { get; set; }
		[Hidden]
        public String WayBillNo { get; set; }
		[Hidden]
		public String InvoiceNumber { get; set; }

		// public String ClientJobNo { get; set; }
		[Hidden]
		public String BillingCustomerName { get; set; }
        [DisplayName("Consigner")]
        public String ShipperCustomerName { get; set; }
        [DisplayName("Consignee")]
        public String ConsigneeCustomerName { get; set; }
        //public String VehicleVehicleNumber { get; set; }
        //public String Type { get; set; }
        //public String VehicleNumber { get; set; }
        //public String DriverEmployeeCode { get; set; }
        public Int32 Payment { get; set; }
        [Hidden]
        [Width(80), AlignRight]
        public Decimal TotalAmount { get; set; }
        public Int32 PaymentMode { get; set; }
        //public String TypeOfPkg { get; set; }
        //public String TotalVolume { get; set; }
        //public String TotalWeight { get; set; }
        //public String TotalNoOfPkgs { get; set; }
        //public String ShippingAreaFromAreaName { get; set; }
        //public String ShippingAreaToAreaName { get; set; }
       

        public Int32 Status { get; set; }

        [LookupEditor(typeof(ConsignmentVehicleDetailsRow),Multiple =true)]
        [Width(250), EmployeeListFormatter, CellDecorator(typeof(EmployeeListDecorator))]
        public String ConsignmentVehicleDetails { get; set; }

        [LookupEditor(typeof(ShippingAreasRow), Multiple = true)]
        [Width(250), FromLocationFormatter, CellDecorator(typeof(FromLocationDecorator))]
        public String FromLocations { get; set; }
        [LookupEditor(typeof(ShippingAreasRow), Multiple = true)]
        [Width(250), ToLocationFormatter]
        public String ToLocations { get; set; }
    }
}