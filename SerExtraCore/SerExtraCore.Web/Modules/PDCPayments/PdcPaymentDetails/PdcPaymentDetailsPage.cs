
namespace SerExtraCore.PDCPayments.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PdcPaymentDetailsRow))]
    public class PdcPaymentDetailsController : Controller
    {
        [Route("PDCPayments/PdcPaymentDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/PDCPayments/PdcPaymentDetails/PdcPaymentDetailsIndex.cshtml");
        }
    }
}