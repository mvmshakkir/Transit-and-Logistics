using Serenity.Navigation;
using MyPages = SerExtraCore.PDCPayments.Pages;

[assembly: NavigationMenu(int.MaxValue, "Reports", icon: "fa-files-o")]
[assembly: NavigationLink(int.MaxValue, "Reports/Account Reports", typeof(SerExtraCore.Transactions.Pages.AccountReportsPageController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Reports/Daily Reports", typeof(SerExtraCore.Transactions.Pages.DailyReportsPageController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Reports/Consignment Report", typeof(SerExtraCore.Transactions.Pages.ConsignmentReportPageController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Reports/Customers Report", typeof(SerExtraCore.Transactions.Pages.CustomerReportPageController), icon: null)]

[assembly: NavigationLink(int.MaxValue, "Reports/Vehicle Report", typeof(SerExtraCore.Transactions.Pages.VehicleReportPageController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Reports/Supplier Report", typeof(SerExtraCore.Transactions.Pages.SupplierReportsPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Reports/Profit Report", typeof(SerExtraCore.Transactions.Pages.ProfitReportPageController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Reports/Tax Report", typeof(SerExtraCore.Transactions.Pages.TaxReportPageController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "PDCPayments/Pdc Payment Details", typeof(MyPages.PdcPaymentDetailsController), icon: null)]

[assembly: NavigationLink(int.MaxValue, "Administration/Report Designs", typeof(SerExtraCore.Reports.Pages.ReportDesignsController), icon: null)]