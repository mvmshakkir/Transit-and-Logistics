
using OfficeOpenXml.FormulaParsing.Excel.Functions.DateTime;
using static MVC.Views.Master;
using System;

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
    using OfficeOpenXml.FormulaParsing.Excel.Functions.DateTime;
    using static MVC.Views.Master;

    [FormScript("Transactions.ConsignmentVehicleDetails")]
    [BasedOnRow(typeof(Entities.ConsignmentVehicleDetailsRow), CheckNames = true)]
    public class ConsignmentVehicleDetailsForm
    {
        [HalfWidth]
        public Int32 TypeOfVehicle { get; set; }
        [HalfWidth]
        public Int32 VehicleId { get; set; }
        [HalfWidth]
        public String Type { get; set; }
        [HalfWidth]
        public String VehicleNumber { get; set; }
        public List<Int32> VehicleSpecifications { get; set; }
        [Category("Own Driver Details")]
        [HalfWidth]
        public Int32 Driver { get; set; }
        [HalfWidth]
        public Int32 DriverAdvance { get; set; }
        [HalfWidth]
        public Int32 DriverAdvancePaymentType { get; set; }
        [HalfWidth]
        public Int32 DriverAdvanceAccount { get; set; }

        [Category("Outsourse Driver Details")]

        [HalfWidth]
        public String DriverName { get; set; }
        [HalfWidth]
        public String Number { get; set; }
        [HalfWidth]
        public String ResidentID { get; set; }
        [HalfWidth]
        public Int32 CountryId { get; set; }
        [Category("Trip Details")]
        [HalfWidth]
        public Int32 ShippingAreaFrom { get; set; }
        [HalfWidth]
        public Int32 ShippingAreaTo { get; set; }
        //[Category("Trip Date")]
        //[HalfWidth]
        //public DateTime StartDate { get; set; }
        //[HalfWidth]
        //public DateTime EndDate { get; set; }
        //[Category("Package Details")]
        //[OneThirdWidth]
        //public String TypeOfPkg { get; set; }
        //[OneThirdWidth]
        //public String TotalVolume { get; set; }
        //[OneThirdWidth]
        //public String TotalWeight { get; set; }
        //[OneThirdWidth]
        //public String TotalNoOfPkgs { get; set; }
        //[Category("KM Details")]
        //[OneThirdWidth]
        //public Decimal DriverKmFrom { get; set; }
        //[OneThirdWidth]
        //public Decimal DriverKmTo { get; set; }
        //[OneThirdWidth]
        //public Decimal GpskmFrom { get; set; }
        //[OneThirdWidth]
        //public Decimal GpskmTo { get; set; }
        [Hidden]

        //[Category("Charge Details")]

        [HalfWidth]
        public Int32 ChargeId { get; set; }
        [Hidden]
        [HalfWidth]
        public DateTime Date { get; set; }
        [Hidden]
        [HalfWidth]
        public String Description { get; set; }
        [Hidden]
        [HalfWidth]
        public Decimal Amount { get; set; }
        [Hidden]
        [HalfWidth]
        public Decimal Qty { get; set; }
        [Hidden]
        [HalfWidth]
        public Decimal? Total { get; set; }
        [Hidden]

        [HalfWidth]
        public Decimal? DisAmount { get; set; }
        [Hidden]
        [HalfWidth]
        public Decimal TaxableAmount { get; set; }
        [Hidden]
        [HalfWidth]
        public Decimal TaxPer { get; set; }
        [Hidden]
        [HalfWidth]
        public Decimal TaxAmount { get; set; }
        [Hidden]
        [HalfWidth]
        public Decimal TotalAmount { get; set; }
        [Hidden]
        [HalfWidth]
        public Int32 CurrencyId { get; set; }
        [Hidden]
        [HalfWidth]
        public Decimal ExchangeRate { get; set; }
        [Hidden]
        [HalfWidth]
        public Decimal TotalAmountInLocalCurrency { get; set; }
        [Hidden]
        //[Category("Other Charges")]
        [ConsignmentChargeEditor]
        public List<ConsignmentChargesRow> VehicleCharges { get; set; }
        [Category("Supplier Payment Details")]
        [HalfWidth]
        public Decimal SupplierAmount { get; set; }
        [HalfWidth]
        public Int32 SupplierId { get; set; }
        [HalfWidth]
        public Decimal SupplierAdvanceAmount { get; set; }
        [HalfWidth]
        public Int32 PaymentType { get; set; }
        [HalfWidth]
        public Int32 AccountId { get; set; }

        

    }
   
}
