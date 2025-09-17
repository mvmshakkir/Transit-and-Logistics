
namespace SerExtraCore.Documents.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.DocumentsRow))]
    public class DocumentsController : Controller
    {
        [Route("Documents/Documents")]
        public ActionResult Index()
        {
            return View("~/Modules/Documents/Documents/DocumentsIndex.cshtml");
        }
    }
}