
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.InvoiceDueDetailsRow))]
    public class InvoiceDueDetailsController : Controller
    {
        [Route("Transactions/InvoiceDueDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/InvoiceDueDetails/InvoiceDueDetailsIndex.cshtml");
        }
    }
}