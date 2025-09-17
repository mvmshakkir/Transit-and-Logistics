
namespace SerExtraCore.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.VehicleSpecificationsRow))]
    public class VehicleSpecificationsController : Controller
    {
        [Route("Master/VehicleSpecifications")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/VehicleSpecifications/VehicleSpecificationsIndex.cshtml");
        }
    }
}