using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SerExtraCore.CommissionPercentage.Entities
{
    [ConnectionKey("Default"), Module("CommissionPercentage"), TableName("[dbo].[CommissionPercentage]")]
    [DisplayName("Commission Percentage"), InstanceName("Commission Percentage")]
    [ReadPermission("Master:CommissionPercentage")]
    [ModifyPermission("Master:CommissionPercentage")]
    [LookupScript]
    public sealed class CommissionPercentageRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get => Fields.Id[this];
            set => Fields.Id[this] = value;
        }

        [DisplayName("Percentage"),NameProperty, Size(10), Scale(2)]
        public Decimal? Percentage
        {
            get => Fields.Percentage[this];
            set => Fields.Percentage[this] = value;
        }

        IIdField IIdRow.IdField => Fields.Id;

        public static readonly RowFields Fields = new RowFields().Init();

        public CommissionPercentageRow()
            : base(Fields)
        {
        }


        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DecimalField Percentage;
        }
    }
}
