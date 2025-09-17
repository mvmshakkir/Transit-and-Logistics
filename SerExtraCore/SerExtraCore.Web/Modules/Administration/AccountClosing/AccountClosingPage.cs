
namespace SerExtraCore.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ConfigurationRow))]
    public class AccountClosingController : Controller
    {
        [Route("Administration/AccountClosing")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/AccountClosing/AccountClosingIndex.cshtml");
        }
    }
}