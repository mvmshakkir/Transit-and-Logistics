
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SuppliersPaymentRow))]
    public class SuppliersPaymentController : Controller
    {
        [Route("Transactions/SuppliersPayment")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/SuppliersPayment/SuppliersPaymentIndex.cshtml");
        }
    }
}