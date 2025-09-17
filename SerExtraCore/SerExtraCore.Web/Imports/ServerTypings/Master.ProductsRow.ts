namespace SerExtraCore.Master {
    export interface ProductsRow {
        Id?: number;
        ProductCode?: string;
        ProductName?: string;
        UnitPrice?: number;
        FullName?: string;
    }

    export namespace ProductsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FullName';
        export const localTextPrefix = 'Master.Products';
        export const lookupKey = 'Master.Products';

        export function getLookup(): Q.Lookup<ProductsRow> {
            return Q.getLookup<ProductsRow>('Master.Products');
        }
        export const deletePermission = 'Master:Products';
        export const insertPermission = 'Master:Products';
        export const readPermission = 'Master:Products';
        export const updatePermission = 'Master:Products';

        export declare const enum Fields {
            Id = "Id",
            ProductCode = "ProductCode",
            ProductName = "ProductName",
            UnitPrice = "UnitPrice",
            FullName = "FullName"
        }
    }
}
