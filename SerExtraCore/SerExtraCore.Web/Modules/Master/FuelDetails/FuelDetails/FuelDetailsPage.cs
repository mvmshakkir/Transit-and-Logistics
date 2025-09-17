using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SerExtraCore.FuelDetails.Pages
{

    [PageAuthorize(typeof(Entities.FuelDetailsRow))]
    public class FuelDetailsController : Controller
    {
        [Route("FuelDetails/FuelDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/FuelDetails/FuelDetails/FuelDetailsIndex.cshtml");
        }
    }
}