
namespace SerExtraCore.HRM.Entities
{
    using SerExtraCore.Master.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("HRM"), TableName("[dbo].[EmployeeLeaves]")]
    [DisplayName("Employee Leaves"), InstanceName("Employee Leaves")]
    [ReadPermission("HRM:EmployeeLeaves")]
    [ModifyPermission("HRM:EmployeeLeaves")]
    public sealed class EmployeeLeavesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[dbo].[EmployeeMaster]", "Id"), LeftJoin("jEmployee"), TextualField("EmployeeEmployeeName")]
        [LookupEditor(typeof(EmployeeMasterRow), InplaceAdd = true)]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("From Date"), NotNull,QuickFilter,QuickSearch,LookupInclude]
        public DateTime? FromDate
        {
            get { return Fields.FromDate[this]; }
            set { Fields.FromDate[this] = value; }
        }

        [DisplayName("To Date"), NotNull, QuickFilter, QuickSearch, LookupInclude]
        public DateTime? ToDate
        {
            get { return Fields.ToDate[this]; }
            set { Fields.ToDate[this] = value; }
        }

        [DisplayName("Days"), NotNull]
        public Int32? Days
        {
            get { return Fields.Days[this]; }
            set { Fields.Days[this] = value; }
        }

        [DisplayName("Remarks"),TextAreaEditor]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("Attachments"), MultipleFileUploadEditor(FilenameFormat = "Claims/Attatchments/~"),Required(true)]
        public String Attachments
        {
            get { return Fields.Attachments[this]; }
            set { Fields.Attachments[this] = value; }
        }

        [DisplayName("Employee Code"), Expression("jEmployee.[EmployeeCode]")]
        public String EmployeeEmployeeCode
        {
            get { return Fields.EmployeeEmployeeCode[this]; }
            set { Fields.EmployeeEmployeeCode[this] = value; }
        }

        [DisplayName("Employee Name"), Expression("jEmployee.[EmployeeName]"), QuickFilter, QuickSearch, LookupInclude]
        public String EmployeeEmployeeName
        {
            get { return Fields.EmployeeEmployeeName[this]; }
            set { Fields.EmployeeEmployeeName[this] = value; }
        }

        [DisplayName("Employee Address"), Expression("jEmployee.[Address]")]
        public String EmployeeAddress
        {
            get { return Fields.EmployeeAddress[this]; }
            set { Fields.EmployeeAddress[this] = value; }
        }

        [DisplayName("Employee Country Id"), Expression("jEmployee.[CountryId]")]
        public Int32? EmployeeCountryId
        {
            get { return Fields.EmployeeCountryId[this]; }
            set { Fields.EmployeeCountryId[this] = value; }
        }

        [DisplayName("Employee Employee Status"), Expression("jEmployee.[EmployeeStatus]")]
        public Int32? EmployeeEmployeeStatus
        {
            get { return Fields.EmployeeEmployeeStatus[this]; }
            set { Fields.EmployeeEmployeeStatus[this] = value; }
        }

        [DisplayName("Employee Employee Type Id"), Expression("jEmployee.[EmployeeTypeId]")]
        public Int32? EmployeeEmployeeTypeId
        {
            get { return Fields.EmployeeEmployeeTypeId[this]; }
            set { Fields.EmployeeEmployeeTypeId[this] = value; }
        }

        [DisplayName("Employee Designation Id"), Expression("jEmployee.[DesignationId]")]
        public Int32? EmployeeDesignationId
        {
            get { return Fields.EmployeeDesignationId[this]; }
            set { Fields.EmployeeDesignationId[this] = value; }
        }

        [DisplayName("Employee Resident Id"), Expression("jEmployee.[ResidentID]")]
        public String EmployeeResidentId
        {
            get { return Fields.EmployeeResidentId[this]; }
            set { Fields.EmployeeResidentId[this] = value; }
        }

        [DisplayName("Employee Rid Expiry Date"), Expression("jEmployee.[RIDExpiryDate]")]
        public DateTime? EmployeeRidExpiryDate
        {
            get { return Fields.EmployeeRidExpiryDate[this]; }
            set { Fields.EmployeeRidExpiryDate[this] = value; }
        }

        [DisplayName("Employee Passport Number"), Expression("jEmployee.[PassportNumber]")]
        public String EmployeePassportNumber
        {
            get { return Fields.EmployeePassportNumber[this]; }
            set { Fields.EmployeePassportNumber[this] = value; }
        }

        [DisplayName("Employee Passport Expiry Date"), Expression("jEmployee.[PassportExpiryDate]")]
        public DateTime? EmployeePassportExpiryDate
        {
            get { return Fields.EmployeePassportExpiryDate[this]; }
            set { Fields.EmployeePassportExpiryDate[this] = value; }
        }

        [DisplayName("Employee Mobile Number"), Expression("jEmployee.[MobileNumber]")]
        public String EmployeeMobileNumber
        {
            get { return Fields.EmployeeMobileNumber[this]; }
            set { Fields.EmployeeMobileNumber[this] = value; }
        }

        [DisplayName("Employee Basic Salary"), Expression("jEmployee.[BasicSalary]")]
        public Decimal? EmployeeBasicSalary
        {
            get { return Fields.EmployeeBasicSalary[this]; }
            set { Fields.EmployeeBasicSalary[this] = value; }
        }

        [DisplayName("Employee Allowance"), Expression("jEmployee.[Allowance]")]
        public Decimal? EmployeeAllowance
        {
            get { return Fields.EmployeeAllowance[this]; }
            set { Fields.EmployeeAllowance[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Attachments; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeeLeavesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field EmployeeId;
            public DateTimeField FromDate;
            public DateTimeField ToDate;
            public Int32Field Days;
            public StringField Remarks;
            public StringField Attachments;

            public StringField EmployeeEmployeeCode;
            public StringField EmployeeEmployeeName;
            public StringField EmployeeAddress;
            public Int32Field EmployeeCountryId;
            public Int32Field EmployeeEmployeeStatus;
            public Int32Field EmployeeEmployeeTypeId;
            public Int32Field EmployeeDesignationId;
            public StringField EmployeeResidentId;
            public DateTimeField EmployeeRidExpiryDate;
            public StringField EmployeePassportNumber;
            public DateTimeField EmployeePassportExpiryDate;
            public StringField EmployeeMobileNumber;
            public DecimalField EmployeeBasicSalary;
            public DecimalField EmployeeAllowance;
        }
    }
}
