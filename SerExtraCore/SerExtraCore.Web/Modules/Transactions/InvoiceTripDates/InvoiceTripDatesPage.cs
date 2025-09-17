
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.InvoiceTripDatesRow))]
    public class InvoiceTripDatesController : Controller
    {
        [Route("Transactions/InvoiceTripDates")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/InvoiceTripDates/InvoiceTripDatesIndex.cshtml");
        }
    }
}