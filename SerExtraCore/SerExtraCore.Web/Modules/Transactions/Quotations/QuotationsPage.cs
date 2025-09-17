
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.QuotationsRow))]
    public class QuotationsController : Controller
    {
        [Route("Transactions/Quotations")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/Quotations/QuotationsIndex.cshtml");
        }
    }
}