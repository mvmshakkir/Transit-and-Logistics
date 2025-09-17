
namespace SerExtraCore.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.DeliveryServiceDetails")]
    [BasedOnRow(typeof(Entities.DeliveryServiceDetailsRow), CheckNames = true)]
    public class DeliveryServiceDetailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String ParcelType { get; set; }
        public String ParcelTypeOtherLang { get; set; }
        [Width(100), AlignRight, DisplayFormat("#,##0.000")]
        public Decimal Quantity { get; set; }
        [Width(100), AlignRight, DisplayFormat("#,##0.000")]
        public Decimal UnitPrice { get; set; }
        [EditLink]
        [Width(100), AlignRight, DisplayFormat("#,##0.000")]
        public Decimal TotalAmount { get; set; }
    }
}