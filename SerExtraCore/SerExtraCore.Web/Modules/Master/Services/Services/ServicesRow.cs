using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SerExtraCore.Services.Entities
{
    [ConnectionKey("Default"), Module("Services"), TableName("[dbo].[Services]")]
    [DisplayName("Services"), InstanceName("Services")]
    [ReadPermission("Master:Services")]
    [ModifyPermission("Master:Services")]
    [LookupScript]
    public sealed class ServicesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get => Fields.Id[this];
            set => Fields.Id[this] = value;
        }

        [DisplayName("Service Name"), Size(50), QuickSearch]
        public String ServiceName
        {
            get => Fields.ServiceName[this];
            set => Fields.ServiceName[this] = value;
        }

        IIdField IIdRow.IdField => Fields.Id;

        StringField INameRow.NameField => Fields.ServiceName;

        public static readonly RowFields Fields = new RowFields().Init();

        public ServicesRow()
            : base(Fields)
        {
        }


        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField ServiceName;
        }
    }
}
