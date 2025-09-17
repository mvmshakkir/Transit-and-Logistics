namespace SerExtraCore.Reports {
    export namespace ReportDesignsService {
        export const baseUrl = 'Reports/ReportDesigns';

        export declare function Create(request: Serenity.SaveRequest<ReportDesignsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<ReportDesignsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReportDesignsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ReportDesignsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReportDesignsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ReportDesignsRow>>;

        export declare const enum Methods {
            Create = "Reports/ReportDesigns/Create",
            Update = "Reports/ReportDesigns/Update",
            Delete = "Reports/ReportDesigns/Delete",
            Retrieve = "Reports/ReportDesigns/Retrieve",
            List = "Reports/ReportDesigns/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ReportDesignsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}