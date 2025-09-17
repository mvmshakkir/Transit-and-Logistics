
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.InvoiceCollectionRow))]
    public class InvoiceCollectionController : Controller
    {
        [Route("Transactions/InvoiceCollection")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/InvoiceCollection/InvoiceCollectionIndex.cshtml");
        }
    }
}