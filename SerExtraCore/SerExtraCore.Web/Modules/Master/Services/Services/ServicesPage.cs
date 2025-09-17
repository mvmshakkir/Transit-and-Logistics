using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SerExtraCore.Services.Pages
{

    [PageAuthorize(typeof(Entities.ServicesRow))]
    public class ServicesController : Controller
    {
        [Route("Services/Services")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Services/Services/ServicesIndex.cshtml");
        }
    }
}