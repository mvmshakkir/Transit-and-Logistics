
namespace SerExtraCore.Accounts.Entities
{
    using SerExtraCore.Master.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Accounts"), TableName("[dbo].[JournalEntries]")]
    [DisplayName("Receipt"), InstanceName("Receipt")]
    [ReadPermission("Accounts:Receipt")]
    [ModifyPermission("Accounts:Receipt")]
    public sealed class BankReconciliationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

       

        [DisplayName("Trx Date")]
        public DateTime? TrxDate
        {
            get { return Fields.TrxDate[this]; }
            set { Fields.TrxDate[this] = value; }
        }

       
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Remarks; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BankReconciliationRow()
            : base(Fields)
        {
        }
        [DisplayName("Remarks"), Size(500), QuickSearch, TextAreaEditor]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }
        [DisplayName("Bank Reconciliation")]
        public Boolean? BankReconciliation
        {
            get { return Fields.BankReconciliation[this]; }
            set { Fields.BankReconciliation[this] = value; }
        }

        [DisplayName("Account"),NotMapped, ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jAccount"), TextualField("AccountName")]
        [LookupEditor(typeof(AccountsRow),FilterField = "Type",FilterValue = 2)]
        public Int32? AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
        }
        [DisplayName("Account Name"), Expression("jAccount.[AccountName]"),QuickFilter,QuickSearch]
        public String AccountName
        {
            get { return Fields.AccountName[this]; }
            set { Fields.AccountName[this] = value; }
        }

        [DisplayName("Credit"), Size(18), Scale(3), NotMapped]
        public Decimal? Credit
        {
            get { return Fields.Credit[this]; }
            set { Fields.Credit[this] = value; }
        }

        [DisplayName("Debit"), Size(18), Scale(3), NotMapped]
        public Decimal? Debit
        {
            get { return Fields.Debit[this]; }
            set { Fields.Debit[this] = value; }
        }

        [DisplayName("V No"), NotNull]
        public Int32? VNo
        {
            get { return Fields.VNo[this]; }
            set { Fields.VNo[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
           
            public DateTimeField TrxDate;
            public Int32Field VNo;

            public StringField AccountName;

            public Int32Field AccountId;

            public BooleanField BankReconciliation;
            public StringField Remarks;

            public DecimalField Credit;
            public DecimalField Debit;

        }
    }
}
