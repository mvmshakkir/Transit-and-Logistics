
namespace SerExtraCore.HRM.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.EmployeeLeavesRow))]
    public class EmployeeLeavesController : Controller
    {
        [Route("HRM/EmployeeLeaves")]
        public ActionResult Index()
        {
            return View("~/Modules/HRM/EmployeeLeaves/EmployeeLeavesIndex.cshtml");
        }
    }
}