
namespace SerExtraCore.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[VehicleSpecifications]")]
    [DisplayName("Vehicle Specifications"), InstanceName("Vehicle Specifications")]
    [ReadPermission("Master:Vehicles")]
    [ModifyPermission("Master:Vehicles")]
    public sealed class VehicleSpecificationsRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Vehicle"), NotNull, ForeignKey("[dbo].[Vehicles]", "Id"), LeftJoin("jVehicle"), TextualField("VehicleVehicleNumber")]
        public Int32? VehicleId
        {
            get { return Fields.VehicleId[this]; }
            set { Fields.VehicleId[this] = value; }
        }

        [DisplayName("Specification"), NotNull, ForeignKey("[dbo].[Specifications]", "Id"), LeftJoin("jSpecification"), TextualField("SpecificationSpecifications")]
        public Int32? SpecificationId
        {
            get { return Fields.SpecificationId[this]; }
            set { Fields.SpecificationId[this] = value; }
        }

        [DisplayName("Vehicle Type Of Vehicle"), Expression("jVehicle.[TypeOfVehicle]")]
        public Int32? VehicleTypeOfVehicle
        {
            get { return Fields.VehicleTypeOfVehicle[this]; }
            set { Fields.VehicleTypeOfVehicle[this] = value; }
        }

        [DisplayName("Vehicle Through"), Expression("jVehicle.[Through]")]
        public Int32? VehicleThrough
        {
            get { return Fields.VehicleThrough[this]; }
            set { Fields.VehicleThrough[this] = value; }
        }

        [DisplayName("Vehicle Vehicle Number"), Expression("jVehicle.[VehicleNumber]")]
        public String VehicleVehicleNumber
        {
            get { return Fields.VehicleVehicleNumber[this]; }
            set { Fields.VehicleVehicleNumber[this] = value; }
        }

        [DisplayName("Vehicle Vehicle Model"), Expression("jVehicle.[VehicleModel]")]
        public Int32? VehicleVehicleModel
        {
            get { return Fields.VehicleVehicleModel[this]; }
            set { Fields.VehicleVehicleModel[this] = value; }
        }

        [DisplayName("Vehicle Registraion Number"), Expression("jVehicle.[RegistraionNumber]")]
        public String VehicleRegistraionNumber
        {
            get { return Fields.VehicleRegistraionNumber[this]; }
            set { Fields.VehicleRegistraionNumber[this] = value; }
        }

        [DisplayName("Vehicle Description"), Expression("jVehicle.[Description]")]
        public String VehicleDescription
        {
            get { return Fields.VehicleDescription[this]; }
            set { Fields.VehicleDescription[this] = value; }
        }

        [DisplayName("Vehicle Registration Date"), Expression("jVehicle.[RegistrationDate]")]
        public DateTime? VehicleRegistrationDate
        {
            get { return Fields.VehicleRegistrationDate[this]; }
            set { Fields.VehicleRegistrationDate[this] = value; }
        }

        [DisplayName("Vehicle Expiry Date"), Expression("jVehicle.[ExpiryDate]")]
        public DateTime? VehicleExpiryDate
        {
            get { return Fields.VehicleExpiryDate[this]; }
            set { Fields.VehicleExpiryDate[this] = value; }
        }

        [DisplayName("Vehicle Driver"), Expression("jVehicle.[Driver]")]
        public Int32? VehicleDriver
        {
            get { return Fields.VehicleDriver[this]; }
            set { Fields.VehicleDriver[this] = value; }
        }

        [DisplayName("Vehicle Pdo Approved"), Expression("jVehicle.[PDOApproved]")]
        public Boolean? VehiclePdoApproved
        {
            get { return Fields.VehiclePdoApproved[this]; }
            set { Fields.VehiclePdoApproved[this] = value; }
        }

        [DisplayName("Specification Specifications"), Expression("jSpecification.[Specifications]")]
        public String SpecificationSpecifications
        {
            get { return Fields.SpecificationSpecifications[this]; }
            set { Fields.SpecificationSpecifications[this] = value; }
        }

        [DisplayName("Specification Description"), Expression("jSpecification.[Description]")]
        public String SpecificationDescription
        {
            get { return Fields.SpecificationDescription[this]; }
            set { Fields.SpecificationDescription[this] = value; }
        }
        [DisplayName("SlNo"), NotMapped]
        public Int32? Slno
        {
            get { return Fields.Slno[this]; }
            set { Fields.Slno[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VehicleSpecificationsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field VehicleId;
            public Int32Field SpecificationId;

            public Int32Field VehicleTypeOfVehicle;
            public Int32Field VehicleThrough;
            public StringField VehicleVehicleNumber;
            public Int32Field VehicleVehicleModel;
            public StringField VehicleRegistraionNumber;
            public StringField VehicleDescription;
            public DateTimeField VehicleRegistrationDate;
            public DateTimeField VehicleExpiryDate;
            public Int32Field VehicleDriver;
            public BooleanField VehiclePdoApproved;

            public Int32Field Slno;

            public StringField SpecificationSpecifications;
            public StringField SpecificationDescription;
        }
    }
}
