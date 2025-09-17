
namespace SerExtraCore.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TaxCodeRow))]
    public class TaxCodeController : Controller
    {
        [Route("Master/TaxCode")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/TaxCode/TaxCodeIndex.cshtml");
        }
    }
}