using Serenity.Navigation;
using MyPages = SerExtraCore.Master.Pages;
using MyPagesmd = SerExtraCore.MaterialsDetails.Pages;
using MyPagesUOM = SerExtraCore.UOM.Pages;
using MyPagesUOMA = SerExtraCore.UOMAmount.Pages;
using MyPagesVMD = SerExtraCore.VehicleMovDetails.Pages;
using MyPagesPD = SerExtraCore.PumpDetails.Pages;
using MyPagesFD = SerExtraCore.FuelDetails.Pages;
using MyPagesS = SerExtraCore.Services.Pages;
//using SerExtraCore.Web.Modules.Master.PumpDetails.PumpDetails;

[assembly: NavigationMenu(15000, "Master", icon: "fa-anchor")]
[assembly: NavigationLink(int.MaxValue, "Master/Countries", typeof(MyPages.CountriesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Master/Designation", typeof(MyPages.DesignationController), icon: null)]

[assembly: NavigationLink(int.MaxValue, "Master/Employee Type", typeof(MyPages.EmployeeTypeController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Master/Outsource", typeof(MyPages.OutsourceController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Master/Employee Master", typeof(MyPages.EmployeeMasterController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Master/Vehicles", typeof(MyPages.VehiclesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Master/Currencies", typeof(MyPages.CurrenciesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Master/Charges", typeof(MyPages.ChargesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Master/Customers", typeof(MyPages.CustomersController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Master/Shipping Areas", typeof(MyPages.ShippingAreasController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Master/Vehicle Specifications", typeof(MyPages.VehicleSpecificationsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Master/Vehicle Models", typeof(MyPages.VehicleModelsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Master/Specifications", typeof(MyPages.SpecificationsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Master/Supplier", typeof(MyPages.SupplierController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Master/Tax Code", typeof(MyPages.TaxCodeController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Master/Products", typeof(MyPages.ProductsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Master/Clearance Status", typeof(MyPages.ClearanceStatusController), icon: null)]

[assembly: NavigationLink(int.MaxValue, "Master/Materials", typeof(MyPagesmd.MaterialsDetailsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Master/UOM", typeof(MyPagesUOM.UOMController), icon: null)]

//[assembly: NavigationLink(int.MaxValue, "Master/Uom Amount", typeof(MyPagesUOMA.UOMAmountController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Master/Pump Details", typeof(MyPagesPD.PumpDetailsController), icon: null)]

//[assembly: NavigationLink(int.MaxValue, "Master/Materials", typeof(MyPages.MaterialsDetailsController), icon: null)]


//[assembly: NavigationLink(int.MaxValue, "FuelDetails/Fuel Details", typeof(MyPagesFD.FuelDetailsController), icon: null)]


[assembly: NavigationLink(int.MaxValue, "Master/Services", typeof(MyPagesS.ServicesController), icon: null)]

//MaterialsDetailsController


[assembly: NavigationLink(int.MaxValue, "Master/Ports", typeof(MyPages.PortsController), icon: null)]


