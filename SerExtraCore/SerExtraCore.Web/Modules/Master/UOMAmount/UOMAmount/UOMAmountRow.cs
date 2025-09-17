using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using SerExtraCore.Master.Entities;
using SerExtraCore.MaterialsDetails.Entities;
using SerExtraCore.UOM.Entities;
using System;
using System.ComponentModel;
using System.IO;

//using MaterialsDetailsRow = SerExtraCore.Master.Entities.MaterialsDetailsRow;

namespace SerExtraCore.UOMAmount.Entities
{
    [ConnectionKey("Default"), Module("UOMAmount"), TableName("[dbo].[UOMAmount]")]
    [DisplayName("Uom Amount"), InstanceName("Uom Amount")]
    [ReadPermission("Master:UOMAmount")]
    [ModifyPermission("Master:UOMAmount")]
    [LookupScript]
    [MinSelectLevel(SelectLevel.List)]

    public sealed class UOMAmountRow : Row, IIdRow
    {
        const string jMaterials = nameof(jMaterials);
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get => Fields.Id[this];
            set => Fields.Id[this] = value;
        }

        [DisplayName("Rate"),LookupInclude, Size(10), Scale(2)]
        public Decimal? Rate
        {
            get => Fields.Rate[this];
            set => Fields.Rate[this] = value;
        }

      


        [DisplayName("Unit"), ForeignKey("[dbo].[UOM]", "Id"), LookupInclude, LeftJoin("jUOM"), TextualField("Unit")]
        [LookupEditor(typeof(UOMRow), InplaceAdd = true), QuickFilter, QuickSearch]
        public Int32? UomId
        {
            get { return Fields.UomId[this]; }
            set { Fields.UomId[this] = value; }
        }

        [DisplayName("Unit"), Expression("jUOM.[Unit]"), LookupInclude,  QuickSearch]
        [MinSelectLevel(SelectLevel.List)]
        public String UomUnit
        {
            get { return Fields.UomUnit[this]; }
            set { Fields.UomUnit[this] = value; }
        }


        [DisplayName("Unit"), ForeignKey("[dbo].[MaterialsDetails]", "Id"),  LeftJoin("jMaterials"), LookupInclude,TextualField("Materials")]
        [LookupEditor(typeof(MaterialsDetailsRow), InplaceAdd = true), QuickFilter, QuickSearch]
        public Int32? MaterialsId
        {
            get { return Fields.MaterialsId[this]; }
            set { Fields.MaterialsId[this] = value; }
        }

        [DisplayName("Unit"), Expression("jMaterials.[Materials]"), LookupInclude, QuickFilter, QuickSearch]
        [MinSelectLevel(SelectLevel.List)]
        public String Materials
        {
            get { return Fields.Materials[this]; }
            set { Fields.Materials[this] = value; }
        }








        IIdField IIdRow.IdField => Fields.Id;

        public static readonly RowFields Fields = new RowFields().Init();

        public UOMAmountRow()
            : base(Fields)
        {
        }


        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DecimalField Rate;
            public Int32Field MaterialsId;
            public Int32Field UomId;

            public StringField Materials;

            public StringField UomUnit;
        }

        
    }
}
