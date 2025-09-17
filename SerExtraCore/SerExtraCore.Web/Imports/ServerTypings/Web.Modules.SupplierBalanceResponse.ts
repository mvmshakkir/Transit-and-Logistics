namespace SerExtraCore.Web.Modules {
    export interface SupplierBalanceResponse {
        SupplierId?: number;
        SupplierName?: string;
        TotalAmount?: number;
        SupplierAdvanceAmount?: number;
        PaidAmount?: number;
        Balance?: number;
    }
}