
namespace SerExtraCore.PDCPayments.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PDCPayments.PdcPaymentDetails")]
    [BasedOnRow(typeof(Entities.PdcPaymentDetailsRow), CheckNames = true)]
    public class PdcPaymentDetailsColumns
    {
        [EditLink, /*DisplayName("Db.Shared.RecordId"), AlignRight*/]
        //public Int32 Id { get; set; }
        //public String PdcPaymentsPdcNumber { get; set; }
        public DateTime Date { get; set; }
        [EditLink]
        public String ChequeNo { get; set; }
        public Decimal Amount { get; set; }

        public Int32 ChequeStatus { get; set; }
        public DateTime StatusDate { get; set; }
    }
}