namespace SerExtraCore.Web.Modules {
    export interface RefNoTrackResponse extends Serenity.ServiceResponse {
        TrxId?: number;
        TypeOfTrx?: string;
        TrxDate?: string;
        TrxNo?: string;
        TotalAmount?: number;
    }
}
