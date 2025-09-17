using Serenity.Navigation;
using MyPages = SerExtraCore.HRM.Pages;

[assembly: NavigationMenu(int.MaxValue, "HRM", icon: "fa fa-user-circle-o")]
[assembly: NavigationLink(int.MaxValue, "HRM/Employee Leaves", typeof(MyPages.EmployeeLeavesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "HRM/Payroll Structures", typeof(MyPages.PayrollStructuresController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "HRM/Payroll Payment", typeof(MyPages.PayrollPaymentController), icon: null)]