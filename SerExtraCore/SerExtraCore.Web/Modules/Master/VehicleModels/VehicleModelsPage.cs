
namespace SerExtraCore.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.VehicleModelsRow))]
    public class VehicleModelsController : Controller
    {
        [Route("Master/VehicleModels")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/VehicleModels/VehicleModelsIndex.cshtml");
        }
    }
}