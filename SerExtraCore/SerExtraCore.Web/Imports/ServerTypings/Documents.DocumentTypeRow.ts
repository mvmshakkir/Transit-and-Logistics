namespace SerExtraCore.Documents {
    export interface DocumentTypeRow {
        Id?: number;
        TypeName?: string;
    }

    export namespace DocumentTypeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'TypeName';
        export const localTextPrefix = 'Documents.DocumentType';
        export const lookupKey = 'Documents.DocumentType';

        export function getLookup(): Q.Lookup<DocumentTypeRow> {
            return Q.getLookup<DocumentTypeRow>('Documents.DocumentType');
        }
        export const deletePermission = 'Documents:DocumentType';
        export const insertPermission = 'Documents:DocumentType';
        export const readPermission = 'Documents:DocumentType';
        export const updatePermission = 'Documents:DocumentType';

        export declare const enum Fields {
            Id = "Id",
            TypeName = "TypeName"
        }
    }
}
