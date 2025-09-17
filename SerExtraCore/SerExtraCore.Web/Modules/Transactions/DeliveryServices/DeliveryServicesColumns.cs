
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.DeliveryServices")]
    [BasedOnRow(typeof(Entities.DeliveryServicesRow), CheckNames = true)]
    public class DeliveryServicesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String BillNo { get; set; }
        public DateTime TrxDate { get; set; }
        public Int32 PaymentType { get; set; }
        public String ConsigneeCustomerName { get; set; }
        public String ConsignorCustomerName { get; set; }
        public String ShippingAreaFromAreaName { get; set; }
        public String ShippingAreaToAreaName { get; set; }
        public DateTime HandDate { get; set; }
        public DateTime ReceivedDate { get; set; }

        public Int32 DeliveryStatus { get; set; }
        public String ReceiverDetails { get; set; }

        public String IDNo { get; set; }
        public String ContactNo { get; set; }

        [Width(100), AlignRight, DisplayFormat("#,##0.000")]
        public Decimal TotalAmount { get; set; }
    }
}