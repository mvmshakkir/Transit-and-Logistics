
namespace SerExtraCore.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.OutsourceRow))]
    public class OutsourceController : Controller
    {
        [Route("Master/Outsource")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Outsource/OutsourceIndex.cshtml");
        }
    }
}