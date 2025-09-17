namespace SerExtraCore.CommissionPercentage {
    export namespace CommissionPercentageService {
        export const baseUrl = 'CommissionPercentage/CommissionPercentage';

        export declare function Create(request: Serenity.SaveRequest<CommissionPercentageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<CommissionPercentageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CommissionPercentageRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<CommissionPercentageRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CommissionPercentageRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<CommissionPercentageRow>>;

        export declare const enum Methods {
            Create = "CommissionPercentage/CommissionPercentage/Create",
            Update = "CommissionPercentage/CommissionPercentage/Update",
            Delete = "CommissionPercentage/CommissionPercentage/Delete",
            Retrieve = "CommissionPercentage/CommissionPercentage/Retrieve",
            List = "CommissionPercentage/CommissionPercentage/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CommissionPercentageService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}