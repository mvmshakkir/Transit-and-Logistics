
namespace SerExtraCore.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PortsRow))]
    public class PortsController : Controller
    {
        [Route("Master/Ports")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Ports/PortsIndex.cshtml");
        }
    }
}