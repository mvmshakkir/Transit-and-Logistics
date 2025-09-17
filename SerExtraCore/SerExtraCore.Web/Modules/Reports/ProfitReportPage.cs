
namespace SerExtraCore.Transactions.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize("Consignment:ProfitReport")]
    public class ProfitReportPageController : Controller
    {
        [Route("Profit/ProfitReport")]
        public ActionResult Index()
        {
            return View(MVC.Views.Common.Reporting.ReportPage,
                new ReportRepository().GetReportTree("Profit"));
        }
    }
}
