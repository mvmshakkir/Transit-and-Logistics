
namespace SerExtraCore.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ShippingAreasRow))]
    public class ShippingAreasController : Controller
    {
        [Route("Master/ShippingAreas")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/ShippingAreas/ShippingAreasIndex.cshtml");
        }
    }
}