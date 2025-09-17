
namespace SerExtraCore.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[EmployeeMaster]")]
    [DisplayName("Employee Master"), InstanceName("Employee Master")]
    [ReadPermission("Master:EmployeeMaster")]
    [ModifyPermission("Master:EmployeeMaster")]
    [LookupScript(Permission = "*")]
    public sealed class EmployeeMasterRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Employee Code"), Size(200), NotNull, QuickSearch]
        public String EmployeeCode
        {
            get { return Fields.EmployeeCode[this]; }
            set { Fields.EmployeeCode[this] = value; }
        }

        [DisplayName("Employee Name"), Size(200), NotNull,LookupInclude]
        public String EmployeeName
        {
            get { return Fields.EmployeeName[this]; }
            set { Fields.EmployeeName[this] = value; }
        }

        [DisplayName("Address"), Size(500),TextAreaEditor]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Country"), NotNull, ForeignKey("[dbo].[Countries]", "Id"), LeftJoin("jCountry"), TextualField("CountryCountryName")]
        [LookupEditor(typeof(CountriesRow),InplaceAdd =true),QuickSearch,QuickFilter]
        public Int32? CountryId
        {
            get { return Fields.CountryId[this]; }
            set { Fields.CountryId[this] = value; }
        }

        [DisplayName("Employee Status"), NotNull,DefaultValue(1),QuickFilter,QuickSearch]
        public EmployeeStatus? EmployeeStatus
        {
            get { return (EmployeeStatus?)Fields.EmployeeStatus[this]; }
            set { Fields.EmployeeStatus[this] =(int?) value; }
        }

        [DisplayName("Employee Type"), NotNull, ForeignKey("[dbo].[EmployeeType]", "Id"), LeftJoin("jEmployeeType"), TextualField("EmployeeTypeType")]
        [LookupEditor(typeof(EmployeeTypeRow), InplaceAdd = true), QuickFilter, QuickSearch]
        public Int32? EmployeeTypeId
        {
            get { return Fields.EmployeeTypeId[this]; }
            set { Fields.EmployeeTypeId[this] = value; }
        }

        [DisplayName("Designation"), ForeignKey("[dbo].[Designation]", "Id"), LeftJoin("jDesignation"), TextualField("DesignationName")]
        [LookupEditor(typeof(DesignationRow), InplaceAdd = true), QuickFilter, QuickSearch]
        public Int32? DesignationId
        {
            get { return Fields.DesignationId[this]; }
            set { Fields.DesignationId[this] = value; }
        }

        [DisplayName("Resident ID"), Column("ResidentID"), Size(200),QuickSearch]
        public String ResidentId
        {
            get { return Fields.ResidentId[this]; }
            set { Fields.ResidentId[this] = value; }
        }

        [DisplayName("RID Expiry Date"), Column("RIDExpiryDate"),QuickSearch,QuickFilter]
        public DateTime? RidExpiryDate
        {
            get { return Fields.RidExpiryDate[this]; }
            set { Fields.RidExpiryDate[this] = value; }
        }

        [DisplayName("Passport Number"), Size(200),QuickSearch]
        public String PassportNumber
        {
            get { return Fields.PassportNumber[this]; }
            set { Fields.PassportNumber[this] = value; }
        }

        [DisplayName("Passport Expiry Date"), QuickSearch, QuickFilter]
        public DateTime? PassportExpiryDate
        {
            get { return Fields.PassportExpiryDate[this]; }
            set { Fields.PassportExpiryDate[this] = value; }
        }

        [DisplayName("Mobile Number"),LookupInclude, Size(200),QuickSearch]
        public String MobileNumber
        {
            get { return Fields.MobileNumber[this]; }
            set { Fields.MobileNumber[this] = value; }
        }

        [DisplayName("Basic Salary"), Size(18), Scale(3)]
        public Decimal? BasicSalary
        {
            get { return Fields.BasicSalary[this]; }
            set { Fields.BasicSalary[this] = value; }
        }

        [DisplayName("Allowance"), Size(18), Scale(3)]
        public Decimal? Allowance
        {
            get { return Fields.Allowance[this]; }
            set { Fields.Allowance[this] = value; }
        }

        [DisplayName("Country Code"), Expression("jCountry.[CountryCode]"),QuickFilter,QuickSearch]
        public String CountryCountryCode
        {
            get { return Fields.CountryCountryCode[this]; }
            set { Fields.CountryCountryCode[this] = value; }
        }

        [DisplayName("Country Country Name"), Expression("jCountry.[CountryName]"),QuickFilter,QuickSearch]
        public String CountryCountryName
        {
            get { return Fields.CountryCountryName[this]; }
            set { Fields.CountryCountryName[this] = value; }
        }

        [DisplayName("Employee Type"), Expression("jEmployeeType.[Type]"),QuickFilter,QuickSearch]
        public String EmployeeTypeType
        {
            get { return Fields.EmployeeTypeType[this]; }
            set { Fields.EmployeeTypeType[this] = value; }
        }

        [DisplayName("Employee Type Description"), Expression("jEmployeeType.[Description]")]
        public String EmployeeTypeDescription
        {
            get { return Fields.EmployeeTypeDescription[this]; }
            set { Fields.EmployeeTypeDescription[this] = value; }
        }

        [DisplayName("Designation Name"), Expression("jDesignation.[Name]"),QuickSearch,QuickFilter]
        public String DesignationName
        {
            get { return Fields.DesignationName[this]; }
            set { Fields.DesignationName[this] = value; }
        }

        [DisplayName("Designation Description"), Expression("jDesignation.[Description]")]
        public String DesignationDescription
        {
            get { return Fields.DesignationDescription[this]; }
            set { Fields.DesignationDescription[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FullName; }
        }
        [DisplayName("FullName"), QuickSearch]
        [Expression("CONCAT(T0.[EmployeeName], CONCAT(' ', T0.[EmployeeCode]))")]
        [Expression("(T0.EmployeeName || ' ' || T0.EmployeeCode)", Dialect = "Sqlite")]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }
        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeeMasterRow()
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
            public StringField EmployeeCode;
            public StringField EmployeeName;
            public StringField Address;
            public Int32Field CountryId;
            public Int32Field EmployeeStatus;
            public Int32Field EmployeeTypeId;
            public Int32Field DesignationId;
            public StringField ResidentId;
            public DateTimeField RidExpiryDate;
            public StringField PassportNumber;
            public DateTimeField PassportExpiryDate;
            public StringField MobileNumber;
            public DecimalField BasicSalary;
            public DecimalField Allowance;

            public Int32Field Slno;

            public StringField FullName;

            public StringField CountryCountryCode;
            public StringField CountryCountryName;

            public StringField EmployeeTypeType;
            public StringField EmployeeTypeDescription;

            public StringField DesignationName;
            public StringField DesignationDescription;
        }
    }
}
