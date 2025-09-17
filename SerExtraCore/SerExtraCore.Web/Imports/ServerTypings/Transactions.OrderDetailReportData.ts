namespace SerExtraCore.Transactions {
    export interface OrderDetailReportData extends Serenity.ServiceResponse {
        EntityId?: number;
        Invoice?: InvoiceRow;
        configuration?: Administration.ConfigurationRow;
        Details?: InvoiceChargesRow[];
        Customer?: Master.CustomersRow;
        totalamount?: number;
        amountinwords?: string;
        linecount?: number;
        PagingList?: PagedItems[];
        PrintDate?: string;
        User?: string;
        clearanceRow?: ClearanceRow;
    }
}
