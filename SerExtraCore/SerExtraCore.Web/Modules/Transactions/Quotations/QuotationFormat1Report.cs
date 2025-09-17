
namespace SerExtraCore.Transactions
{
    using SerExtraCore.Administration;
    using SerExtraCore.Administration.Entities;
    using SerExtraCore.Master.Entities;
    using SerExtraCore.Web.Modules;
    using Entities;
    using NumericWordsConversion;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    [Report("Transactions.QuotationFormat1")]
    [ReportDesign(MVC.Views.Transactions.Quotations.QuotationReport)]
    [RequiredPermission("Transactions:QuotationFormat1")]
   
    public class QuotationFormat1Report : IReport, ICustomizeHtmlToPdf
    {
        public Int32 OrderID { get; set; }
        public string type { get; set; }
        public object GetData()
        {
            var data = new QuotationFormatItems();
       
            CurrenciesRow currenciesRow = null;
            data.type = type;
            using (var connection = SqlConnections.NewFor<InvoiceRow>())
            {
                var o = QuotationsRow.Fields;

                data.quotations = connection.TryById<QuotationsRow>(this.OrderID, q => q
                     .SelectTableFields()
                     .Select(o.Date)
                      .Select(o.VehicleType)
                      .Select(o.CustomerCustomerName)
                      .Select(o.CustomerAddress)
                      .Select(o.TotalAmount)
                      .Select(o.Mobile)
                      .Select(o.ContactPerson)
                       .Select(o.FaxNo)
                        .Select(o.Email)
                        .Select(o.QuotNo)
                     .Select(o.Enquiryref)) ?? new QuotationsRow();

                var od = QuotationDetailsRow.Fields;
                data.Details = connection.List<QuotationDetailsRow>(q => q
                    .SelectTableFields()
                    .Select(od.Description)
                    .Select(od.Rate)
                    .Select(od.Unit)
                    .Select(od.TotalAmount)
                    .Select(od.CurrencyCurrencyCode)
                    .Select(od.ExchangeRate)
                     .Select(od.TaxPer)
                    .Select(od.TaxableAmount)
                    .Select(od.TaxAmount)
                    .Select(od.TotalAmountInLocalCurrency)
                    .Select(od.ChargeChartOrder)
                    .Where(od.QuotationId == this.OrderID).OrderBy( od.ChargeChartOrder));

                var vd = InvoiceVehicleDetailsRow.Fields;



                data.configuration = connection.ById<ConfigurationRow>(1);
                currenciesRow = connection.ById<CurrenciesRow>(data.configuration.DefaultCurrency ?? 0);


            }

            string crunit = "";
            string subcrunit = "";
            if (currenciesRow != null)
            {
                crunit = currenciesRow.CurrencyUnit;
                subcrunit = currenciesRow.SubCurrencyUnit;
            }
            if (crunit == "")
            {
                crunit = String.Empty;
            }
            CurrencyWordsConverter converter = new CurrencyWordsConverter(new CurrencyWordsConversionOptions()
            {
                Culture = Culture.International,
                OutputFormat = OutputFormat.English,
                CurrencyUnitSeparator = "and",
                CurrencyUnit = crunit,
                SubCurrencyUnit = subcrunit,
                EndOfWordsMarker = "",
                DecimalPlaces = 3
            });

            string words = converter.ToWords(data.quotations.TotalAmount ?? 0);
            if (crunit == null)
            {
                words = words.Replace("dollar", "");
            }
            //var vord= new AmountInWords().GetAmount(data.Invoice.BalanceAmount??0);
            data.amountinwords = words;

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
            //options.HeaderHtmlUrl = "~/Modules/Transactions/Invoice/InvoiceReportHeader.cshtml";
            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            // options.MarginsAll = "2cm";
        }
    }

    public class QuotationFormatItems: ServiceResponse
    {
       
        public QuotationsRow quotations { get; set; }
        public ConfigurationRow configuration { get; set; }
        public List<QuotationDetailsRow> Details { get; set; }
        public CustomersRow Customer { get; set; }
        public string amountinwords { get; set; }
        public string type { get; set; }



    }
  


}