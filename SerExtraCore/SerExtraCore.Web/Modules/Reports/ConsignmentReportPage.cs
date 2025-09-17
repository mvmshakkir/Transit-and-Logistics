
namespace SerExtraCore.Transactions.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize("Consignment:ConsignmentReport")]
    public class ConsignmentReportPageController : Controller
    {
        [Route("Consignment/ConsignmentReport")]
        public ActionResult Index()
        {
            return View(MVC.Views.Common.Reporting.ReportPage,
                new ReportRepository().GetReportTree("Consignment"));
        }
    }
}
