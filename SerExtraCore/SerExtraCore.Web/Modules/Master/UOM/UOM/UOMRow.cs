using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SerExtraCore.UOM.Entities
{
    [ConnectionKey("Default"), Module("UOM"), TableName("[dbo].[UOM]")]
    [DisplayName("Uom"), InstanceName("Uom")]
    [ReadPermission("Master:UOM")]
    [ModifyPermission("Master:UOM")]
    [LookupScript]
    public sealed class UOMRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get => Fields.Id[this];
            set => Fields.Id[this] = value;
        }

        [DisplayName("Unit"), Size(200),LookupInclude, QuickSearch,MinSelectLevel(SelectLevel.Details)]
        public String Unit
        {
            get => Fields.Unit[this];
            set => Fields.Unit[this] = value;
        }

        IIdField IIdRow.IdField => Fields.Id;

        StringField INameRow.NameField => Fields.Unit;

        public static readonly RowFields Fields = new RowFields().Init();

        public UOMRow()
            : base(Fields)
        {
        }


        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Unit;
        }
    }
}
