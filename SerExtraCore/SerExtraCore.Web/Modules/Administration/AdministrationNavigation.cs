using Serenity.Navigation;
using MyPages = SerExtraCore.Administration.Pages;
using Administration = SerExtraCore.Administration.Pages;

[assembly: NavigationMenu(9000, "Administration", icon: "fa-desktop")]
[assembly: NavigationLink(9000, "Administration/Languages", typeof(Administration.LanguageController), icon: "fa-comments")]
[assembly: NavigationLink(9000, "Administration/Translations", typeof(Administration.TranslationController), icon: "fa-comment-o")]
[assembly: NavigationLink(9000, "Administration/Sergen", typeof(Administration.SergenController), icon: "fa-magic")]
[assembly: NavigationLink(9000, "Administration/Roles", typeof(Administration.RoleController), icon: "fa-lock")]
[assembly: NavigationLink(9000, "Administration/User Management", typeof(Administration.UserController), icon: "fa-users")]
[assembly: NavigationLink(9000, "Administration/Configuration", typeof(MyPages.ConfigurationController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Administration/User Hierarchy", typeof(MyPages.UserHierarchyController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Administration/Account Closing", typeof(MyPages.AccountClosingController), icon: null)]