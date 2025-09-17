
using SerExtraCore.Transactions.Pages;
using System.Collections.Generic;

namespace SerExtraCore.Common
{
    public class DashboardPageModel
    {
        public int OpenOrders { get; set; }
        public int ClosedOrderPercent { get; set; }
        public int CustomerCount { get; set; }
        public int ProductCount { get; set; }
        public List<Master.Entities.VehiclesRow> notusevehiclesRows { get; set; }
        public List<VehicleStatusReport.Item> vehiclestatus { get; set; }
        public List<PDCPayments.Entities.PdcPaymentDetailsRow> pdcPaymentDetails { get; set; }
        public List<Documents.Entities.DocumentsRow> documents { get; set; }

    }
}