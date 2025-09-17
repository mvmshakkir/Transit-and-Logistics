
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SuppliersPaymentInvoiceChargesRow))]
    public class SuppliersPaymentInvoiceChargesController : Controller
    {
        [Route("Transactions/SuppliersPaymentInvoiceCharges")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/SuppliersPaymentInvoiceCharges/SuppliersPaymentInvoiceChargesIndex.cshtml");
        }
    }
}