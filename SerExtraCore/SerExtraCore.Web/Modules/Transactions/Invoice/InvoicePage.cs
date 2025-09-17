
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.InvoiceRow))]
    public class InvoiceController : Controller
    {
        [Route("Transactions/Invoice")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/Invoice/InvoiceIndex.cshtml");
        }
    }
}