
namespace SerExtraCore.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CustomersRow))]
    public class CustomersController : Controller
    {
        [Route("Master/Customers")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Customers/CustomersIndex.cshtml");
        }
    }
}