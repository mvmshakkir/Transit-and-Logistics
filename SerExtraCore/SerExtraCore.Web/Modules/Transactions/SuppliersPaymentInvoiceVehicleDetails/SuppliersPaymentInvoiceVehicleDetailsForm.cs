
namespace SerExtraCore.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.SuppliersPaymentInvoiceVehicleDetails")]
    [BasedOnRow(typeof(Entities.SuppliersPaymentInvoiceVehicleDetailsRow), CheckNames = true)]
    public class SuppliersPaymentInvoiceVehicleDetailsForm
    {
        //public Int32 SuppliersPaymentId { get; set; }
        [HalfWidth]
        public Int32 InvoiceVehicleDetailId { get; set; }
        [HalfWidth]
        public Decimal Amount { get; set; }
    }
}