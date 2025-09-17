
namespace SerExtraCore.Transactions.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize("Vehicle:VehicleReport")]
    public class VehicleReportPageController : Controller
    {
        [Route("Vehicle/VehicleReport")]
        public ActionResult Index()
        {
            return View(MVC.Views.Common.Reporting.ReportPage,
                new ReportRepository().GetReportTree("Vehicle"));
        }
    }
}
