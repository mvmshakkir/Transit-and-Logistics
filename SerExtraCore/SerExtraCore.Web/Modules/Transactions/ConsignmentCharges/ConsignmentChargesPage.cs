
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ConsignmentChargesRow))]
    public class ConsignmentChargesController : Controller
    {
        [Route("Transactions/ConsignmentCharges")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/ConsignmentCharges/ConsignmentChargesIndex.cshtml");
        }
    }
}