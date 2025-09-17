
namespace SerExtraCore.Documents.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.DocumentTypeRow))]
    public class DocumentTypeController : Controller
    {
        [Route("Documents/DocumentType")]
        public ActionResult Index()
        {
            return View("~/Modules/Documents/DocumentType/DocumentTypeIndex.cshtml");
        }
    }
}