
namespace SerExtraCore.PDCPayments.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PDCPayments.PdcPayments")]
    [BasedOnRow(typeof(Entities.PdcPaymentsRow), CheckNames = true)]
    public class PdcPaymentsColumns
    {
        [EditLink, AlignRight]
        public Int32 Slno { get; set; }
        [EditLink]
        public String PdcNumber { get; set; }
        public DateTime TrxDate { get; set; }
        public String Company { get; set; }
        public DateTime StartDate { get; set; }
        public Int32 Installments { get; set; }
        public DateTime EndDate { get; set; }
        public Decimal InstallmentAmount { get; set; }

        public String SupplierSupplierName { get; set; }
        public String Notes { get; set; }
    }
}