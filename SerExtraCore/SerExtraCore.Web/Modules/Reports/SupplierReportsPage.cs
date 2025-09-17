
namespace SerExtraCore.Transactions.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize("SupplierReport:SupplierReport")]
    public class SupplierReportsPage : Controller
    {
        [Route("SupplierReports/SupplierReports")]
        public ActionResult Index()
        {
            return View(MVC.Views.Common.Reporting.ReportPage,
                new ReportRepository().GetReportTree("SupplierReport"));
        }
    }
}
