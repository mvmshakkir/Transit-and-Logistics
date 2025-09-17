using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SerExtraCore.PumpDetails.Entities
{
    [ConnectionKey("Default"), Module("PumpDetails"), TableName("[dbo].[PumpDetails]")]
    [DisplayName("Pump Details"), InstanceName("Pump Details")]
    [ReadPermission("Master:PumpDetails")]
    [ModifyPermission("Master:PumpDetails")]
    [LookupScript]
    public sealed class PumpDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get => Fields.Id[this];
            set => Fields.Id[this] = value;
        }

        [DisplayName("Pump Name"), Size(100), QuickSearch]
        public String PumpName
        {
            get => Fields.PumpName[this];
            set => Fields.PumpName[this] = value;
        }

        [DisplayName("Pump Place"), Size(100)]
        public String PumpPlace
        {
            get => Fields.PumpPlace[this];
            set => Fields.PumpPlace[this] = value;
        }

        [DisplayName("Address"), Size(250)]
        public String Address
        {
            get => Fields.Address[this];
            set => Fields.Address[this] = value;
        }

        IIdField IIdRow.IdField => Fields.Id;

        StringField INameRow.NameField => Fields.PumpName;

        public static readonly RowFields Fields = new RowFields().Init();

        public PumpDetailsRow()
            : base(Fields)
        {
        }


        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField PumpName;
            public StringField PumpPlace;
            public StringField Address;
        }
    }
}
