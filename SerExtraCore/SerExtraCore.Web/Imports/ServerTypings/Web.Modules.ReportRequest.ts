namespace SerExtraCore.Web.Modules {
    export interface ReportRequest extends Serenity.ServiceRequest {
        ReportId?: number;
        DataFileName?: string;
        reportDesignsRow?: Reports.ReportDesignsRow;
    }
}
