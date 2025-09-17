using Serenity.Navigation;
using MyPages = SerExtraCore.PDCPayments.Pages;
[assembly: NavigationMenu(25000, "PDC", icon: "fa-magic")]
[assembly: NavigationLink(int.MaxValue, "PDC/Pdc", typeof(MyPages.PdcPaymentsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "PDCPayments/Pdc Payment Details", typeof(MyPages.PdcPaymentDetailsController), icon: null)]