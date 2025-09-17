
namespace SerExtraCore.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.EmployeeMasterRow))]
    public class EmployeeMasterController : Controller
    {
        [Route("Master/EmployeeMaster")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/EmployeeMaster/EmployeeMasterIndex.cshtml");
        }
    }
}