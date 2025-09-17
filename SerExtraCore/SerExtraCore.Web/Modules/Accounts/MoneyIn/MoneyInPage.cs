
namespace SerExtraCore.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MoneyInRow))]
    public class MoneyInController : Controller
    {
        [Route("Accounts/MoneyIn")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/MoneyIn/MoneyInIndex.cshtml");
        }
    }
}