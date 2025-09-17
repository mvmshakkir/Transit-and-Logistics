
namespace SerExtraCore.Accounts.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRow = Entities.ContraRow;
    using SerExtraCore.Web.Modules;
    using SerExtraCore.Transactions.Entities;
    using System.Collections.Generic;
    using System.Linq;
    using SerExtraCore.Master.Entities;
    using SerExtraCore.Administration.Entities;
    using SerExtraCore.Transactions;

    using SerExtraCore.Common;
    using Microsoft.AspNetCore.Hosting;
    using Stimulsoft.Report;
    using System.Text;
    using Stimulsoft.Base;
    using Newtonsoft.Json;
    using System.IO;
    using System;

    [Route("Services/Common/[action]")]
    [ConnectionKey(typeof(MyRow))]
    public class CommonController : ServiceEndpoint
    {
       

        [HttpPost]
        public VoucherNoResponse GetTrxNo(IDbConnection connection, VoucherNoRequest request)
        {
            return new DataHelper().GetVoucherNo(connection, request.vouchertype);
        }
        [HttpPost]
        public VoucherNoResponse GetVoucherNo(IDbConnection connection, VoucherNoRequest request)
        {
            return new DataHelper().GeRANDPNo(connection, request.vouchertype);
        }
        [HttpPost]
        public InvoiceBalanceResponse GetInvoiceBalance(IDbConnection connection, InvoiceBalanceRequest request)
        {
            return new DataHelper().InvoiceBalance(connection, request);
        }
        [HttpPost]
        public InvoiceBalanceResponse GetInvoiceVehicleDetailsBalance(IDbConnection connection, InvoiceVehicleDetailBalanceRequest request)
        {
            return new DataHelper().InvoiceVehicleDetailsBalance(connection, request);
        }
        [HttpPost]
        public InvoiceBalanceResponse GetInvoiceVehicleChargesBalance(IDbConnection connection, InvoiceVehicleChargesBalanceRequest request)
        {
            return new DataHelper().InvoiceVehicleChargesBalance(connection, request);
        }
        public bool GetUserHierarchy(IDbConnection connection, UserHierarchyRequest request)
        {
            return new DataHelper().UserHirarchy(connection, request);
        }

        public Administration.Entities.ConfigurationRow GetConfigration(IDbConnection connection)
        {
           return connection.ById<Administration.Entities.ConfigurationRow>(1);
        }
        public List<Master.Entities.VehiclesRow> GetNotUseVehicles(IDbConnection connection)
        {
            return new DataHelper().VehiclesNotInUse(connection);
        }
        public ConsignmentVehicleDetailsRow GetConsigmentByVehicle(IDbConnection connection,ConsignmentByVehicle request)
        {
            return new DataHelper().ConsigmentByVehicle(connection, request);
        }
        public List<int> GetVehicleSpecification(IDbConnection connection, ConsignmentByVehicle request)
        {
           var speclist= connection.List<Master.Entities.VehicleSpecificationsRow>(new Criteria("VehicleId="+request.vehicleId+""));
          var l=  speclist.Select(i => i.SpecificationId??0).ToList();
            return l;
        }

        public List<int> GetConsigmentVehicleSpecification(IDbConnection connection, ConsignmentByVehicle request)
        {
            var speclist = connection.List<ConsignmentVehicleSpecificationsRow>(new Criteria("ConsignmentVehicleDetailId=" + request.vehicleId + ""));
            var l = speclist.Select(i => i.SpecificationId ?? 0).ToList();
            return l;
        }

        public SupplierBalanceResponse GetSupplierBalance(IDbConnection connection, SupplierBalance request)
        {
            return new DataHelper().GetSupplierBalance(connection,request);
        }
        public CustomersRow GetCustomer(IDbConnection connection, SupplierBalance supplierBalance)
        {
            return connection.ById<CustomersRow>(supplierBalance.SupplierId);
        }
        public EmployeeMasterRow GetEmployee(IDbConnection connection, SupplierBalance supplierBalance)
        {
            return connection.ById<EmployeeMasterRow>(supplierBalance.SupplierId);
        }

        private IHostingEnvironment _env;

        
        public CommonController(IHostingEnvironment env)
        {
            _env = env;
        }
        public RefNoTrackRequest GetBalnkReport(IDbConnection connection)
        {

            RefNoTrackRequest refNoTrackRequest = new RefNoTrackRequest();
            var json = System.IO.File.ReadAllText(System.IO.Path.Combine(_env.WebRootPath, "BlanReport.json"));
            refNoTrackRequest.RefNo = json;
            return refNoTrackRequest;
        }
        public ReportRequest ShowReport(IDbConnection connection, ReportRequest reportRequest)
        {

            //var dataset = new List<SerExtraCore.Web.Reports.ReportDataSets>();
            //foreach (var item in reportRequest.reportDesignsRow.ReportDataSets)
            //{
            //    foreach (var para in reportRequest.reportDesignsRow.ReportParameters)
            //    {
            //        var par = "@" + para.ParameterName;
            //        var repl = "";
            //        if (para.DataType == ParameterDataTypes.Value2 || para.DataType == ParameterDataTypes.Value3)
            //        {
            //            repl = "'" + para.DefaultValue + "'";
            //        }

            //        if (item.SqlQuery.Contains(par))
            //        {


            //            item.SqlQuery = item.SqlQuery.Replace(par, repl);

            //        }
            //    }
            //    var tables = (from row in connection.Query(item.SqlQuery)
            //                  select (IDictionary<string, object>)row).ToList();
            //    var json = JsonConvert.SerializeObject(tables, Formatting.Indented);
            //    SerExtraCore.Web.Reports.ReportDataSets reportDataSets2 = new SerExtraCore.Web.Reports.ReportDataSets();
            //    reportDataSets2.Name = item.DataSetName;
            //    reportDataSets2.Data = json;
            //    dataset.Add(reportDataSets2);
            //}



            //create report
            var report = new StiReport();

            report.LoadFromString(reportRequest.reportDesignsRow.Design);

            report.Dictionary.Databases.Clear();

            //set data



            var dataset = new DataHelper().GetReportDataSets(connection, reportRequest.reportDesignsRow);
            foreach (var item in dataset)
            {
                byte[] databytes = Encoding.UTF8.GetBytes(item.Data);
                var json = StiJsonConnector.Get();
                var data = json.GetDataSet(new StiJsonOptions(databytes));
                report.RegData(item.Name, data);
            }



            //end report


            var datajson = JsonConvert.SerializeObject(dataset);
            var reportjson = report.SaveToJsonString();
            reportRequest = SaveFile(datajson, reportjson, reportRequest);
            //ReportDataDesign reportDataDesign = new ReportDataDesign();
            //reportDataDesign.Data = datajson;
            //reportDataDesign.Design = reportjson;

            //var jsonforreportviw = JsonConvert.SerializeObject(reportDataDesign);

            //TextWriter writer2;
            //var name = RandomString(10) + ".json";
            //reportRequest.DataFileName = name;
            //using (writer2 = new StreamWriter(System.IO.Path.Combine(_env.WebRootPath+ "\\ReportDatas", name), append: false))
            //{
            //    writer2.WriteLine(jsonforreportviw);
            //}
            return reportRequest;



        }

        public ReportRequest SaveFile(string datajson, string reportjson, ReportRequest reportRequest)
        {
            ReportDataDesign reportDataDesign = new ReportDataDesign();
            reportDataDesign.Data = datajson;
            reportDataDesign.Design = reportjson;

            var jsonforreportviw = JsonConvert.SerializeObject(reportDataDesign);

            TextWriter writer2;
            var name = RandomString(10) + ".json";
            reportRequest.DataFileName = name;
            using (writer2 = new StreamWriter(System.IO.Path.Combine(_env.WebRootPath + "\\ReportDatas", name), append: false))
            {
                writer2.WriteLine(jsonforreportviw);
            }
            return reportRequest;
        }
        private static Random random = new Random();
        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        public ReportRequest GetReportRequest(IDbConnection connection, ReportRequest reportRequest)
        {
            RefNoTrackRequest refNoTrackRequest = new RefNoTrackRequest();
            var des = new DataHelper().GetReportDesign(reportRequest.ReportId, connection);


            reportRequest.reportDesignsRow = des;

            return reportRequest;
        }
        public ListResponse<CustomLookupResponse> GetCustomLookup(IDbConnection connection, CustomLookupRequest request)
        {
            var lookuplist = new DataHelper().GetCustomLookup(request, connection);

            ListResponse<CustomLookupResponse> listResponse = new ListResponse<CustomLookupResponse>();
            listResponse.Entities = lookuplist;

            return listResponse;
        }
        public OrderDetailReportData GetInvoiceData( InvoicePrintRequest invoicePrintRequest)
        {
            var data = new OrderDetailReportData();
           
            using (var connection = SqlConnections.NewFor<InvoiceRow>())
            {
                var o = InvoiceRow.Fields;

                data.Invoice = connection.TryById<InvoiceRow>(invoicePrintRequest.invoiceid, q => q
                     .SelectTableFields()
                     .Select(o.InvoiceDate)
                      .Select(o.ConsignmentConsignmentDate)
                      .Select(o.Billing)
                      .Select(o.ClientJobNo)
                      .Select(o.TotalAmount)
                      .Select(o.AdvanceAmount)
                      .Select(o.BalanceAmount)
                       .Select(o.ConsignmentDate)
                     .Select(o.InvoiceNo)) ?? new InvoiceRow();

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
                    .Where(od.InvoiceId == invoicePrintRequest.invoiceid).OrderBy(od.Date, od.ChargeChartOrder));

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
                   .Where(vd.InvoiceId == invoicePrintRequest.invoiceid).OrderBy(vd.Date));

                foreach (var item in vehdetail)
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
                     .Where(od.InvoiceChargeVehicleDetailId == (item.Id ?? 0)).OrderBy(od.Date, od.ChargeChartOrder));
                    data.Details.AddRange(items);

                }

                data.configuration = connection.ById<ConfigurationRow>(1);


                var group = vehdetail.GroupBy(i => new { i.Date, i.ShippingAreaFrom, i.ShippingAreaTo, i.Amount, i.ExchangeRate });




                foreach (var item in group.ToList())
                {

                    bool groupadd = true;
                    string desc = item.Max(i => i.Description);
                    desc = desc.Replace("1x", "" + (item.Sum(i => i.Qty) ?? 0).ToString("N0") + "x");
                    string vehicles = "";
                    int chorder = 0;
                    foreach (var i in item)
                    {
                        vehicles = vehicles + i.VehicleNumber + ",";
                        var k = data.Details.Where(f => f.InvoiceChargeVehicleDetailId == i.Id).OrderBy(i => i.ChargeChartOrder == null).ThenBy(i => i.ChargeChartOrder).ToList();

                        if (k.Count > 0)
                        {
                            data.Details.Add(new InvoiceChargesRow { Description = i.Description, Qty = i.Qty, TaxPer = i.TaxPer, TaxAmount = i.TaxAmount, TaxableAmount = i.TaxableAmount, Amount = i.Amount, TotalAmount = i.TotalAmount, CurrencyId = i.CurrencyId, ExchangeRate = i.ExchangeRate, TotalAmountInLocalCurrency = i.TotalAmountInLocalCurrency, ChargeChartOrder = chorder, CurrencyCurrencyCode = i.CurrencyCurrencyCode, Date = i.Date, InvoiceVehicleNumber = i.VehicleNumber, DisAmount = i.DisAmount });

                            groupadd = false;
                            chorder = chorder + 1;
                            foreach (var m in k)
                            {
                                data.Details.Find(i => i.Id == m.Id).ChargeChartOrder = chorder;
                                if (data.Details.Find(i => i.Id == m.Id).Date == null)
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

                    }
                    if (groupadd)
                    {

                        data.Details.Add(new InvoiceChargesRow { Description = desc, Qty = item.Sum(i => i.Qty), TaxPer = item.Max(i => i.TaxPer), TaxAmount = item.Sum(i => i.TaxAmount), TaxableAmount = item.Sum(i => i.TaxableAmount), Amount = item.Max(i => i.Amount), TotalAmount = item.Sum(i => i.TotalAmount), CurrencyId = item.Max(i => i.CurrencyId), ExchangeRate = item.Max(i => i.ExchangeRate), TotalAmountInLocalCurrency = item.Sum(i => i.TotalAmountInLocalCurrency), ChargeChartOrder = 0, CurrencyCurrencyCode = item.Max(i => i.CurrencyCurrencyCode), Date = item.Max(i => i.Date), InvoiceVehicleNumber = vehicles, DisAmount = item.Sum(i => i.DisAmount) });
                    }

                }

                //data.Details = data.Details.OrderBy(x => x.Date).ThenByDescending(x => x.ChargeChartOrder).ToList();
                data.Details = data.Details.OrderBy(x => x.Date == null).ThenBy(x => x.Date).ThenBy(x => x.ChargeChartOrder == null).ThenBy(x => x.ChargeChartOrder).ToList();
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
            }

            decimal total = data.Details.Sum(i => i.TotalAmount) ?? 0;
            data.totalamount = total;
            var vord = new AmountInWords().GetAmount(data.Invoice.BalanceAmount ?? 0);
            data.amountinwords = vord;
            return data;
        }
    }
}
