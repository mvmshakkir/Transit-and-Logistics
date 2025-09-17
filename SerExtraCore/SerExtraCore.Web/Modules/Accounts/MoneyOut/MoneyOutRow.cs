
namespace SerExtraCore.Accounts.Entities
{
    using SerExtraCore.Master.Entities;
    using SerExtraCore.PDCPayments.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;
    using SerExtraCore.VehicleMovDetails.Entities;

    [ConnectionKey("Default"), Module("Accounts"), TableName("[dbo].[MoneyInOut]")]
    [DisplayName("Payment"), InstanceName("Payment")]
    [ReadPermission("Accounts:Payment")]
    [ModifyPermission("Accounts:Payment")]
    [LookupScript]
    public sealed class MoneyOutRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }
        [DisplayName("TS NO"), ForeignKey("[dbo].[VehicleMovDetails]", "Id"), LeftJoin("jTrip"), TextualField("TSNo"), LookupInclude]
        [LookupEditor(typeof(VehicleMovDetailsRow), InplaceAdd = true), QuickFilter, QuickSearch]
        public Int32? TsId
        {
            get { return Fields.TsId[this]; }
            set { Fields.TsId[this] = value; }
        }

        //[DisplayName("TsFuel"), Column("FuelId"), ForeignKey("[dbo].[FuelDetails]", "Id"), LeftJoin("jFuelId"),  LookupInclude]
        //public Int32? FuelId
        //{
        //    get => Fields.FuelId[this];
        //    set => Fields.FuelId[this] = value;
        //}





        [DisplayName("Trip"), ForeignKey("[dbo].[FuelDetails]", "Id"), LeftJoin("jFuel")]
        public Int32? FuelId
        {
            get { return Fields.FuelId[this]; }
            set { Fields.FuelId[this] = value; }
        }










        [DisplayName("TS NO"), Expression("jTrip.[TSNo]"), LookupInclude, QuickSearch]
        [MinSelectLevel(SelectLevel.List)]
        public String TSNo
        {
            get { return Fields.TSNo[this]; }
            set { Fields.TSNo[this] = value; }
        }
        [DisplayName("V Type"), NotNull]
        public Int32? VType
        {
            get { return Fields.VType[this]; }
            set { Fields.VType[this] = value; }
        }

        [DisplayName("Trx Date"), Size(255), NotNull, QuickSearch, DefaultValue("today"),QuickFilter]
        public DateTime? TrxDate
        {
            get { return Fields.TrxDate[this]; }
            set { Fields.TrxDate[this] = value; }
        }

        [DisplayName("V No"), Size(255), NotNull, QuickSearch, QuickFilter]
        public Int32? VNo
        {
            get { return Fields.VNo[this]; }
            set { Fields.VNo[this] = value; }
        }

        [DisplayName("Customer"), ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerCustomerName")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = true)]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Employee"), ForeignKey("[dbo].[EmployeeMaster]", "Id"), LeftJoin("jEmployee"), TextualField("EmployeeEmployeeName")]
        [LookupEditor(typeof(EmployeeMasterRow), InplaceAdd = true)]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Supplier"), ForeignKey("[dbo].[Supplier]", "Id"), LeftJoin("jSupplier"), TextualField("SupplierSupplierName")]
        [LookupEditor(typeof(SupplierRow), InplaceAdd = true)]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        [DisplayName("Vehicle"), ForeignKey("[dbo].[Vehicles]", "Id"), LeftJoin("jVehicle"), TextualField("VehicleVehicleNumber")]
        [LookupEditor(typeof(VehiclesRow), InplaceAdd = true)]
        public Int32? VehicleId
        {
            get { return Fields.VehicleId[this]; }
            set { Fields.VehicleId[this] = value; }
        }

        [DisplayName("Amount"), Size(18), Scale(3), NotNull, LookupInclude]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Tax Per"), Size(18), Scale(3)]
        public Decimal? TaxPer
        {
            get { return Fields.TaxPer[this]; }
            set { Fields.TaxPer[this] = value; }
        }

        [DisplayName("Tax Amount"), Size(18), Scale(3)]
        public Decimal? TaxAmount
        {
            get { return Fields.TaxAmount[this]; }
            set { Fields.TaxAmount[this] = value; }
        }

        [DisplayName("Total Amount"), Size(18), Scale(3), NotNull, ReadOnly(true), LookupInclude]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }

        [DisplayName("Ledger"), NotNull, ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jAccountHead"), TextualField("AccountHeadDescription"), LookupInclude]
        [LookupEditor(typeof(Accounts.Entities.AccountHeadsRow))]
        public Int32? AccountHeadId
        {
            get { return Fields.AccountHeadId[this]; }
            set { Fields.AccountHeadId[this] = value; }
        }

        [DisplayName("Payment Method"), NotNull, QuickFilter]
        public AccountTypes? PaymentMethod
        {
            get { return (AccountTypes?)Fields.PaymentMethod[this]; }
            set { Fields.PaymentMethod[this] = (int?)value; }
        }

        [DisplayName("Account"), ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jAccount"), TextualField("AccountAccountName"), LookupInclude]
        [LookupEditor(typeof(AccountsRow), CascadeField = "Type", CascadeFrom = "PaymentMethod")]
        public Int32? AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
        }

        [DisplayName("Remarks"), Size(500), TextAreaEditor]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("Customer Customer Code"), Expression("jCustomer.[CustomerCode]")]
        public String CustomerCustomerCode
        {
            get { return Fields.CustomerCustomerCode[this]; }
            set { Fields.CustomerCustomerCode[this] = value; }
        }

        [DisplayName("Customer Name"), Expression("jCustomer.[CustomerName]"), QuickFilter]
        public String CustomerCustomerName
        {
            get { return Fields.CustomerCustomerName[this]; }
            set { Fields.CustomerCustomerName[this] = value; }
        }

        [DisplayName("Customer Address"), Expression("jCustomer.[Address]")]
        public String CustomerAddress
        {
            get { return Fields.CustomerAddress[this]; }
            set { Fields.CustomerAddress[this] = value; }
        }

        [DisplayName("Customer Place"), Expression("jCustomer.[Place]")]
        public String CustomerPlace
        {
            get { return Fields.CustomerPlace[this]; }
            set { Fields.CustomerPlace[this] = value; }
        }

        [DisplayName("Customer Telephone"), Expression("jCustomer.[Telephone]")]
        public String CustomerTelephone
        {
            get { return Fields.CustomerTelephone[this]; }
            set { Fields.CustomerTelephone[this] = value; }
        }

        [DisplayName("Customer Email"), Expression("jCustomer.[Email]")]
        public String CustomerEmail
        {
            get { return Fields.CustomerEmail[this]; }
            set { Fields.CustomerEmail[this] = value; }
        }

        [DisplayName("Customer Contact Person"), Expression("jCustomer.[ContactPerson]")]
        public String CustomerContactPerson
        {
            get { return Fields.CustomerContactPerson[this]; }
            set { Fields.CustomerContactPerson[this] = value; }
        }

        [DisplayName("Customer Mobile"), Expression("jCustomer.[Mobile]")]
        public String CustomerMobile
        {
            get { return Fields.CustomerMobile[this]; }
            set { Fields.CustomerMobile[this] = value; }
        }

        [DisplayName("Customer Creation Date"), Expression("jCustomer.[CreationDate]")]
        public DateTime? CustomerCreationDate
        {
            get { return Fields.CustomerCreationDate[this]; }
            set { Fields.CustomerCreationDate[this] = value; }
        }

        [DisplayName("Customer Description"), Expression("jCustomer.[Description]")]
        public String CustomerDescription
        {
            get { return Fields.CustomerDescription[this]; }
            set { Fields.CustomerDescription[this] = value; }
        }

        [DisplayName("Customer Due Days"), Expression("jCustomer.[DueDays]")]
        public Int32? CustomerDueDays
        {
            get { return Fields.CustomerDueDays[this]; }
            set { Fields.CustomerDueDays[this] = value; }
        }

        [DisplayName("Customer Opening"), Expression("jCustomer.[Opening]")]
        public Decimal? CustomerOpening
        {
            get { return Fields.CustomerOpening[this]; }
            set { Fields.CustomerOpening[this] = value; }
        }

        [DisplayName("Customer Opening Date"), Expression("jCustomer.[OpeningDate]")]
        public DateTime? CustomerOpeningDate
        {
            get { return Fields.CustomerOpeningDate[this]; }
            set { Fields.CustomerOpeningDate[this] = value; }
        }

        [DisplayName("Customer Tax Reg No"), Expression("jCustomer.[TaxRegNo]")]
        public String CustomerTaxRegNo
        {
            get { return Fields.CustomerTaxRegNo[this]; }
            set { Fields.CustomerTaxRegNo[this] = value; }
        }

        [DisplayName("Employee Employee Code"), Expression("jEmployee.[EmployeeCode]")]
        public String EmployeeEmployeeCode
        {
            get { return Fields.EmployeeEmployeeCode[this]; }
            set { Fields.EmployeeEmployeeCode[this] = value; }
        }

        [DisplayName("Employee Name"), Expression("jEmployee.[EmployeeName]"), QuickFilter]
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

        [DisplayName("Supplier Supplier Code"), Expression("jSupplier.[SupplierCode]")]
        public String SupplierSupplierCode
        {
            get { return Fields.SupplierSupplierCode[this]; }
            set { Fields.SupplierSupplierCode[this] = value; }
        }

        [DisplayName("Supplier Name"), Expression("jSupplier.[SupplierName]"), QuickFilter]
        
        public String SupplierSupplierName
        {
            get { return Fields.SupplierSupplierName[this]; }
            set { Fields.SupplierSupplierName[this] = value; }
        }

        [DisplayName("Supplier Address"), Expression("jSupplier.[Address]")]
        public String SupplierAddress
        {
            get { return Fields.SupplierAddress[this]; }
            set { Fields.SupplierAddress[this] = value; }
        }

        [DisplayName("Supplier Place"), Expression("jSupplier.[Place]")]
        public String SupplierPlace
        {
            get { return Fields.SupplierPlace[this]; }
            set { Fields.SupplierPlace[this] = value; }
        }

        [DisplayName("Supplier Telephone"), Expression("jSupplier.[Telephone]")]
        public String SupplierTelephone
        {
            get { return Fields.SupplierTelephone[this]; }
            set { Fields.SupplierTelephone[this] = value; }
        }

        [DisplayName("Supplier Email"), Expression("jSupplier.[Email]")]
        public String SupplierEmail
        {
            get { return Fields.SupplierEmail[this]; }
            set { Fields.SupplierEmail[this] = value; }
        }

        [DisplayName("Supplier Contact Person"), Expression("jSupplier.[ContactPerson]")]
        public String SupplierContactPerson
        {
            get { return Fields.SupplierContactPerson[this]; }
            set { Fields.SupplierContactPerson[this] = value; }
        }

        [DisplayName("Supplier Mobile"), Expression("jSupplier.[Mobile]")]
        public String SupplierMobile
        {
            get { return Fields.SupplierMobile[this]; }
            set { Fields.SupplierMobile[this] = value; }
        }

        [DisplayName("Supplier Creation Date"), Expression("jSupplier.[CreationDate]")]
        public DateTime? SupplierCreationDate
        {
            get { return Fields.SupplierCreationDate[this]; }
            set { Fields.SupplierCreationDate[this] = value; }
        }

        [DisplayName("Supplier Description"), Expression("jSupplier.[Description]")]
        public String SupplierDescription
        {
            get { return Fields.SupplierDescription[this]; }
            set { Fields.SupplierDescription[this] = value; }
        }

        [DisplayName("Supplier Opening"), Expression("jSupplier.[Opening]")]
        public Decimal? SupplierOpening
        {
            get { return Fields.SupplierOpening[this]; }
            set { Fields.SupplierOpening[this] = value; }
        }

        [DisplayName("Supplier Opening Date"), Expression("jSupplier.[OpeningDate]")]
        public DateTime? SupplierOpeningDate
        {
            get { return Fields.SupplierOpeningDate[this]; }
            set { Fields.SupplierOpeningDate[this] = value; }
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

        [DisplayName("Vehicle Number"), Expression("jVehicle.[VehicleNumber]"), QuickFilter]
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

        [DisplayName("Vehicle Prime Mover"), Expression("jVehicle.[PrimeMover]")]
        public String VehiclePrimeMover
        {
            get { return Fields.VehiclePrimeMover[this]; }
            set { Fields.VehiclePrimeMover[this] = value; }
        }

        [DisplayName("Vehicle Supplier Id"), Expression("jVehicle.[SupplierId]")]
        public Int32? VehicleSupplierId
        {
            get { return Fields.VehicleSupplierId[this]; }
            set { Fields.VehicleSupplierId[this] = value; }
        }

        [DisplayName("Account Head Code"), Expression("jAccountHead.[Code]")]
        public String AccountHeadCode
        {
            get { return Fields.AccountHeadCode[this]; }
            set { Fields.AccountHeadCode[this] = value; }
        }

        [DisplayName("Ledger"), Expression("jAccountHead.[Description]"), QuickFilter]
        public String AccountHeadDescription
        {
            get { return Fields.AccountHeadDescription[this]; }
            set { Fields.AccountHeadDescription[this] = value; }
        }

        [DisplayName("Account Head Parent Head Id"), Expression("jAccountHead.[ParentHeadId]")]
        public Int32? AccountHeadParentHeadId
        {
            get { return Fields.AccountHeadParentHeadId[this]; }
            set { Fields.AccountHeadParentHeadId[this] = value; }
        }

        [DisplayName("Account Head Ledger Type"), Expression("jAccountHead.[LedgerType]")]
        public Int32? AccountHeadLedgerType
        {
            get { return Fields.AccountHeadLedgerType[this]; }
            set { Fields.AccountHeadLedgerType[this] = value; }
        }

        [DisplayName("Account Type"), Expression("jAccount.[Type]")]
        public Int32? AccountType
        {
            get { return Fields.AccountType[this]; }
            set { Fields.AccountType[this] = value; }
        }

        [DisplayName("Account"), Expression("jAccount.[AccountName]"), QuickFilter]
        public String AccountAccountName
        {
            get { return Fields.AccountAccountName[this]; }
            set { Fields.AccountAccountName[this] = value; }
        }

        [DisplayName("Account Account No"), Expression("jAccount.[AccountNo]")]
        public String AccountAccountNo
        {
            get { return Fields.AccountAccountNo[this]; }
            set { Fields.AccountAccountNo[this] = value; }
        }

        [DisplayName("Account Bank Name"), Expression("jAccount.[BankName]")]
        public String AccountBankName
        {
            get { return Fields.AccountBankName[this]; }
            set { Fields.AccountBankName[this] = value; }
        }

        [DisplayName("Account Brach Name"), Expression("jAccount.[BrachName]")]
        public String AccountBrachName
        {
            get { return Fields.AccountBrachName[this]; }
            set { Fields.AccountBrachName[this] = value; }
        }

        [DisplayName("Account Account Head Id"), Expression("jAccount.[AccountHeadId]")]
        public Int32? AccountAccountHeadId
        {
            get { return Fields.AccountAccountHeadId[this]; }
            set { Fields.AccountAccountHeadId[this] = value; }
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

        public MoneyOutRow()
            : base(Fields)
        {
        }
        [DisplayName("Payments"), MasterDetailRelation(foreignKey: "MoneyInOutId"), NotMapped, AuditLog]
        [MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.PaymentRow> Payments
        {
            get { return Fields.Payments[this]; }
            set { Fields.Payments[this] = value; }
        }
        [DisplayName("PDC Payment Details"), MasterDetailRelation(foreignKey: "MoneyInOutId"), NotMapped]
        public List<PdcPaymentDetailsRow> PdcPaymentDetails
        {
            get { return Fields.PdcPaymentDetails[this]; }
            set { Fields.PdcPaymentDetails[this] = value; }
        }
        [DisplayName("Consignment"), ForeignKey("[dbo].[Consignment]", "Id"), LeftJoin("jConsignment"), TextualField("ConsignmentJobNo")]
        [LookupEditor(typeof(Transactions.Entities.ConsignmentRow))]
        public Int32? ConsignmentId
        {
            get { return Fields.ConsignmentId[this]; }
            set { Fields.ConsignmentId[this] = value; }
        }
        [DisplayName("Consignment Job No"), Expression("jConsignment.[JobNo]"), QuickSearch, QuickFilter]
        public String ConsignmentJobNo
        {
            get { return Fields.ConsignmentJobNo[this]; }
            set { Fields.ConsignmentJobNo[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field VType;
            public DateTimeField TrxDate;
            public Int32Field VNo;
            public Int32Field CustomerId;
            public Int32Field EmployeeId;
            public Int32Field SupplierId;
            public Int32Field VehicleId;
            public DecimalField Amount;
            public DecimalField TaxPer;
            public DecimalField TaxAmount;
            public DecimalField TotalAmount;
            public Int32Field AccountHeadId;
            public Int32Field PaymentMethod;
            public Int32Field AccountId;
            public StringField Remarks;

            public RowListField<Accounts.Entities.PaymentRow> Payments;

            public RowListField<PdcPaymentDetailsRow> PdcPaymentDetails;

            public StringField CustomerCustomerCode;
            public StringField CustomerCustomerName;
            public StringField CustomerAddress;
            public StringField CustomerPlace;
            public StringField CustomerTelephone;
            public StringField CustomerEmail;
            public StringField CustomerContactPerson;
            public StringField CustomerMobile;
            public DateTimeField CustomerCreationDate;
            public StringField CustomerDescription;
            public Int32Field CustomerDueDays;
            public DecimalField CustomerOpening;
            public DateTimeField CustomerOpeningDate;
            public StringField CustomerTaxRegNo;

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

            public StringField SupplierSupplierCode;
            public StringField SupplierSupplierName;
            public StringField SupplierAddress;
            public StringField SupplierPlace;
            public StringField SupplierTelephone;
            public StringField SupplierEmail;
            public StringField SupplierContactPerson;
            public StringField SupplierMobile;
            public DateTimeField SupplierCreationDate;
            public StringField SupplierDescription;
            public DecimalField SupplierOpening;
            public DateTimeField SupplierOpeningDate;

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
            public StringField VehiclePrimeMover;
            public Int32Field VehicleSupplierId;

            public StringField AccountHeadCode;
            public StringField AccountHeadDescription;
            public Int32Field AccountHeadParentHeadId;
            public Int32Field AccountHeadLedgerType;

            public Int32Field AccountType;
            public StringField AccountAccountName;
            public StringField AccountAccountNo;
            public StringField AccountBankName;
            public StringField AccountBrachName;
            public Int32Field AccountAccountHeadId;

            public Int32Field ConsignmentId;
            public StringField ConsignmentJobNo;



            public StringField TSNo;
            public Int32Field TsId;


            public Int32Field FuelId;
        }
    }
}
