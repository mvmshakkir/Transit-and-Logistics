using Serenity.Navigation;
using MyPages = SerExtraCore.Documents.Pages;
[assembly: NavigationMenu(int.MaxValue, "Documents", icon: "fa-cube")]
[assembly: NavigationLink(int.MaxValue, "Documents/Document Type", typeof(MyPages.DocumentTypeController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Documents/Documents", typeof(MyPages.DocumentsController), icon: null)]