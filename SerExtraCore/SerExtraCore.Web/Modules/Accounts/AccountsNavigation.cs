using Serenity.Navigation;
using MyPages = SerExtraCore.Accounts.Pages;

[assembly: NavigationMenu(10000, "Accounts", icon: "fa fa-money")]
[assembly: NavigationLink(10000, "Accounts/Account Heads", typeof(MyPages.AccountHeadsController), icon: null)]
[assembly: NavigationLink(10000, "Accounts/Accounts", typeof(MyPages.AccountsController), icon: null)]
[assembly: NavigationLink(10000, "Accounts/Receipt", typeof(MyPages.MoneyInController), icon: null)]
[assembly: NavigationLink(10000, "Accounts/Payment", typeof(MyPages.MoneyOutController), icon: null)]
[assembly: NavigationLink(10000, "Accounts/Contra", typeof(MyPages.ContraController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Accounts/Journal Entry", typeof(MyPages.JVAdjustmentsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Accounts/Bank Reconciliation", typeof(MyPages.BankReconciliationController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Accounts/Money In", typeof(MyPages.MoneyInController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Accounts/Money Out", typeof(MyPages.MoneyOutController), icon: null)]