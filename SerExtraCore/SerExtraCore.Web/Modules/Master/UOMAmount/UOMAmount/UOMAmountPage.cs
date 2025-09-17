using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SerExtraCore.UOMAmount.Pages
{

    [PageAuthorize(typeof(Entities.UOMAmountRow))]
    public class UOMAmountController : Controller
    {
        [Route("UOMAmount/UOMAmount")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/UOMAmount/UOMAmount/UOMAmountIndex.cshtml");
        }
    }
}