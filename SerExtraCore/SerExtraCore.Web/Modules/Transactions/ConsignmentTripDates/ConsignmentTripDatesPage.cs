
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ConsignmentTripDatesRow))]
    public class ConsignmentTripDatesController : Controller
    {
        [Route("Transactions/ConsignmentTripDates")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/ConsignmentTripDates/ConsignmentTripDatesIndex.cshtml");
        }
    }
}