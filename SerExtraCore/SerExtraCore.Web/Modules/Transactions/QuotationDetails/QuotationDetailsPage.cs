
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.QuotationDetailsRow))]
    public class QuotationDetailsController : Controller
    {
        [Route("Transactions/QuotationDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/QuotationDetails/QuotationDetailsIndex.cshtml");
        }
    }
}