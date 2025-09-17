
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

    [Report("Transactions.Invoice")]
    [ReportDesign(MVC.Views.Transactions.Invoice.InvoiceReportGolden)]
    //[ReportDesign(MVC.Views.Transactions.Invoice.InvoiceSSAALMultiplePage)]
    // [ReportDesign(MVC.Views.Transactions.Invoice.InvoiceReportMJS)]
    [RequiredPermission("Transactions:Invoice")]
    public class ConsignmentReport : IReport, ICustomizeHtmlToPdf
    {
        public Int32 OrderID { get; set; }

        public object GetData()
        {
            var data = new OrderDetailReportData();
            data.EntityId = OrderID;
            CurrenciesRow currenciesRow = null;
            using (var connection = SqlConnections.NewFor<InvoiceRow>())
            {
                var o = InvoiceRow.Fields;

                data.Invoice = connection.TryById<InvoiceRow>(this.OrderID, q => q
                     .SelectTableFields()
                     .Select(o.InvoiceDate)
                      .Select(o.ConsignmentConsignmentDate)
                      .Select(o.Billing)
                      .Select(o.ClientJobNo)
                      .Select(o.TotalAmount)
                      .Select(o.AdvanceAmount)
                      .Select(o.BalanceAmount)
                       .Select(o.ConsignmentDate)
                        .Select(o.Remarks)
                     .Select(o.InvoiceNo)) ?? new InvoiceRow();

                if (data.Invoice.ClearanceId > 0)
                {
                    var cl = ClearanceRow.Fields;
                    var k=  connection.TryById<ClearanceRow>(data.Invoice.ClearanceId, q => q
                     .SelectTableFields()
                     .Select(cl.PortLoadingPortName)
                      .Select(cl.PortDischargePortName)
                      ) ?? new ClearanceRow();
                    data.clearanceRow =k;
                }
                else
                {
                    data.clearanceRow = new ClearanceRow();
                }

                var od = InvoiceChargesRow.Fields;
                data.Details = connection.List<InvoiceChargesRow>(q => q
                    .SelectTableFields()
                    .Select(od.Description)
                    .Select(od.Amount)
                    .Select(od.Date)
                    .Select(od.InvoiceConsignmentDate)
                    .Select(od.TotalAmount)
                    .Select(od.CurrencyCurrencyCode)
                    .Select(od.ExchangeRate)
                     .Select(od.TaxPer)
                    .Select(od.TaxableAmount)
                    .Select(od.TaxAmount)
                    .Select(od.DisAmount)
                    .Select(od.TotalAmountInLocalCurrency)
                    .Select(od.ChargeChartOrder)
                    .Select(od.InvoiceVehicleNumber)
                    .Select(od.InvoiceTotalNoOfPkgs)
                    .Where(od.InvoiceId == this.OrderID).OrderBy(od.Date,od.ChargeChartOrder));

                var vd = InvoiceVehicleDetailsRow.Fields; 

                var vehdetail = connection.List<InvoiceVehicleDetailsRow>(q => q
                   .SelectTableFields()
                   .Select(vd.Id)
                   .Select(vd.ShippingAreaFrom)
                    .Select(vd.ShippingAreaTo)
                   .Select(vd.Amount)
                   .Select(vd.VehicleNumber)
                   .Select(vd.Description)
                   .Select(vd.Date)
                   .Select(vd.Qty)
                    .Select(vd.TaxPer)
                    .Select(vd.TaxableAmount)
                    .Select(vd.TaxAmount)
                    .Select(vd.DisAmount)
                   .Select(vd.TotalAmount)
                   .Select(vd.ExchangeRate)
                   .Select(vd.CurrencyId)
                   .Select(vd.CurrencyCurrencyCode)
                   .Select(vd.TotalAmountInLocalCurrency)
                   .Select(vd.InvoiceTotalNoOfPkgs)
                   .Where(vd.InvoiceId == this.OrderID).OrderBy(vd.Date));

                foreach(var item in vehdetail)
                {
                   var items = connection.List<InvoiceChargesRow>(q => q
                    .SelectTableFields()
                    .Select(od.Description)
                    .Select(od.Amount)
                    .Select(od.Date)
                    .Select(od.InvoiceConsignmentDate)
                    .Select(od.TotalAmount)
                    .Select(od.TaxPer)
                    .Select(od.TaxableAmount)
                    .Select(od.Qty)
                    .Select(od.TaxAmount)
                    .Select(od.DisAmount)
                    .Select(od.CurrencyCurrencyCode)
                    .Select(od.ExchangeRate)
                    .Select(od.TotalAmountInLocalCurrency)
                    .Select(od.ChargeChartOrder)
                    .Select(od.InvoiceVehicleNumber)
                     .Select(od.InvoiceTotalNoOfPkgs)
                    .Where(od.InvoiceChargeVehicleDetailId == (item.Id??0)).OrderBy(od.Date, od.ChargeChartOrder));
                    data.Details.AddRange(items);

                }

              
                    data.configuration = connection.ById<ConfigurationRow>(1);
                    if (data.configuration != null)
                    {
                        currenciesRow = connection.ById<CurrenciesRow>(data.configuration.DefaultCurrency ?? 0);
                    }
                
                

                var group= vehdetail.GroupBy(i => new { i.Date, i.ShippingAreaFrom, i.ShippingAreaTo, i.Amount, i.ExchangeRate, i.Description });

                int chorder = 0;


                foreach (var item in group.ToList())
                {

                    bool groupadd = true;
                    string desc = item.Max(i => i.Description);
                    if (desc != null)
                    {
                        desc = desc.Replace("1x", "" + (item.Sum(i => i.Qty) ?? 0).ToString("N0") + "x");

                    }
                    
                    string vehicles = "";
                   
                    bool added = false;
                    List<InvoiceVehicleDetailsRow> notaddedlist = new List<InvoiceVehicleDetailsRow>();
                    foreach (var i in item)
                    {
                        vehicles = vehicles + i.VehicleNumber+",";
                        var k=data.Details.Where(f => f.InvoiceChargeVehicleDetailId == i.Id).OrderBy(i=>i.ChargeChartOrder==null).ThenBy(i=>i.ChargeChartOrder).ToList();
                        
                        if (k.Count > 0)
                        {
                            data.Details.Add(new InvoiceChargesRow { Description = i.Description, Qty = i.Qty, TaxPer = i.TaxPer, TaxAmount = i.TaxAmount, TaxableAmount = i.TaxableAmount, Amount =i.Amount, TotalAmount = i.TotalAmount, CurrencyId = i.CurrencyId, ExchangeRate =i.ExchangeRate, TotalAmountInLocalCurrency = i.TotalAmountInLocalCurrency, ChargeChartOrder = chorder, CurrencyCurrencyCode = i.CurrencyCurrencyCode, Date = i.Date, InvoiceVehicleNumber = i.VehicleNumber, DisAmount = i.DisAmount });
                            added = true;
                            groupadd = false;
                            chorder = chorder + 1;
                            foreach (var m in k)
                            {
                                data.Details.Find(i => i.Id == m.Id).ChargeChartOrder = chorder;
                                if(data.Details.Find(i => i.Id == m.Id).Date == null)
                                {
                                    data.Details.Find(i => i.Id == m.Id).Date = i.Date;
                                    data.Details.Find(i => i.Id == m.Id).InvoiceTotalNoOfPkgs = "N";
                                }
                                else
                                {
                                    data.Details.Find(i => i.Id == m.Id).InvoiceTotalNoOfPkgs = "";
                                }
                                chorder = chorder + 1;
                            }
                            

                            
                        }
                        else
                        {
                            notaddedlist.Add(i);
                        }
                        

                    }
                    if (notaddedlist.Count>0)
                    {
                        desc = notaddedlist.Max(i => i.Description);
                        if (desc != null)
                        {
                            desc = desc.Replace("1x", "" + (notaddedlist.Sum(i => i.Qty) ?? 0).ToString("N0") + "x");
                        }
                        data.Details.Add(new InvoiceChargesRow { Description = desc, Qty = notaddedlist.Sum(i => i.Qty), TaxPer = notaddedlist.Max(i => i.TaxPer), TaxAmount = notaddedlist.Sum(i => i.TaxAmount), TaxableAmount = notaddedlist.Sum(i => i.TaxableAmount), Amount = notaddedlist.Max(i => i.Amount), TotalAmount = notaddedlist.Sum(i => i.TotalAmount), CurrencyId = notaddedlist.Max(i => i.CurrencyId), ExchangeRate = notaddedlist.Max(i => i.ExchangeRate), TotalAmountInLocalCurrency = notaddedlist.Sum(i => i.TotalAmountInLocalCurrency), ChargeChartOrder = 0, CurrencyCurrencyCode = notaddedlist.Max(i => i.CurrencyCurrencyCode), Date = notaddedlist.Max(i => i.Date), InvoiceVehicleNumber = vehicles, DisAmount = notaddedlist.Sum(i => i.DisAmount) });
                        added = true;
                    }
                    

                }
                
                //data.Details = data.Details.OrderBy(x => x.Date).ThenByDescending(x => x.ChargeChartOrder).ToList();
                data.Details = data.Details.OrderBy(x=>x.Date==null).ThenBy(x => x.Date).ThenBy(x => x.ChargeChartOrder==null).ThenBy(x => x.ChargeChartOrder).ToList();
                var c = CustomersRow.Fields;
                data.Customer = connection.ById<CustomersRow>(data.Invoice.Billing)
                    ?? new CustomersRow();
                int linecount = 0;
                foreach (var i in data.Details)
                {
                    linecount = linecount + 2;
                    if (i.InvoiceVehicleNumber != null)
                    {
                        if (i.InvoiceVehicleNumber != "")
                        {
                            foreach (var item in i.InvoiceVehicleNumber.Split(",").ToList())
                            {
                                if (item != "")
                                {

                                    linecount = linecount + 1;
                                }
                            }
                        }
                    }
                }
                int slno = 1;
                for (int i = 0; i < data.Details.Count; i++)
                {
                    if (data.Details[i].InvoiceChargeVehicleDetailId == null)
                    {
                        data.Details[i].InvoiceJobNo = slno.ToString();
                        slno++;
                    }
                    else
                    {
                        data.Details[i].InvoiceJobNo = "";
                    }
                    if (data.Details[i].InvoiceTotalNoOfPkgs == null)
                    {
                        data.Details[i].InvoiceTotalNoOfPkgs = "";
                    }
                }
                data.linecount = linecount;
                var user = connection.ById<UserRow>(Authorization.UserId);
                data.User = user.Username;
            }
            data.PagingList = new List<PagedItems>();
            int rowcount = 0;
            PagedItems pagedItems = new PagedItems();
            List<InvoiceChargesRow> det = new List<InvoiceChargesRow>();
            int count = 0;
            int pagenumber = 0;
            int rowsperpage = 17;
            if (data.Invoice.AdvanceAmount > 0)
            {
                rowsperpage = 15;
            }
            foreach (var dataitem in data.Details)
            {
                count++;
                int thisrowcount = 0;
                var text = dataitem.Description;
                string[] lines= new string[] {};
                if (text != null)
                {
                     lines = text.Split(
                    new[] { "\r\n", "\r", "\n" },
                    StringSplitOptions.None);
                }
                foreach(var li in lines)
                {
                    int lin = li.Length / 43;
                    if ((li.Length % 43) > 0)
                    {
                        lin = lin + 1;
                    }
                    thisrowcount = thisrowcount+ lin;
                }
                if (lines.Count() == 0)
                {
                    thisrowcount++;
                }
                rowcount = rowcount + thisrowcount;
                if (rowcount > rowsperpage)
                {
                    pagedItems.pageDetails = det;
                    pagedItems.rowcount= rowcount - thisrowcount;
                    pagenumber++;
                    pagedItems.pagenumber = pagenumber;
                    data.PagingList.Add(pagedItems);
                    pagedItems = new PagedItems();
                    det = new List<InvoiceChargesRow>();
                    rowcount = thisrowcount;


                }
                
                det.Add(dataitem);
                if (data.Details.Count == count)
                {
                    pagedItems.pageDetails = det;
                    pagedItems.rowcount = rowcount;
                    pagenumber++;
                    pagedItems.pagenumber = pagenumber;
                    data.PagingList.Add(pagedItems);
                }

            }
           
            decimal total = data.Details.Sum(i => i.TotalAmount)??0;
            data.totalamount = total;
            //NumericWordsConverter converter = new NumericWordsConverter();
            //string words = converter.ToWords(data.Invoice.BalanceAmount ?? 0);
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
                DecimalPlaces= 3
            });
            
            string words = converter.ToWords(data.Invoice.BalanceAmount ?? 0);
            if (crunit == null)
            {
                words=words.Replace("dollar", "");
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

    public class OrderDetailReportData:ServiceResponse
    {
        public int EntityId { get; set; }
        public InvoiceRow Invoice { get; set; }
        public ConfigurationRow configuration { get; set; }
        public List<InvoiceChargesRow> Details { get; set; }
        public CustomersRow Customer { get; set; }
        public decimal totalamount { get; set; }
        public string amountinwords { get; set; }
        public int linecount { get; set; }
        public List<PagedItems> PagingList { get; set; }
        public DateTime PrintDate { get; set; }
        public string User { get; set; }

        public ClearanceRow clearanceRow { get; set; }
    }
    public class PagedItems
    {
        public List<InvoiceChargesRow> pageDetails { get; set; }
        public int rowcount { get; set; }
        public int pagenumber { get; set; }
    }


}