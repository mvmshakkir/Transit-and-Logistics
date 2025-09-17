
namespace SerExtraCore.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CountriesRow))]
    public class CountriesController : Controller
    {
        [Route("Master/Countries")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Countries/CountriesIndex.cshtml");
        }
    }
}