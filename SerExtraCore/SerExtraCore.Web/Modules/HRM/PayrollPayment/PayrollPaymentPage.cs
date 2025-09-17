
namespace SerExtraCore.HRM.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PayrollPaymentRow))]
    public class PayrollPaymentController : Controller
    {
        [Route("HRM/PayrollPayment")]
        public ActionResult Index()
        {
            return View("~/Modules/HRM/PayrollPayment/PayrollPaymentIndex.cshtml");
        }
    }
}