
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.DeliveryServiceDetailsRow))]
    public class DeliveryServiceDetailsController : Controller
    {
        [Route("Transactions/DeliveryServiceDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/DeliveryServiceDetails/DeliveryServiceDetailsIndex.cshtml");
        }
    }
}