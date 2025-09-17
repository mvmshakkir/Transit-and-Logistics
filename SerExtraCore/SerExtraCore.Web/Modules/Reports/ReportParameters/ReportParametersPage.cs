
namespace SerExtraCore.Reports.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ReportParametersRow))]
    public class ReportParametersController : Controller
    {
        [Route("Reports/ReportParameters")]
        public ActionResult Index()
        {
            return View("~/Modules/Reports/ReportParameters/ReportParametersIndex.cshtml");
        }
    }
}