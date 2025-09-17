
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SuppliersPaymentInvoiceVehicleDetailsRow))]
    public class SuppliersPaymentInvoiceVehicleDetailsController : Controller
    {
        [Route("Transactions/SuppliersPaymentInvoiceVehicleDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/SuppliersPaymentInvoiceVehicleDetails/SuppliersPaymentInvoiceVehicleDetailsIndex.cshtml");
        }
    }
}