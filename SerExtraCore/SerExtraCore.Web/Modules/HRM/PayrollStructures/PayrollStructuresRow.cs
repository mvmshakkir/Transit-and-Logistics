
namespace SerExtraCore.HRM.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("HRM"), TableName("[dbo].[PayrollStructures]")]
    [DisplayName("Payroll"), InstanceName("Payroll")]
    [ReadPermission("HRM:PayrollStructures")]
    [ModifyPermission("HRM:PayrollStructures")]
    public sealed class PayrollStructuresRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Structure Name"), Size(255), NotNull, QuickSearch]
        public String StructureName
        {
            get { return Fields.StructureName[this]; }
            set { Fields.StructureName[this] = value; }
        }

        [DisplayName("From Date"), NotNull]
        public DateTime? FromDate
        {
            get { return Fields.FromDate[this]; }
            set { Fields.FromDate[this] = value; }
        }

        [DisplayName("To Date"), NotNull]
        public DateTime? ToDate
        {
            get { return Fields.ToDate[this]; }
            set { Fields.ToDate[this] = value; }
        }

        [DisplayName("Remarks"), Size(500),TextAreaEditor]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.StructureName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PayrollStructuresRow()
            : base(Fields)
        {
        }

        [DisplayName("Payroll Payment"), MasterDetailRelation(foreignKey: "PayrollStructureId"), NotMapped]
        public List<PayrollPaymentRow> PayrollPayment
        {
            get { return Fields.PayrollPayment[this]; }
            set { Fields.PayrollPayment[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField StructureName;
            public DateTimeField FromDate;
            public DateTimeField ToDate;
            public StringField Remarks;

            public RowListField<PayrollPaymentRow> PayrollPayment;
        }
    }
}
