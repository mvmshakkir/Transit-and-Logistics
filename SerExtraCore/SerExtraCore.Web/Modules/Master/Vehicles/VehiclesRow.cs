
namespace SerExtraCore.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using SerExtraCore.States.Entities;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[Vehicles]")]
    [DisplayName("Vehicles"), InstanceName("Vehicles")]
    [ReadPermission("Master:Vehicles")]
    [ModifyPermission("Master:Vehicles")]
    [LookupScript(Permission ="*")]
    public sealed class VehiclesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }
        
        [DisplayName("Type Of Vehicle"), NotNull,QuickFilter,QuickSearch,LookupInclude]
        public VehicleTypes? TypeOfVehicle
        {
            get { return (VehicleTypes?)Fields.TypeOfVehicle[this]; }
            set { Fields.TypeOfVehicle[this] = (int?)value; }
        }

        [DisplayName("Through"), ForeignKey("[dbo].[Outsource]", "Id"), LeftJoin("jThrough"), TextualField("ThroughDescription")]
        [LookupEditor(typeof(OutsourceRow),InplaceAdd =true), QuickFilter, QuickSearch]
        public Int32? Through
        {
            get { return Fields.Through[this]; }
            set { Fields.Through[this] = value; }
        }

        [DisplayName("Vehicle Number"), Size(200), NotNull, QuickSearch, LookupInclude]
        public String VehicleNumber
        {
            get { return Fields.VehicleNumber[this]; }
            set { Fields.VehicleNumber[this] = value; }
        }
        [DisplayName("HSN"), Size(200),  QuickSearch, LookupInclude]
        public String HSN
        {
            get { return Fields.HSN[this]; }
            set { Fields.HSN[this] = value; }
        }

        [DisplayName("Vehicle Model"), ForeignKey("[dbo].[VehicleModels]", "Id"), LeftJoin("jVehicleModels"), TextualField("ModelName")]
        [LookupEditor(typeof(VehicleModelsRow), InplaceAdd = true), QuickFilter, QuickSearch]
        public Int32? VehicleModel
        {
            get { return Fields.VehicleModel[this]; }
            set { Fields.VehicleModel[this] = value; }
        }

        [DisplayName("Registration Number"), Size(200)]
        public String RegistraionNumber
        {
            get { return Fields.RegistraionNumber[this]; }
            set { Fields.RegistraionNumber[this] = value; }
        }

        [DisplayName("Description"), Size(500),TextAreaEditor, LookupInclude]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Registration Date"), QuickFilter, QuickSearch]
        public DateTime? RegistrationDate
        {
            get { return Fields.RegistrationDate[this]; }
            set { Fields.RegistrationDate[this] = value; }
        }

        [DisplayName("Expiry Date"), QuickFilter, QuickSearch]
        public DateTime? ExpiryDate
        {
            get { return Fields.ExpiryDate[this]; }
            set { Fields.ExpiryDate[this] = value; }
        }

        [DisplayName("Driver"), ForeignKey("[dbo].[EmployeeMaster]", "Id"), LeftJoin("jDriver"), TextualField("DriverEmployeeName")]
        [LookupEditor(typeof(EmployeeMasterRow),InplaceAdd =true), LookupInclude]
        public Int32? Driver
        {
            get { return Fields.Driver[this]; }
            set { Fields.Driver[this] = value; }
        }

        [DisplayName("Pdo Approved"), Column("PDOApproved"), NotNull]
        public Boolean? PdoApproved
        {
            get { return Fields.PdoApproved[this]; }
            set { Fields.PdoApproved[this] = value; }
        }

        [DisplayName("Through Name"), Expression("jThrough.[Name]")]
        public Int32? ThroughName
        {
            get { return Fields.ThroughName[this]; }
            set { Fields.ThroughName[this] = value; }
        }

        [DisplayName("Through Description"), Expression("jThrough.[Description]")]
        public String ThroughDescription
        {
            get { return Fields.ThroughDescription[this]; }
            set { Fields.ThroughDescription[this] = value; }
        }

        [DisplayName("Driver Employee Code"), Expression("jDriver.[EmployeeCode]"), QuickFilter, QuickSearch]
        public String DriverEmployeeCode
        {
            get { return Fields.DriverEmployeeCode[this]; }
            set { Fields.DriverEmployeeCode[this] = value; }
        }

        [DisplayName("Driver Name"), Expression("jDriver.[EmployeeName]"), QuickFilter, QuickSearch]
        public String DriverEmployeeName
        {
            get { return Fields.DriverEmployeeName[this]; }
            set { Fields.DriverEmployeeName[this] = value; }
        }

        [DisplayName("Driver Address"), Expression("jDriver.[Address]")]
        public String DriverAddress
        {
            get { return Fields.DriverAddress[this]; }
            set { Fields.DriverAddress[this] = value; }
        }

        [DisplayName("Driver Country Id"), Expression("jDriver.[CountryId]")]
        public Int32? DriverCountryId
        {
            get { return Fields.DriverCountryId[this]; }
            set { Fields.DriverCountryId[this] = value; }
        }

        [DisplayName("Driver Employee Status"), Expression("jDriver.[EmployeeStatus]")]
        public Int32? DriverEmployeeStatus
        {
            get { return Fields.DriverEmployeeStatus[this]; }
            set { Fields.DriverEmployeeStatus[this] = value; }
        }

        [DisplayName("Driver Employee Type Id"), Expression("jDriver.[EmployeeTypeId]")]
        public Int32? DriverEmployeeTypeId
        {
            get { return Fields.DriverEmployeeTypeId[this]; }
            set { Fields.DriverEmployeeTypeId[this] = value; }
        }

        [DisplayName("Driver Designation Id"), Expression("jDriver.[DesignationId]")]
        public Int32? DriverDesignationId
        {
            get { return Fields.DriverDesignationId[this]; }
            set { Fields.DriverDesignationId[this] = value; }
        }

        [DisplayName("Driver Resident Id"), Expression("jDriver.[ResidentID]")]
        public String DriverResidentId
        {
            get { return Fields.DriverResidentId[this]; }
            set { Fields.DriverResidentId[this] = value; }
        }

        [DisplayName("Driver Rid Expiry Date"), Expression("jDriver.[RIDExpiryDate]")]
        public DateTime? DriverRidExpiryDate
        {
            get { return Fields.DriverRidExpiryDate[this]; }
            set { Fields.DriverRidExpiryDate[this] = value; }
        }

        [DisplayName("Driver Passport Number"), Expression("jDriver.[PassportNumber]")]
        public String DriverPassportNumber
        {
            get { return Fields.DriverPassportNumber[this]; }
            set { Fields.DriverPassportNumber[this] = value; }
        }

        [DisplayName("Driver Passport Expiry Date"), Expression("jDriver.[PassportExpiryDate]")]
        public DateTime? DriverPassportExpiryDate
        {
            get { return Fields.DriverPassportExpiryDate[this]; }
            set { Fields.DriverPassportExpiryDate[this] = value; }
        }

        [DisplayName("Driver Mobile Number"), Expression("jDriver.[MobileNumber]")]
        public String DriverMobileNumber
        {
            get { return Fields.DriverMobileNumber[this]; }
            set { Fields.DriverMobileNumber[this] = value; }
        }

        [DisplayName("Driver Basic Salary"), Expression("jDriver.[BasicSalary]")]
        public Decimal? DriverBasicSalary
        {
            get { return Fields.DriverBasicSalary[this]; }
            set { Fields.DriverBasicSalary[this] = value; }
        }

        [DisplayName("Driver Allowance"), Expression("jDriver.[Allowance]")]
        public Decimal? DriverAllowance
        {
            get { return Fields.DriverAllowance[this]; }
            set { Fields.DriverAllowance[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.VehicleNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VehiclesRow()
            : base(Fields)
        {
        }
        [DisplayName("Model Name"),  Expression("jVehicleModels.[ModelName]"),QuickFilter,QuickSearch]
        public String ModelName
        {
            get { return Fields.ModelName[this]; }
            set { Fields.ModelName[this] = value; }
        }
        [LookupEditor(typeof(SpecificationsRow), Multiple = true,InplaceAdd =true), NotMapped]
        [LinkingSetRelation(typeof(VehicleSpecificationsRow), "VehicleId", "SpecificationId")]
        [MinSelectLevel(SelectLevel.Details), QuickFilter(CssClass = "hidden-xs"),DisplayName("Specifications")]
        public List<Int32> VehicleSpecifications
        {
            get { return Fields.VehicleSpecifications[this]; }
            set { Fields.VehicleSpecifications[this] = value; }
        }
        [DisplayName("Trailer")]
        public String PrimeMover
        {
            get { return Fields.PrimeMover[this]; }
            set { Fields.PrimeMover[this] = value; }
        }

        [DisplayName("Supplier"), ForeignKey("[dbo].[Supplier]", "Id"), LeftJoin("jSupplier"), TextualField("ThroughDescription")]
        [LookupEditor(typeof(SupplierRow), InplaceAdd = true), QuickFilter, QuickSearch]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        [DisplayName("Supplier Name"), Expression("jSupplier.[SupplierName]"),LookupInclude,QuickFilter,QuickSearch]
        public String SupplierName
        {
            get { return Fields.SupplierName[this]; }
            set { Fields.SupplierName[this] = value; }
        }
        [DisplayName("SlNo"), NotMapped]
        public Int32? Slno
        {
            get { return Fields.Slno[this]; }
            set { Fields.Slno[this] = value; }
        }
        [DisplayName("Owner"), ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jState"), TextualField("CustomerName")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = true), QuickFilter, QuickSearch]
        public Int32? OwnerId
        {
            get { return Fields.OwnerId[this]; }
            set { Fields.OwnerId[this] = value; }
        }

        [DisplayName("Owner"), Expression("jState.[CustomerName]"), LookupInclude, QuickSearch]
        [MinSelectLevel(SelectLevel.List)]
        public String OwnerName
        {
            get { return Fields.OwnerName[this]; }
            set { Fields.OwnerName[this] = value; }
        }



        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field TypeOfVehicle;
            public Int32Field Through;
            public StringField VehicleNumber;
            public Int32Field VehicleModel;
            public StringField RegistraionNumber;
            public StringField Description;
            public DateTimeField RegistrationDate;
            public DateTimeField ExpiryDate;
            public Int32Field Driver;
            public BooleanField PdoApproved;

            public Int32Field SupplierId;

            public Int32Field Slno;

            public ListField<Int32> VehicleSpecifications;

            public StringField PrimeMover;

            public Int32Field ThroughName;
            public StringField ThroughDescription;

            public StringField SupplierName;


            public StringField DriverEmployeeCode;
            public StringField DriverEmployeeName;
            public StringField DriverAddress;
            public Int32Field DriverCountryId;
            public Int32Field DriverEmployeeStatus;
            public Int32Field DriverEmployeeTypeId;
            public Int32Field DriverDesignationId;
            public StringField DriverResidentId;
            public DateTimeField DriverRidExpiryDate;
            public StringField DriverPassportNumber;
            public DateTimeField DriverPassportExpiryDate;
            public StringField DriverMobileNumber;
            public DecimalField DriverBasicSalary;
            public DecimalField DriverAllowance;

            public StringField ModelName;
            public StringField HSN;

            public Int32Field OwnerId;
            public StringField OwnerName;
        }
    }
}
