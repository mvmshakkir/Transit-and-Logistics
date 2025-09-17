
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
    using SerExtraCore.PDCPayments;

    [FormScript("Transactions.Consignment")]
    [BasedOnRow(typeof(Entities.ConsignmentRow), CheckNames = true)]
    public class ConsignmentForm
    {
        [Tab("Consignment")]
        [Category("Job Details")]
        [OneThirdWidth]
        public DateTime Date { get; set; }
        [Hidden]
        [OneThirdWidth]
        public DateTime EndDate { get; set; }
        [OneThirdWidth]
        public String JobNo { get; set; }
        [OneThirdWidth]
        public DateTime LoadedDate { get; set; }
        [Hidden]
        [HalfWidth]
        public String WayBillNo { get; set; }
		[Hidden]

		[HalfWidth]
        public String ClientJobNo { get; set; }
        [Hidden]
        [HalfWidth]
        public Int32 Payment { get; set; }

		[OneThirdWidth]
		public Int32 PaymentMode { get; set; }
        [Hidden]
        //[Category("Clearance")]
        [HalfWidth]
        public Int32 ClearanceId { get; set; }
        [Category("Consignment Details")]
        [HalfWidth]
        [DisplayName("Consigner")]
        public Int32 ShipperId { get; set; }
        [HalfWidth]
        public Int32 ConsigneeId { get; set; }
        [Hidden]
        [HalfWidth]
        public Int32 Billing { get; set; }
        //[Tab("Consignment Vehicle Details")]
        [Category("Consignment Vehicle Details")]
        [ConsignmentVehicleDetailsEditor]
        public List<ConsignmentVehicleDetailsRow> ConsignmentVehicleDetails { get; set; }
        //[HalfWidth]
        //public Int32 VehicleId { get; set; }
       
        //[HalfWidth]
        //public Int32 ShippingAreaFrom { get; set; }
        //[HalfWidth]
        //public Int32 ShippingAreaTo { get; set; }

        //[Category("Trip Details")]
        //[ConsignmentTripDatesEditor]
        //public List<Entities.ConsignmentTripDatesRow> ConsignmentTripDates { get; set; }

        //[Category("Other Details")]
        //[HalfWidth]
        //public String TypeOfPkg { get; set; }
        //[HalfWidth]
        //public String TotalVolume { get; set; }
        //[HalfWidth]
        //public String TotalWeight { get; set; }
        //[HalfWidth]
        //public String TotalNoOfPkgs { get; set; }
        [Category("Material Details")]
        [ConsignmentChargeEditor]
        public List<Entities.ConsignmentChargesRow> ChargeDetailList { get; set; }

        
        public Decimal TotalAmount { get; set; }

        

		[HalfWidth]
        public Int32 AdvancePaymentType { get; set; }
        [HalfWidth]
        public Int32 AdvanceAccountId { get; set; }
        [HalfWidth]
        [Category("Tax")]
        public Decimal Sgst {  get; set; }
        [HalfWidth]
        public Decimal SgstAmt {  get; set; }
        [HalfWidth]
        public decimal Cgst {  get; set; }

        [HalfWidth]
        public Decimal CgstAmt { get; set;}
        //[Category("Outside")]
        [HalfWidth]
        public decimal Igst {  get; set; }
        [HalfWidth]
        public decimal IgstAmt {  get; set; }
     
       

        [HalfWidth]
        public Decimal TotalTaxAmount { get; set; }

        [DisplayName("Total Amount")]
        [HalfWidth]
        public Decimal TotalFreightAmount { get; set; }
		[HalfWidth]
		public Int32 TaxPaidBy { get; set; }
		[HalfWidth]
		public Decimal AdvanceAmount { get; set; }
        [HalfWidth]
        public Decimal Extracharge { get; set; }

        [HalfWidth]
		public Decimal BalanceAmount { get; set; }
		[Hidden]
        [HalfWidth]
        [PdcPaymentDetailsEditor]

        public RowListField<PDCPayments.Entities.PdcPaymentDetailsRow> PdcPaymentDetails { get; set; }

        //using this to show as total amount
        //[DisplayName("Total Amount ")]
        
        

        [Category("Status")]
        [HalfWidth]
        public Int32 Status { get; set; }

        [Tab("Expences")]
        [Category("Expences")]
        [Accounts.ConsignmentExpenseEditor]
        public List<Accounts.Entities.PaymentRow> Expenses { get; set; }


        [ReceiptEditor]
        [Visible(false)]
        public List<Accounts.Entities.ReceiptRow> AdvanceReceipt { get; set; }
    }
}