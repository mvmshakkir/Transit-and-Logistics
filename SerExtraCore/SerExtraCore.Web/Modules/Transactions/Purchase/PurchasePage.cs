
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PurchaseRow))]
    public class PurchaseController : Controller
    {
        [Route("Transactions/Purchase")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/Purchase/PurchaseIndex.cshtml");
        }
    }
}