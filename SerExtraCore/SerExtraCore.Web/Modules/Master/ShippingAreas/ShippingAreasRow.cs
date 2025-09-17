
namespace SerExtraCore.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[ShippingAreas]")]
    [DisplayName("Shipping Areas"), InstanceName("Shipping Areas")]
    [ReadPermission("Master:ShippingAreas")]
    [ModifyPermission("Master:ShippingAreas")]
    [LookupScript(Permission = "*")]
    public sealed class ShippingAreasRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Area Name"), Size(200), NotNull, QuickSearch]
        public String AreaName
        {
            get { return Fields.AreaName[this]; }
            set { Fields.AreaName[this] = value; }
        }

        [DisplayName("Description"), Size(500),TextAreaEditor]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AreaName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ShippingAreasRow()
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
            public StringField AreaName;
            public StringField Description;

            public Int32Field Slno;
        }
    }
}
