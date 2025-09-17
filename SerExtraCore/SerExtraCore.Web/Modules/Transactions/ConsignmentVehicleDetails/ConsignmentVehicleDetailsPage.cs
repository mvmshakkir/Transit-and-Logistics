
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ConsignmentVehicleDetailsRow))]
    public class ConsignmentVehicleDetailsController : Controller
    {
        [Route("Transactions/ConsignmentVehicleDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/ConsignmentVehicleDetails/ConsignmentVehicleDetailsIndex.cshtml");
        }
    }
}