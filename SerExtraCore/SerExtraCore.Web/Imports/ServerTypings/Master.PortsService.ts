namespace SerExtraCore.Master {
    export namespace PortsService {
        export const baseUrl = 'Master/Ports';

        export declare function Create(request: Serenity.SaveRequest<PortsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<PortsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PortsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<PortsRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PortsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<PortsRow>>;

        export declare const enum Methods {
            Create = "Master/Ports/Create",
            Update = "Master/Ports/Update",
            Delete = "Master/Ports/Delete",
            Retrieve = "Master/Ports/Retrieve",
            List = "Master/Ports/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PortsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}