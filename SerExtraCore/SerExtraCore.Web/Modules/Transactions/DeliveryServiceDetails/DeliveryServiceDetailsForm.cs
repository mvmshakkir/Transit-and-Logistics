
namespace SerExtraCore.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.DeliveryServiceDetails")]
    [BasedOnRow(typeof(Entities.DeliveryServiceDetailsRow), CheckNames = true)]
    public class DeliveryServiceDetailsForm
    {
     
        public String ParcelType { get; set; }
        public String ParcelTypeOtherLang { get; set; }
        [HalfWidth]
        public Decimal Quantity { get; set; }
        [HalfWidth]
        public Decimal UnitPrice { get; set; }
        [HalfWidth]
        public Decimal TotalAmount { get; set; }
    }
}