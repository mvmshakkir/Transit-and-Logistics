Create.Table("AuditLog")
.WithColumn("Id").AsInt64().NotNullable().PrimaryKey().Identity()
.WithColumn("VersionNo").AsInt32().NotNullable()
.WithColumn("UserId").AsInt32().NotNullable()
.WithColumn("ActionType").AsInt32().NotNullable()
.WithColumn("ActionDate").AsDateTime().NotNullable()
.WithColumn("TableName").AsString(100).NotNullable()
.WithColumn("EntityId").AsInt64().NotNullable()
.WithColumn("OldEntity").AsString(100).Nullable()
.WithColumn("NewEntity").AsString(100).Nullable()
.WithColumn("IpAddress").AsString(100).Nullable()
.WithColumn("SessionId").AsString(100).Nullable();

Create.Table("CategoryLang")
.WithColumn("ID").AsInt32().NotNullable().PrimaryKey().Identity()
.WithColumn("CategoryID").AsInt32().NotNullable()
.WithColumn("LanguageID").AsInt32().NotNullable()
.WithColumn("CategoryName").AsString(15).Nullable()
.WithColumn("Description").AsString(100).Nullable();

Create.Table("Categories")
.WithColumn("CategoryID").AsInt32().NotNullable().PrimaryKey().Identity()
.WithColumn("CategoryName").AsString(15).NotNullable()
.WithColumn("Description").AsString(100).Nullable()
.WithColumn("Picture").AsStream().Nullable();

Create.Table("CustomerDemographics")
.WithColumn("ID").AsInt32().NotNullable().PrimaryKey().Identity()
.WithColumn("CustomerTypeID").AsString(10).Nullable().PrimaryKey()
.WithColumn("CustomerDesc").AsString(100).Nullable();

Create.Table("CustomerDetails")
.WithColumn("ID").AsInt32().Nullable().PrimaryKey()
.WithColumn("LastContactDate").AsDateTime().Nullable()
.WithColumn("LastContactedBy").AsInt32().Nullable().ForeignKey("Employees", "EmployeeID")
.WithColumn("Email").AsString(100).Nullable()
.WithColumn("SendBulletin").AsBoolean().NotNullable();

Create.Table("GrossSales")
.WithColumn("CustomerID").AsString(100).NotNullable()
.WithColumn("ContactName").AsString(40).NotNullable()
.WithColumn("ProductID").AsInt32().NotNullable()
.WithColumn("ProductName").AsString(40).NotNullable()
.WithColumn("GrossAmount").AsDecimal().Nullable();

Create.Table("CustomerRepresentatives")
.WithColumn("RepresentativeID").AsInt32().NotNullable().PrimaryKey().Identity()
.WithColumn("CustomerID").AsInt32().NotNullable()
.WithColumn("EmployeeID").AsInt32().NotNullable();

Create.Table("Customers")
.WithColumn("ID").AsInt32().NotNullable().PrimaryKey().Identity()
.WithColumn("CustomerID").AsString(5).NotNullable().PrimaryKey()
.WithColumn("CompanyName").AsString(40).NotNullable()
.WithColumn("ContactName").AsString(30).Nullable()
.WithColumn("ContactTitle").AsString(30).Nullable()
.WithColumn("Address").AsString(60).Nullable()
.WithColumn("City").AsString(15).Nullable()
.WithColumn("Region").AsString(15).Nullable()
.WithColumn("PostalCode").AsString(10).Nullable()
.WithColumn("Country").AsString(15).Nullable()
.WithColumn("Phone").AsString(24).Nullable()
.WithColumn("Fax").AsString(24).Nullable();

Create.Table("CustomerCustomerDemo")
.WithColumn("ID").AsInt32().NotNullable().PrimaryKey().Identity()
.WithColumn("CustomerID").AsString(5).Nullable().PrimaryKey().ForeignKey("Customers", "CustomerID")
.WithColumn("CustomerTypeID").AsString(10).Nullable().PrimaryKey().ForeignKey("CustomerDemographics", "CustomerTypeID");

Create.Table("Employees")
.WithColumn("EmployeeID").AsInt32().NotNullable().PrimaryKey().Identity()
.WithColumn("LastName").AsString(20).NotNullable()
.WithColumn("FirstName").AsString(10).NotNullable()
.WithColumn("Title").AsString(30).Nullable()
.WithColumn("TitleOfCourtesy").AsString(25).Nullable()
.WithColumn("BirthDate").AsDateTime().Nullable()
.WithColumn("HireDate").AsDateTime().Nullable()
.WithColumn("Address").AsString(60).Nullable()
.WithColumn("City").AsString(15).Nullable()
.WithColumn("Region").AsString(15).Nullable()
.WithColumn("PostalCode").AsString(10).Nullable()
.WithColumn("Country").AsString(15).Nullable()
.WithColumn("HomePhone").AsString(24).Nullable()
.WithColumn("Extension").AsString(4).Nullable()
.WithColumn("Photo").AsStream().Nullable()
.WithColumn("Notes").AsString(100).Nullable()
.WithColumn("ReportsTo").AsInt32().Nullable().ForeignKey("Employees", "EmployeeID")
.WithColumn("PhotoPath").AsString(255).Nullable();

Create.Table("EmployeeTerritories")
.WithColumn("EmployeeID").AsInt32().Nullable().PrimaryKey().ForeignKey("Employees", "EmployeeID")
.WithColumn("TerritoryID").AsString(20).Nullable().PrimaryKey().ForeignKey("Territories", "TerritoryID");

Create.Table("Notes")
.WithColumn("NoteID").AsInt64().NotNullable().PrimaryKey().Identity()
.WithColumn("EntityType").AsString(100).NotNullable()
.WithColumn("EntityID").AsInt64().NotNullable()
.WithColumn("Text").AsString(100).NotNullable()
.WithColumn("InsertUserId").AsInt32().NotNullable()
.WithColumn("InsertDate").AsDateTime().NotNullable();

Create.Table("Orders")
.WithColumn("OrderID").AsInt32().NotNullable().PrimaryKey().Identity()
.WithColumn("CustomerID").AsString(5).NotNullable().ForeignKey("Customers", "CustomerID")
.WithColumn("EmployeeID").AsInt32().Nullable().ForeignKey("Employees", "EmployeeID")
.WithColumn("OrderDate").AsDateTime().NotNullable()
.WithColumn("RequiredDate").AsDateTime().Nullable()
.WithColumn("ShippedDate").AsDateTime().Nullable()
.WithColumn("ShipVia").AsInt32().Nullable().ForeignKey("Shippers", "ShipperID")
.WithColumn("Freight").AsDecimal().Nullable()
.WithColumn("ShipName").AsString(40).Nullable()
.WithColumn("ShipAddress").AsString(60).Nullable()
.WithColumn("ShipCity").AsString(15).Nullable()
.WithColumn("ShipRegion").AsString(15).Nullable()
.WithColumn("ShipPostalCode").AsString(10).Nullable()
.WithColumn("ShipCountry").AsString(15).Nullable();

Create.Table("Order Details")
.WithColumn("DetailID").AsInt32().NotNullable().PrimaryKey().Identity()
.WithColumn("OrderID").AsInt32().Nullable().PrimaryKey().ForeignKey("Orders", "OrderID")
.WithColumn("ProductID").AsInt32().Nullable().PrimaryKey().ForeignKey("Products", "ProductID")
.WithColumn("UnitPrice").AsDecimal().NotNullable()
.WithColumn("Quantity").AsInt16().NotNullable()
.WithColumn("Discount").AsSingle().NotNullable();

Create.Table("ProductLang")
.WithColumn("ID").AsInt32().NotNullable().PrimaryKey().Identity()
.WithColumn("ProductID").AsInt32().NotNullable()
.WithColumn("LanguageID").AsInt32().NotNullable()
.WithColumn("ProductName").AsString(40).Nullable();

Create.Table("ProductLog")
.WithColumn("ProductLogID").AsInt64().NotNullable().PrimaryKey().Identity()
.WithColumn("OperationType").AsInt16().Nullable()
.WithColumn("ChangingUserId").AsInt32().Nullable()
.WithColumn("ValidFrom").AsDateTime().Nullable()
.WithColumn("ValidUntil").AsDateTime().Nullable()
.WithColumn("ProductID").AsInt32().NotNullable()
.WithColumn("ProductName").AsString(40).Nullable()
.WithColumn("ProductImage").AsString(100).Nullable()
.WithColumn("Discontinued").AsBoolean().Nullable()
.WithColumn("SupplierID").AsInt32().Nullable()
.WithColumn("CategoryID").AsInt32().Nullable()
.WithColumn("QuantityPerUnit").AsString(100).Nullable()
.WithColumn("UnitPrice").AsDecimal().Nullable()
.WithColumn("UnitsInStock").AsInt16().Nullable()
.WithColumn("UnitsOnOrder").AsInt16().Nullable()
.WithColumn("ReorderLevel").AsInt16().Nullable();

Create.Table("Region")
.WithColumn("RegionID").AsInt32().NotNullable().PrimaryKey()
.WithColumn("RegionDescription").AsString(50).NotNullable();

Create.Table("Sales by Category")
.WithColumn("CategoryID").AsInt32().NotNullable()
.WithColumn("CategoryName").AsString(15).NotNullable()
.WithColumn("ProductName").AsString(40).NotNullable()
.WithColumn("ProductSales").AsDecimal().Nullable();

Create.Table("Shippers")
.WithColumn("ShipperID").AsInt32().NotNullable().PrimaryKey().Identity()
.WithColumn("CompanyName").AsString(40).NotNullable()
.WithColumn("Phone").AsString(24).Nullable();

Create.Table("Suppliers")
.WithColumn("SupplierID").AsInt32().NotNullable().PrimaryKey().Identity()
.WithColumn("CompanyName").AsString(40).NotNullable()
.WithColumn("ContactName").AsString(30).Nullable()
.WithColumn("ContactTitle").AsString(30).Nullable()
.WithColumn("Address").AsString(60).Nullable()
.WithColumn("City").AsString(15).Nullable()
.WithColumn("Region").AsString(15).Nullable()
.WithColumn("PostalCode").AsString(10).Nullable()
.WithColumn("Country").AsString(15).Nullable()
.WithColumn("Phone").AsString(24).Nullable()
.WithColumn("Fax").AsString(24).Nullable()
.WithColumn("HomePage").AsString(100).Nullable();

Create.Table("Products")
.WithColumn("ProductID").AsInt32().NotNullable().PrimaryKey().Identity()
.WithColumn("ProductName").AsString(40).NotNullable()
.WithColumn("ProductImage").AsString(100).Nullable()
.WithColumn("Discontinued").AsBoolean().NotNullable()
.WithColumn("SupplierID").AsInt32().Nullable().ForeignKey("Suppliers", "SupplierID")
.WithColumn("CategoryID").AsInt32().Nullable().ForeignKey("Categories", "CategoryID")
.WithColumn("QuantityPerUnit").AsString(20).Nullable()
.WithColumn("UnitPrice").AsDecimal().Nullable()
.WithColumn("UnitsInStock").AsInt16().NotNullable()
.WithColumn("UnitsOnOrder").AsInt16().NotNullable()
.WithColumn("ReorderLevel").AsInt16().NotNullable();

Create.Table("Territories")
.WithColumn("ID").AsInt32().NotNullable().PrimaryKey().Identity()
.WithColumn("TerritoryID").AsString(20).NotNullable().PrimaryKey()
.WithColumn("TerritoryDescription").AsString(50).NotNullable()
.WithColumn("RegionID").AsInt32().NotNullable().ForeignKey("Region", "RegionID");

Create.Table("UserPreferences")
.WithColumn("UserPreferenceId").AsInt32().NotNullable().PrimaryKey().Identity()
.WithColumn("UserId").AsInt32().Nullable()
.WithColumn("PreferenceType").AsString(100).NotNullable()
.WithColumn("Name").AsString(100).NotNullable()
.WithColumn("Value").AsString(100).Nullable();

Create.Table("DragDropSample")
.WithColumn("Id").AsInt32().NotNullable().PrimaryKey().Identity()
.WithColumn("ParentId").AsInt32().Nullable()
.WithColumn("Title").AsString(100).NotNullable();

Create.Table("Languages")
.WithColumn("Id").AsInt32().NotNullable().PrimaryKey().Identity()
.WithColumn("LanguageId").AsString(10).NotNullable()
.WithColumn("LanguageName").AsString(50).NotNullable();

Create.Table("RolePermissions")
.WithColumn("RolePermissionId").AsInt64().NotNullable().PrimaryKey().Identity()
.WithColumn("RoleId").AsInt32().NotNullable().ForeignKey("Roles", "RoleId")
.WithColumn("PermissionKey").AsString(100).NotNullable();

Create.Table("Roles")
.WithColumn("RoleId").AsInt32().NotNullable().PrimaryKey().Identity().ForeignKey("Roles", "RoleId")
.WithColumn("RoleName").AsString(100).NotNullable();

Create.Table("UserPermissions")
.WithColumn("UserPermissionId").AsInt64().NotNullable().PrimaryKey().Identity()
.WithColumn("UserId").AsInt32().NotNullable().ForeignKey("Users", "UserId")
.WithColumn("PermissionKey").AsString(100).NotNullable()
.WithColumn("Granted").AsBoolean().Nullable();

Create.Table("UserRoles")
.WithColumn("UserRoleId").AsInt64().NotNullable().PrimaryKey().Identity()
.WithColumn("UserId").AsInt32().NotNullable().ForeignKey("Users", "UserId")
.WithColumn("RoleId").AsInt32().NotNullable();

Create.Table("Users")
.WithColumn("UserId").AsInt32().NotNullable().PrimaryKey().Identity()
.WithColumn("Username").AsString(100).NotNullable()
.WithColumn("Source").AsString(4).NotNullable()
.WithColumn("PasswordHash").AsString(86).NotNullable()
.WithColumn("PasswordSalt").AsString(10).NotNullable()
.WithColumn("DisplayName").AsString(100).NotNullable()
.WithColumn("Email").AsString(100).Nullable()
.WithColumn("UserImage").AsString(100).Nullable()
.WithColumn("LastDirectoryUpdate").AsDateTime().Nullable()
.WithColumn("IsActive").AsInt16().NotNullable()
.WithColumn("InsertUserId").AsInt32().NotNullable()
.WithColumn("InsertDate").AsDateTime().NotNullable()
.WithColumn("UpdateUserId").AsInt32().Nullable()
.WithColumn("UpdateDate").AsDateTime().Nullable();

