
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SuppliersPaymentInvoicesRow))]
    public class SuppliersPaymentInvoicesController : Controller
    {
        [Route("Transactions/SuppliersPaymentInvoices")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/SuppliersPaymentInvoices/SuppliersPaymentInvoicesIndex.cshtml");
        }
    }
}