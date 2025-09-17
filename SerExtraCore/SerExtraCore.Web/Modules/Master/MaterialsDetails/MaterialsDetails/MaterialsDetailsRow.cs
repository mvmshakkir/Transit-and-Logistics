using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using SerExtraCore.Transactions.Entities;
using SerExtraCore.UOMAmount.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace SerExtraCore.MaterialsDetails.Entities
{
    [ConnectionKey("Default"), Module("MaterialsDetails"), TableName("[dbo].[MaterialsDetails]")]
    [DisplayName("Materials Details"), InstanceName("Materials Details")]
    [ReadPermission("Master:MaterialsDetails")]
    [ModifyPermission("Master:MaterialsDetails")]
    [LookupScript]
    public sealed class MaterialsDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get => Fields.Id[this];
            set => Fields.Id[this] = value;
        }

        [DisplayName("Materials"), Size(200), QuickSearch]
        public String Materials
        {
            get => Fields.Materials[this];
            set => Fields.Materials[this] = value;
        }

        [DisplayName("Units"), MasterDetailRelation(foreignKey: "MaterialsId"), NotMapped]
        [MinSelectLevel(SelectLevel.List)]
        public List<UOMAmountRow> Units
        {
            get { return Fields.Units[this]; }
            set { Fields.Units[this] = value; }
        }


        //[MasterDetailRelation(foreignKey: nameof(UOMAmountRow.MaterialsId))]
        //[DisplayName("Units"), NotMapped]
        //public List<UOMAmountRow> Units { get => fields.Units[this]; set => fields.Units[this] = value; }



        IIdField IIdRow.IdField => Fields.Id;

        StringField INameRow.NameField => Fields.Materials;

        public static readonly RowFields Fields = new RowFields().Init();

        public MaterialsDetailsRow()
            : base(Fields)
        {
        }


        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Materials;
            public RowListField<UOMAmountRow> Units;

        }
    }
}
