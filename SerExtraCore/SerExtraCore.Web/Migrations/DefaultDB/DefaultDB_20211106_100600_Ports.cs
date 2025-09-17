using FluentMigrator;

namespace SerExtraCore.Migrations.DefaultDB
{
    [Migration(20211106100600)]
    public class DefaultDB_20211106_100600_Ports : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Ports", "Id", s => s
                             .WithColumn("PortName").AsString(200).NotNullable()
                             .WithColumn("CountryId").AsInt32().NotNullable()
                                .ForeignKey("FK_JournalEntries_Countries", "Countries", "Id"));

            this.CreateTableWithId32("ClearanceStatus", "Id", s => s
                            .WithColumn("Status").AsString(200).NotNullable());

            this.Execute.Sql(@"SET IDENTITY_INSERT ClearanceStatus ON 
INSERT INTO ClearanceStatus
    (Id, [Status])
VALUES
    (1, 'Expected Arrival')

INSERT INTO ClearanceStatus
    (Id, [Status])
VALUES
    (2, 'Cleared')

SET IDENTITY_INSERT ClearanceStatus OFF");

            this.CreateTableWithId32("Clearance", "Id", s => s
                            .WithColumn("MBLNO").AsString(200).NotNullable()
                            .WithColumn("MBLDATE").AsDate().Nullable()
                            .WithColumn("HBLNO").AsString(200).Nullable()
                            .WithColumn("HBLDATE").AsDate().Nullable()
                            .WithColumn("ETA").AsString(500).Nullable()
                            .WithColumn("Status").AsInt32().NotNullable()
                                .ForeignKey("FK_Clearance_ClearanceStatus", "ClearanceStatus", "Id")
                            .WithColumn("Attachment").AsString(500).Nullable()
                            .WithColumn("PortLoading").AsInt32().Nullable()
                                .ForeignKey("FK_Clearance_LoadingPorts", "Ports", "Id")
                            .WithColumn("PortDischarge").AsInt32().Nullable()
                                .ForeignKey("FK_Clearance_DischargePorts", "Ports", "Id")
                            .WithColumn("Shipper").AsInt32().Nullable()
                                .ForeignKey("FK_Clearance_ShipperCustomers", "Customers", "Id")
                            .WithColumn("Consignee").AsInt32().Nullable()
                                .ForeignKey("FK_Clearance_ConsigneeCustomers", "Customers", "Id")
                            .WithColumn("Vessel").AsString().Nullable()
                            .WithColumn("ContainerNo").AsString(500).Nullable()
                            .WithColumn("JobRef").AsString(500).Nullable()
                            .WithColumn("CustomerRef").AsString(500).Nullable()
                            .WithColumn("PackageType").AsString(500).Nullable()
                            .WithColumn("Weight").AsString(500).Nullable()
                            .WithColumn("ChargeableWeight").AsString(500).Nullable()
                            .WithColumn("NoOfPackages").AsDecimal(18,3).Nullable()
                            .WithColumn("Volume").AsDecimal(18,3).Nullable());



        }
    }
}