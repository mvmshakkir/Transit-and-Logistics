
namespace SerExtraCore.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ClearanceStatusRow))]
    public class ClearanceStatusController : Controller
    {
        [Route("Master/ClearanceStatus")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/ClearanceStatus/ClearanceStatusIndex.cshtml");
        }
    }
}