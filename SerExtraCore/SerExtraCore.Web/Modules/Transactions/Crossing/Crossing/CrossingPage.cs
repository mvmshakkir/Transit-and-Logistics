using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SerExtraCore.Crossing.Pages
{

    [PageAuthorize(typeof(Entities.CrossingRow))]
    public class CrossingController : Controller
    {
        [Route("Crossing/Crossing")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/Crossing/Crossing/CrossingIndex.cshtml");
        }
    }
}