
namespace SerExtraCore.Reports.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ReportDataSetsRow))]
    public class ReportDataSetsController : Controller
    {
        [Route("Reports/ReportDataSets")]
        public ActionResult Index()
        {
            return View("~/Modules/Reports/ReportDataSets/ReportDataSetsIndex.cshtml");
        }
    }
}