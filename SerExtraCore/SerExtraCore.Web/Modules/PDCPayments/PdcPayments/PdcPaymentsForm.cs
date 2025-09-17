
namespace SerExtraCore.PDCPayments.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PDCPayments.PdcPayments")]
    [BasedOnRow(typeof(Entities.PdcPaymentsRow), CheckNames = true)]
    public class PdcPaymentsForm
    {
        [Category("PDC")]
        [HalfWidth]
        public String PdcNumber { get; set; }
        [HalfWidth]
        public DateTime TrxDate { get; set; }
        [HalfWidth]
        public String Company { get; set; }
        [HalfWidth]

        public Int32 ChequeType { get; set; }
        [OneThirdWidth]
        public DateTime StartDate { get; set; }
        [OneThirdWidth]
        public Int32 Installments { get; set; }
        [OneThirdWidth]
        public DateTime EndDate { get; set; }
        [HalfWidth]
        public Decimal InstallmentAmount { get; set; }
        [HalfWidth]
        public Decimal SupplierId { get; set; }
        [Category("PDC Details")]
        [PdcPaymentDetailsEditor]
        [HalfWidth]
        public RowListField<Entities.PdcPaymentDetailsRow> PdcPaymentDetails { get; set; }
        [HalfWidth]
        public String Notes { get; set; }
    }
}