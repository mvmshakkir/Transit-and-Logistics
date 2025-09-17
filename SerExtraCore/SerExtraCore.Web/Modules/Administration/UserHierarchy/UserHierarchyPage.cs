
namespace SerExtraCore.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.UserHierarchyRow))]
    public class UserHierarchyController : Controller
    {
        [Route("Administration/UserHierarchy")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/UserHierarchy/UserHierarchyIndex.cshtml");
        }
    }
}