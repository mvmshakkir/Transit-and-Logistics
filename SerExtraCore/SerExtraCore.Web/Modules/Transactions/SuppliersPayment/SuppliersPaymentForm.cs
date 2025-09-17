
namespace SerExtraCore.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SerExtraCore.PDCPayments;
    using SerExtraCore.Transactions.Entities;

    [FormScript("Transactions.SuppliersPayment")]
    [BasedOnRow(typeof(Entities.SuppliersPaymentRow), CheckNames = true)]
    public class SuppliersPaymentForm
    {
        [HalfWidth]
        public String Code { get; set; }
        [HalfWidth]
        public DateTime Date { get; set; }
        [HalfWidth]
        public Int32 SupplierId { get; set; }
        [HalfWidth]
        public Decimal OldBalance { get; set; }
        [Category("Invoices")]
        //public List<Int32> InvoiceVehicleDetails { get; set; }
        //public List<Int32> InvoiceCharges { get; set; }
        
        [SupplierPaymentInvoiceVehicleDetailsEditor]
        public List<SuppliersPaymentInvoiceVehicleDetailsRow> InvoiceVehicleDetails { get; set; }
       
        [SupplierPaymentInvoiceChargesEditor]
        public List<SuppliersPaymentInvoiceChargesRow> InvoiceCharges { get; set; }



        [HalfWidth]
        public Decimal TotalAmount { get; set; }
        [HalfWidth]
        public Int32 PaymentType { get; set; }

        [HalfWidth]
        public Int32 AccountId { get; set; }

        [PdcPaymentDetailsEditor]
        
        public RowListField<PDCPayments.Entities.PdcPaymentDetailsRow> PdcPaymentDetails { get; set; }

        [HalfWidth]
        public String DocumentNO { get; set; }
        [HalfWidth]
        public String Description { get; set; }
        [Category("Status")]
        [HalfWidth]
        public Int32 Status { get; set; }
        [HalfWidth]
        public Int32 StatusUser { get; set; }
        [ReceiptEditor]
        [Visible(false)]
        public List<Accounts.Entities.PaymentRow> Payments { get; set; }


    }
}