using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Stimulsoft.Report.Mvc;
using System.Data;
using Stimulsoft.Report;
using System.IO;
using Stimulsoft.Report.Components;
using Stimulsoft.Base;
using Microsoft.AspNetCore.Hosting;
using System.Net.Http;
using Newtonsoft.Json;
using SerExtraCore.Common;
using SerExtraCore.Web.Modules;
using System.Text;
using SerExtraCore.Web.Reports;
using SerExtraCore.Reports.Entities;
using SerExtraCore.Accounts.Endpoints;
using Serenity.Data;

namespace SerExtraCore.Controllers
{
   
    public class ViewController : Controller
    {
        private IHostingEnvironment _env;
        public ViewController(IHostingEnvironment env)
        {
            _env = env;
        }
        [Route("View/Index")]
        [IgnoreAntiforgeryToken]
        // GET: View
        public IActionResult Index(string? id, string? filename)
        {
            ViewBag.url = id;
            return View();
        }
        [Route("View/GetReport")]
        [IgnoreAntiforgeryToken]
        public async Task<IActionResult> GetReport(string? id, string? filename)
        {
            
            var report = new StiReport();
            if(System.IO.File.Exists(System.IO.Path.Combine(_env.WebRootPath + "\\ReportDatas", filename)))
            {
                var reportjson = System.IO.File.ReadAllText(System.IO.Path.Combine(_env.WebRootPath + "\\ReportDatas", filename));
                var jsonforreportviw = JsonConvert.DeserializeObject<ReportDataDesign>(reportjson);


                report.LoadFromString(jsonforreportviw.Design);

                var dataset = JsonConvert.DeserializeObject<List<ReportDataSets>>(jsonforreportviw.Data);
                DataSet ds = new DataSet();
                foreach (var item in dataset)
                {
                    byte[] databytes = Encoding.UTF8.GetBytes(item.Data);
                    var json = StiJsonConnector.Get();
                    var data = json.GetDataSet(new StiJsonOptions(databytes));
                    if (data.Tables.Count > 0)
                    {
                        var dt = data.Tables[0];
                        var dtCopy = dt.Copy();
                        dtCopy.TableName = item.Name;


                        ds.Tables.Add(dtCopy);
                    }


                }
                report.RegData("DataSource", ds);
            
                System.IO.File.Delete(System.IO.Path.Combine(_env.WebRootPath + "\\ReportDatas", filename));
            }
            
            return StiNetCoreViewer.GetReportResult(this, report);



            //var reportrow=new DataHelper().GetReportDesign(id);
            //var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>();
            //reportrow = new CommonController(_env).GetReportRequest(connection, new ReportRequest { ReportId = reportrow.Id??0 }).reportDesignsRow;
            //report.LoadFromString(reportrow.Design);

            //report.Dictionary.Databases.Clear();

            ////set data
            //string jsondata = (string)TempData[id];
            //List<ReportParametersRow> datas = new List<ReportParametersRow>();
            //if (jsondata != null)
            //{
            //    datas = JsonConvert.DeserializeObject<List<ReportParametersRow>>(jsondata);


            //    reportrow.ReportParameters = datas;

            //    var datasets = new DataHelper().GetReportDataSets(null, reportrow);
            //    foreach (var item in datasets)
            //    {
            //        byte[] databytes = Encoding.UTF8.GetBytes(item.Data);
            //        var json = StiJsonConnector.Get();
            //        var data = json.GetDataSet(new StiJsonOptions(databytes));
            //        report.RegData(item.Name, data);
            //    }
            //}
            //return StiNetCoreViewer.GetReportResult(this, report);

            // OR return report.SaveDocumentToString();
        }
        //[Route("View/GetReport")]
        //public IActionResult GetReport(string id = "TwoSimpleLists")
        //{
        //    id = ViewBag.url;
        //    // Create the report object
        //    var report = new StiReport();
        //    var json = System.IO.File.ReadAllText(System.IO.Path.Combine(_env.WebRootPath, "SampleLog.json"));
        //    report.LoadFromString(json);
        //    // report.Load(StiNetCoreHelper.MapPath(this, "/Reports/" + id + ".mrt"));
        //    //using (StreamReader r = new StreamReader(@"D:\SampleLog.json"))
        //    //{
        //    //    string json = r.ReadToEnd();
        //    //    report.LoadFromString(json);
        //    //}


        //    //set data
        //    //var Dset = StiJsonToDataSetConverter.GetDataSetFromFile(@"D:\SalesDetailsModelTest.Json");
        //    //report.RegData("SalesDetailsModel", "SalesDetailsModel", Dset);
        //    //report.Dictionary.Synchronize();
        //    var m=report.DataSources;


        //    return StiNetCoreViewer.GetReportResult(this, report);
        //}

        [Route("View/ViewerEvent")]
        [IgnoreAntiforgeryToken]
        public IActionResult ViewerEvent()
        {
            var k= StiNetCoreViewer.ViewerEventResult(this);
            var m = k.ToString();
           
            return k;
        }
        [IgnoreAntiforgeryToken]
        [Route("View/Design")]
        public IActionResult Design(string? id)
        {

            return RedirectToAction("OpenDesign", "View", new { id });
        }
        [IgnoreAntiforgeryToken]
        [Route("View/OpenDesign")]
        public IActionResult OpenDesign(string? id)
        {
           RefNoTrackRequest refNoTrackRequest = new RefNoTrackRequest();
            refNoTrackRequest.RefNo = id;
            return View(refNoTrackRequest);
        }
    }
}