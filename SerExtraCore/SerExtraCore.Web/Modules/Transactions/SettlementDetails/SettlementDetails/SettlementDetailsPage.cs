using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SerExtraCore.SettlementDetails.Pages
{

    [PageAuthorize(typeof(Entities.SettlementDetailsRow))]
    public class SettlementDetailsController : Controller
    {
        [Route("SettlementDetails/SettlementDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/SettlementDetails/SettlementDetails/SettlementDetailsIndex.cshtml");
        }
    }
}