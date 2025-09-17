
namespace SerExtraCore.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ContraRow))]
    public class ContraController : Controller
    {
        [Route("Accounts/Contra")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/Contra/ContraIndex.cshtml");
        }
    }
}