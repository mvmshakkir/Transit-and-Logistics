using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SerExtraCore.Extr.Pages
{

    [PageAuthorize(typeof(Entities.ExtrRow))]
    public class ExtrController : Controller
    {
        [Route("Extr/Extr")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/Extr/Extr/ExtrIndex.cshtml");
        }
    }
}