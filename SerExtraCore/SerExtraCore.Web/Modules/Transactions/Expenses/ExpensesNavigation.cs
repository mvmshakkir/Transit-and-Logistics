using Serenity.Navigation;
using static MVC.Views;
using MyPages = SerExtraCore.Expenses.Pages;

[assembly: NavigationLink(int.MaxValue, "Transactions/Expense", typeof(MyPages.ExpensesController), icon: null)]