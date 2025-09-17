using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SerExtraCore.CommisionDetails.Pages
{

    [PageAuthorize(typeof(Entities.CommisionDetailsRow))]
    public class CommisionDetailsController : Controller
    {
        [Route("CommisionDetails/CommisionDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/CommisionDetails/CommisionDetails/CommisionDetailsIndex.cshtml");
        }
    }
}