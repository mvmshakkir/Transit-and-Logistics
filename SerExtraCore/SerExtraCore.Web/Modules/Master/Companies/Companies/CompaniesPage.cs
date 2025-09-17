using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SerExtraCore.Companies.Pages
{

    [PageAuthorize(typeof(Entities.CompaniesRow))]
    public class CompaniesController : Controller
    {
        [Route("Companies/Companies")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Companies/Companies/CompaniesIndex.cshtml");
        }
    }
}