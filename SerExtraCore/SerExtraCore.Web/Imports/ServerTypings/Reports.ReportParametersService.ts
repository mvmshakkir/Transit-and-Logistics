namespace SerExtraCore.Reports {
    export namespace ReportParametersService {
        export const baseUrl = 'Reports/ReportParameters';

        export declare function Create(request: Serenity.SaveRequest<ReportParametersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<ReportParametersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReportParametersRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ReportParametersRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReportParametersRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ReportParametersRow>>;

        export declare const enum Methods {
            Create = "Reports/ReportParameters/Create",
            Update = "Reports/ReportParameters/Update",
            Delete = "Reports/ReportParameters/Delete",
            Retrieve = "Reports/ReportParameters/Retrieve",
            List = "Reports/ReportParameters/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ReportParametersService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}