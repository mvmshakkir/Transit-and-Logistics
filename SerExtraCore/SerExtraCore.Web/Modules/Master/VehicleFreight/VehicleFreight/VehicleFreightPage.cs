using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SerExtraCore.VehicleFreight.Pages
{

    [PageAuthorize(typeof(Entities.VehicleFreightRow))]
    public class VehicleFreightController : Controller
    {
        [Route("VehicleFreight/VehicleFreight")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/VehicleFreight/VehicleFreight/VehicleFreightIndex.cshtml");
        }
    }
}