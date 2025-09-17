
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.InvoiceCollectionDetailsRow))]
    public class InvoiceCollectionDetailsController : Controller
    {
        [Route("Transactions/InvoiceCollectionDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/InvoiceCollectionDetails/InvoiceCollectionDetailsIndex.cshtml");
        }
    }
}