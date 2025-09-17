
namespace SerExtraCore.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.DesignationRow))]
    public class DesignationController : Controller
    {
        [Route("Master/Designation")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Designation/DesignationIndex.cshtml");
        }
    }
}