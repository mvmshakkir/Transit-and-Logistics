
namespace SerExtraCore.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MoneyOutRow))]
    public class MoneyOutController : Controller
    {
        [Route("Accounts/MoneyOut")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/MoneyOut/MoneyOutIndex.cshtml");
        }
    }
}