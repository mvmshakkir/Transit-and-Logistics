using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SerExtraCore.CommissionPercentage.Pages
{

    [PageAuthorize(typeof(Entities.CommissionPercentageRow))]
    public class CommissionPercentageController : Controller
    {
        [Route("CommissionPercentage/CommissionPercentage")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/CommissionPercentage/CommissionPercentage/CommissionPercentageIndex.cshtml");
        }
    }
}