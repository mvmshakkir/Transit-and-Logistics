namespace SerExtraCore.PDCPayments {
    export namespace PdcPaymentsService {
        export const baseUrl = 'PDCPayments/PdcPayments';

        export declare function Create(request: Serenity.SaveRequest<PdcPaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<PdcPaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PdcPaymentsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<PdcPaymentsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PdcPaymentsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<PdcPaymentsRow>>;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;
        export declare function GetDateList(request: Web.Modules.MonthDifferenceRequest, onSuccess?: (response: PdcPaymentDetailsRow[]) => void, opt?: Q.ServiceOptions<any>): PromiseLike<PdcPaymentDetailsRow[]>;
        export declare function GetMonthDifference(request: Web.Modules.MonthDifferenceRequest, onSuccess?: (response: Web.Modules.MonthDifferenceResponce) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.MonthDifferenceResponce>;
        export declare function GetMonthTodate(request: Web.Modules.MonthDifferenceRequest, onSuccess?: (response: Web.Modules.MonthDifferenceRequest) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.MonthDifferenceRequest>;

        export declare const enum Methods {
            Create = "PDCPayments/PdcPayments/Create",
            Update = "PDCPayments/PdcPayments/Update",
            Delete = "PDCPayments/PdcPayments/Delete",
            Retrieve = "PDCPayments/PdcPayments/Retrieve",
            List = "PDCPayments/PdcPayments/List",
            GetNextNumber = "PDCPayments/PdcPayments/GetNextNumber",
            GetDateList = "PDCPayments/PdcPayments/GetDateList",
            GetMonthDifference = "PDCPayments/PdcPayments/GetMonthDifference",
            GetMonthTodate = "PDCPayments/PdcPayments/GetMonthTodate"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetNextNumber', 
            'GetDateList', 
            'GetMonthDifference', 
            'GetMonthTodate'
        ].forEach(x => {
            (<any>PdcPaymentsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}