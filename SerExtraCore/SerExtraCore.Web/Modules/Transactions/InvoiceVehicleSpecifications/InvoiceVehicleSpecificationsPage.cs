
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.InvoiceVehicleSpecificationsRow))]
    public class InvoiceVehicleSpecificationsController : Controller
    {
        [Route("Transactions/InvoiceVehicleSpecifications")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/InvoiceVehicleSpecifications/InvoiceVehicleSpecificationsIndex.cshtml");
        }
    }
}