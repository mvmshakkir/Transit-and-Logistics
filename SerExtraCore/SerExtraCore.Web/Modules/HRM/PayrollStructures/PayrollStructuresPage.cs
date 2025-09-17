
namespace SerExtraCore.HRM.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PayrollStructuresRow))]
    public class PayrollStructuresController : Controller
    {
        [Route("HRM/PayrollStructures")]
        public ActionResult Index()
        {
            return View("~/Modules/HRM/PayrollStructures/PayrollStructuresIndex.cshtml");
        }
    }
}