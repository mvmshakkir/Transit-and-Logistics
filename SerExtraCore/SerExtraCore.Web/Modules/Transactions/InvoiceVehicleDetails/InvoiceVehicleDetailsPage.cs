
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.InvoiceVehicleDetailsRow))]
    public class InvoiceVehicleDetailsController : Controller
    {
        [Route("Transactions/InvoiceVehicleDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/InvoiceVehicleDetails/InvoiceVehicleDetailsIndex.cshtml");
        }
    }
}