namespace SerExtraCore.Documents {
    export namespace DocumentTypeService {
        export const baseUrl = 'Documents/DocumentType';

        export declare function Create(request: Serenity.SaveRequest<DocumentTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Update(request: Serenity.SaveRequest<DocumentTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentTypeRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<DocumentTypeRow>>;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentTypeRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<DocumentTypeRow>>;

        export declare const enum Methods {
            Create = "Documents/DocumentType/Create",
            Update = "Documents/DocumentType/Update",
            Delete = "Documents/DocumentType/Delete",
            Retrieve = "Documents/DocumentType/Retrieve",
            List = "Documents/DocumentType/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>DocumentTypeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}