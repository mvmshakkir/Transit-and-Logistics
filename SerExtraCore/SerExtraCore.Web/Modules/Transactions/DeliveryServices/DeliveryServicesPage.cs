
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.DeliveryServicesRow))]
    public class DeliveryServicesController : Controller
    {
        [Route("Transactions/DeliveryServices")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/DeliveryServices/DeliveryServicesIndex.cshtml");
        }
    }
}