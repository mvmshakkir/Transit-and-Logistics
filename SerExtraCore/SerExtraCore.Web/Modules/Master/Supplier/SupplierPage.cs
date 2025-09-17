
namespace SerExtraCore.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SupplierRow))]
    public class SupplierController : Controller
    {
        [Route("Master/Supplier")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Supplier/SupplierIndex.cshtml");
        }
    }
}