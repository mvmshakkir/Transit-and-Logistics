
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Data;
    using SerExtraCore.Transactions.Entities;

    using MVC;
    using System.Linq;
    using SerExtraCore.Administration.Entities;
    using SerExtraCore.Web.Modules;
    using SerExtraCore.Common;
    using Microsoft.AspNetCore.Hosting;
    using Newtonsoft.Json;

    using Microsoft.AspNetCore.Routing;
    using Stimulsoft.Report;
    using Microsoft.AspNetCore.Http;
    using SerExtraCore.Web.Reports;
    using SerExtraCore.Accounts.Endpoints;

    [PageAuthorize(typeof(Entities.SuppliersPaymentRow))]
    public class PrintPageController : Controller
    {
        private IHostingEnvironment _env;
        public PrintPageController(IHostingEnvironment env)
        {
            _env = env;
        }
        [Route("Transactions/Print")]
        public IActionResult Index(int? saleid,string? id)
        {
            CommonController commonController = new CommonController(_env);
            var design= new DataHelper().GetReportDesign(id);

            design = new DataHelper().GetReportDesign(design.Id??0);
            foreach (var item in design.ReportParameters)
            {
                if (item.ParameterName == "Id")
                {
                    item.DefaultValue = (saleid??0).ToString();
                }
            }
            var rpre = new ReportRequest { ReportId = design.Id ?? 0, reportDesignsRow = design };
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                rpre = commonController.ShowReport(connection, rpre);
            }


            //var k= new DataHelper().GetSalesInvoiceData(saleid??0);

            //TempData[id] = JsonConvert.SerializeObject(k);
            return RedirectToAction("Index", "View", new { id = rpre.reportDesignsRow.Name, filename= rpre.DataFileName });
            //return RedirectToAction("Execute", "'Report");
         }
      
    }
}