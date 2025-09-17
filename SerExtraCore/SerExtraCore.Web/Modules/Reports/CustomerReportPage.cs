
namespace SerExtraCore.Transactions.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize("Customers:CustomersReport")]
    public class CustomerReportPageController : Controller
    {
        [Route("Customers/CustomersReport")]
        public ActionResult Index()
        {
            return View(MVC.Views.Common.Reporting.ReportPage,
                new ReportRepository().GetReportTree("Customers"));
        }
    }
}
