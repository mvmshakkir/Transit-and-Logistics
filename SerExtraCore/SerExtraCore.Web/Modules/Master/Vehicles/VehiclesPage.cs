
namespace SerExtraCore.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.VehiclesRow))]
    public class VehiclesController : Controller
    {
        [Route("Master/Vehicles")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Vehicles/VehiclesIndex.cshtml");
        }
    }
}