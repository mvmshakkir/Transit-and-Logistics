
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PurchaseDetailsRow))]
    public class PurchaseDetailsController : Controller
    {
        [Route("Transactions/PurchaseDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/PurchaseDetails/PurchaseDetailsIndex.cshtml");
        }
    }
}