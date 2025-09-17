
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ConsignmentRow))]
    public class ConsignmentController : Controller
    {
        [Route("Transactions/Consignment")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/Consignment/ConsignmentIndex.cshtml");
        }
    }
}