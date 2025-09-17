
namespace SerExtraCore.Transactions.Pages
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize("Tax:TaxReport")]
    public class TaxReportPageController : Controller
    {
        [Route("Tax/TaxReport")]
        public ActionResult Index()
        {
            return View(MVC.Views.Common.Reporting.ReportPage,
                new ReportRepository().GetReportTree("Tax"));
        }
    }
}
