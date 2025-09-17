namespace SerExtraCore.Web.Modules {
    export interface MonthDifferenceRequest {
        fromdatetime?: string;
        todatetime?: string;
        amount?: number;
        numberofmonths?: number;
        pdctype?: number;
    }
}