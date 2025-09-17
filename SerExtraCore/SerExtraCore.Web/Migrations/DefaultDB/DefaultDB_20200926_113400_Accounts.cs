using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20200926113400)]
    public class DefaultDB_20200926_113400_Accounts : AutoReversingMigration
    {
        public override void Up()
        {


            this.Alter.Table("Consignment").AddColumn("Status").AsInt32().NotNullable().WithDefaultValue(1);
            this.Alter.Table("Invoice").AddColumn("PaymentStatus").AsInt32().NotNullable().WithDefaultValue(1);

            Create.Table("AccountHeads")
                    .WithColumn("ID").AsInt32().PrimaryKey().Identity().NotNullable()
                    .WithColumn("Code").AsString(200).Nullable()
                    .WithColumn("Description").AsString(200).NotNullable()
                    .WithColumn("ParentHeadId").AsInt32().Nullable()
                        .ForeignKey("FK_AccountHead_ParentAccountHead", "AccountHeads", "ID")
                    .WithColumn("LedgerType").AsInt32().NotNullable();

            this.CreateTableWithId32("Accounts", "Id", s => s
                .WithColumn("Type").AsInt32().NotNullable()
                .WithColumn("AccountName").AsString(200).NotNullable()
                .WithColumn("AccountNo").AsString(500).NotNullable()
                .WithColumn("BankName").AsString(200).Nullable()
                .WithColumn("BrachName").AsString(200).Nullable()
                .WithColumn("AccountHeadId").AsInt32().NotNullable()
                    .ForeignKey("FK_Accounts_AccountHeads", "AccountHeads", "Id"));


            this.CreateTableWithId32("InvoiceCollection", "Id", s => s
               .WithColumn("TrxDate").AsDate().NotNullable()
               .WithColumn("CollectionNumber").AsString(200).NotNullable()
               .WithColumn("CustomerId").AsInt32().NotNullable()
                     .ForeignKey("FK_InvoiceCollection_Customers", "Customers", "Id")
               .WithColumn("TotalAmount").AsInt32().NotNullable()
               .WithColumn("PaymentType").AsInt32().NotNullable()
               .WithColumn("AccountId").AsInt32().NotNullable()
                     .ForeignKey("FK_InvoiceCollection_Accounts", "Accounts", "Id")
               .WithColumn("Status").AsInt32().NotNullable()
               .WithColumn("StatusUser").AsInt32().Nullable()
                   .ForeignKey("FK_InvoiceCollection_Users", "Users", "UserId"));

            this.CreateTableWithId32("InvoiceCollectionDetails", "Id", s => s
                .WithColumn("InvoiceCollectionId").AsInt32().NotNullable()
                    .ForeignKey("FK_InvoiceCollectionDetails_InvoiceCollection", "InvoiceCollection", "Id")
               .WithColumn("InvoiceId").AsInt32().NotNullable()
                    .ForeignKey("FK_InvoiceCollectionDetails_Invoice", "Invoice", "Id")
               .WithColumn("Amount").AsDecimal(18,3).NotNullable()
               .WithColumn("ChequeNumber").AsString(500).Nullable()
               .WithColumn("ChequeDate").AsDate().Nullable());

            this.CreateTableWithId32("JournalEntries", "Id", s => s
                .WithColumn("VType").AsInt32().NotNullable()
                .WithColumn("TrxDate").AsDate().NotNullable()
                .WithColumn("VNo").AsInt32().NotNullable()
                .WithColumn("CustomerId").AsInt32().Nullable()
                       .ForeignKey("FK_JournalEntries_Customers", "Customers", "Id")
                .WithColumn("EmployeeId").AsInt32().Nullable()
                       .ForeignKey("FK_JournalEntries_EmployeeMaster", "EmployeeMaster", "Id")
                .WithColumn("DebitAccountHeadId").AsInt32().NotNullable()
                     .ForeignKey("FK_JournalEntries_DebitAccountHeads", "AccountHeads", "Id")
                .WithColumn("CreditAccountHeadId").AsInt32().NotNullable()
                     .ForeignKey("FK_JournalEntries_CreditAccountHeads", "AccountHeads", "Id")
                .WithColumn("Amount").AsDecimal(18, 3).NotNullable()
                .WithColumn("PaymentMethod").AsInt32().NotNullable()
                .WithColumn("DebitAccountId").AsInt32().Nullable()
                     .ForeignKey("FK_JournalEntries_DebitAccounts", "Accounts", "Id")
                .WithColumn("CreditAccountId").AsInt32().Nullable()
                     .ForeignKey("FK_JournalEntries_CreditAccounts", "Accounts", "Id")
                .WithColumn("Remarks").AsString(500).Nullable()
                .WithColumn("InvoiceCollectionId").AsInt32().Nullable()
                     .ForeignKey("FK_JournalEntries_InvoiceCollection", "InvoiceCollection", "Id")
                .WithColumn("EntityType").AsString().Nullable()
                );
        }
    }
}