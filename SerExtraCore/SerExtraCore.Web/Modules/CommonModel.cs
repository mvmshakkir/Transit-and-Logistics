using Serenity.Services;
using SerExtraCore.Accounts.Entities;
using SerExtraCore.Administration.Entities;
using SerExtraCore.Reports.Entities;

using System;
using System.Collections.Generic;

namespace SerExtraCore.Web.Modules
{
    public class CommonModel
    {


    }
    public class ReportDataDesign
    {
        public string Data { get; set; }
        public string Design { get; set; }
    }
    public class RefNoTrackRequest : ServiceRequest
    {
        public string RefNo { get; set; }
    }
   
    public class RefNoTrackResponse : ServiceResponse
    {
        public int TrxId { get; set; }
        public string TypeOfTrx { get; set; }
        public DateTime TrxDate { get; set; }
        public string TrxNo { get; set; }
        public decimal TotalAmount { get; set; }
    }
   
    public class ReportsInCategory : ServiceResponse
    {
        public string Category { get; set; }
        public List<ReportDesignsRow> reportDesignsRows { get; set; }
    }
    public class CustomLookupRequest : ServiceRequest
    {
        public int CustomLookupId { get; set; }

    }
    public class ReportRequest : ServiceRequest
    {
        public int ReportId { get; set; }
        public string DataFileName { get; set; }
        public ReportDesignsRow reportDesignsRow { get; set; }
    }
   
    public class CustomLookupResponse : ServiceResponse
    {
        public int IdField { get; set; }
        public string NameField { get; set; }

    }
   
    public class CustomerByIdRequest : ServiceRequest
    {

        public int CustomerId { get; set; }
    }
  

}
