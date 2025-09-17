
namespace SerExtraCore.Reports.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ReportDesignsRow))]
    public class ReportDesignsController : Controller
    {
        [Route("Reports/ReportDesigns")]
        public ActionResult Index()
        {
            return View("~/Modules/Reports/ReportDesigns/ReportDesignsIndex.cshtml");
        }
    }
}