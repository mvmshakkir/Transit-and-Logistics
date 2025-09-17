
namespace SerExtraCore.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PaymentRow))]
    public class PaymentController : Controller
    {
        [Route("Accounts/Payment")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/Payment/PaymentIndex.cshtml");
        }
    }
}