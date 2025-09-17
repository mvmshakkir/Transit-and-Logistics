
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

    [Report("Transactions.DeliveryPrint")]
    [ReportDesign(MVC.Views.Transactions.DeliveryServices.DeliveryPrint)]
    //[ReportDesign(MVC.Views.Transactions.Invoice.InvoiceSSAALMultiplePage)]
   // [ReportDesign(MVC.Views.Transactions.Invoice.InvoiceReportMJS)]
    [RequiredPermission("Transactions:DeliveryServices")]
    public class DeliveryPrint : IReport, ICustomizeHtmlToPdf
    {
        public Int32 OrderID { get; set; }

        public object GetData()
        {
            var data = new DeliveryPrintModel();
            CurrenciesRow currenciesRow = null;
            using (var connection = SqlConnections.NewFor<InvoiceRow>())
            {

                var o = DeliveryServicesRow.Fields;
                data.Delivery = connection.TryById<DeliveryServicesRow>(this.OrderID, q => q
                   .SelectTableFields()
                   .Select(o.ConsigneeCustomerName)
                    .Select(o.ConsignorCustomerName)
                    .Select(o.ShippingAreaFromAreaName)
                    .Select(o.ShippingAreaToAreaName)
                    .Select(o.ConsignorTelephone)
                    .Select(o.ConsigneeTelephone)) ?? new DeliveryServicesRow();


                var od = DeliveryServiceDetailsRow.Fields;
                data.Details = connection.List<DeliveryServiceDetailsRow>(q => q
                    .SelectTableFields()
                    .Where(od.DeliveryServiceId == this.OrderID));

                var configuration = connection.ById<ConfigurationRow>(1);
                if (configuration != null)
                {
                    currenciesRow = connection.ById<CurrenciesRow>(configuration.DefaultCurrency ?? 0);
                }

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

            string words = converter.ToWords(data.Delivery.TotalAmount ?? 0);
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
            options.MarginTop = "0";
            options.MarginBottom = "0";
        }
    }

    public class DeliveryPrintModel:ServiceResponse
    {
        public DeliveryServicesRow Delivery { get; set; }
       
        public List<DeliveryServiceDetailsRow> Details { get; set; }
        public string amountinwords { get; set; }


    }
   


}