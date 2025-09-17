namespace SerExtraCore.SettlementDetails {
    export namespace SettlementDetailsService {
        export const baseUrl = 'SettlementDetails/SettlementDetails';

        export declare function Create(request: Serenity.SaveRequest<SettlementDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<SettlementDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SettlementDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<SettlementDetailsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SettlementDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<SettlementDetailsRow>>;

        export declare const enum Methods {
            Create = "SettlementDetails/SettlementDetails/Create",
            Update = "SettlementDetails/SettlementDetails/Update",
            Delete = "SettlementDetails/SettlementDetails/Delete",
            Retrieve = "SettlementDetails/SettlementDetails/Retrieve",
            List = "SettlementDetails/SettlementDetails/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SettlementDetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}