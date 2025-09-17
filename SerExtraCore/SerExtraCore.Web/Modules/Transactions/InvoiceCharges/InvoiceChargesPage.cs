
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.InvoiceChargesRow))]
    public class InvoiceChargesController : Controller
    {
        [Route("Transactions/InvoiceCharges")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/InvoiceCharges/InvoiceChargesIndex.cshtml");
        }
    }
}