
namespace SerExtraCore.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[ClearanceStatus]")]
    [DisplayName("Clearance Status"), InstanceName("Clearance Status")]
    [ReadPermission("Master:ClearanceStatus")]
    [ModifyPermission("Master:ClearanceStatus")]
    [LookupScript(Permission ="*")]
    public sealed class ClearanceStatusRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Status"), Size(200), NotNull, QuickSearch]
        public String Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Status; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ClearanceStatusRow()
            : base(Fields)
        {
        }

        [DisplayName("Chart Order"), QuickSearch,NotNull]
        public Int32? ChartOrder
        {
            get { return Fields.ChartOrder[this]; }
            set { Fields.ChartOrder[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Status;
            public Int32Field ChartOrder;
        }
    }
}
