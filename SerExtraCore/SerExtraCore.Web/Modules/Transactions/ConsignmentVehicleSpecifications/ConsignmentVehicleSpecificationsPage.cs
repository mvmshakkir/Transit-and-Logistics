
namespace SerExtraCore.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ConsignmentVehicleSpecificationsRow))]
    public class ConsignmentVehicleSpecificationsController : Controller
    {
        [Route("Transactions/ConsignmentVehicleSpecifications")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/ConsignmentVehicleSpecifications/ConsignmentVehicleSpecificationsIndex.cshtml");
        }
    }
}