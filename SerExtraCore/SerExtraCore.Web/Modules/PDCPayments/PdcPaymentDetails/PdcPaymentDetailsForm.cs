
namespace SerExtraCore.PDCPayments.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PDCPayments.PdcPaymentDetails")]
    [BasedOnRow(typeof(Entities.PdcPaymentDetailsRow), CheckNames = true)]
    public class PdcPaymentDetailsForm
    {
        //public Int32 PdcPaymentsId { get; set; }

        [Category("Cheque Details")]
        [HalfWidth]
        public DateTime Date { get; set; }
        [HalfWidth]
        public String ChequeNo { get; set; }
        [HalfWidth]
        public Decimal Amount { get; set; }
        [HalfWidth]

        public Int32 ChequeType { get; set; }
        [Category("Status")]
        [HalfWidth]
        public Int32 ChequeStatus { get; set; }
        [HalfWidth]

        public DateTime StatusDate { get; set; }
        [Category("Account Details")]

        [HalfWidth]

        public Int32 PaymentType { get; set; }
        [HalfWidth]

        public Int32 AccountId { get; set; }


    }
}