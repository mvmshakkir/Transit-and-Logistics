
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ClearanceRow))]
    public class ClearanceController : Controller
    {
        [Route("Transactions/Clearance")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/Clearance/ClearanceIndex.cshtml");
        }
    }
}