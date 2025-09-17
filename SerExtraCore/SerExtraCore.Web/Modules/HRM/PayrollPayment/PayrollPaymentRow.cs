
namespace SerExtraCore.HRM.Entities
{
    using SerExtraCore.Accounts.Entities;
    using SerExtraCore.Master.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("HRM"), TableName("[dbo].[PayrollPayment]")]
    [DisplayName("Payroll Payment"), InstanceName("Payroll Payment")]
    [ReadPermission("HRM:PayrollStructures")]
    [ModifyPermission("HRM:PayrollStructures")]
    public sealed class PayrollPaymentRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Trx Date"), NotNull,DefaultValue("today")]
        public DateTime? TrxDate
        {
            get { return Fields.TrxDate[this]; }
            set { Fields.TrxDate[this] = value; }
        }

        [DisplayName("Payroll Structure"), NotNull, ForeignKey("[dbo].[PayrollStructures]", "ID"), LeftJoin("jPayrollStructure"), TextualField("PayrollStructureStructureName")]
        public Int32? PayrollStructureId
        {
            get { return Fields.PayrollStructureId[this]; }
            set { Fields.PayrollStructureId[this] = value; }
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[dbo].[EmployeeMaster]", "Id"), LeftJoin("jEmployee"), TextualField("EmployeeEmployeeName")]
        [LookupEditor(typeof(EmployeeMasterRow), InplaceAdd = true)]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Basic Pay"), Size(18), Scale(3)]
        public Decimal? BasicPay
        {
            get { return Fields.BasicPay[this]; }
            set { Fields.BasicPay[this] = value; }
        }

        [DisplayName("Allowance"), Size(18), Scale(3)]
        public Decimal? Allowance
        {
            get { return Fields.Allowance[this]; }
            set { Fields.Allowance[this] = value; }
        }

        [DisplayName("Over Time"), Size(18), Scale(3)]
        public Decimal? OverTime
        {
            get { return Fields.OverTime[this]; }
            set { Fields.OverTime[this] = value; }
        }

        [DisplayName("Other"), Size(18), Scale(3)]
        public Decimal? Other
        {
            get { return Fields.Other[this]; }
            set { Fields.Other[this] = value; }
        }

        [DisplayName("Total"), Size(18), Scale(3), NotNull,ReadOnly(true)]
        public Decimal? Total
        {
            get { return Fields.Total[this]; }
            set { Fields.Total[this] = value; }
        }

        [DisplayName("Remarks"), Size(500), QuickSearch,TextAreaEditor]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("Payroll Structure Structure Name"), Expression("jPayrollStructure.[StructureName]")]
        public String PayrollStructureStructureName
        {
            get { return Fields.PayrollStructureStructureName[this]; }
            set { Fields.PayrollStructureStructureName[this] = value; }
        }

        [DisplayName("Payroll Structure From Date"), Expression("jPayrollStructure.[FromDate]")]
        public DateTime? PayrollStructureFromDate
        {
            get { return Fields.PayrollStructureFromDate[this]; }
            set { Fields.PayrollStructureFromDate[this] = value; }
        }

        [DisplayName("Payroll Structure To Date"), Expression("jPayrollStructure.[ToDate]")]
        public DateTime? PayrollStructureToDate
        {
            get { return Fields.PayrollStructureToDate[this]; }
            set { Fields.PayrollStructureToDate[this] = value; }
        }

        [DisplayName("Payroll Structure Remarks"), Expression("jPayrollStructure.[Remarks]")]
        public String PayrollStructureRemarks
        {
            get { return Fields.PayrollStructureRemarks[this]; }
            set { Fields.PayrollStructureRemarks[this] = value; }
        }

        [DisplayName("Employee Employee Code"), Expression("jEmployee.[EmployeeCode]")]
        public String EmployeeEmployeeCode
        {
            get { return Fields.EmployeeEmployeeCode[this]; }
            set { Fields.EmployeeEmployeeCode[this] = value; }
        }

        [DisplayName("Employee Name"), Expression("jEmployee.[EmployeeName]"),MinSelectLevel(SelectLevel.List)]
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
            get { return Fields.Remarks; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PayrollPaymentRow()
            : base(Fields)
        {
        }
        [DisplayName("Payments"), MasterDetailRelation(foreignKey: "PayrollPaymentId"), NotMapped]
        [MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.PaymentRow> Payments
        {
            get { return Fields.Payments[this]; }
            set { Fields.Payments[this] = value; }
        }
        [DisplayName("Payment Type"), NotNull, QuickSearch, QuickFilter]
        public AccountTypes? PaymentType
        {
            get { return (AccountTypes?)Fields.PaymentType[this]; }
            set { Fields.PaymentType[this] = (int?)value; }
        }

        [DisplayName("Account"), ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jAccount"), TextualField("AccountAccountName"),NotNull]
        [LookupEditor(typeof(AccountsRow), CascadeField = "Type", CascadeFrom = "PaymentType")]
        public Int32? AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
        }
        [DisplayName("Account Name"), Expression("jAccount.[AccountName]"), QuickFilter, QuickSearch]
        public String AccountAccountName
        {
            get { return Fields.AccountAccountName[this]; }
            set { Fields.AccountAccountName[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DateTimeField TrxDate;
            public Int32Field PayrollStructureId;
            public Int32Field EmployeeId;
            public DecimalField BasicPay;
            public DecimalField Allowance;
            public DecimalField OverTime;
            public DecimalField Other;
            public DecimalField Total;
            public StringField Remarks;

            public StringField PayrollStructureStructureName;
            public DateTimeField PayrollStructureFromDate;
            public DateTimeField PayrollStructureToDate;
            public StringField PayrollStructureRemarks;

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

            public Int32Field PaymentType;
            public Int32Field AccountId;

            public RowListField<Accounts.Entities.PaymentRow> Payments;

            public StringField AccountAccountName;
        }
    }
}
