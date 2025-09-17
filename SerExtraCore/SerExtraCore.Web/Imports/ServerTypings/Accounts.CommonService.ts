namespace SerExtraCore.Accounts {
    export namespace CommonService {
        export const baseUrl = 'Common';

        export declare function GetTrxNo(request: Web.Modules.VoucherNoRequest, onSuccess?: (response: Web.Modules.VoucherNoResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.VoucherNoResponse>;
        export declare function GetVoucherNo(request: Web.Modules.VoucherNoRequest, onSuccess?: (response: Web.Modules.VoucherNoResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.VoucherNoResponse>;
        export declare function GetInvoiceBalance(request: Web.Modules.InvoiceBalanceRequest, onSuccess?: (response: Web.Modules.InvoiceBalanceResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.InvoiceBalanceResponse>;
        export declare function GetInvoiceVehicleDetailsBalance(request: Web.Modules.InvoiceVehicleDetailBalanceRequest, onSuccess?: (response: Web.Modules.InvoiceBalanceResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.InvoiceBalanceResponse>;
        export declare function GetInvoiceVehicleChargesBalance(request: Web.Modules.InvoiceVehicleChargesBalanceRequest, onSuccess?: (response: Web.Modules.InvoiceBalanceResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.InvoiceBalanceResponse>;
        export declare function GetUserHierarchy(request: Web.Modules.UserHierarchyRequest, onSuccess?: (response: boolean) => void, opt?: Q.ServiceOptions<any>): PromiseLike<boolean>;
        export declare function GetConfigration(request: Serenity.ServiceRequest, onSuccess?: (response: Administration.ConfigurationRow) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Administration.ConfigurationRow>;
        export declare function GetNotUseVehicles(request: Serenity.ServiceRequest, onSuccess?: (response: Master.VehiclesRow[]) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Master.VehiclesRow[]>;
        export declare function GetConsigmentByVehicle(request: Web.Modules.ConsignmentByVehicle, onSuccess?: (response: Transactions.ConsignmentVehicleDetailsRow) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Transactions.ConsignmentVehicleDetailsRow>;
        export declare function GetVehicleSpecification(request: Web.Modules.ConsignmentByVehicle, onSuccess?: (response: number[]) => void, opt?: Q.ServiceOptions<any>): PromiseLike<number[]>;
        export declare function GetConsigmentVehicleSpecification(request: Web.Modules.ConsignmentByVehicle, onSuccess?: (response: number[]) => void, opt?: Q.ServiceOptions<any>): PromiseLike<number[]>;
        export declare function GetSupplierBalance(request: Web.Modules.SupplierBalance, onSuccess?: (response: Web.Modules.SupplierBalanceResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.SupplierBalanceResponse>;
        export declare function GetCustomer(request: Web.Modules.SupplierBalance, onSuccess?: (response: Master.CustomersRow) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Master.CustomersRow>;
        export declare function GetEmployee(request: Web.Modules.SupplierBalance, onSuccess?: (response: Master.EmployeeMasterRow) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Master.EmployeeMasterRow>;
        export declare function GetBalnkReport(request: Serenity.ServiceRequest, onSuccess?: (response: Web.Modules.RefNoTrackRequest) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.RefNoTrackRequest>;
        export declare function ShowReport(request: Web.Modules.ReportRequest, onSuccess?: (response: Web.Modules.ReportRequest) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.ReportRequest>;
        export declare function GetReportRequest(request: Web.Modules.ReportRequest, onSuccess?: (response: Web.Modules.ReportRequest) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.ReportRequest>;
        export declare function GetCustomLookup(request: Web.Modules.CustomLookupRequest, onSuccess?: (response: Serenity.ListResponse<Web.Modules.CustomLookupResponse>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<Web.Modules.CustomLookupResponse>>;
        export declare function GetInvoiceData(request: Web.Modules.InvoicePrintRequest, onSuccess?: (response: Transactions.OrderDetailReportData) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Transactions.OrderDetailReportData>;

        export declare const enum Methods {
            GetTrxNo = "Common/GetTrxNo",
            GetVoucherNo = "Common/GetVoucherNo",
            GetInvoiceBalance = "Common/GetInvoiceBalance",
            GetInvoiceVehicleDetailsBalance = "Common/GetInvoiceVehicleDetailsBalance",
            GetInvoiceVehicleChargesBalance = "Common/GetInvoiceVehicleChargesBalance",
            GetUserHierarchy = "Common/GetUserHierarchy",
            GetConfigration = "Common/GetConfigration",
            GetNotUseVehicles = "Common/GetNotUseVehicles",
            GetConsigmentByVehicle = "Common/GetConsigmentByVehicle",
            GetVehicleSpecification = "Common/GetVehicleSpecification",
            GetConsigmentVehicleSpecification = "Common/GetConsigmentVehicleSpecification",
            GetSupplierBalance = "Common/GetSupplierBalance",
            GetCustomer = "Common/GetCustomer",
            GetEmployee = "Common/GetEmployee",
            GetBalnkReport = "Common/GetBalnkReport",
            ShowReport = "Common/ShowReport",
            GetReportRequest = "Common/GetReportRequest",
            GetCustomLookup = "Common/GetCustomLookup",
            GetInvoiceData = "Common/GetInvoiceData"
        }

        [
            'GetTrxNo', 
            'GetVoucherNo', 
            'GetInvoiceBalance', 
            'GetInvoiceVehicleDetailsBalance', 
            'GetInvoiceVehicleChargesBalance', 
            'GetUserHierarchy', 
            'GetConfigration', 
            'GetNotUseVehicles', 
            'GetConsigmentByVehicle', 
            'GetVehicleSpecification', 
            'GetConsigmentVehicleSpecification', 
            'GetSupplierBalance', 
            'GetCustomer', 
            'GetEmployee', 
            'GetBalnkReport', 
            'ShowReport', 
            'GetReportRequest', 
            'GetCustomLookup', 
            'GetInvoiceData'
        ].forEach(x => {
            (<any>CommonService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}