
namespace SerExtraCore.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SpecificationsRow))]
    public class SpecificationsController : Controller
    {
        [Route("Master/Specifications")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Specifications/SpecificationsIndex.cshtml");
        }
    }
}