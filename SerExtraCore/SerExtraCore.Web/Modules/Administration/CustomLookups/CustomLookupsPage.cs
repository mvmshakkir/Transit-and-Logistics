
namespace SerExtraCore.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CustomLookupsRow))]
    public class CustomLookupsController : Controller
    {
        [Route("Administration/CustomLookups")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/CustomLookups/CustomLookupsIndex.cshtml");
        }
    }
}