using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Stimulsoft.Report;
using Stimulsoft.Report.Mvc;
using System.Data;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using System.Net.Http;
using Newtonsoft.Json;
using System.Text;
using SerExtraCore.Common;
using SerExtraCore.Web.Modules;

namespace SerExtraCore.Controllers
{
    public class DesignController : Controller
    {
        private IHostingEnvironment _env;
        public DesignController(IHostingEnvironment env)
        {
            _env = env;
        }
        [Route("Design/Reports")]
        [IgnoreAntiforgeryToken]
        // GET: Design
        public IActionResult Reports(string id = "Test")
        {
            return View();
        }
        [Route("Design/GetReport")]
        [IgnoreAntiforgeryToken]
        public IActionResult GetReport(string id="Test")
        {
            // Create the report object and load data from xml file
            var report = new StiReport();
            var reportrow = new DataHelper().GetReportDesign(id);
            report.LoadFromString(reportrow.Design);
            var dataset = new DataHelper().GetDataSets(reportrow.Id ?? 0);

            report.RegData("DataSource", dataset);

            report.Dictionary.Synchronize();
            return StiNetCoreDesigner.GetReportResult(this, report);
        }
        //public IActionResult GetReport(string id = "TwoSimpleLists")
        //{
        //    var report = new StiReport();
        //    ReportResponse reservationList = new ReportResponse();
        //    id = id.Replace("%2F", "/");

        //    string responseString = "";
        //    using (var client = new HttpClient())
        //    {
        //        var response = client.GetAsync(id).Result;

        //        if (response.IsSuccessStatusCode)
        //        {
        //            var responseContent = response.Content;

        //            // by calling .Result you are synchronously reading the result
        //            responseString = responseContent.ReadAsStringAsync().Result;
        //            reservationList = JsonConvert.DeserializeObject<ReportResponse>(responseString);

        //        }
        //    }

        //    report.LoadFromString(reservationList.ReportDesign);

        //    var json = System.IO.File.ReadAllText(System.IO.Path.Combine(_env.WebRootPath, "SampleLog.json"));
        //    report.LoadFromString(json);
        //    return StiNetCoreViewer.GetReportResult(this, report);

        //    // OR return report.SaveDocumentToString();
        //}
        [Route("Design/SaveReport")]
        [IgnoreAntiforgeryToken]
        public IActionResult SaveReport(string? id)
        {
            var report = StiNetCoreDesigner.GetReportObject(this);
            var json = report.SaveToJsonString();
            var reportrow = new DataHelper().GetReportDesign(id);
            reportrow.Design = json;
            var re= new DataHelper().UpdateReportDesign(reportrow);
            return StiNetCoreDesigner.SaveReportResult(this);
        }
        private void CreateJson()
        {
           // SalesModel salesModel = new SalesModel();
           // salesModel.CustomerName = "Rahoof";
           // salesModel.InvoiceNumber = "INV001";
           // salesModel.TrxDate = "10/12/2022";

           //var salesstring = Newtonsoft.Json.JsonConvert.SerializeObject(salesModel);
           // TextWriter writer;
           // using (writer = new StreamWriter(@"D:\SalesModel.json", append: false))
           // {
           //     writer.WriteLine(salesstring);
           // }
           // List<SalesDetailsModel> salesDetailsModels = new List<SalesDetailsModel>();
           // for(int i = 0; i < 5; i++)
           // {
           //     SalesDetailsModel salesDetailsModel = new SalesDetailsModel();
           //     salesDetailsModel.ProductCode = "1000" + i;
           //     salesDetailsModel.ProductName = "Product Test " + i;
           //     salesDetailsModel.Quantity = "1" + i;
           //     salesDetailsModel.UnitPrice = "10" + i;
           //     salesDetailsModel.Total = "100" + i;
           //     salesDetailsModels.Add(salesDetailsModel);
           // }
           // var salesdetailsstring = Newtonsoft.Json.JsonConvert.SerializeObject(salesDetailsModels);
           // TextWriter writer2;
           // using (writer2 = new StreamWriter(@"D:\SalesDetailsModel.json", append: false))
           // {
           //     writer2.WriteLine(salesdetailsstring);
           // }
        }
        [Route("Design/SaveReportAs")]
        [IgnoreAntiforgeryToken]
        public IActionResult SaveReportAs()
        {
            var report = StiNetCoreDesigner.GetReportObject(this);
            var json = report.SaveToJsonString();
            TextWriter writer;
            using (writer = new StreamWriter(@"D:\SampleLog.json", append: false))
            {
                writer.WriteLine(json);
            }
            return StiNetCoreDesigner.SaveReportResult(this);
        }
        [Route("Design/DesignerEvent")]
        [IgnoreAntiforgeryToken]
        public IActionResult DesignerEvent()
        {
            return StiNetCoreDesigner.DesignerEventResult(this);
        }
        [Route("Design/ExitDesigner")]
        [IgnoreAntiforgeryToken]
        public IActionResult ExitDesigner(string id)
        {
            return RedirectToAction("Reports", "View", new { id });
        }
        
    }
}