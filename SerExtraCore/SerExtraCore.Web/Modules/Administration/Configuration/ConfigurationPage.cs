
namespace SerExtraCore.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ConfigurationRow))]
    public class ConfigurationController : Controller
    {
        [Route("Administration/Configuration")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Configuration/ConfigurationIndex.cshtml");
        }
    }
}