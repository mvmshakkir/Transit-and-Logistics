
namespace SerExtraCore.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AccountHeadsRow))]
    public class AccountHeadsController : Controller
    {
        [Route("Accounts/AccountHeads")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/AccountHeads/AccountHeadsIndex.cshtml");
        }
    }
}