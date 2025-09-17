namespace SerExtraCore.Common {
    export namespace UserPreferenceService {
        export const baseUrl = 'Common/UserPreference';

        export declare function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ServiceResponse>;
        export declare function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<UserPreferenceRetrieveResponse>;

        export declare const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }

        [
            'Update', 
            'Retrieve'
        ].forEach(x => {
            (<any>UserPreferenceService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}