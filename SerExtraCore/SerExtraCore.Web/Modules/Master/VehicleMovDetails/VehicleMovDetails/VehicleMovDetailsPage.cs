using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SerExtraCore.VehicleMovDetails.Pages
{

    [PageAuthorize(typeof(Entities.VehicleMovDetailsRow))]
    public class VehicleMovDetailsController : Controller
    {
        [Route("VehicleMovDetails/VehicleMovDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/VehicleMovDetails/VehicleMovDetails/VehicleMovDetailsIndex.cshtml");
        }
    }
}
