
namespace SerExtraCore.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ChargesRow))]
    public class ChargesController : Controller
    {
        [Route("Master/Charges")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Charges/ChargesIndex.cshtml");
        }
    }
}