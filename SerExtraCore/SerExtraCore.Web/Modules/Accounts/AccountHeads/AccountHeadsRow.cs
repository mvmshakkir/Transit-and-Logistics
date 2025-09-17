
namespace SerExtraCore.Accounts.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Accounts"), TableName("[dbo].[AccountHeads]")]
    [DisplayName("Account Heads"), InstanceName("Account Heads")]
    [ReadPermission("Accounts:AccountHeads")]
    [ModifyPermission("Accounts:AccountHeads")]
    [LookupScript(Permission ="*",Expiration =-1)]
    public sealed class AccountHeadsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Code"), Size(200), QuickSearch]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Description"), Size(200), NotNull,QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Parent Head"), ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jParentHead"), TextualField("ParentHeadDescription")]
        [LookupEditor(typeof(AccountHeadsRow), InplaceAdd = true)]
        public Int32? ParentHeadId
        {
            get { return Fields.ParentHeadId[this]; }
            set { Fields.ParentHeadId[this] = value; }
        }

        [DisplayName("Ledger Type"), NotNull,QuickFilter,QuickSearch]
        public LedgerTypes? LedgerType
        {
            get { return (LedgerTypes?)Fields.LedgerType[this]; }
            set { Fields.LedgerType[this] = (int?)value; }
        }

        [DisplayName("Parent Head Code"), Expression("jParentHead.[Code]")]
        public String ParentHeadCode
        {
            get { return Fields.ParentHeadCode[this]; }
            set { Fields.ParentHeadCode[this] = value; }
        }

        [DisplayName("Parent Head"), Expression("jParentHead.[Description]"),QuickSearch,QuickFilter]
        public String ParentHeadDescription
        {
            get { return Fields.ParentHeadDescription[this]; }
            set { Fields.ParentHeadDescription[this] = value; }
        }

        [DisplayName("Parent Head Parent Head Id"), Expression("jParentHead.[ParentHeadId]")]
        public Int32? ParentHeadParentHeadId
        {
            get { return Fields.ParentHeadParentHeadId[this]; }
            set { Fields.ParentHeadParentHeadId[this] = value; }
        }

        [DisplayName("Parent Head Ledger Type"), Expression("jParentHead.[LedgerType]")]
        public Int32? ParentHeadLedgerType
        {
            get { return Fields.ParentHeadLedgerType[this]; }
            set { Fields.ParentHeadLedgerType[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AccountHeadsRow()
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
            public StringField Code;
            public StringField Description;
            public Int32Field ParentHeadId;
            public Int32Field LedgerType;

            public Int32Field Slno;

            public StringField ParentHeadCode;
            public StringField ParentHeadDescription;
            public Int32Field ParentHeadParentHeadId;
            public Int32Field ParentHeadLedgerType;
        }
    }
}
