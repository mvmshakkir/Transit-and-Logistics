using Serenity.Navigation;
using MyPages = SerExtraCore.Reports.Pages;

[assembly: NavigationLink(int.MaxValue, "Administration/Report Designs", typeof(MyPages.ReportDesignsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Reports/Report Data Sets", typeof(MyPages.ReportDataSetsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Reports/Report Parameters", typeof(MyPages.ReportParametersController), icon: null)]