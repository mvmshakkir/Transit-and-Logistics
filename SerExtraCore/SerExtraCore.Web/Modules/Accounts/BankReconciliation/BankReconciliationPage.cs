
namespace SerExtraCore.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize("Accounts:BankReconciliation")]
    public class BankReconciliationController : Controller
    {
        [Route("Accounts/BankReconciliation")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/BankReconciliation/BankReconciliationIndex.cshtml");
        }
    }
}