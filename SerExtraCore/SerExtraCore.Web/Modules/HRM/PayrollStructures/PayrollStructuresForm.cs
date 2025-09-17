
namespace SerExtraCore.HRM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SerExtraCore.HRM.Entities;

    [FormScript("HRM.PayrollStructures")]
    [BasedOnRow(typeof(Entities.PayrollStructuresRow), CheckNames = true)]
    public class PayrollStructuresForm
    {
        [Category("Structure")]
        public String StructureName { get; set; }
        [HalfWidth]
        public DateTime FromDate { get; set; }
        [HalfWidth]
        public DateTime ToDate { get; set; }
        public String Remarks { get; set; }

        [Category("Payment Details")]

        [PayrollPaymentEditor]
        public List<PayrollPaymentRow> PayrollPayment { get; set; }
    }
}