namespace SerExtraCore.Web.Modules {
    export interface ReportsInCategory extends Serenity.ServiceResponse {
        Category?: string;
        reportDesignsRows?: Reports.ReportDesignsRow[];
    }
}
