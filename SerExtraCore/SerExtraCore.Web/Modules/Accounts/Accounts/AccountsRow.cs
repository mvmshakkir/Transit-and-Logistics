
namespace SerExtraCore.Accounts.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Accounts"), TableName("[dbo].[Accounts]")]
    [DisplayName("Accounts"), InstanceName("Accounts")]
    [ReadPermission("Accounts:Accounts")]
    [ModifyPermission("Accounts:Accounts")]
    [LookupScript(Permission ="*")]
    public sealed class AccountsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Type"), NotNull,LookupInclude,QuickSearch,QuickFilter]
        public AccountTypes? Type
        {
            get { return (AccountTypes?)Fields.Type[this]; }
            set { Fields.Type[this] = (int?)value; }
        }

        [DisplayName("Account Name"), Size(200), NotNull, QuickSearch]
        public String AccountName
        {
            get { return Fields.AccountName[this]; }
            set { Fields.AccountName[this] = value; }
        }

        [DisplayName("Account No"), Size(500), NotNull,QuickSearch]
        public String AccountNo
        {
            get { return Fields.AccountNo[this]; }
            set { Fields.AccountNo[this] = value; }
        }

        [DisplayName("Bank Name"), Size(200),QuickSearch]
        public String BankName
        {
            get { return Fields.BankName[this]; }
            set { Fields.BankName[this] = value; }
        }

        [DisplayName("Branch Name"), Size(200),QuickSearch]
        public String BrachName
        {
            get { return Fields.BrachName[this]; }
            set { Fields.BrachName[this] = value; }
        }

        [DisplayName("Account Head"), NotNull, ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jAccountHead"), TextualField("AccountHeadDescription")]
        [LookupEditor(typeof(Accounts.Entities.AccountHeadsRow),InplaceAdd =true), LookupInclude]
        public Int32? AccountHeadId
        {
            get { return Fields.AccountHeadId[this]; }
            set { Fields.AccountHeadId[this] = value; }
        }


        [DisplayName("Account Head Code"), Expression("jAccountHead.[Code]")]
        public String AccountHeadCode
        {
            get { return Fields.AccountHeadCode[this]; }
            set { Fields.AccountHeadCode[this] = value; }
        }

        [DisplayName("Account Head Description"), Expression("jAccountHead.[Description]"),QuickSearch,QuickFilter]
        public String AccountHeadDescription
        {
            get { return Fields.AccountHeadDescription[this]; }
            set { Fields.AccountHeadDescription[this] = value; }
        }

        [DisplayName("Account Head Parent Head Id"), Expression("jAccountHead.[ParentHeadId]")]
        public Int32? AccountHeadParentHeadId
        {
            get { return Fields.AccountHeadParentHeadId[this]; }
            set { Fields.AccountHeadParentHeadId[this] = value; }
        }

        [DisplayName("Account Head Ledger Type"), Expression("jAccountHead.[LedgerType]")]
        public Int32? AccountHeadLedgerType
        {
            get { return Fields.AccountHeadLedgerType[this]; }
            set { Fields.AccountHeadLedgerType[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AccountName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AccountsRow()
            : base(Fields)
        {
        }
        [DisplayName("SlNo"), NotMapped]
        public Int32? Slno
        {
            get { return Fields.Slno[this]; }
            set { Fields.Slno[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field Type;
            public StringField AccountName;
            public StringField AccountNo;
            public StringField BankName;
            public StringField BrachName;
            public Int32Field AccountHeadId;

            public Int32Field Slno;

            public StringField AccountHeadCode;
            public StringField AccountHeadDescription;
            public Int32Field AccountHeadParentHeadId;
            public Int32Field AccountHeadLedgerType;
        }
    }
}
