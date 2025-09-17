
namespace SerExtraCore.Transactions.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize("DailyReport:DailyReport")]
    public class DailyReportsPageController : Controller
    {
        [Route("DailyReport/DailyReport")]
        public ActionResult Index()
        {
            return View(MVC.Views.Common.Reporting.ReportPage,
                new ReportRepository().GetReportTree("DailyReport"));
        }
    }
}
