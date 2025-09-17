
namespace SerExtraCore.Accounts.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.JVAdjustmentsRow))]
    public class JVAdjustmentsController : Controller
    {
        [Route("Accounts/JVAdjustments")]
        public ActionResult Index()
        {
            return View("~/Modules/Accounts/JVAdjustments/JVAdjustmentsIndex.cshtml");
        }
    }
}