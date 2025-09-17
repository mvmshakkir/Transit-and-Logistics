
namespace SerExtraCore.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ReceiptRow))]
    public class ReceiptController : Controller
    {
        [Route("Accounts/Receipt")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/Receipt/ReceiptIndex.cshtml");
        }
    }
}