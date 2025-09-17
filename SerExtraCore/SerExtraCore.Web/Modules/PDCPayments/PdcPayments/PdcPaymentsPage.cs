
namespace SerExtraCore.PDCPayments.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PdcPaymentsRow))]
    public class PdcPaymentsController : Controller
    {
        [Route("PDCPayments/PdcPayments")]
        public ActionResult Index()
        {
            return View("~/Modules/PDCPayments/PdcPayments/PdcPaymentsIndex.cshtml");
        }
    }
}