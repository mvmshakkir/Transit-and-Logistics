using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SerExtraCore.Web.Reports
{
    
    public class ReportDataSets
    {

        public string Name { get; set; }
        public string Data { get; set; }

    }


    public class PaymentModel
    {
        public string TrxDate { get; set; }
        public string Remarks { get; set; }
        public int VNo { get; set; }
        public string Ledger { get; set; }
        public string CustomerName { get; set; }
        public string EmployeeName { get; set; }
        public string SupplierName { get; set; }
        public string VehicleNumber { get; set; }
        public string Consignment { get; set; }
        public decimal Amount { get; set; }
        public decimal TaxPer { get; set; }
        public decimal TaxAmount { get; set; }
        public decimal TotalAmount { get; set; }
        public string Account { get; set; }
        public string PaymentMethod { get; set; }

    }


    public class ReceiptModel
    {
        public string TrxDate { get; set; }
        public int VNo { get; set; }
        public string Ledger { get; set; }
        public string CustomerName { get; set; }
        public string EmployeeName { get; set; }
        public decimal Amount { get; set; }
        public decimal TaxPer { get; set; }
        public decimal TaxAmount { get; set; }
        public decimal TotalAmount { get; set; }
        public string PaymentMethod { get; set; }
        public string Account { get; set; }
        public string Remarks { get; set; }

    }

    public class SalesModel
    {
        public string CustomerName { get; set; }
        public string InvoiceNumber { get; set; }
        public string CustomerAddress { get; set; }
        public string BillingAddress { get; set; }
        public string TrxDate { get; set; }
        public string CustomerTaxRegNo { get; set; }
        public string CompanyName { get; set; }
        public string CompanyAddress { get; set; }
        public decimal NetAmount { get; set; }
    }
    public class SalesDetailModel
    {
        public string ProductCode { get; set; }
        public string ProductName { get; set; }
        public string Quantity { get; set; }
        public string InclusiveUnitPrice { get; set; }
        public string UnitPrice { get; set; }
        public string TotalAmount { get; set; }
        public string Discount_Perc { get; set; }
        public string DiscAmount { get; set; }
        public string TaxableAmount { get; set; }
        public string Tax_Perc { get; set; }
        public string TaxAmount { get; set; }
        public string CessPer { get; set; }
        public string CessAmount { get; set; }
        public string LineTotal { get; set; }
        
    }
    public class SalesReport
    {

    }

}
