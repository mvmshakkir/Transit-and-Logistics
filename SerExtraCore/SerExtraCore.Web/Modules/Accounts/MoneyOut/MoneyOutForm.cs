
namespace SerExtraCore.Accounts.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SerExtraCore.Transactions;

    [FormScript("Accounts.MoneyOut")]
    [BasedOnRow(typeof(Entities.MoneyOutRow), CheckNames = true)]
    public class MoneyOutForm
    {
        //   public Int32 VType { get; set; }
        [Category("Payment")]
        [HalfWidth]
        public DateTime TrxDate { get; set; }
        [HalfWidth]

        public Int32 TsId { get; set; }
        [HalfWidth]
        public String VNo { get; set; }
        [HalfWidth]
        public Int32 AccountHeadId { get; set; }

        [Category("Party Details")]
        [HalfWidth]
        public Int32 CustomerId { get; set; }
        [HalfWidth]
        public Int32 EmployeeId { get; set; }
        [HalfWidth]
        public Int32 SupplierId { get; set; }
        [HalfWidth]
        public Int32 VehicleId { get; set; }
        [HalfWidth]
        public Int32 ConsignmentId { get; set; }

        [Category("Trx Details")]
        [HalfWidth]
        public Decimal Amount { get; set; }
        [HalfWidth]
        public Decimal TaxPer { get; set; }
        [HalfWidth]
        public Decimal TaxAmount { get; set; }
        [HalfWidth]
        public Decimal TotalAmount { get; set; }

        [Category("Payment Details")]
        [HalfWidth]
        public Int32 PaymentMethod { get; set; }
        [HalfWidth]
        public Int32 AccountId { get; set; }
        //[HalfWidth]
        //[PdcPaymentDetailsEditor]

        //public RowListField<PDCPayments.Entities.PdcPaymentDetailsRow> PdcPaymentDetails { get; set; }
        [HalfWidth]
        public String Remarks { get; set; }

        [ReceiptEditor]
        [Visible(false)]
        public List<Accounts.Entities.PaymentRow> Payments { get; set; }
    }
}