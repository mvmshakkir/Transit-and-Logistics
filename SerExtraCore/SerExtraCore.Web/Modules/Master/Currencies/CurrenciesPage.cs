
namespace SerExtraCore.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CurrenciesRow))]
    public class CurrenciesController : Controller
    {
        [Route("Master/Currencies")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Currencies/CurrenciesIndex.cshtml");
        }
    }
}