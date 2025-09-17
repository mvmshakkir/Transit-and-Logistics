using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SerExtraCore.PumpDetails.Pages
{

    [PageAuthorize(typeof(Entities.PumpDetailsRow))]
    public class PumpDetailsController : Controller
    {
        [Route("PumpDetails/PumpDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/PumpDetails/PumpDetails/PumpDetailsIndex.cshtml");
        }
    }
}