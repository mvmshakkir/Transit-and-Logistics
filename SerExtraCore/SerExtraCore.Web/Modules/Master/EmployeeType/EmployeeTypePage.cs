
namespace SerExtraCore.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.EmployeeTypeRow))]
    public class EmployeeTypeController : Controller
    {
        [Route("Master/EmployeeType")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/EmployeeType/EmployeeTypeIndex.cshtml");
        }
    }
}