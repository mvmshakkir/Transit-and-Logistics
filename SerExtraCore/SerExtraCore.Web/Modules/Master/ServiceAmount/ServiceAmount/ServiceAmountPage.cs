using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SerExtraCore.ServiceAmount.Pages
{

    [PageAuthorize(typeof(Entities.ServiceAmountRow))]
    public class ServiceAmountController : Controller
    {
        [Route("ServiceAmount/ServiceAmount")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/ServiceAmount/ServiceAmount/ServiceAmountIndex.cshtml");
        }
    }
}