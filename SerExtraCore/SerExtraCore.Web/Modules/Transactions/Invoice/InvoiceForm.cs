
namespace SerExtraCore.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SerExtraCore.Transactions.Entities;

    [FormScript("Transactions.Invoice")]
    [BasedOnRow(typeof(Entities.InvoiceRow), CheckNames = true)]
    public class InvoiceForm
    {
        [Category("Invoice Details")]
        [OneThirdWidth]
        public DateTime InvoiceDate { get; set; }
        [OneThirdWidth]
        public String InvoiceNo { get; set; }
        [Category("Material Details")]
       
        public Int32 ConsignmentId { get; set; }
        [OneThirdWidth]
        public DateTime ConsignmentDate { get; set; }
        [Hidden]
        [OneThirdWidth]
        public DateTime? EndDate { get; set; }
        [Hidden]
        [HalfWidth]

        public String WayBillNo { get; set; }
        [Hidden]
        public String JobNo { get; set; }
        [Hidden]
        [HalfWidth]
        public String ClientJobNo { get; set; }
        [HalfWidth]
        public Int32 Payment { get; set; }
        [HalfWidth]
        public Int32 PaymentMode { get; set; }

        //[Category("Clearance")]
        [Hidden]
        [HalfWidth]
        public Int32 ClearanceId { get; set; }

        [Category("Client Details")]
        [HalfWidth]
        public Int32 ShipperId { get; set; }
        [HalfWidth]
        public Int32 ConsigneeId { get; set; }
        [Hidden]
        [HalfWidth]
        public Int32 Billing { get; set; }
      


        [Category("Invoice Vehicle Details")]
        [InvoiceVehicleDetailsEditor]
        public List<InvoiceVehicleDetailsRow> InvoiceVehicleDetails { get; set; }
        //[HalfWidth]
        //public Int32 VehicleId { get; set; }
        //[HalfWidth]
        //public String Type { get; set; }
        //[HalfWidth]
        //public String VehicleNumber { get; set; }
        //[HalfWidth]
        //public Int32 Driver { get; set; }
      
       
        //[OneThirdWidth]
        //public Int32 ShippingAreaFrom { get; set; }
        //[OneThirdWidth]
        //public Int32 ShippingAreaTo { get; set; }

        //[HalfWidth]
        //public DateTime? StartDate { get; set; }
        //[HalfWidth]
        //public DateTime? EndDate { get; set; }
        //[Category("Trip Details")]
        //[InvoiceTripDatesEditor]
        //public List<Entities.InvoiceTripDatesRow> InvoiceTripDates { get; set; }
        [Category("Charge Details")]
        [InvoiceChargeEditor]
        public List<Entities.InvoiceChargesRow> ChargeDetailList { get; set; }
        [HalfWidth]
        [Category("Tax")]
        public Decimal Sgst { get; set; }
        [HalfWidth]
        public Decimal SgstAmt { get; set; }
        [HalfWidth]
        public decimal Cgst { get; set; }

        [HalfWidth]
        public Decimal CgstAmt { get; set; }
        //[Category("Outside")]
        [HalfWidth]
        public decimal Igst { get; set; }
        [HalfWidth]
        public decimal IgstAmt { get; set; }

        [HalfWidth]
        public Decimal TotalAmount { get; set; }
        [Hidden]
        [HalfWidth]
        public Decimal AdvanceAmount { get; set; }

        [Hidden]
        [HalfWidth]
        public Decimal BalanceAmount { get; set; }
        [Hidden]
        [HalfWidth]
        [InvoiceDueDetailsEditor]
        public List<InvoiceDueDetailsRow> InvoiceDues { get; set; }
        //[Category("KM Details")]
        //[OneThirdWidth]
        //public Decimal DriverKmFrom { get; set; }
        //[OneThirdWidth]
        //public Decimal DriverKmTo { get; set; }
        //[OneThirdWidth]
        //public Decimal GpskmFrom { get; set; }
        //[OneThirdWidth]
        //public Decimal GpskmTo { get; set; }
        [Category("Status")]
        [OneThirdWidth]
        public Int32 Status { get; set; }
        [OneThirdWidth]
        public Int32 StatusUser { get; set; }
        [Category("Payment Status")]
        [OneThirdWidth]
        public Int32 PaymentStatus { get; set; }

        public String Remarks { get; set; }

        [ReceiptEditor]
        [Visible(false)]
        public List<Accounts.Entities.ReceiptRow> Receipts { get; set; }


    }
}