/// <reference path="../../../Modules/_Ext/_q/_q.d.ts" />
/// <reference path="../../../typings/serenity/Serenity.CoreLib.d.ts" />
/// <reference path="../../../typings/jspdf/jspdf.autotable.d.ts" />
/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare var isPageRefreshRequired: boolean;
declare namespace q {
    var queryString: {};
    var jsPDFHeaderImageData: string;
    var jsPDFHeaderTitle: string;
    var useSerenityInlineEditors: boolean;
    var DefaultMainGridOptions: ExtGridOptions;
    var DefaultEditorGridOptions: ExtGridOptions;
    var DefaultEntityDialogOptions: ExtDialogOptions;
    var DefaultEditorDialogOptions: ExtDialogOptions;
    var fiscalYearMonths: number[];
}
declare namespace _Ext {
    class GridBase<TItem, TOptions> extends Serenity.EntityGrid<TItem, TOptions> {
        protected getRowType(): {
            idProperty?: string;
            localTextPrefix?: string;
            nameProperty?: string;
            insertPermission?: string;
            updatePermission?: string;
            deletePermission?: string;
        };
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected getDeletePermission(): string;
        protected get_ExtGridOptions(): ExtGridOptions;
        protected isPickerMode(): boolean;
        protected getGrouping(): Slick.GroupInfo<TItem>[];
        isReadOnly: boolean;
        isRequired: boolean;
        isAutosized: boolean;
        isChildGrid: boolean;
        nextRowNumber: number;
        autoColumnSizePlugin: any;
        rowSelection: Serenity.GridRowSelectionMixin;
        pickerDialog: GridItemPickerDialog;
        constructor(container: JQuery, options?: TOptions);
        protected markupReady(): void;
        protected getButtons(): Serenity.ToolButton[];
        protected getReportRequest(): _Ext.ListReportRequest;
        protected getColumns(): Slick.Column[];
        protected createSlickGrid(): Slick.Grid;
        resetColumns(columns: Slick.Column[]): void;
        resizeAllCulumn(): void;
        protected getSlickOptions(): Slick.GridOptions;
        protected getViewOptions(): Slick.RemoteViewOptions;
        protected getPrintRowServiceMethod(): string;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected onInlineActionClick(target: JQuery, recordId: any, item: TItem): void;
        protected resetRowNumber(): void;
        setGrouping(groupInfo: Slick.GroupInfo<TItem>[]): void;
        protected getIncludeColumns(include: {
            [key: string]: boolean;
        }): void;
        protected getDefaultSortBy(): any[];
        protected onViewProcessData(response: Serenity.ListResponse<TItem>): Serenity.ListResponse<TItem>;
        initDialog(dialog: DialogBase<TItem, any>): void;
        get selectedItems(): TItem[];
        set selectedKeys(value: any[]);
        protected onViewSubmit(): boolean;
    }
}
declare namespace _Ext {
    class ReportGridBase<TItem, TOptions> extends _Ext.GridBase<TItem, TOptions> {
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace _Ext {
    class ReportPanelBase<TRequest> extends Serenity.PropertyPanel<TRequest, any> {
        protected getReportTitle(): string;
        protected getReportKey(): string;
        protected getReportRequest(): TRequest;
        constructor(container: JQuery, opt?: any);
        protected getTemplate(): string;
    }
}
declare namespace _Ext {
    class DialogBase<TEntity, TOptions> extends Serenity.EntityDialog<TEntity, TOptions> {
        protected getRowType(): {
            idProperty?: string;
            localTextPrefix?: string;
            nameProperty?: string;
            insertPermission?: string;
            updatePermission?: string;
            deletePermission?: string;
        };
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected getDeletePermission(): string;
        protected get_ExtDialogOptions(): ExtDialogOptions;
        private loadedState;
        isReadOnly: boolean;
        protected form: any;
        constructor(opt?: any);
        protected updateInterface(): void;
        protected onDialogOpen(): void;
        protected onDialogClose(): void;
        protected setReadOnly(value: boolean): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected onRefreshClick(): void;
        protected onSaveAndNewButtonClick(): void;
        protected getSaveState(): string;
        protected onSaveSuccess(response: any): void;
        loadResponse(data: any): void;
        maximize(): void;
        fullContentArea(): void;
        setDialogSize(width?: any, height?: any, top?: any, left?: any, $content?: any): void;
        onAfterSetDialogSize(): void;
        onAfterDialogClose(entity: TEntity): void;
        parentGrid: GridBase<TEntity, any>;
    }
}
declare namespace _Ext {
    class GridItemPickerDialog extends Serenity.TemplatedDialog<GridItemPickerEditorOptions> {
        getTemplate(): string;
        checkGrid: GridBase<any, GridItemPickerEditorOptions>;
        get selectedItems(): any[];
        constructor(options: GridItemPickerEditorOptions);
        onSuccess: (selectedItems: any) => void;
        getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace _Ext {
    class EditorDialogBase<TEntity> extends DialogBase<TEntity, any> {
        protected get_ExtDialogOptions(): ExtDialogOptions;
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
        parentEditor: GridEditorBase<TEntity>;
    }
}
declare namespace _Ext {
    class GridEditorBase<TEntity> extends _Ext.GridBase<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly {
        protected get_ExtGridOptions(): ExtGridOptions;
        protected getIdProperty(): string;
        isChildGrid: boolean;
        protected nextId: number;
        constructor(container: JQuery, options?: any);
        private sortGridFunction;
        protected getQuickFilters(): any[];
        protected id(entity: TEntity): any;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected addButtonClick(): void;
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        private searchText;
        protected createToolbarExtensions(): void;
        protected onViewFilter(row: any): boolean;
        private matchContains;
        protected enableFiltering(): boolean;
        protected onViewSubmit(): boolean;
        get_readOnly(): boolean;
        set_readOnly(value: boolean): void;
        protected getSlickOptions(): Slick.GridOptions;
        parentDialog: DialogBase<any, any>;
        onItemsChanged(): void;
        onBeforeGetValue(items: TEntity[]): void;
    }
}
declare namespace _Ext {
    class JsonGridEditorBase<TEntity> extends _Ext.GridEditorBase<TEntity> {
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
    }
}
declare namespace SerExtraCore {
    enum AccountTypes {
        Value1 = 1,
        Value2 = 2
    }
}
declare namespace SerExtraCore.Accounts {
    class AccountHeadsColumns {
        static readonly columnsKey = "Accounts.AccountHeads";
    }
}
declare namespace SerExtraCore.Accounts {
    interface AccountHeadsForm {
        Code: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ParentHeadId: Serenity.LookupEditor;
        LedgerType: Serenity.EnumEditor;
    }
    class AccountHeadsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Accounts.AccountHeads";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Accounts {
    interface AccountHeadsRow {
        Id?: number;
        Code?: string;
        Description?: string;
        ParentHeadId?: number;
        LedgerType?: LedgerTypes;
        Slno?: number;
        ParentHeadCode?: string;
        ParentHeadDescription?: string;
        ParentHeadParentHeadId?: number;
        ParentHeadLedgerType?: number;
    }
    namespace AccountHeadsRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "Accounts.AccountHeads";
        const lookupKey = "Accounts.AccountHeads";
        function getLookup(): Q.Lookup<AccountHeadsRow>;
        const deletePermission = "Accounts:AccountHeads";
        const insertPermission = "Accounts:AccountHeads";
        const readPermission = "Accounts:AccountHeads";
        const updatePermission = "Accounts:AccountHeads";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            Description = "Description",
            ParentHeadId = "ParentHeadId",
            LedgerType = "LedgerType",
            Slno = "Slno",
            ParentHeadCode = "ParentHeadCode",
            ParentHeadDescription = "ParentHeadDescription",
            ParentHeadParentHeadId = "ParentHeadParentHeadId",
            ParentHeadLedgerType = "ParentHeadLedgerType"
        }
    }
}
declare namespace SerExtraCore.Accounts {
    namespace AccountHeadsService {
        const baseUrl = "Accounts/AccountHeads";
        function Create(request: Serenity.SaveRequest<AccountHeadsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<AccountHeadsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AccountHeadsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<AccountHeadsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AccountHeadsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<AccountHeadsRow>>;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;
        const enum Methods {
            Create = "Accounts/AccountHeads/Create",
            Update = "Accounts/AccountHeads/Update",
            Delete = "Accounts/AccountHeads/Delete",
            Retrieve = "Accounts/AccountHeads/Retrieve",
            List = "Accounts/AccountHeads/List",
            GetNextNumber = "Accounts/AccountHeads/GetNextNumber"
        }
    }
}
declare namespace SerExtraCore.Accounts {
    class AccountsColumns {
        static readonly columnsKey = "Accounts.Accounts";
    }
}
declare namespace SerExtraCore.Accounts {
    interface AccountsForm {
        Type: Serenity.EnumEditor;
        AccountName: Serenity.StringEditor;
        AccountNo: Serenity.StringEditor;
        BankName: Serenity.StringEditor;
        BrachName: Serenity.StringEditor;
        AccountHeadId: Serenity.LookupEditor;
    }
    class AccountsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Accounts.Accounts";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Accounts {
    interface AccountsRow {
        Id?: number;
        Type?: AccountTypes;
        AccountName?: string;
        AccountNo?: string;
        BankName?: string;
        BrachName?: string;
        AccountHeadId?: number;
        Slno?: number;
        AccountHeadCode?: string;
        AccountHeadDescription?: string;
        AccountHeadParentHeadId?: number;
        AccountHeadLedgerType?: number;
    }
    namespace AccountsRow {
        const idProperty = "Id";
        const nameProperty = "AccountName";
        const localTextPrefix = "Accounts.Accounts";
        const lookupKey = "Accounts.Accounts";
        function getLookup(): Q.Lookup<AccountsRow>;
        const deletePermission = "Accounts:Accounts";
        const insertPermission = "Accounts:Accounts";
        const readPermission = "Accounts:Accounts";
        const updatePermission = "Accounts:Accounts";
        const enum Fields {
            Id = "Id",
            Type = "Type",
            AccountName = "AccountName",
            AccountNo = "AccountNo",
            BankName = "BankName",
            BrachName = "BrachName",
            AccountHeadId = "AccountHeadId",
            Slno = "Slno",
            AccountHeadCode = "AccountHeadCode",
            AccountHeadDescription = "AccountHeadDescription",
            AccountHeadParentHeadId = "AccountHeadParentHeadId",
            AccountHeadLedgerType = "AccountHeadLedgerType"
        }
    }
}
declare namespace SerExtraCore.Accounts {
    namespace AccountsService {
        const baseUrl = "Accounts/Accounts";
        function Create(request: Serenity.SaveRequest<AccountsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<AccountsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AccountsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<AccountsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AccountsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<AccountsRow>>;
        const enum Methods {
            Create = "Accounts/Accounts/Create",
            Update = "Accounts/Accounts/Update",
            Delete = "Accounts/Accounts/Delete",
            Retrieve = "Accounts/Accounts/Retrieve",
            List = "Accounts/Accounts/List"
        }
    }
}
declare namespace SerExtraCore.Accounts {
    class BankReconciliationColumns {
        static readonly columnsKey = "Accounts.BankReconciliationColumns";
    }
}
declare namespace SerExtraCore.Accounts {
    interface BankReconciliationRequest extends Serenity.ListRequest {
        StartDate?: string;
        EndDate?: string;
        AccountId?: number;
    }
}
declare namespace SerExtraCore.Accounts {
    interface BankReconciliationRow {
        Id?: number;
        TrxDate?: string;
        VNo?: number;
        AccountName?: string;
        AccountId?: number;
        BankReconciliation?: boolean;
        Remarks?: string;
        Credit?: number;
        Debit?: number;
    }
    namespace BankReconciliationRow {
        const idProperty = "Id";
        const nameProperty = "Remarks";
        const localTextPrefix = "Accounts.BankReconciliation";
        const deletePermission = "Accounts:Receipt";
        const insertPermission = "Accounts:Receipt";
        const readPermission = "Accounts:Receipt";
        const updatePermission = "Accounts:Receipt";
        const enum Fields {
            Id = "Id",
            TrxDate = "TrxDate",
            VNo = "VNo",
            AccountName = "AccountName",
            AccountId = "AccountId",
            BankReconciliation = "BankReconciliation",
            Remarks = "Remarks",
            Credit = "Credit",
            Debit = "Debit"
        }
    }
}
declare namespace SerExtraCore.Accounts {
    namespace BankReconciliationService {
        const baseUrl = "Accounts/BankReconciliation";
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BankReconciliationRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<BankReconciliationRow>>;
        function UpdateStatus(request: Web.Modules.UpdateBankStatus, onSuccess?: (response: boolean) => void, opt?: Q.ServiceOptions<any>): PromiseLike<boolean>;
        function AccountOpening(request: Web.Modules.AccountOpeningRequest, onSuccess?: (response: number) => void, opt?: Q.ServiceOptions<any>): PromiseLike<number>;
        const enum Methods {
            List = "Accounts/BankReconciliation/List",
            UpdateStatus = "Accounts/BankReconciliation/UpdateStatus",
            AccountOpening = "Accounts/BankReconciliation/AccountOpening"
        }
    }
}
declare namespace SerExtraCore.Accounts {
    namespace CommonService {
        const baseUrl = "Common";
        function GetTrxNo(request: Web.Modules.VoucherNoRequest, onSuccess?: (response: Web.Modules.VoucherNoResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.VoucherNoResponse>;
        function GetVoucherNo(request: Web.Modules.VoucherNoRequest, onSuccess?: (response: Web.Modules.VoucherNoResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.VoucherNoResponse>;
        function GetInvoiceBalance(request: Web.Modules.InvoiceBalanceRequest, onSuccess?: (response: Web.Modules.InvoiceBalanceResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.InvoiceBalanceResponse>;
        function GetInvoiceVehicleDetailsBalance(request: Web.Modules.InvoiceVehicleDetailBalanceRequest, onSuccess?: (response: Web.Modules.InvoiceBalanceResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.InvoiceBalanceResponse>;
        function GetInvoiceVehicleChargesBalance(request: Web.Modules.InvoiceVehicleChargesBalanceRequest, onSuccess?: (response: Web.Modules.InvoiceBalanceResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.InvoiceBalanceResponse>;
        function GetUserHierarchy(request: Web.Modules.UserHierarchyRequest, onSuccess?: (response: boolean) => void, opt?: Q.ServiceOptions<any>): PromiseLike<boolean>;
        function GetConfigration(request: Serenity.ServiceRequest, onSuccess?: (response: Administration.ConfigurationRow) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Administration.ConfigurationRow>;
        function GetNotUseVehicles(request: Serenity.ServiceRequest, onSuccess?: (response: Master.VehiclesRow[]) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Master.VehiclesRow[]>;
        function GetConsigmentByVehicle(request: Web.Modules.ConsignmentByVehicle, onSuccess?: (response: Transactions.ConsignmentVehicleDetailsRow) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Transactions.ConsignmentVehicleDetailsRow>;
        function GetVehicleSpecification(request: Web.Modules.ConsignmentByVehicle, onSuccess?: (response: number[]) => void, opt?: Q.ServiceOptions<any>): PromiseLike<number[]>;
        function GetConsigmentVehicleSpecification(request: Web.Modules.ConsignmentByVehicle, onSuccess?: (response: number[]) => void, opt?: Q.ServiceOptions<any>): PromiseLike<number[]>;
        function GetSupplierBalance(request: Web.Modules.SupplierBalance, onSuccess?: (response: Web.Modules.SupplierBalanceResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.SupplierBalanceResponse>;
        function GetCustomer(request: Web.Modules.SupplierBalance, onSuccess?: (response: Master.CustomersRow) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Master.CustomersRow>;
        function GetEmployee(request: Web.Modules.SupplierBalance, onSuccess?: (response: Master.EmployeeMasterRow) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Master.EmployeeMasterRow>;
        function GetBalnkReport(request: Serenity.ServiceRequest, onSuccess?: (response: Web.Modules.RefNoTrackRequest) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.RefNoTrackRequest>;
        function ShowReport(request: Web.Modules.ReportRequest, onSuccess?: (response: Web.Modules.ReportRequest) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.ReportRequest>;
        function GetReportRequest(request: Web.Modules.ReportRequest, onSuccess?: (response: Web.Modules.ReportRequest) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.ReportRequest>;
        function GetCustomLookup(request: Web.Modules.CustomLookupRequest, onSuccess?: (response: Serenity.ListResponse<Web.Modules.CustomLookupResponse>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<Web.Modules.CustomLookupResponse>>;
        function GetInvoiceData(request: Web.Modules.InvoicePrintRequest, onSuccess?: (response: Transactions.OrderDetailReportData) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Transactions.OrderDetailReportData>;
        const enum Methods {
            GetTrxNo = "Common/GetTrxNo",
            GetVoucherNo = "Common/GetVoucherNo",
            GetInvoiceBalance = "Common/GetInvoiceBalance",
            GetInvoiceVehicleDetailsBalance = "Common/GetInvoiceVehicleDetailsBalance",
            GetInvoiceVehicleChargesBalance = "Common/GetInvoiceVehicleChargesBalance",
            GetUserHierarchy = "Common/GetUserHierarchy",
            GetConfigration = "Common/GetConfigration",
            GetNotUseVehicles = "Common/GetNotUseVehicles",
            GetConsigmentByVehicle = "Common/GetConsigmentByVehicle",
            GetVehicleSpecification = "Common/GetVehicleSpecification",
            GetConsigmentVehicleSpecification = "Common/GetConsigmentVehicleSpecification",
            GetSupplierBalance = "Common/GetSupplierBalance",
            GetCustomer = "Common/GetCustomer",
            GetEmployee = "Common/GetEmployee",
            GetBalnkReport = "Common/GetBalnkReport",
            ShowReport = "Common/ShowReport",
            GetReportRequest = "Common/GetReportRequest",
            GetCustomLookup = "Common/GetCustomLookup",
            GetInvoiceData = "Common/GetInvoiceData"
        }
    }
}
declare namespace SerExtraCore.Accounts {
    class ContraColumns {
        static readonly columnsKey = "Accounts.Contra";
    }
}
declare namespace SerExtraCore.Accounts {
    interface ContraForm {
        TrxDate: Serenity.DateEditor;
        VNo: Serenity.IntegerEditor;
        DebitAccountId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        CreditAccountId: Serenity.LookupEditor;
        Remarks: Serenity.TextAreaEditor;
    }
    class ContraForm extends Serenity.PrefixedContext {
        static readonly formKey = "Accounts.Contra";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Accounts {
    interface ContraRow {
        Id?: number;
        VType?: number;
        TrxDate?: string;
        VNo?: number;
        CustomerId?: number;
        EmployeeId?: number;
        DebitAccountHeadId?: number;
        CreditAccountHeadId?: number;
        Amount?: number;
        PaymentMethod?: number;
        DebitAccountId?: number;
        CreditAccountId?: number;
        Remarks?: string;
        InvoiceCollectionId?: number;
        EntityType?: string;
        Slno?: number;
        CustomerCustomerCode?: string;
        CustomerCustomerName?: string;
        CustomerAddress?: string;
        CustomerPlace?: string;
        CustomerTelephone?: string;
        CustomerEmail?: string;
        CustomerContactPerson?: string;
        CustomerMobile?: string;
        CustomerCreationDate?: string;
        CustomerDescription?: string;
        EmployeeEmployeeCode?: string;
        EmployeeEmployeeName?: string;
        EmployeeAddress?: string;
        EmployeeCountryId?: number;
        EmployeeEmployeeStatus?: number;
        EmployeeEmployeeTypeId?: number;
        EmployeeDesignationId?: number;
        EmployeeResidentId?: string;
        EmployeeRidExpiryDate?: string;
        EmployeePassportNumber?: string;
        EmployeePassportExpiryDate?: string;
        EmployeeMobileNumber?: string;
        EmployeeBasicSalary?: number;
        EmployeeAllowance?: number;
        DebitAccountHeadCode?: string;
        DebitAccountHeadDescription?: string;
        DebitAccountHeadParentHeadId?: number;
        DebitAccountHeadLedgerType?: number;
        CreditAccountHeadCode?: string;
        CreditAccountHeadDescription?: string;
        CreditAccountHeadParentHeadId?: number;
        CreditAccountHeadLedgerType?: number;
        DebitAccountType?: number;
        DebitAccountAccountName?: string;
        DebitAccountAccountNo?: string;
        DebitAccountBankName?: string;
        DebitAccountBrachName?: string;
        DebitAccountAccountHeadId?: number;
        CreditAccountType?: number;
        CreditAccountAccountName?: string;
        CreditAccountAccountNo?: string;
        CreditAccountBankName?: string;
        CreditAccountBrachName?: string;
        CreditAccountAccountHeadId?: number;
        InvoiceCollectionTrxDate?: string;
        InvoiceCollectionCollectionNumber?: string;
        InvoiceCollectionCustomerId?: number;
        InvoiceCollectionTotalAmount?: number;
        InvoiceCollectionPaymentType?: number;
        InvoiceCollectionAccountId?: number;
        InvoiceCollectionStatus?: number;
        InvoiceCollectionStatusUser?: number;
    }
    namespace ContraRow {
        const idProperty = "Id";
        const nameProperty = "Remarks";
        const localTextPrefix = "Accounts.Contra";
        const deletePermission = "Accounts:Contra";
        const insertPermission = "Accounts:Contra";
        const readPermission = "Accounts:Contra";
        const updatePermission = "Accounts:Contra";
        const enum Fields {
            Id = "Id",
            VType = "VType",
            TrxDate = "TrxDate",
            VNo = "VNo",
            CustomerId = "CustomerId",
            EmployeeId = "EmployeeId",
            DebitAccountHeadId = "DebitAccountHeadId",
            CreditAccountHeadId = "CreditAccountHeadId",
            Amount = "Amount",
            PaymentMethod = "PaymentMethod",
            DebitAccountId = "DebitAccountId",
            CreditAccountId = "CreditAccountId",
            Remarks = "Remarks",
            InvoiceCollectionId = "InvoiceCollectionId",
            EntityType = "EntityType",
            Slno = "Slno",
            CustomerCustomerCode = "CustomerCustomerCode",
            CustomerCustomerName = "CustomerCustomerName",
            CustomerAddress = "CustomerAddress",
            CustomerPlace = "CustomerPlace",
            CustomerTelephone = "CustomerTelephone",
            CustomerEmail = "CustomerEmail",
            CustomerContactPerson = "CustomerContactPerson",
            CustomerMobile = "CustomerMobile",
            CustomerCreationDate = "CustomerCreationDate",
            CustomerDescription = "CustomerDescription",
            EmployeeEmployeeCode = "EmployeeEmployeeCode",
            EmployeeEmployeeName = "EmployeeEmployeeName",
            EmployeeAddress = "EmployeeAddress",
            EmployeeCountryId = "EmployeeCountryId",
            EmployeeEmployeeStatus = "EmployeeEmployeeStatus",
            EmployeeEmployeeTypeId = "EmployeeEmployeeTypeId",
            EmployeeDesignationId = "EmployeeDesignationId",
            EmployeeResidentId = "EmployeeResidentId",
            EmployeeRidExpiryDate = "EmployeeRidExpiryDate",
            EmployeePassportNumber = "EmployeePassportNumber",
            EmployeePassportExpiryDate = "EmployeePassportExpiryDate",
            EmployeeMobileNumber = "EmployeeMobileNumber",
            EmployeeBasicSalary = "EmployeeBasicSalary",
            EmployeeAllowance = "EmployeeAllowance",
            DebitAccountHeadCode = "DebitAccountHeadCode",
            DebitAccountHeadDescription = "DebitAccountHeadDescription",
            DebitAccountHeadParentHeadId = "DebitAccountHeadParentHeadId",
            DebitAccountHeadLedgerType = "DebitAccountHeadLedgerType",
            CreditAccountHeadCode = "CreditAccountHeadCode",
            CreditAccountHeadDescription = "CreditAccountHeadDescription",
            CreditAccountHeadParentHeadId = "CreditAccountHeadParentHeadId",
            CreditAccountHeadLedgerType = "CreditAccountHeadLedgerType",
            DebitAccountType = "DebitAccountType",
            DebitAccountAccountName = "DebitAccountAccountName",
            DebitAccountAccountNo = "DebitAccountAccountNo",
            DebitAccountBankName = "DebitAccountBankName",
            DebitAccountBrachName = "DebitAccountBrachName",
            DebitAccountAccountHeadId = "DebitAccountAccountHeadId",
            CreditAccountType = "CreditAccountType",
            CreditAccountAccountName = "CreditAccountAccountName",
            CreditAccountAccountNo = "CreditAccountAccountNo",
            CreditAccountBankName = "CreditAccountBankName",
            CreditAccountBrachName = "CreditAccountBrachName",
            CreditAccountAccountHeadId = "CreditAccountAccountHeadId",
            InvoiceCollectionTrxDate = "InvoiceCollectionTrxDate",
            InvoiceCollectionCollectionNumber = "InvoiceCollectionCollectionNumber",
            InvoiceCollectionCustomerId = "InvoiceCollectionCustomerId",
            InvoiceCollectionTotalAmount = "InvoiceCollectionTotalAmount",
            InvoiceCollectionPaymentType = "InvoiceCollectionPaymentType",
            InvoiceCollectionAccountId = "InvoiceCollectionAccountId",
            InvoiceCollectionStatus = "InvoiceCollectionStatus",
            InvoiceCollectionStatusUser = "InvoiceCollectionStatusUser"
        }
    }
}
declare namespace SerExtraCore.Accounts {
    namespace ContraService {
        const baseUrl = "Accounts/Contra";
        function Create(request: Serenity.SaveRequest<ContraRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<ContraRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ContraRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ContraRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ContraRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ContraRow>>;
        const enum Methods {
            Create = "Accounts/Contra/Create",
            Update = "Accounts/Contra/Update",
            Delete = "Accounts/Contra/Delete",
            Retrieve = "Accounts/Contra/Retrieve",
            List = "Accounts/Contra/List"
        }
    }
}
declare namespace SerExtraCore.Accounts {
    class JVAdjustmentsColumns {
        static readonly columnsKey = "Accounts.JVAdjustments";
    }
}
declare namespace SerExtraCore.Accounts {
    interface JVAdjustmentsForm {
        TrxDate: Serenity.DateEditor;
        VNo: Serenity.IntegerEditor;
        CustomerId: Serenity.LookupEditor;
        EmployeeId: Serenity.LookupEditor;
        VehicleId: Serenity.LookupEditor;
        DebitSupplierId: Serenity.LookupEditor;
        DebitAccountHeadId: Serenity.LookupEditor;
        DebitAccountId: Serenity.LookupEditor;
        CreditCustomerId: Serenity.LookupEditor;
        CreditEmployeeId: Serenity.LookupEditor;
        CreditVehicleId: Serenity.LookupEditor;
        CreditSupplierId: Serenity.LookupEditor;
        CreditAccountHeadId: Serenity.LookupEditor;
        CreditAccountId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        Remarks: Serenity.TextAreaEditor;
    }
    class JVAdjustmentsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Accounts.JVAdjustments";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Accounts {
    interface JVAdjustmentsRow {
        Id?: number;
        VType?: number;
        TrxDate?: string;
        VNo?: number;
        CustomerId?: number;
        EmployeeId?: number;
        DebitAccountHeadId?: number;
        CreditAccountHeadId?: number;
        Amount?: number;
        PaymentMethod?: AccountTypes;
        DebitAccountId?: number;
        CreditAccountId?: number;
        Remarks?: string;
        InvoiceCollectionId?: number;
        EntityType?: string;
        SupplierPaymentId?: number;
        SupplierId?: number;
        ConsignmentId?: number;
        VehicleId?: number;
        Slno?: number;
        OpeningCustomerId?: number;
        OpeningSupplierId?: number;
        DebitSupplierId?: number;
        CreditSupplierId?: number;
        CreditCustomerId?: number;
        CreditVehicleId?: number;
        CreditEmployeeId?: number;
        CustomerCustomerCode?: string;
        CustomerCustomerName?: string;
        CustomerAddress?: string;
        CustomerPlace?: string;
        CustomerTelephone?: string;
        CustomerEmail?: string;
        CustomerContactPerson?: string;
        CustomerMobile?: string;
        CustomerCreationDate?: string;
        CustomerDescription?: string;
        EmployeeEmployeeCode?: string;
        EmployeeEmployeeName?: string;
        EmployeeAddress?: string;
        EmployeeCountryId?: number;
        EmployeeEmployeeStatus?: number;
        EmployeeEmployeeTypeId?: number;
        EmployeeDesignationId?: number;
        EmployeeResidentId?: string;
        EmployeeRidExpiryDate?: string;
        EmployeePassportNumber?: string;
        EmployeePassportExpiryDate?: string;
        EmployeeMobileNumber?: string;
        EmployeeBasicSalary?: number;
        EmployeeAllowance?: number;
        DebitAccountHeadCode?: string;
        DebitAccountHeadDescription?: string;
        DebitAccountHeadParentHeadId?: number;
        DebitAccountHeadLedgerType?: number;
        CreditAccountHeadCode?: string;
        CreditAccountHeadDescription?: string;
        CreditAccountHeadParentHeadId?: number;
        CreditAccountHeadLedgerType?: number;
        DebitAccountType?: number;
        DebitAccountAccountName?: string;
        DebitAccountAccountNo?: string;
        DebitAccountBankName?: string;
        DebitAccountBrachName?: string;
        DebitAccountAccountHeadId?: number;
        CreditAccountType?: number;
        CreditAccountAccountName?: string;
        CreditAccountAccountNo?: string;
        CreditAccountBankName?: string;
        CreditAccountBrachName?: string;
        CreditAccountAccountHeadId?: number;
        InvoiceCollectionTrxDate?: string;
        InvoiceCollectionCollectionNumber?: string;
        InvoiceCollectionCustomerId?: number;
        InvoiceCollectionTotalAmount?: number;
        InvoiceCollectionPaymentType?: number;
        InvoiceCollectionAccountId?: number;
        InvoiceCollectionStatus?: number;
        InvoiceCollectionStatusUser?: number;
        SupplierPaymentCode?: string;
        SupplierPaymentDate?: string;
        SupplierPaymentSupplierId?: number;
        SupplierPaymentTotalAmount?: number;
        SupplierPaymentPaymentType?: number;
        SupplierPaymentAccountId?: number;
        SupplierPaymentStatus?: number;
        SupplierPaymentStatusUser?: number;
        SupplierSupplierCode?: string;
        SupplierSupplierName?: string;
        SupplierAddress?: string;
        SupplierPlace?: string;
        SupplierTelephone?: string;
        SupplierEmail?: string;
        SupplierContactPerson?: string;
        SupplierMobile?: string;
        SupplierCreationDate?: string;
        SupplierDescription?: string;
        ConsignmentDate?: string;
        ConsignmentWayBillNo?: string;
        ConsignmentJobNo?: string;
        ConsignmentClientJobNo?: string;
        ConsignmentShipperId?: number;
        ConsignmentConsigneeId?: number;
        ConsignmentVehicleId?: number;
        ConsignmentType?: string;
        ConsignmentVehicleNumber?: string;
        ConsignmentDriver?: number;
        ConsignmentPayment?: number;
        ConsignmentTypeOfPkg?: string;
        ConsignmentTotalVolume?: string;
        ConsignmentTotalWeight?: string;
        ConsignmentTotalNoOfPkgs?: string;
        ConsignmentShippingAreaFrom?: number;
        ConsignmentShippingAreaTo?: number;
        ConsignmentTotalAmount?: number;
        ConsignmentStatus?: number;
        ConsignmentPaymentMode?: number;
        ConsignmentBilling?: number;
        ConsignmentStartDate?: string;
        ConsignmentEndDate?: string;
        ConsignmentSupplierAmount?: number;
        ConsignmentSupplierId?: number;
        VehicleTypeOfVehicle?: number;
        VehicleThrough?: number;
        VehicleVehicleNumber?: string;
        VehicleVehicleModel?: number;
        VehicleRegistraionNumber?: string;
        VehicleDescription?: string;
        VehicleRegistrationDate?: string;
        VehicleExpiryDate?: string;
        VehicleDriver?: number;
        VehiclePdoApproved?: boolean;
        VehiclePrimeMover?: string;
        VehicleSupplierId?: number;
        BankReconciliation?: boolean;
    }
    namespace JVAdjustmentsRow {
        const idProperty = "Id";
        const nameProperty = "Remarks";
        const localTextPrefix = "Accounts.JVAdjustments";
        const deletePermission = "Accounts:JournalEntry";
        const insertPermission = "Accounts:JournalEntry";
        const readPermission = "Accounts:JournalEntry";
        const updatePermission = "Accounts:JournalEntry";
        const enum Fields {
            Id = "Id",
            VType = "VType",
            TrxDate = "TrxDate",
            VNo = "VNo",
            CustomerId = "CustomerId",
            EmployeeId = "EmployeeId",
            DebitAccountHeadId = "DebitAccountHeadId",
            CreditAccountHeadId = "CreditAccountHeadId",
            Amount = "Amount",
            PaymentMethod = "PaymentMethod",
            DebitAccountId = "DebitAccountId",
            CreditAccountId = "CreditAccountId",
            Remarks = "Remarks",
            InvoiceCollectionId = "InvoiceCollectionId",
            EntityType = "EntityType",
            SupplierPaymentId = "SupplierPaymentId",
            SupplierId = "SupplierId",
            ConsignmentId = "ConsignmentId",
            VehicleId = "VehicleId",
            Slno = "Slno",
            OpeningCustomerId = "OpeningCustomerId",
            OpeningSupplierId = "OpeningSupplierId",
            DebitSupplierId = "DebitSupplierId",
            CreditSupplierId = "CreditSupplierId",
            CreditCustomerId = "CreditCustomerId",
            CreditVehicleId = "CreditVehicleId",
            CreditEmployeeId = "CreditEmployeeId",
            CustomerCustomerCode = "CustomerCustomerCode",
            CustomerCustomerName = "CustomerCustomerName",
            CustomerAddress = "CustomerAddress",
            CustomerPlace = "CustomerPlace",
            CustomerTelephone = "CustomerTelephone",
            CustomerEmail = "CustomerEmail",
            CustomerContactPerson = "CustomerContactPerson",
            CustomerMobile = "CustomerMobile",
            CustomerCreationDate = "CustomerCreationDate",
            CustomerDescription = "CustomerDescription",
            EmployeeEmployeeCode = "EmployeeEmployeeCode",
            EmployeeEmployeeName = "EmployeeEmployeeName",
            EmployeeAddress = "EmployeeAddress",
            EmployeeCountryId = "EmployeeCountryId",
            EmployeeEmployeeStatus = "EmployeeEmployeeStatus",
            EmployeeEmployeeTypeId = "EmployeeEmployeeTypeId",
            EmployeeDesignationId = "EmployeeDesignationId",
            EmployeeResidentId = "EmployeeResidentId",
            EmployeeRidExpiryDate = "EmployeeRidExpiryDate",
            EmployeePassportNumber = "EmployeePassportNumber",
            EmployeePassportExpiryDate = "EmployeePassportExpiryDate",
            EmployeeMobileNumber = "EmployeeMobileNumber",
            EmployeeBasicSalary = "EmployeeBasicSalary",
            EmployeeAllowance = "EmployeeAllowance",
            DebitAccountHeadCode = "DebitAccountHeadCode",
            DebitAccountHeadDescription = "DebitAccountHeadDescription",
            DebitAccountHeadParentHeadId = "DebitAccountHeadParentHeadId",
            DebitAccountHeadLedgerType = "DebitAccountHeadLedgerType",
            CreditAccountHeadCode = "CreditAccountHeadCode",
            CreditAccountHeadDescription = "CreditAccountHeadDescription",
            CreditAccountHeadParentHeadId = "CreditAccountHeadParentHeadId",
            CreditAccountHeadLedgerType = "CreditAccountHeadLedgerType",
            DebitAccountType = "DebitAccountType",
            DebitAccountAccountName = "DebitAccountAccountName",
            DebitAccountAccountNo = "DebitAccountAccountNo",
            DebitAccountBankName = "DebitAccountBankName",
            DebitAccountBrachName = "DebitAccountBrachName",
            DebitAccountAccountHeadId = "DebitAccountAccountHeadId",
            CreditAccountType = "CreditAccountType",
            CreditAccountAccountName = "CreditAccountAccountName",
            CreditAccountAccountNo = "CreditAccountAccountNo",
            CreditAccountBankName = "CreditAccountBankName",
            CreditAccountBrachName = "CreditAccountBrachName",
            CreditAccountAccountHeadId = "CreditAccountAccountHeadId",
            InvoiceCollectionTrxDate = "InvoiceCollectionTrxDate",
            InvoiceCollectionCollectionNumber = "InvoiceCollectionCollectionNumber",
            InvoiceCollectionCustomerId = "InvoiceCollectionCustomerId",
            InvoiceCollectionTotalAmount = "InvoiceCollectionTotalAmount",
            InvoiceCollectionPaymentType = "InvoiceCollectionPaymentType",
            InvoiceCollectionAccountId = "InvoiceCollectionAccountId",
            InvoiceCollectionStatus = "InvoiceCollectionStatus",
            InvoiceCollectionStatusUser = "InvoiceCollectionStatusUser",
            SupplierPaymentCode = "SupplierPaymentCode",
            SupplierPaymentDate = "SupplierPaymentDate",
            SupplierPaymentSupplierId = "SupplierPaymentSupplierId",
            SupplierPaymentTotalAmount = "SupplierPaymentTotalAmount",
            SupplierPaymentPaymentType = "SupplierPaymentPaymentType",
            SupplierPaymentAccountId = "SupplierPaymentAccountId",
            SupplierPaymentStatus = "SupplierPaymentStatus",
            SupplierPaymentStatusUser = "SupplierPaymentStatusUser",
            SupplierSupplierCode = "SupplierSupplierCode",
            SupplierSupplierName = "SupplierSupplierName",
            SupplierAddress = "SupplierAddress",
            SupplierPlace = "SupplierPlace",
            SupplierTelephone = "SupplierTelephone",
            SupplierEmail = "SupplierEmail",
            SupplierContactPerson = "SupplierContactPerson",
            SupplierMobile = "SupplierMobile",
            SupplierCreationDate = "SupplierCreationDate",
            SupplierDescription = "SupplierDescription",
            ConsignmentDate = "ConsignmentDate",
            ConsignmentWayBillNo = "ConsignmentWayBillNo",
            ConsignmentJobNo = "ConsignmentJobNo",
            ConsignmentClientJobNo = "ConsignmentClientJobNo",
            ConsignmentShipperId = "ConsignmentShipperId",
            ConsignmentConsigneeId = "ConsignmentConsigneeId",
            ConsignmentVehicleId = "ConsignmentVehicleId",
            ConsignmentType = "ConsignmentType",
            ConsignmentVehicleNumber = "ConsignmentVehicleNumber",
            ConsignmentDriver = "ConsignmentDriver",
            ConsignmentPayment = "ConsignmentPayment",
            ConsignmentTypeOfPkg = "ConsignmentTypeOfPkg",
            ConsignmentTotalVolume = "ConsignmentTotalVolume",
            ConsignmentTotalWeight = "ConsignmentTotalWeight",
            ConsignmentTotalNoOfPkgs = "ConsignmentTotalNoOfPkgs",
            ConsignmentShippingAreaFrom = "ConsignmentShippingAreaFrom",
            ConsignmentShippingAreaTo = "ConsignmentShippingAreaTo",
            ConsignmentTotalAmount = "ConsignmentTotalAmount",
            ConsignmentStatus = "ConsignmentStatus",
            ConsignmentPaymentMode = "ConsignmentPaymentMode",
            ConsignmentBilling = "ConsignmentBilling",
            ConsignmentStartDate = "ConsignmentStartDate",
            ConsignmentEndDate = "ConsignmentEndDate",
            ConsignmentSupplierAmount = "ConsignmentSupplierAmount",
            ConsignmentSupplierId = "ConsignmentSupplierId",
            VehicleTypeOfVehicle = "VehicleTypeOfVehicle",
            VehicleThrough = "VehicleThrough",
            VehicleVehicleNumber = "VehicleVehicleNumber",
            VehicleVehicleModel = "VehicleVehicleModel",
            VehicleRegistraionNumber = "VehicleRegistraionNumber",
            VehicleDescription = "VehicleDescription",
            VehicleRegistrationDate = "VehicleRegistrationDate",
            VehicleExpiryDate = "VehicleExpiryDate",
            VehicleDriver = "VehicleDriver",
            VehiclePdoApproved = "VehiclePdoApproved",
            VehiclePrimeMover = "VehiclePrimeMover",
            VehicleSupplierId = "VehicleSupplierId",
            BankReconciliation = "BankReconciliation"
        }
    }
}
declare namespace SerExtraCore.Accounts {
    namespace JVAdjustmentsService {
        const baseUrl = "Accounts/JVAdjustments";
        function Create(request: Serenity.SaveRequest<JVAdjustmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<JVAdjustmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<JVAdjustmentsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<JVAdjustmentsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<JVAdjustmentsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<JVAdjustmentsRow>>;
        const enum Methods {
            Create = "Accounts/JVAdjustments/Create",
            Update = "Accounts/JVAdjustments/Update",
            Delete = "Accounts/JVAdjustments/Delete",
            Retrieve = "Accounts/JVAdjustments/Retrieve",
            List = "Accounts/JVAdjustments/List"
        }
    }
}
declare namespace SerExtraCore.Accounts {
    class MoneyInColumns {
        static readonly columnsKey = "Accounts.MoneyIn";
    }
}
declare namespace SerExtraCore.Accounts {
    interface MoneyInForm {
        TrxDate: Serenity.DateEditor;
        TsId: Serenity.LookupEditor;
        VNo: Serenity.StringEditor;
        AccountHeadId: Serenity.LookupEditor;
        CustomerId: Serenity.LookupEditor;
        EmployeeId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        TaxPer: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
        Remarks: Serenity.TextAreaEditor;
        Receipts: Transactions.ReceiptEditor;
    }
    class MoneyInForm extends Serenity.PrefixedContext {
        static readonly formKey = "Accounts.MoneyIn";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Accounts {
    interface MoneyInRow {
        Id?: number;
        VType?: number;
        TrxDate?: string;
        VNo?: number;
        CustomerId?: number;
        EmployeeId?: number;
        SupplierId?: number;
        VehicleId?: number;
        Amount?: number;
        TaxPer?: number;
        TaxAmount?: number;
        TotalAmount?: number;
        AccountHeadId?: number;
        PaymentMethod?: AccountTypes;
        AccountId?: number;
        Remarks?: string;
        Receipts?: ReceiptRow[];
        PdcPaymentDetails?: PDCPayments.PdcPaymentDetailsRow[];
        CustomerCustomerCode?: string;
        CustomerCustomerName?: string;
        CustomerAddress?: string;
        CustomerPlace?: string;
        CustomerTelephone?: string;
        CustomerEmail?: string;
        CustomerContactPerson?: string;
        CustomerMobile?: string;
        CustomerCreationDate?: string;
        CustomerDescription?: string;
        CustomerDueDays?: number;
        CustomerOpening?: number;
        CustomerOpeningDate?: string;
        CustomerTaxRegNo?: string;
        EmployeeEmployeeCode?: string;
        EmployeeEmployeeName?: string;
        EmployeeAddress?: string;
        EmployeeCountryId?: number;
        EmployeeEmployeeStatus?: number;
        EmployeeEmployeeTypeId?: number;
        EmployeeDesignationId?: number;
        EmployeeResidentId?: string;
        EmployeeRidExpiryDate?: string;
        EmployeePassportNumber?: string;
        EmployeePassportExpiryDate?: string;
        EmployeeMobileNumber?: string;
        EmployeeBasicSalary?: number;
        EmployeeAllowance?: number;
        SupplierSupplierCode?: string;
        SupplierSupplierName?: string;
        SupplierAddress?: string;
        SupplierPlace?: string;
        SupplierTelephone?: string;
        SupplierEmail?: string;
        SupplierContactPerson?: string;
        SupplierMobile?: string;
        SupplierCreationDate?: string;
        SupplierDescription?: string;
        SupplierOpening?: number;
        SupplierOpeningDate?: string;
        VehicleTypeOfVehicle?: number;
        VehicleThrough?: number;
        VehicleVehicleNumber?: string;
        VehicleVehicleModel?: number;
        VehicleRegistraionNumber?: string;
        VehicleDescription?: string;
        VehicleRegistrationDate?: string;
        VehicleExpiryDate?: string;
        VehicleDriver?: number;
        VehiclePdoApproved?: boolean;
        VehiclePrimeMover?: string;
        VehicleSupplierId?: number;
        AccountHeadCode?: string;
        AccountHeadDescription?: string;
        AccountHeadParentHeadId?: number;
        AccountHeadLedgerType?: number;
        AccountType?: number;
        AccountAccountName?: string;
        AccountAccountNo?: string;
        AccountBankName?: string;
        AccountBrachName?: string;
        AccountAccountHeadId?: number;
        TSNo?: string;
        TsId?: number;
    }
    namespace MoneyInRow {
        const idProperty = "Id";
        const nameProperty = "Remarks";
        const localTextPrefix = "Accounts.MoneyIn";
        const lookupKey = "Accounts.MoneyIn";
        function getLookup(): Q.Lookup<MoneyInRow>;
        const deletePermission = "Accounts:Receipt";
        const insertPermission = "Accounts:Receipt";
        const readPermission = "Accounts:Receipt";
        const updatePermission = "Accounts:Receipt";
        const enum Fields {
            Id = "Id",
            VType = "VType",
            TrxDate = "TrxDate",
            VNo = "VNo",
            CustomerId = "CustomerId",
            EmployeeId = "EmployeeId",
            SupplierId = "SupplierId",
            VehicleId = "VehicleId",
            Amount = "Amount",
            TaxPer = "TaxPer",
            TaxAmount = "TaxAmount",
            TotalAmount = "TotalAmount",
            AccountHeadId = "AccountHeadId",
            PaymentMethod = "PaymentMethod",
            AccountId = "AccountId",
            Remarks = "Remarks",
            Receipts = "Receipts",
            PdcPaymentDetails = "PdcPaymentDetails",
            CustomerCustomerCode = "CustomerCustomerCode",
            CustomerCustomerName = "CustomerCustomerName",
            CustomerAddress = "CustomerAddress",
            CustomerPlace = "CustomerPlace",
            CustomerTelephone = "CustomerTelephone",
            CustomerEmail = "CustomerEmail",
            CustomerContactPerson = "CustomerContactPerson",
            CustomerMobile = "CustomerMobile",
            CustomerCreationDate = "CustomerCreationDate",
            CustomerDescription = "CustomerDescription",
            CustomerDueDays = "CustomerDueDays",
            CustomerOpening = "CustomerOpening",
            CustomerOpeningDate = "CustomerOpeningDate",
            CustomerTaxRegNo = "CustomerTaxRegNo",
            EmployeeEmployeeCode = "EmployeeEmployeeCode",
            EmployeeEmployeeName = "EmployeeEmployeeName",
            EmployeeAddress = "EmployeeAddress",
            EmployeeCountryId = "EmployeeCountryId",
            EmployeeEmployeeStatus = "EmployeeEmployeeStatus",
            EmployeeEmployeeTypeId = "EmployeeEmployeeTypeId",
            EmployeeDesignationId = "EmployeeDesignationId",
            EmployeeResidentId = "EmployeeResidentId",
            EmployeeRidExpiryDate = "EmployeeRidExpiryDate",
            EmployeePassportNumber = "EmployeePassportNumber",
            EmployeePassportExpiryDate = "EmployeePassportExpiryDate",
            EmployeeMobileNumber = "EmployeeMobileNumber",
            EmployeeBasicSalary = "EmployeeBasicSalary",
            EmployeeAllowance = "EmployeeAllowance",
            SupplierSupplierCode = "SupplierSupplierCode",
            SupplierSupplierName = "SupplierSupplierName",
            SupplierAddress = "SupplierAddress",
            SupplierPlace = "SupplierPlace",
            SupplierTelephone = "SupplierTelephone",
            SupplierEmail = "SupplierEmail",
            SupplierContactPerson = "SupplierContactPerson",
            SupplierMobile = "SupplierMobile",
            SupplierCreationDate = "SupplierCreationDate",
            SupplierDescription = "SupplierDescription",
            SupplierOpening = "SupplierOpening",
            SupplierOpeningDate = "SupplierOpeningDate",
            VehicleTypeOfVehicle = "VehicleTypeOfVehicle",
            VehicleThrough = "VehicleThrough",
            VehicleVehicleNumber = "VehicleVehicleNumber",
            VehicleVehicleModel = "VehicleVehicleModel",
            VehicleRegistraionNumber = "VehicleRegistraionNumber",
            VehicleDescription = "VehicleDescription",
            VehicleRegistrationDate = "VehicleRegistrationDate",
            VehicleExpiryDate = "VehicleExpiryDate",
            VehicleDriver = "VehicleDriver",
            VehiclePdoApproved = "VehiclePdoApproved",
            VehiclePrimeMover = "VehiclePrimeMover",
            VehicleSupplierId = "VehicleSupplierId",
            AccountHeadCode = "AccountHeadCode",
            AccountHeadDescription = "AccountHeadDescription",
            AccountHeadParentHeadId = "AccountHeadParentHeadId",
            AccountHeadLedgerType = "AccountHeadLedgerType",
            AccountType = "AccountType",
            AccountAccountName = "AccountAccountName",
            AccountAccountNo = "AccountAccountNo",
            AccountBankName = "AccountBankName",
            AccountBrachName = "AccountBrachName",
            AccountAccountHeadId = "AccountAccountHeadId",
            TSNo = "TSNo",
            TsId = "TsId"
        }
    }
}
declare namespace SerExtraCore.Accounts {
    namespace MoneyInService {
        const baseUrl = "Accounts/MoneyIn";
        function Create(request: Serenity.SaveRequest<MoneyInRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<MoneyInRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MoneyInRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<MoneyInRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MoneyInRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<MoneyInRow>>;
        const enum Methods {
            Create = "Accounts/MoneyIn/Create",
            Update = "Accounts/MoneyIn/Update",
            Delete = "Accounts/MoneyIn/Delete",
            Retrieve = "Accounts/MoneyIn/Retrieve",
            List = "Accounts/MoneyIn/List"
        }
    }
}
declare namespace SerExtraCore.Accounts {
    class MoneyOutColumns {
        static readonly columnsKey = "Accounts.MoneyOut";
    }
}
declare namespace SerExtraCore.Accounts {
    interface MoneyOutForm {
        TrxDate: Serenity.DateEditor;
        TsId: Serenity.LookupEditor;
        VNo: Serenity.StringEditor;
        AccountHeadId: Serenity.LookupEditor;
        CustomerId: Serenity.LookupEditor;
        EmployeeId: Serenity.LookupEditor;
        SupplierId: Serenity.LookupEditor;
        VehicleId: Serenity.LookupEditor;
        ConsignmentId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        TaxPer: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
        Remarks: Serenity.TextAreaEditor;
        Payments: Transactions.ReceiptEditor;
    }
    class MoneyOutForm extends Serenity.PrefixedContext {
        static readonly formKey = "Accounts.MoneyOut";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Accounts {
    interface MoneyOutRow {
        Id?: number;
        VType?: number;
        TrxDate?: string;
        VNo?: number;
        CustomerId?: number;
        EmployeeId?: number;
        SupplierId?: number;
        VehicleId?: number;
        Amount?: number;
        TaxPer?: number;
        TaxAmount?: number;
        TotalAmount?: number;
        AccountHeadId?: number;
        PaymentMethod?: AccountTypes;
        AccountId?: number;
        Remarks?: string;
        Payments?: PaymentRow[];
        PdcPaymentDetails?: PDCPayments.PdcPaymentDetailsRow[];
        CustomerCustomerCode?: string;
        CustomerCustomerName?: string;
        CustomerAddress?: string;
        CustomerPlace?: string;
        CustomerTelephone?: string;
        CustomerEmail?: string;
        CustomerContactPerson?: string;
        CustomerMobile?: string;
        CustomerCreationDate?: string;
        CustomerDescription?: string;
        CustomerDueDays?: number;
        CustomerOpening?: number;
        CustomerOpeningDate?: string;
        CustomerTaxRegNo?: string;
        EmployeeEmployeeCode?: string;
        EmployeeEmployeeName?: string;
        EmployeeAddress?: string;
        EmployeeCountryId?: number;
        EmployeeEmployeeStatus?: number;
        EmployeeEmployeeTypeId?: number;
        EmployeeDesignationId?: number;
        EmployeeResidentId?: string;
        EmployeeRidExpiryDate?: string;
        EmployeePassportNumber?: string;
        EmployeePassportExpiryDate?: string;
        EmployeeMobileNumber?: string;
        EmployeeBasicSalary?: number;
        EmployeeAllowance?: number;
        SupplierSupplierCode?: string;
        SupplierSupplierName?: string;
        SupplierAddress?: string;
        SupplierPlace?: string;
        SupplierTelephone?: string;
        SupplierEmail?: string;
        SupplierContactPerson?: string;
        SupplierMobile?: string;
        SupplierCreationDate?: string;
        SupplierDescription?: string;
        SupplierOpening?: number;
        SupplierOpeningDate?: string;
        VehicleTypeOfVehicle?: number;
        VehicleThrough?: number;
        VehicleVehicleNumber?: string;
        VehicleVehicleModel?: number;
        VehicleRegistraionNumber?: string;
        VehicleDescription?: string;
        VehicleRegistrationDate?: string;
        VehicleExpiryDate?: string;
        VehicleDriver?: number;
        VehiclePdoApproved?: boolean;
        VehiclePrimeMover?: string;
        VehicleSupplierId?: number;
        AccountHeadCode?: string;
        AccountHeadDescription?: string;
        AccountHeadParentHeadId?: number;
        AccountHeadLedgerType?: number;
        AccountType?: number;
        AccountAccountName?: string;
        AccountAccountNo?: string;
        AccountBankName?: string;
        AccountBrachName?: string;
        AccountAccountHeadId?: number;
        ConsignmentId?: number;
        ConsignmentJobNo?: string;
        TSNo?: string;
        TsId?: number;
        FuelId?: number;
    }
    namespace MoneyOutRow {
        const idProperty = "Id";
        const nameProperty = "Remarks";
        const localTextPrefix = "Accounts.MoneyOut";
        const lookupKey = "Accounts.MoneyOut";
        function getLookup(): Q.Lookup<MoneyOutRow>;
        const deletePermission = "Accounts:Payment";
        const insertPermission = "Accounts:Payment";
        const readPermission = "Accounts:Payment";
        const updatePermission = "Accounts:Payment";
        const enum Fields {
            Id = "Id",
            VType = "VType",
            TrxDate = "TrxDate",
            VNo = "VNo",
            CustomerId = "CustomerId",
            EmployeeId = "EmployeeId",
            SupplierId = "SupplierId",
            VehicleId = "VehicleId",
            Amount = "Amount",
            TaxPer = "TaxPer",
            TaxAmount = "TaxAmount",
            TotalAmount = "TotalAmount",
            AccountHeadId = "AccountHeadId",
            PaymentMethod = "PaymentMethod",
            AccountId = "AccountId",
            Remarks = "Remarks",
            Payments = "Payments",
            PdcPaymentDetails = "PdcPaymentDetails",
            CustomerCustomerCode = "CustomerCustomerCode",
            CustomerCustomerName = "CustomerCustomerName",
            CustomerAddress = "CustomerAddress",
            CustomerPlace = "CustomerPlace",
            CustomerTelephone = "CustomerTelephone",
            CustomerEmail = "CustomerEmail",
            CustomerContactPerson = "CustomerContactPerson",
            CustomerMobile = "CustomerMobile",
            CustomerCreationDate = "CustomerCreationDate",
            CustomerDescription = "CustomerDescription",
            CustomerDueDays = "CustomerDueDays",
            CustomerOpening = "CustomerOpening",
            CustomerOpeningDate = "CustomerOpeningDate",
            CustomerTaxRegNo = "CustomerTaxRegNo",
            EmployeeEmployeeCode = "EmployeeEmployeeCode",
            EmployeeEmployeeName = "EmployeeEmployeeName",
            EmployeeAddress = "EmployeeAddress",
            EmployeeCountryId = "EmployeeCountryId",
            EmployeeEmployeeStatus = "EmployeeEmployeeStatus",
            EmployeeEmployeeTypeId = "EmployeeEmployeeTypeId",
            EmployeeDesignationId = "EmployeeDesignationId",
            EmployeeResidentId = "EmployeeResidentId",
            EmployeeRidExpiryDate = "EmployeeRidExpiryDate",
            EmployeePassportNumber = "EmployeePassportNumber",
            EmployeePassportExpiryDate = "EmployeePassportExpiryDate",
            EmployeeMobileNumber = "EmployeeMobileNumber",
            EmployeeBasicSalary = "EmployeeBasicSalary",
            EmployeeAllowance = "EmployeeAllowance",
            SupplierSupplierCode = "SupplierSupplierCode",
            SupplierSupplierName = "SupplierSupplierName",
            SupplierAddress = "SupplierAddress",
            SupplierPlace = "SupplierPlace",
            SupplierTelephone = "SupplierTelephone",
            SupplierEmail = "SupplierEmail",
            SupplierContactPerson = "SupplierContactPerson",
            SupplierMobile = "SupplierMobile",
            SupplierCreationDate = "SupplierCreationDate",
            SupplierDescription = "SupplierDescription",
            SupplierOpening = "SupplierOpening",
            SupplierOpeningDate = "SupplierOpeningDate",
            VehicleTypeOfVehicle = "VehicleTypeOfVehicle",
            VehicleThrough = "VehicleThrough",
            VehicleVehicleNumber = "VehicleVehicleNumber",
            VehicleVehicleModel = "VehicleVehicleModel",
            VehicleRegistraionNumber = "VehicleRegistraionNumber",
            VehicleDescription = "VehicleDescription",
            VehicleRegistrationDate = "VehicleRegistrationDate",
            VehicleExpiryDate = "VehicleExpiryDate",
            VehicleDriver = "VehicleDriver",
            VehiclePdoApproved = "VehiclePdoApproved",
            VehiclePrimeMover = "VehiclePrimeMover",
            VehicleSupplierId = "VehicleSupplierId",
            AccountHeadCode = "AccountHeadCode",
            AccountHeadDescription = "AccountHeadDescription",
            AccountHeadParentHeadId = "AccountHeadParentHeadId",
            AccountHeadLedgerType = "AccountHeadLedgerType",
            AccountType = "AccountType",
            AccountAccountName = "AccountAccountName",
            AccountAccountNo = "AccountAccountNo",
            AccountBankName = "AccountBankName",
            AccountBrachName = "AccountBrachName",
            AccountAccountHeadId = "AccountAccountHeadId",
            ConsignmentId = "ConsignmentId",
            ConsignmentJobNo = "ConsignmentJobNo",
            TSNo = "TSNo",
            TsId = "TsId",
            FuelId = "FuelId"
        }
    }
}
declare namespace SerExtraCore.Accounts {
    namespace MoneyOutService {
        const baseUrl = "Accounts/MoneyOut";
        function Create(request: Serenity.SaveRequest<MoneyOutRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<MoneyOutRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MoneyOutRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<MoneyOutRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MoneyOutRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<MoneyOutRow>>;
        const enum Methods {
            Create = "Accounts/MoneyOut/Create",
            Update = "Accounts/MoneyOut/Update",
            Delete = "Accounts/MoneyOut/Delete",
            Retrieve = "Accounts/MoneyOut/Retrieve",
            List = "Accounts/MoneyOut/List"
        }
    }
}
declare namespace SerExtraCore.Accounts {
    class PaymentColumns {
        static readonly columnsKey = "Accounts.Payment";
    }
}
declare namespace SerExtraCore.Accounts {
    interface PaymentForm {
        TrxDate: Serenity.DateEditor;
        FuelTsId: Serenity.IntegerEditor;
        VNo: Serenity.IntegerEditor;
        CustomerId: Serenity.LookupEditor;
        EmployeeId: Serenity.LookupEditor;
        SupplierId: Serenity.LookupEditor;
        VehicleId: Serenity.LookupEditor;
        ConsignmentId: Serenity.LookupEditor;
        DebitAccountHeadId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        CreditAccountId: Serenity.LookupEditor;
        Remarks: Serenity.TextAreaEditor;
    }
    class PaymentForm extends Serenity.PrefixedContext {
        static readonly formKey = "Accounts.Payment";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Accounts {
    interface PaymentRow {
        Id?: number;
        VType?: number;
        TrxDate?: string;
        VNo?: number;
        CustomerId?: number;
        EmployeeId?: number;
        DebitAccountHeadId?: number;
        CreditAccountHeadId?: number;
        Amount?: number;
        PaymentMethod?: AccountTypes;
        DebitAccountId?: number;
        CreditAccountId?: number;
        Remarks?: string;
        InvoiceCollectionId?: number;
        EntityType?: string;
        Slno?: number;
        VehicleId?: number;
        VehicleNumber?: string;
        SupplierPaymentId?: number;
        PayrollPaymentId?: number;
        ConsignmentVehicleDetailsId?: number;
        ConsignmentChargesId?: number;
        PDCPaymentDetailsId?: number;
        PurchaseId?: number;
        MoneyInOutId?: number;
        SupplierId?: number;
        ConsignmentId?: number;
        ConsignmentJobNo?: string;
        SupplierName?: string;
        CustomerCustomerCode?: string;
        CustomerCustomerName?: string;
        CustomerAddress?: string;
        CustomerPlace?: string;
        CustomerTelephone?: string;
        CustomerEmail?: string;
        CustomerContactPerson?: string;
        CustomerMobile?: string;
        CustomerCreationDate?: string;
        CustomerDescription?: string;
        EmployeeEmployeeCode?: string;
        EmployeeEmployeeName?: string;
        EmployeeAddress?: string;
        EmployeeCountryId?: number;
        EmployeeEmployeeStatus?: number;
        EmployeeEmployeeTypeId?: number;
        EmployeeDesignationId?: number;
        EmployeeResidentId?: string;
        EmployeeRidExpiryDate?: string;
        EmployeePassportNumber?: string;
        EmployeePassportExpiryDate?: string;
        EmployeeMobileNumber?: string;
        EmployeeBasicSalary?: number;
        EmployeeAllowance?: number;
        DebitAccountHeadCode?: string;
        DebitAccountHeadDescription?: string;
        DebitAccountHeadParentHeadId?: number;
        DebitAccountHeadLedgerType?: number;
        CreditAccountHeadCode?: string;
        CreditAccountHeadDescription?: string;
        CreditAccountHeadParentHeadId?: number;
        CreditAccountHeadLedgerType?: number;
        DebitAccountType?: number;
        DebitAccountAccountName?: string;
        DebitAccountAccountNo?: string;
        DebitAccountBankName?: string;
        DebitAccountBrachName?: string;
        DebitAccountAccountHeadId?: number;
        CreditAccountType?: number;
        CreditAccountAccountName?: string;
        CreditAccountAccountNo?: string;
        CreditAccountBankName?: string;
        CreditAccountBrachName?: string;
        CreditAccountAccountHeadId?: number;
        InvoiceCollectionTrxDate?: string;
        InvoiceCollectionCollectionNumber?: string;
        InvoiceCollectionCustomerId?: number;
        InvoiceCollectionTotalAmount?: number;
        InvoiceCollectionPaymentType?: number;
        InvoiceCollectionAccountId?: number;
        InvoiceCollectionStatus?: number;
        InvoiceCollectionStatusUser?: number;
        TSNo?: string;
        FuelId?: number;
        FuelTsId?: number;
    }
    namespace PaymentRow {
        const idProperty = "Id";
        const nameProperty = "Remarks";
        const localTextPrefix = "Accounts.Payment";
        const deletePermission = "Accounts:Payment";
        const insertPermission = "Accounts:Payment";
        const readPermission = "Accounts:Payment";
        const updatePermission = "Accounts:Payment";
        const enum Fields {
            Id = "Id",
            VType = "VType",
            TrxDate = "TrxDate",
            VNo = "VNo",
            CustomerId = "CustomerId",
            EmployeeId = "EmployeeId",
            DebitAccountHeadId = "DebitAccountHeadId",
            CreditAccountHeadId = "CreditAccountHeadId",
            Amount = "Amount",
            PaymentMethod = "PaymentMethod",
            DebitAccountId = "DebitAccountId",
            CreditAccountId = "CreditAccountId",
            Remarks = "Remarks",
            InvoiceCollectionId = "InvoiceCollectionId",
            EntityType = "EntityType",
            Slno = "Slno",
            VehicleId = "VehicleId",
            VehicleNumber = "VehicleNumber",
            SupplierPaymentId = "SupplierPaymentId",
            PayrollPaymentId = "PayrollPaymentId",
            ConsignmentVehicleDetailsId = "ConsignmentVehicleDetailsId",
            ConsignmentChargesId = "ConsignmentChargesId",
            PDCPaymentDetailsId = "PDCPaymentDetailsId",
            PurchaseId = "PurchaseId",
            MoneyInOutId = "MoneyInOutId",
            SupplierId = "SupplierId",
            ConsignmentId = "ConsignmentId",
            ConsignmentJobNo = "ConsignmentJobNo",
            SupplierName = "SupplierName",
            CustomerCustomerCode = "CustomerCustomerCode",
            CustomerCustomerName = "CustomerCustomerName",
            CustomerAddress = "CustomerAddress",
            CustomerPlace = "CustomerPlace",
            CustomerTelephone = "CustomerTelephone",
            CustomerEmail = "CustomerEmail",
            CustomerContactPerson = "CustomerContactPerson",
            CustomerMobile = "CustomerMobile",
            CustomerCreationDate = "CustomerCreationDate",
            CustomerDescription = "CustomerDescription",
            EmployeeEmployeeCode = "EmployeeEmployeeCode",
            EmployeeEmployeeName = "EmployeeEmployeeName",
            EmployeeAddress = "EmployeeAddress",
            EmployeeCountryId = "EmployeeCountryId",
            EmployeeEmployeeStatus = "EmployeeEmployeeStatus",
            EmployeeEmployeeTypeId = "EmployeeEmployeeTypeId",
            EmployeeDesignationId = "EmployeeDesignationId",
            EmployeeResidentId = "EmployeeResidentId",
            EmployeeRidExpiryDate = "EmployeeRidExpiryDate",
            EmployeePassportNumber = "EmployeePassportNumber",
            EmployeePassportExpiryDate = "EmployeePassportExpiryDate",
            EmployeeMobileNumber = "EmployeeMobileNumber",
            EmployeeBasicSalary = "EmployeeBasicSalary",
            EmployeeAllowance = "EmployeeAllowance",
            DebitAccountHeadCode = "DebitAccountHeadCode",
            DebitAccountHeadDescription = "DebitAccountHeadDescription",
            DebitAccountHeadParentHeadId = "DebitAccountHeadParentHeadId",
            DebitAccountHeadLedgerType = "DebitAccountHeadLedgerType",
            CreditAccountHeadCode = "CreditAccountHeadCode",
            CreditAccountHeadDescription = "CreditAccountHeadDescription",
            CreditAccountHeadParentHeadId = "CreditAccountHeadParentHeadId",
            CreditAccountHeadLedgerType = "CreditAccountHeadLedgerType",
            DebitAccountType = "DebitAccountType",
            DebitAccountAccountName = "DebitAccountAccountName",
            DebitAccountAccountNo = "DebitAccountAccountNo",
            DebitAccountBankName = "DebitAccountBankName",
            DebitAccountBrachName = "DebitAccountBrachName",
            DebitAccountAccountHeadId = "DebitAccountAccountHeadId",
            CreditAccountType = "CreditAccountType",
            CreditAccountAccountName = "CreditAccountAccountName",
            CreditAccountAccountNo = "CreditAccountAccountNo",
            CreditAccountBankName = "CreditAccountBankName",
            CreditAccountBrachName = "CreditAccountBrachName",
            CreditAccountAccountHeadId = "CreditAccountAccountHeadId",
            InvoiceCollectionTrxDate = "InvoiceCollectionTrxDate",
            InvoiceCollectionCollectionNumber = "InvoiceCollectionCollectionNumber",
            InvoiceCollectionCustomerId = "InvoiceCollectionCustomerId",
            InvoiceCollectionTotalAmount = "InvoiceCollectionTotalAmount",
            InvoiceCollectionPaymentType = "InvoiceCollectionPaymentType",
            InvoiceCollectionAccountId = "InvoiceCollectionAccountId",
            InvoiceCollectionStatus = "InvoiceCollectionStatus",
            InvoiceCollectionStatusUser = "InvoiceCollectionStatusUser",
            TSNo = "TSNo",
            FuelId = "FuelId",
            FuelTsId = "FuelTsId"
        }
    }
}
declare namespace SerExtraCore.Accounts {
    namespace PaymentService {
        const baseUrl = "Accounts/Payment";
        function Create(request: Serenity.SaveRequest<PaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<PaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PaymentRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<PaymentRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PaymentRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<PaymentRow>>;
        const enum Methods {
            Create = "Accounts/Payment/Create",
            Update = "Accounts/Payment/Update",
            Delete = "Accounts/Payment/Delete",
            Retrieve = "Accounts/Payment/Retrieve",
            List = "Accounts/Payment/List"
        }
    }
}
declare namespace SerExtraCore.Accounts {
    class ReceiptColumns {
        static readonly columnsKey = "Accounts.Receipt";
    }
}
declare namespace SerExtraCore.Accounts {
    interface ReceiptForm {
        TrxDate: Serenity.DateEditor;
        VNo: Serenity.IntegerEditor;
        CustomerId: Serenity.LookupEditor;
        EmployeeId: Serenity.LookupEditor;
        CreditAccountHeadId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        DebitAccountId: Serenity.LookupEditor;
        Remarks: Serenity.TextAreaEditor;
    }
    class ReceiptForm extends Serenity.PrefixedContext {
        static readonly formKey = "Accounts.Receipt";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Accounts {
    interface ReceiptRow {
        Id?: number;
        VType?: number;
        TrxDate?: string;
        VNo?: number;
        CustomerId?: number;
        EmployeeId?: number;
        DebitAccountHeadId?: number;
        CreditAccountHeadId?: number;
        Amount?: number;
        PaymentMethod?: AccountTypes;
        DebitAccountId?: number;
        CreditAccountId?: number;
        Remarks?: string;
        InvoiceCollectionId?: number;
        EntityType?: string;
        BankReconciliation?: boolean;
        Slno?: number;
        PDCPaymentDetailsId?: number;
        PDCReceiptDetailsId?: number;
        ConsignmentAdvanceConsignmentId?: number;
        MoneyInOutId?: number;
        InvoiceId?: number;
        DeliveryServiceId?: number;
        CustomerCustomerCode?: string;
        CustomerCustomerName?: string;
        CustomerAddress?: string;
        CustomerPlace?: string;
        CustomerTelephone?: string;
        CustomerEmail?: string;
        CustomerContactPerson?: string;
        CustomerMobile?: string;
        CustomerCreationDate?: string;
        CustomerDescription?: string;
        EmployeeEmployeeCode?: string;
        EmployeeEmployeeName?: string;
        EmployeeAddress?: string;
        EmployeeCountryId?: number;
        EmployeeEmployeeStatus?: number;
        EmployeeEmployeeTypeId?: number;
        EmployeeDesignationId?: number;
        EmployeeResidentId?: string;
        EmployeeRidExpiryDate?: string;
        EmployeePassportNumber?: string;
        EmployeePassportExpiryDate?: string;
        EmployeeMobileNumber?: string;
        EmployeeBasicSalary?: number;
        EmployeeAllowance?: number;
        DebitAccountHeadCode?: string;
        DebitAccountHeadDescription?: string;
        DebitAccountHeadParentHeadId?: number;
        DebitAccountHeadLedgerType?: number;
        CreditAccountHeadCode?: string;
        CreditAccountHeadDescription?: string;
        CreditAccountHeadParentHeadId?: number;
        CreditAccountHeadLedgerType?: number;
        DebitAccountType?: number;
        DebitAccountAccountName?: string;
        DebitAccountAccountNo?: string;
        DebitAccountBankName?: string;
        DebitAccountBrachName?: string;
        DebitAccountAccountHeadId?: number;
        CreditAccountType?: number;
        CreditAccountAccountName?: string;
        CreditAccountAccountNo?: string;
        CreditAccountBankName?: string;
        CreditAccountBrachName?: string;
        CreditAccountAccountHeadId?: number;
        InvoiceCollectionTrxDate?: string;
        InvoiceCollectionCollectionNumber?: string;
        InvoiceCollectionCustomerId?: number;
        InvoiceCollectionTotalAmount?: number;
        InvoiceCollectionPaymentType?: number;
        InvoiceCollectionAccountId?: number;
        InvoiceCollectionStatus?: number;
        InvoiceCollectionStatusUser?: number;
        TsId?: number;
        FreightId?: number;
    }
    namespace ReceiptRow {
        const idProperty = "Id";
        const nameProperty = "Remarks";
        const localTextPrefix = "Accounts.Receipt";
        const deletePermission = "Accounts:Receipt";
        const insertPermission = "Accounts:Receipt";
        const readPermission = "Accounts:Receipt";
        const updatePermission = "Accounts:Receipt";
        const enum Fields {
            Id = "Id",
            VType = "VType",
            TrxDate = "TrxDate",
            VNo = "VNo",
            CustomerId = "CustomerId",
            EmployeeId = "EmployeeId",
            DebitAccountHeadId = "DebitAccountHeadId",
            CreditAccountHeadId = "CreditAccountHeadId",
            Amount = "Amount",
            PaymentMethod = "PaymentMethod",
            DebitAccountId = "DebitAccountId",
            CreditAccountId = "CreditAccountId",
            Remarks = "Remarks",
            InvoiceCollectionId = "InvoiceCollectionId",
            EntityType = "EntityType",
            BankReconciliation = "BankReconciliation",
            Slno = "Slno",
            PDCPaymentDetailsId = "PDCPaymentDetailsId",
            PDCReceiptDetailsId = "PDCReceiptDetailsId",
            ConsignmentAdvanceConsignmentId = "ConsignmentAdvanceConsignmentId",
            MoneyInOutId = "MoneyInOutId",
            InvoiceId = "InvoiceId",
            DeliveryServiceId = "DeliveryServiceId",
            CustomerCustomerCode = "CustomerCustomerCode",
            CustomerCustomerName = "CustomerCustomerName",
            CustomerAddress = "CustomerAddress",
            CustomerPlace = "CustomerPlace",
            CustomerTelephone = "CustomerTelephone",
            CustomerEmail = "CustomerEmail",
            CustomerContactPerson = "CustomerContactPerson",
            CustomerMobile = "CustomerMobile",
            CustomerCreationDate = "CustomerCreationDate",
            CustomerDescription = "CustomerDescription",
            EmployeeEmployeeCode = "EmployeeEmployeeCode",
            EmployeeEmployeeName = "EmployeeEmployeeName",
            EmployeeAddress = "EmployeeAddress",
            EmployeeCountryId = "EmployeeCountryId",
            EmployeeEmployeeStatus = "EmployeeEmployeeStatus",
            EmployeeEmployeeTypeId = "EmployeeEmployeeTypeId",
            EmployeeDesignationId = "EmployeeDesignationId",
            EmployeeResidentId = "EmployeeResidentId",
            EmployeeRidExpiryDate = "EmployeeRidExpiryDate",
            EmployeePassportNumber = "EmployeePassportNumber",
            EmployeePassportExpiryDate = "EmployeePassportExpiryDate",
            EmployeeMobileNumber = "EmployeeMobileNumber",
            EmployeeBasicSalary = "EmployeeBasicSalary",
            EmployeeAllowance = "EmployeeAllowance",
            DebitAccountHeadCode = "DebitAccountHeadCode",
            DebitAccountHeadDescription = "DebitAccountHeadDescription",
            DebitAccountHeadParentHeadId = "DebitAccountHeadParentHeadId",
            DebitAccountHeadLedgerType = "DebitAccountHeadLedgerType",
            CreditAccountHeadCode = "CreditAccountHeadCode",
            CreditAccountHeadDescription = "CreditAccountHeadDescription",
            CreditAccountHeadParentHeadId = "CreditAccountHeadParentHeadId",
            CreditAccountHeadLedgerType = "CreditAccountHeadLedgerType",
            DebitAccountType = "DebitAccountType",
            DebitAccountAccountName = "DebitAccountAccountName",
            DebitAccountAccountNo = "DebitAccountAccountNo",
            DebitAccountBankName = "DebitAccountBankName",
            DebitAccountBrachName = "DebitAccountBrachName",
            DebitAccountAccountHeadId = "DebitAccountAccountHeadId",
            CreditAccountType = "CreditAccountType",
            CreditAccountAccountName = "CreditAccountAccountName",
            CreditAccountAccountNo = "CreditAccountAccountNo",
            CreditAccountBankName = "CreditAccountBankName",
            CreditAccountBrachName = "CreditAccountBrachName",
            CreditAccountAccountHeadId = "CreditAccountAccountHeadId",
            InvoiceCollectionTrxDate = "InvoiceCollectionTrxDate",
            InvoiceCollectionCollectionNumber = "InvoiceCollectionCollectionNumber",
            InvoiceCollectionCustomerId = "InvoiceCollectionCustomerId",
            InvoiceCollectionTotalAmount = "InvoiceCollectionTotalAmount",
            InvoiceCollectionPaymentType = "InvoiceCollectionPaymentType",
            InvoiceCollectionAccountId = "InvoiceCollectionAccountId",
            InvoiceCollectionStatus = "InvoiceCollectionStatus",
            InvoiceCollectionStatusUser = "InvoiceCollectionStatusUser",
            TsId = "TsId",
            FreightId = "FreightId"
        }
    }
}
declare namespace SerExtraCore.Accounts {
    namespace ReceiptService {
        const baseUrl = "Accounts/Receipt";
        function Create(request: Serenity.SaveRequest<ReceiptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<ReceiptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReceiptRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ReceiptRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReceiptRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ReceiptRow>>;
        const enum Methods {
            Create = "Accounts/Receipt/Create",
            Update = "Accounts/Receipt/Update",
            Delete = "Accounts/Receipt/Delete",
            Retrieve = "Accounts/Receipt/Retrieve",
            List = "Accounts/Receipt/List"
        }
    }
}
declare namespace SerExtraCore.Administration {
    class ConfigurationColumns {
        static readonly columnsKey = "Administration.Configuration";
    }
}
declare namespace SerExtraCore.Administration {
    interface ConfigurationForm {
        InvoiceCollectionApprovalHierarchyId: Serenity.LookupEditor;
        InvoiceApprovalHierarchyId: Serenity.LookupEditor;
        QuotationPrefix: Serenity.StringEditor;
        DefaultCurrency: Serenity.LookupEditor;
        BankName: Serenity.StringEditor;
        AccountName: Serenity.StringEditor;
        SwiftCode: Serenity.StringEditor;
        AccountNumber: Serenity.StringEditor;
        IbanNo: Serenity.StringEditor;
        TaxRegNo: Serenity.StringEditor;
        InvoiceRemarks: Serenity.TextAreaEditor;
        Shipper: Serenity.BooleanEditor;
        Consignee: Serenity.BooleanEditor;
        KSATermsAndConditions: Serenity.HtmlContentEditor;
        PDOTermsAndConditions: Serenity.HtmlContentEditor;
        UAETermsAndConditions: Serenity.HtmlContentEditor;
        CustomerOpeningLedgerId: Serenity.LookupEditor;
        SupplierOpeningLedgerId: Serenity.LookupEditor;
        OpeningLedgerId: Serenity.LookupEditor;
        InvoiceCollectionLedgerId: Serenity.LookupEditor;
        SupplierPaymentLedgerId: Serenity.LookupEditor;
        PDCWithdrawalsLedger: Serenity.LookupEditor;
        PDCDepositsLedger: Serenity.LookupEditor;
        SalaryLedgerId: Serenity.LookupEditor;
        PurchaseLedgerId: Serenity.LookupEditor;
        TaxLedgerId: Serenity.LookupEditor;
        InvoiceLedgerId: Serenity.LookupEditor;
        ReceivableLedgerId: Serenity.LookupEditor;
        ChargesLedgerId: Serenity.LookupEditor;
        DriverAdvanceLedgerId: Serenity.LookupEditor;
        ReportHeader: Serenity.HtmlContentEditor;
    }
    class ConfigurationForm extends Serenity.PrefixedContext {
        static readonly formKey = "Administration.Configuration";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Administration {
    interface ConfigurationRow {
        Id?: number;
        InvoiceCollectionLedgerId?: number;
        SupplierPaymentLedgerId?: number;
        PDCWithdrawalsLedger?: number;
        PDCDepositsLedger?: number;
        PurchaseLedgerId?: number;
        InvoiceCollectionApprovalHierarchyId?: number;
        InvoiceApprovalHierarchyId?: number;
        DefaultCurrency?: number;
        TaxLedgerId?: number;
        Shipper?: boolean;
        Consignee?: boolean;
        TaxRegNo?: string;
        QuotationPrefix?: string;
        BankName?: string;
        AccountName?: string;
        SwiftCode?: string;
        AccountNumber?: string;
        IbanNo?: string;
        InvoiceRemarks?: string;
        SalaryLedgerId?: number;
        InvoiceLedgerId?: number;
        ChargesLedgerId?: number;
        ReceivableLedgerId?: number;
        DriverAdvanceLedgerId?: number;
        OpeningLedgerId?: number;
        CustomerOpeningLedgerId?: number;
        SupplierOpeningLedgerId?: number;
        KSATermsAndConditions?: string;
        PDOTermsAndConditions?: string;
        UAETermsAndConditions?: string;
        ReportHeader?: string;
        InvoiceCollectionLedgerCode?: string;
        InvoiceCollectionLedgerDescription?: string;
        InvoiceCollectionLedgerParentHeadId?: number;
        InvoiceCollectionLedgerLedgerType?: number;
    }
    namespace ConfigurationRow {
        const idProperty = "Id";
        const localTextPrefix = "Administration.Configuration";
        const lookupKey = "Administration.Configuration";
        function getLookup(): Q.Lookup<ConfigurationRow>;
        const deletePermission = "Administration:Configuration";
        const insertPermission = "Administration:Configuration";
        const readPermission = "Administration:Configuration";
        const updatePermission = "Administration:Configuration";
        const enum Fields {
            Id = "Id",
            InvoiceCollectionLedgerId = "InvoiceCollectionLedgerId",
            SupplierPaymentLedgerId = "SupplierPaymentLedgerId",
            PDCWithdrawalsLedger = "PDCWithdrawalsLedger",
            PDCDepositsLedger = "PDCDepositsLedger",
            PurchaseLedgerId = "PurchaseLedgerId",
            InvoiceCollectionApprovalHierarchyId = "InvoiceCollectionApprovalHierarchyId",
            InvoiceApprovalHierarchyId = "InvoiceApprovalHierarchyId",
            DefaultCurrency = "DefaultCurrency",
            TaxLedgerId = "TaxLedgerId",
            Shipper = "Shipper",
            Consignee = "Consignee",
            TaxRegNo = "TaxRegNo",
            QuotationPrefix = "QuotationPrefix",
            BankName = "BankName",
            AccountName = "AccountName",
            SwiftCode = "SwiftCode",
            AccountNumber = "AccountNumber",
            IbanNo = "IbanNo",
            InvoiceRemarks = "InvoiceRemarks",
            SalaryLedgerId = "SalaryLedgerId",
            InvoiceLedgerId = "InvoiceLedgerId",
            ChargesLedgerId = "ChargesLedgerId",
            ReceivableLedgerId = "ReceivableLedgerId",
            DriverAdvanceLedgerId = "DriverAdvanceLedgerId",
            OpeningLedgerId = "OpeningLedgerId",
            CustomerOpeningLedgerId = "CustomerOpeningLedgerId",
            SupplierOpeningLedgerId = "SupplierOpeningLedgerId",
            KSATermsAndConditions = "KSATermsAndConditions",
            PDOTermsAndConditions = "PDOTermsAndConditions",
            UAETermsAndConditions = "UAETermsAndConditions",
            ReportHeader = "ReportHeader",
            InvoiceCollectionLedgerCode = "InvoiceCollectionLedgerCode",
            InvoiceCollectionLedgerDescription = "InvoiceCollectionLedgerDescription",
            InvoiceCollectionLedgerParentHeadId = "InvoiceCollectionLedgerParentHeadId",
            InvoiceCollectionLedgerLedgerType = "InvoiceCollectionLedgerLedgerType"
        }
    }
}
declare namespace SerExtraCore.Administration {
    namespace ConfigurationService {
        const baseUrl = "Administration/Configuration";
        function Create(request: Serenity.SaveRequest<ConfigurationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<ConfigurationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConfigurationRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ConfigurationRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConfigurationRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ConfigurationRow>>;
        const enum Methods {
            Create = "Administration/Configuration/Create",
            Update = "Administration/Configuration/Update",
            Delete = "Administration/Configuration/Delete",
            Retrieve = "Administration/Configuration/Retrieve",
            List = "Administration/Configuration/List"
        }
    }
}
declare namespace SerExtraCore.Administration {
    class CustomLookupsColumns {
        static readonly columnsKey = "Administration.CustomLookups";
    }
}
declare namespace SerExtraCore.Administration {
    interface CustomLookupsForm {
        LookupName: Serenity.StringEditor;
        SqlQuery: Serenity.TextAreaEditor;
    }
    class CustomLookupsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Administration.CustomLookups";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Administration {
    interface CustomLookupsRow {
        Id?: number;
        LookupName?: string;
        SqlQuery?: string;
    }
    namespace CustomLookupsRow {
        const idProperty = "Id";
        const nameProperty = "LookupName";
        const localTextPrefix = "Administration.CustomLookups";
        const lookupKey = "Administration.CustomLookups";
        function getLookup(): Q.Lookup<CustomLookupsRow>;
        const deletePermission = "Administration:ReportDesigns";
        const insertPermission = "Administration:ReportDesigns";
        const readPermission = "Administration:ReportDesigns";
        const updatePermission = "Administration:ReportDesigns";
        const enum Fields {
            Id = "Id",
            LookupName = "LookupName",
            SqlQuery = "SqlQuery"
        }
    }
}
declare namespace SerExtraCore.Administration {
    namespace CustomLookupsService {
        const baseUrl = "Administration/CustomLookups";
        function Create(request: Serenity.SaveRequest<CustomLookupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<CustomLookupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomLookupsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<CustomLookupsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomLookupsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<CustomLookupsRow>>;
        const enum Methods {
            Create = "Administration/CustomLookups/Create",
            Update = "Administration/CustomLookups/Update",
            Delete = "Administration/CustomLookups/Delete",
            Retrieve = "Administration/CustomLookups/Retrieve",
            List = "Administration/CustomLookups/List"
        }
    }
}
declare namespace SerExtraCore.Administration {
    class LanguageColumns {
        static readonly columnsKey = "Administration.Language";
    }
}
declare namespace SerExtraCore.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static readonly formKey = "Administration.Language";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace SerExtraCore.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<LanguageRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<LanguageRow>>;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace SerExtraCore.Administration {
    interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }
    namespace NoteRow {
        const idProperty = "NoteId";
        const nameProperty = "EntityType";
        const localTextPrefix = "Northwind.Note";
        const deletePermission: any;
        const insertPermission: any;
        const readPermission = "";
        const updatePermission: any;
        const enum Fields {
            NoteId = "NoteId",
            EntityType = "EntityType",
            EntityId = "EntityId",
            Text = "Text",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUserDisplayName = "InsertUserDisplayName"
        }
    }
}
declare namespace SerExtraCore.Administration {
    namespace PermissionKeys {
        const Security = "Administration:Security";
        const Translation = "Administration:Translation";
    }
}
declare namespace SerExtraCore.Administration {
    class RoleColumns {
        static readonly columnsKey = "Administration.Role";
    }
}
declare namespace SerExtraCore.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static readonly formKey = "Administration.Role";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SerExtraCore.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace SerExtraCore.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace SerExtraCore.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<RolePermissionListResponse>;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace SerExtraCore.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace SerExtraCore.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace SerExtraCore.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<RoleRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<RoleRow>>;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace SerExtraCore.Administration {
    interface SergenConnection {
        Key?: string;
    }
}
declare namespace SerExtraCore.Administration {
    interface SergenGenerateOptions {
        Row?: boolean;
        Service?: boolean;
        UI?: boolean;
    }
}
declare namespace SerExtraCore.Administration {
    interface SergenGenerateRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
        Table?: SergenTable;
        GenerateOptions?: SergenGenerateOptions;
    }
}
declare namespace SerExtraCore.Administration {
    interface SergenListTablesRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
    }
}
declare namespace SerExtraCore.Administration {
    namespace SergenService {
        const baseUrl = "Administration/Sergen";
        function ListConnections(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<SergenConnection>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<SergenConnection>>;
        function ListTables(request: SergenListTablesRequest, onSuccess?: (response: Serenity.ListResponse<SergenTable>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<SergenTable>>;
        function Generate(request: SergenGenerateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ServiceResponse>;
        const enum Methods {
            ListConnections = "Administration/Sergen/ListConnections",
            ListTables = "Administration/Sergen/ListTables",
            Generate = "Administration/Sergen/Generate"
        }
    }
}
declare namespace SerExtraCore.Administration {
    interface SergenTable {
        Tablename?: string;
        Identifier?: string;
        Module?: string;
        PermissionKey?: string;
    }
}
declare namespace SerExtraCore.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace SerExtraCore.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace SerExtraCore.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<TranslationItem>>;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace SerExtraCore.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace SerExtraCore.Administration {
    class UserColumns {
        static readonly columnsKey = "Administration.User";
    }
}
declare namespace SerExtraCore.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
        HierarchyId: Serenity.LookupEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static readonly formKey = "Administration.User";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Administration {
    class UserHierarchyColumns {
        static readonly columnsKey = "Administration.UserHierarchy";
    }
}
declare namespace SerExtraCore.Administration {
    interface UserHierarchyForm {
        HierarchyName: Serenity.StringEditor;
        HierarchyOrder: Serenity.IntegerEditor;
        Descrription: Serenity.TextAreaEditor;
    }
    class UserHierarchyForm extends Serenity.PrefixedContext {
        static readonly formKey = "Administration.UserHierarchy";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Administration {
    interface UserHierarchyRow {
        Id?: number;
        HierarchyName?: string;
        Descrription?: string;
        HierarchyOrder?: number;
    }
    namespace UserHierarchyRow {
        const idProperty = "Id";
        const nameProperty = "HierarchyName";
        const localTextPrefix = "Administration.UserHierarchy";
        const lookupKey = "Administration.UserHierarchy";
        function getLookup(): Q.Lookup<UserHierarchyRow>;
        const deletePermission = "Administration:UserHierarchy";
        const insertPermission = "Administration:UserHierarchy";
        const readPermission = "Administration:UserHierarchy";
        const updatePermission = "Administration:UserHierarchy";
        const enum Fields {
            Id = "Id",
            HierarchyName = "HierarchyName",
            Descrription = "Descrription",
            HierarchyOrder = "HierarchyOrder"
        }
    }
}
declare namespace SerExtraCore.Administration {
    namespace UserHierarchyService {
        const baseUrl = "Administration/UserHierarchy";
        function Create(request: Serenity.SaveRequest<UserHierarchyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<UserHierarchyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserHierarchyRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<UserHierarchyRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserHierarchyRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<UserHierarchyRow>>;
        const enum Methods {
            Create = "Administration/UserHierarchy/Create",
            Update = "Administration/UserHierarchy/Update",
            Delete = "Administration/UserHierarchy/Delete",
            Retrieve = "Administration/UserHierarchy/Retrieve",
            List = "Administration/UserHierarchy/List"
        }
    }
}
declare namespace SerExtraCore.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SerExtraCore.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SerExtraCore.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<UserPermissionRow>>;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<string>>;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<string>>;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace SerExtraCore.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace SerExtraCore.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace SerExtraCore.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace SerExtraCore.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SerExtraCore.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<UserRoleListResponse>;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace SerExtraCore.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace SerExtraCore.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        HierarchyId?: number;
        HierarchyName?: string;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            HierarchyId = "HierarchyId",
            HierarchyName = "HierarchyName",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace SerExtraCore.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.UndeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<UserRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<UserRow>>;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace SerExtraCore {
    enum ChequeStatus {
        Issued = 1,
        Cleared = 2,
        Canceled = 3
    }
}
declare namespace SerExtraCore {
    enum ChequeType {
        Receipt = 1,
        Payment = 2
    }
}
declare namespace SerExtraCore.CommisionDetails {
    class CommisionDetailsColumns {
        static readonly columnsKey = "CommisionDetails.CommisionDetails";
    }
}
declare namespace SerExtraCore.CommisionDetails {
    interface CommisionDetailsForm {
        DriverId: Serenity.LookupEditor;
        PercentageId: Serenity.LookupEditor;
        MobileNumber: Serenity.StringEditor;
    }
    class CommisionDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = "CommisionDetails.CommisionDetails";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.CommisionDetails {
    interface CommisionDetailsRow {
        Id?: number;
        TsId?: number;
        DriverId?: number;
        PercentageId?: number;
        Percentage?: number;
        CommissionAmount?: number;
        MobileNumber?: string;
        TsTsNo?: string;
        TsVehicleId?: number;
        TsAdvance?: number;
        TsStartKm?: number;
        TsEndKm?: number;
        TsTotalKm?: number;
        TsTotalLiter?: number;
        TsMileage?: number;
        TsStartdate?: string;
        TsEnddate?: string;
        TsTotaldays?: number;
        TsRto?: number;
        TsPc?: number;
        TsTotalDriverCommission?: number;
        TsTotalCommison?: number;
        TsTotalLoadingExpense?: number;
        TsTotalUnloadExpense?: number;
        TsTotalOtherExpense?: number;
        TsTotalFright?: number;
        TsProfit?: number;
        DriverEmployeeCode?: string;
        DriverEmployeeName?: string;
        DriverAddress?: string;
        DriverCountryId?: number;
        DriverEmployeeStatus?: number;
        DriverEmployeeTypeId?: number;
        DriverDesignationId?: number;
        DriverResidentId?: string;
        DriverRidExpiryDate?: string;
        DriverPassportNumber?: string;
        DriverPassportExpiryDate?: string;
        DriverMobileNumber?: string;
        DriverBasicSalary?: number;
        DriverAllowance?: number;
    }
    namespace CommisionDetailsRow {
        const idProperty = "Id";
        const localTextPrefix = "CommisionDetails.CommisionDetails";
        const deletePermission = "Master:CommisionDetails";
        const insertPermission = "Master:CommisionDetails";
        const readPermission = "Master:CommisionDetails";
        const updatePermission = "Master:CommisionDetails";
        const enum Fields {
            Id = "Id",
            TsId = "TsId",
            DriverId = "DriverId",
            PercentageId = "PercentageId",
            Percentage = "Percentage",
            CommissionAmount = "CommissionAmount",
            MobileNumber = "MobileNumber",
            TsTsNo = "TsTsNo",
            TsVehicleId = "TsVehicleId",
            TsAdvance = "TsAdvance",
            TsStartKm = "TsStartKm",
            TsEndKm = "TsEndKm",
            TsTotalKm = "TsTotalKm",
            TsTotalLiter = "TsTotalLiter",
            TsMileage = "TsMileage",
            TsStartdate = "TsStartdate",
            TsEnddate = "TsEnddate",
            TsTotaldays = "TsTotaldays",
            TsRto = "TsRto",
            TsPc = "TsPc",
            TsTotalDriverCommission = "TsTotalDriverCommission",
            TsTotalCommison = "TsTotalCommison",
            TsTotalLoadingExpense = "TsTotalLoadingExpense",
            TsTotalUnloadExpense = "TsTotalUnloadExpense",
            TsTotalOtherExpense = "TsTotalOtherExpense",
            TsTotalFright = "TsTotalFright",
            TsProfit = "TsProfit",
            DriverEmployeeCode = "DriverEmployeeCode",
            DriverEmployeeName = "DriverEmployeeName",
            DriverAddress = "DriverAddress",
            DriverCountryId = "DriverCountryId",
            DriverEmployeeStatus = "DriverEmployeeStatus",
            DriverEmployeeTypeId = "DriverEmployeeTypeId",
            DriverDesignationId = "DriverDesignationId",
            DriverResidentId = "DriverResidentId",
            DriverRidExpiryDate = "DriverRidExpiryDate",
            DriverPassportNumber = "DriverPassportNumber",
            DriverPassportExpiryDate = "DriverPassportExpiryDate",
            DriverMobileNumber = "DriverMobileNumber",
            DriverBasicSalary = "DriverBasicSalary",
            DriverAllowance = "DriverAllowance"
        }
    }
}
declare namespace SerExtraCore.CommisionDetails {
    namespace CommisionDetailsService {
        const baseUrl = "CommisionDetails/CommisionDetails";
        function Create(request: Serenity.SaveRequest<CommisionDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<CommisionDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CommisionDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<CommisionDetailsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CommisionDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<CommisionDetailsRow>>;
        const enum Methods {
            Create = "CommisionDetails/CommisionDetails/Create",
            Update = "CommisionDetails/CommisionDetails/Update",
            Delete = "CommisionDetails/CommisionDetails/Delete",
            Retrieve = "CommisionDetails/CommisionDetails/Retrieve",
            List = "CommisionDetails/CommisionDetails/List"
        }
    }
}
declare namespace SerExtraCore.CommissionPercentage {
    class CommissionPercentageColumns {
        static readonly columnsKey = "CommissionPercentage.CommissionPercentage";
    }
}
declare namespace SerExtraCore.CommissionPercentage {
    interface CommissionPercentageForm {
        Percentage: Serenity.DecimalEditor;
    }
    class CommissionPercentageForm extends Serenity.PrefixedContext {
        static readonly formKey = "CommissionPercentage.CommissionPercentage";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.CommissionPercentage {
    interface CommissionPercentageRow {
        Id?: number;
        Percentage?: number;
    }
    namespace CommissionPercentageRow {
        const idProperty = "Id";
        const nameProperty = "Percentage";
        const localTextPrefix = "CommissionPercentage.CommissionPercentage";
        const lookupKey = "CommissionPercentage.CommissionPercentage";
        function getLookup(): Q.Lookup<CommissionPercentageRow>;
        const deletePermission = "Master:CommissionPercentage";
        const insertPermission = "Master:CommissionPercentage";
        const readPermission = "Master:CommissionPercentage";
        const updatePermission = "Master:CommissionPercentage";
        const enum Fields {
            Id = "Id",
            Percentage = "Percentage"
        }
    }
}
declare namespace SerExtraCore.CommissionPercentage {
    namespace CommissionPercentageService {
        const baseUrl = "CommissionPercentage/CommissionPercentage";
        function Create(request: Serenity.SaveRequest<CommissionPercentageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<CommissionPercentageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CommissionPercentageRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<CommissionPercentageRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CommissionPercentageRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<CommissionPercentageRow>>;
        const enum Methods {
            Create = "CommissionPercentage/CommissionPercentage/Create",
            Update = "CommissionPercentage/CommissionPercentage/Update",
            Delete = "CommissionPercentage/CommissionPercentage/Delete",
            Retrieve = "CommissionPercentage/CommissionPercentage/Retrieve",
            List = "CommissionPercentage/CommissionPercentage/List"
        }
    }
}
declare namespace SerExtraCore.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace SerExtraCore.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace SerExtraCore.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace SerExtraCore.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ServiceResponse>;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<UserPreferenceRetrieveResponse>;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace SerExtraCore.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace SerExtraCore.Companies {
    class CompaniesColumns {
        static readonly columnsKey = "Companies.Companies";
    }
}
declare namespace SerExtraCore.Companies {
    interface CompaniesForm {
        Name: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        StateId: Serenity.LookupEditor;
    }
    class CompaniesForm extends Serenity.PrefixedContext {
        static readonly formKey = "Companies.Companies";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Companies {
    interface CompaniesRow {
        Id?: number;
        StateId?: number;
        Name?: string;
        Address?: string;
        StateCountryId?: number;
        StateName?: string;
    }
    namespace CompaniesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Companies.Companies";
        const deletePermission = "Master:Companies";
        const insertPermission = "Master:Companies";
        const readPermission = "Master:Companies";
        const updatePermission = "Master:Companies";
        const enum Fields {
            Id = "Id",
            StateId = "StateId",
            Name = "Name",
            Address = "Address",
            StateCountryId = "StateCountryId",
            StateName = "StateName"
        }
    }
}
declare namespace SerExtraCore.Companies {
    namespace CompaniesService {
        const baseUrl = "Companies/Companies";
        function Create(request: Serenity.SaveRequest<CompaniesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<CompaniesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CompaniesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<CompaniesRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CompaniesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<CompaniesRow>>;
        const enum Methods {
            Create = "Companies/Companies/Create",
            Update = "Companies/Companies/Update",
            Delete = "Companies/Companies/Delete",
            Retrieve = "Companies/Companies/Retrieve",
            List = "Companies/Companies/List"
        }
    }
}
declare namespace SerExtraCore {
    enum ConsignmentPaymentMode {
        Value1 = 1,
        Value4 = 2
    }
}
declare namespace SerExtraCore {
    enum ConsignmentPaymentTypes {
        Value1 = 1,
        Value2 = 2,
        Value3 = 3
    }
}
declare namespace SerExtraCore {
    enum ConsignmentStatus {
        Value1 = 1,
        Value2 = 2
    }
}
declare namespace SerExtraCore.Crossing {
    class CrossingColumns {
        static readonly columnsKey = "Crossing.Crossing";
    }
}
declare namespace SerExtraCore.Crossing {
    interface CrossingForm {
        Settlementid: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
    }
    class CrossingForm extends Serenity.PrefixedContext {
        static readonly formKey = "Crossing.Crossing";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Crossing {
    interface CrossingRow {
        Id?: number;
        Settlementid?: number;
        Name?: string;
        Amount?: number;
        SettlementidTsNo?: number;
        SettlementidMoneyInOutTsNo?: number;
        SettlementidTripAdvance?: number;
        SettlementidTripBalance?: number;
        SettlementidTollTag?: number;
        SettlementidTripBalancee?: number;
        SettlementidAdvance?: number;
        SettlementidToll?: number;
        SettlementidTsNumber?: string;
        SettlementidFualAmount?: number;
    }
    namespace CrossingRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Crossing.Crossing";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Settlementid = "Settlementid",
            Name = "Name",
            Amount = "Amount",
            SettlementidTsNo = "SettlementidTsNo",
            SettlementidMoneyInOutTsNo = "SettlementidMoneyInOutTsNo",
            SettlementidTripAdvance = "SettlementidTripAdvance",
            SettlementidTripBalance = "SettlementidTripBalance",
            SettlementidTollTag = "SettlementidTollTag",
            SettlementidTripBalancee = "SettlementidTripBalancee",
            SettlementidAdvance = "SettlementidAdvance",
            SettlementidToll = "SettlementidToll",
            SettlementidTsNumber = "SettlementidTsNumber",
            SettlementidFualAmount = "SettlementidFualAmount"
        }
    }
}
declare namespace SerExtraCore.Crossing {
    namespace CrossingService {
        const baseUrl = "Crossing/Crossing";
        function Create(request: Serenity.SaveRequest<CrossingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<CrossingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CrossingRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<CrossingRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CrossingRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<CrossingRow>>;
        const enum Methods {
            Create = "Crossing/Crossing/Create",
            Update = "Crossing/Crossing/Update",
            Delete = "Crossing/Crossing/Delete",
            Retrieve = "Crossing/Crossing/Retrieve",
            List = "Crossing/Crossing/List"
        }
    }
}
declare namespace SerExtraCore {
    enum DeliveryStatus {
        Value1 = 1,
        Value2 = 2
    }
}
declare namespace SerExtraCore.Documents {
    class DocumentTypeColumns {
        static readonly columnsKey = "Documents.DocumentType";
    }
}
declare namespace SerExtraCore.Documents {
    interface DocumentTypeForm {
        TypeName: Serenity.StringEditor;
    }
    class DocumentTypeForm extends Serenity.PrefixedContext {
        static readonly formKey = "Documents.DocumentType";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Documents {
    interface DocumentTypeRow {
        Id?: number;
        TypeName?: string;
    }
    namespace DocumentTypeRow {
        const idProperty = "Id";
        const nameProperty = "TypeName";
        const localTextPrefix = "Documents.DocumentType";
        const lookupKey = "Documents.DocumentType";
        function getLookup(): Q.Lookup<DocumentTypeRow>;
        const deletePermission = "Documents:DocumentType";
        const insertPermission = "Documents:DocumentType";
        const readPermission = "Documents:DocumentType";
        const updatePermission = "Documents:DocumentType";
        const enum Fields {
            Id = "Id",
            TypeName = "TypeName"
        }
    }
}
declare namespace SerExtraCore.Documents {
    namespace DocumentTypeService {
        const baseUrl = "Documents/DocumentType";
        function Create(request: Serenity.SaveRequest<DocumentTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<DocumentTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentTypeRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<DocumentTypeRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentTypeRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<DocumentTypeRow>>;
        const enum Methods {
            Create = "Documents/DocumentType/Create",
            Update = "Documents/DocumentType/Update",
            Delete = "Documents/DocumentType/Delete",
            Retrieve = "Documents/DocumentType/Retrieve",
            List = "Documents/DocumentType/List"
        }
    }
}
declare namespace SerExtraCore.Documents {
    class DocumentsColumns {
        static readonly columnsKey = "Documents.Documents";
    }
}
declare namespace SerExtraCore.Documents {
    interface DocumentsForm {
        TrxNo: Serenity.StringEditor;
        TrxDate: Serenity.DateEditor;
        Name: Serenity.StringEditor;
        DocumentTypeId: Serenity.LookupEditor;
        IssueDate: Serenity.DateEditor;
        ExpiryDate: Serenity.DateEditor;
        DueDate: Serenity.DateEditor;
        NoteList: Administration.NotesEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
    }
    class DocumentsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Documents.Documents";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Documents {
    interface DocumentsRow {
        Id?: number;
        Name?: string;
        DocumentTypeId?: number;
        TrxDate?: string;
        IssueDate?: string;
        ExpiryDate?: string;
        DueDate?: string;
        Attachments?: string;
        TrxNo?: string;
        NoteList?: Administration.NoteRow[];
        DocumentTypeTypeName?: string;
    }
    namespace DocumentsRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Documents.Documents";
        const deletePermission = "Documents:Documents";
        const insertPermission = "Documents:Documents";
        const readPermission = "Documents:Documents";
        const updatePermission = "Documents:Documents";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            DocumentTypeId = "DocumentTypeId",
            TrxDate = "TrxDate",
            IssueDate = "IssueDate",
            ExpiryDate = "ExpiryDate",
            DueDate = "DueDate",
            Attachments = "Attachments",
            TrxNo = "TrxNo",
            NoteList = "NoteList",
            DocumentTypeTypeName = "DocumentTypeTypeName"
        }
    }
}
declare namespace SerExtraCore.Documents {
    namespace DocumentsService {
        const baseUrl = "Documents/Documents";
        function Create(request: Serenity.SaveRequest<DocumentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<DocumentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<DocumentsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<DocumentsRow>>;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;
        const enum Methods {
            Create = "Documents/Documents/Create",
            Update = "Documents/Documents/Update",
            Delete = "Documents/Documents/Delete",
            Retrieve = "Documents/Documents/Retrieve",
            List = "Documents/Documents/List",
            GetNextNumber = "Documents/Documents/GetNextNumber"
        }
    }
}
declare namespace SerExtraCore {
    enum EmployeeStatus {
        Value1 = 1,
        Value2 = 2,
        Value3 = 3,
        Value4 = 4
    }
}
declare namespace SerExtraCore {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace SerExtraCore {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace SerExtraCore.Expenses {
    class ExpensesColumns {
        static readonly columnsKey = "Expenses.Expenses";
    }
}
declare namespace SerExtraCore.Expenses {
    interface ExpensesForm {
        VehicleId: Serenity.LookupEditor;
        Startdate: Serenity.DateEditor;
        Enddate: Serenity.DateEditor;
        Expense: Serenity.IntegerEditor;
        Profit: Serenity.DecimalEditor;
    }
    class ExpensesForm extends Serenity.PrefixedContext {
        static readonly formKey = "Expenses.Expenses";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Expenses {
    interface ExpensesRow {
        Id?: number;
        TsId?: number;
        FromPlace?: number;
        ToPlace?: number;
        Expense?: number;
        TsTsNo?: string;
        TsVehicleId?: number;
        TsAdvance?: number;
        TsStartKm?: number;
        TsEndKm?: number;
        TsTotalKm?: number;
        TsTotalLiter?: number;
        TsMileage?: number;
        TsStartdate?: string;
        TsEnddate?: string;
        TsTotaldays?: number;
        TsRto?: number;
        TsPc?: number;
        TsTotalDriverCommission?: number;
        TsTotalCommison?: number;
        TsTotalLoadingExpense?: number;
        TsTotalUnloadExpense?: number;
        TsTotalOtherExpense?: number;
        TsTotalFright?: number;
        TsProfit?: number;
        TsTotalFuelAmount?: number;
        TsDrivertwoBata?: number;
        TsToll?: number;
        TsTotalExpense?: number;
        TsExtraBill?: number;
        TsRemarks?: string;
        FromPlaceAreaName?: string;
        FromPlaceDescription?: string;
        ToPlaceAreaName?: string;
        ToPlaceDescription?: string;
        ExpenseVType?: number;
        ExpenseTrxDate?: string;
        ExpenseVNo?: number;
        ExpenseCustomerId?: number;
        ExpenseEmployeeId?: number;
        ExpenseSupplierId?: number;
        ExpenseVehicleId?: number;
        ExpenseAmount?: number;
        ExpenseTaxPer?: number;
        ExpenseTaxAmount?: number;
        ExpenseTotalAmount?: number;
        ExpenseAccountHeadId?: number;
        ExpensePaymentMethod?: number;
        ExpenseAccountId?: number;
        ExpenseRemarks?: string;
        ExpenseConsignmentId?: number;
        ExpenseTsId?: number;
        Profit?: number;
        Startdate?: string;
        Enddate?: string;
        VehicleId?: number;
        VehicleNumber?: string;
    }
    namespace ExpensesRow {
        const idProperty = "Id";
        const localTextPrefix = "Expenses.Expenses";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            TsId = "TsId",
            FromPlace = "FromPlace",
            ToPlace = "ToPlace",
            Expense = "Expense",
            TsTsNo = "TsTsNo",
            TsVehicleId = "TsVehicleId",
            TsAdvance = "TsAdvance",
            TsStartKm = "TsStartKm",
            TsEndKm = "TsEndKm",
            TsTotalKm = "TsTotalKm",
            TsTotalLiter = "TsTotalLiter",
            TsMileage = "TsMileage",
            TsStartdate = "TsStartdate",
            TsEnddate = "TsEnddate",
            TsTotaldays = "TsTotaldays",
            TsRto = "TsRto",
            TsPc = "TsPc",
            TsTotalDriverCommission = "TsTotalDriverCommission",
            TsTotalCommison = "TsTotalCommison",
            TsTotalLoadingExpense = "TsTotalLoadingExpense",
            TsTotalUnloadExpense = "TsTotalUnloadExpense",
            TsTotalOtherExpense = "TsTotalOtherExpense",
            TsTotalFright = "TsTotalFright",
            TsProfit = "TsProfit",
            TsTotalFuelAmount = "TsTotalFuelAmount",
            TsDrivertwoBata = "TsDrivertwoBata",
            TsToll = "TsToll",
            TsTotalExpense = "TsTotalExpense",
            TsExtraBill = "TsExtraBill",
            TsRemarks = "TsRemarks",
            FromPlaceAreaName = "FromPlaceAreaName",
            FromPlaceDescription = "FromPlaceDescription",
            ToPlaceAreaName = "ToPlaceAreaName",
            ToPlaceDescription = "ToPlaceDescription",
            ExpenseVType = "ExpenseVType",
            ExpenseTrxDate = "ExpenseTrxDate",
            ExpenseVNo = "ExpenseVNo",
            ExpenseCustomerId = "ExpenseCustomerId",
            ExpenseEmployeeId = "ExpenseEmployeeId",
            ExpenseSupplierId = "ExpenseSupplierId",
            ExpenseVehicleId = "ExpenseVehicleId",
            ExpenseAmount = "ExpenseAmount",
            ExpenseTaxPer = "ExpenseTaxPer",
            ExpenseTaxAmount = "ExpenseTaxAmount",
            ExpenseTotalAmount = "ExpenseTotalAmount",
            ExpenseAccountHeadId = "ExpenseAccountHeadId",
            ExpensePaymentMethod = "ExpensePaymentMethod",
            ExpenseAccountId = "ExpenseAccountId",
            ExpenseRemarks = "ExpenseRemarks",
            ExpenseConsignmentId = "ExpenseConsignmentId",
            ExpenseTsId = "ExpenseTsId",
            Profit = "Profit",
            Startdate = "Startdate",
            Enddate = "Enddate",
            VehicleId = "VehicleId",
            VehicleNumber = "VehicleNumber"
        }
    }
}
declare namespace SerExtraCore.Expenses {
    namespace ExpensesService {
        const baseUrl = "Expenses/Expenses";
        function Create(request: Serenity.SaveRequest<ExpensesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<ExpensesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExpensesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ExpensesRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExpensesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ExpensesRow>>;
        const enum Methods {
            Create = "Expenses/Expenses/Create",
            Update = "Expenses/Expenses/Update",
            Delete = "Expenses/Expenses/Delete",
            Retrieve = "Expenses/Expenses/Retrieve",
            List = "Expenses/Expenses/List"
        }
    }
}
declare namespace SerExtraCore.Extr {
    class ExtrColumns {
        static readonly columnsKey = "Extr.Extr";
    }
}
declare namespace SerExtraCore.Extr {
    interface ExtrForm {
        Settlementid: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
    }
    class ExtrForm extends Serenity.PrefixedContext {
        static readonly formKey = "Extr.Extr";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Extr {
    interface ExtrRow {
        Id?: number;
        Settlementid?: number;
        Name?: string;
        Amount?: number;
        SettlementidTsNo?: number;
        SettlementidMoneyInOutTsNo?: number;
        SettlementidTripAdvance?: number;
        SettlementidTripBalance?: number;
        SettlementidTollTag?: number;
        SettlementidTripBalancee?: number;
        SettlementidAdvance?: number;
        SettlementidToll?: number;
        SettlementidTsNumber?: string;
        SettlementidFualAmount?: number;
    }
    namespace ExtrRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Extr.Extr";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Settlementid = "Settlementid",
            Name = "Name",
            Amount = "Amount",
            SettlementidTsNo = "SettlementidTsNo",
            SettlementidMoneyInOutTsNo = "SettlementidMoneyInOutTsNo",
            SettlementidTripAdvance = "SettlementidTripAdvance",
            SettlementidTripBalance = "SettlementidTripBalance",
            SettlementidTollTag = "SettlementidTollTag",
            SettlementidTripBalancee = "SettlementidTripBalancee",
            SettlementidAdvance = "SettlementidAdvance",
            SettlementidToll = "SettlementidToll",
            SettlementidTsNumber = "SettlementidTsNumber",
            SettlementidFualAmount = "SettlementidFualAmount"
        }
    }
}
declare namespace SerExtraCore.Extr {
    namespace ExtrService {
        const baseUrl = "Extr/Extr";
        function Create(request: Serenity.SaveRequest<ExtrRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<ExtrRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExtrRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ExtrRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExtrRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ExtrRow>>;
        const enum Methods {
            Create = "Extr/Extr/Create",
            Update = "Extr/Extr/Update",
            Delete = "Extr/Extr/Delete",
            Retrieve = "Extr/Extr/Retrieve",
            List = "Extr/Extr/List"
        }
    }
}
declare namespace SerExtraCore.FuelDetails {
    enum AmountType {
        Value1 = 1,
        Value2 = 2
    }
}
declare namespace SerExtraCore.FuelDetails {
    class FuelDetailsColumns {
        static readonly columnsKey = "FuelDetails.FuelDetails";
    }
}
declare namespace SerExtraCore.FuelDetails {
    interface FuelDetailsForm {
        Supplierid: Serenity.LookupEditor;
        TsId: Serenity.IntegerEditor;
        PumpId: Serenity.IntegerEditor;
        AmountType: Serenity.EnumEditor;
        Date: Serenity.DateEditor;
        Qty: Serenity.DecimalEditor;
        LiterRate: Serenity.DecimalEditor;
        TotalAmt: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        DebitAccountId: Serenity.LookupEditor;
        Photo: Serenity.ImageUploadEditor;
    }
    class FuelDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = "FuelDetails.FuelDetails";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.FuelDetails {
    interface FuelDetailsRow {
        Id?: number;
        TsId?: number;
        PumpId?: number;
        PumpName?: string;
        Date?: string;
        Qty?: number;
        LiterRate?: number;
        TotalAmt?: number;
        Photo?: string;
        TsTsNo?: string;
        TsVehicleId?: number;
        TsAdvance?: number;
        TsStartKm?: number;
        TsEndKm?: number;
        TsTotalKm?: number;
        TsTotalLiter?: number;
        TsMileage?: number;
        TsStartdate?: string;
        TsEnddate?: string;
        TsTotaldays?: number;
        TsRto?: number;
        TsPc?: number;
        TsTotalDriverCommission?: number;
        TsTotalCommison?: number;
        TsTotalLoadingExpense?: number;
        TsTotalUnloadExpense?: number;
        TsTotalOtherExpense?: number;
        TsTotalFright?: number;
        TsProfit?: number;
        PumpPumpName?: string;
        PumpPumpPlace?: string;
        PumpAddress?: string;
        AmountType?: AmountType;
        PaymentMethod?: AccountTypes;
        DebitAccountId?: number;
        Expenses?: Accounts.PaymentRow[];
        Supplierid?: number;
        SupplierName?: string;
        FuelId?: Accounts.MoneyOutRow[];
    }
    namespace FuelDetailsRow {
        const idProperty = "Id";
        const localTextPrefix = "FuelDetails.FuelDetails";
        const lookupKey = "FuelDetails.FuelDetails";
        function getLookup(): Q.Lookup<FuelDetailsRow>;
        const deletePermission = "Master:FuelDetails";
        const insertPermission = "Master:FuelDetails";
        const readPermission = "Master:FuelDetails";
        const updatePermission = "Master:FuelDetails";
        const enum Fields {
            Id = "Id",
            TsId = "TsId",
            PumpId = "PumpId",
            PumpName = "PumpName",
            Date = "Date",
            Qty = "Qty",
            LiterRate = "LiterRate",
            TotalAmt = "TotalAmt",
            Photo = "Photo",
            TsTsNo = "TsTsNo",
            TsVehicleId = "TsVehicleId",
            TsAdvance = "TsAdvance",
            TsStartKm = "TsStartKm",
            TsEndKm = "TsEndKm",
            TsTotalKm = "TsTotalKm",
            TsTotalLiter = "TsTotalLiter",
            TsMileage = "TsMileage",
            TsStartdate = "TsStartdate",
            TsEnddate = "TsEnddate",
            TsTotaldays = "TsTotaldays",
            TsRto = "TsRto",
            TsPc = "TsPc",
            TsTotalDriverCommission = "TsTotalDriverCommission",
            TsTotalCommison = "TsTotalCommison",
            TsTotalLoadingExpense = "TsTotalLoadingExpense",
            TsTotalUnloadExpense = "TsTotalUnloadExpense",
            TsTotalOtherExpense = "TsTotalOtherExpense",
            TsTotalFright = "TsTotalFright",
            TsProfit = "TsProfit",
            PumpPumpName = "PumpPumpName",
            PumpPumpPlace = "PumpPumpPlace",
            PumpAddress = "PumpAddress",
            AmountType = "AmountType",
            PaymentMethod = "PaymentMethod",
            DebitAccountId = "DebitAccountId",
            Expenses = "Expenses",
            Supplierid = "Supplierid",
            SupplierName = "SupplierName",
            FuelId = "FuelId"
        }
    }
}
declare namespace SerExtraCore.FuelDetails {
    namespace FuelDetailsService {
        const baseUrl = "FuelDetails/FuelDetails";
        function Create(request: Serenity.SaveRequest<FuelDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<FuelDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FuelDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<FuelDetailsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FuelDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<FuelDetailsRow>>;
        const enum Methods {
            Create = "FuelDetails/FuelDetails/Create",
            Update = "FuelDetails/FuelDetails/Update",
            Delete = "FuelDetails/FuelDetails/Delete",
            Retrieve = "FuelDetails/FuelDetails/Retrieve",
            List = "FuelDetails/FuelDetails/List"
        }
    }
}
declare namespace SerExtraCore {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace SerExtraCore {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace SerExtraCore.HRM {
    class EmployeeLeavesColumns {
        static readonly columnsKey = "HRM.EmployeeLeaves";
    }
}
declare namespace SerExtraCore.HRM {
    interface EmployeeLeavesForm {
        EmployeeId: Serenity.LookupEditor;
        FromDate: Serenity.DateEditor;
        ToDate: Serenity.DateEditor;
        Days: Serenity.IntegerEditor;
        Remarks: Serenity.TextAreaEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
    }
    class EmployeeLeavesForm extends Serenity.PrefixedContext {
        static readonly formKey = "HRM.EmployeeLeaves";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.HRM {
    interface EmployeeLeavesRow {
        Id?: number;
        EmployeeId?: number;
        FromDate?: string;
        ToDate?: string;
        Days?: number;
        Remarks?: string;
        Attachments?: string;
        EmployeeEmployeeCode?: string;
        EmployeeEmployeeName?: string;
        EmployeeAddress?: string;
        EmployeeCountryId?: number;
        EmployeeEmployeeStatus?: number;
        EmployeeEmployeeTypeId?: number;
        EmployeeDesignationId?: number;
        EmployeeResidentId?: string;
        EmployeeRidExpiryDate?: string;
        EmployeePassportNumber?: string;
        EmployeePassportExpiryDate?: string;
        EmployeeMobileNumber?: string;
        EmployeeBasicSalary?: number;
        EmployeeAllowance?: number;
    }
    namespace EmployeeLeavesRow {
        const idProperty = "Id";
        const nameProperty = "Attachments";
        const localTextPrefix = "HRM.EmployeeLeaves";
        const deletePermission = "HRM:EmployeeLeaves";
        const insertPermission = "HRM:EmployeeLeaves";
        const readPermission = "HRM:EmployeeLeaves";
        const updatePermission = "HRM:EmployeeLeaves";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            FromDate = "FromDate",
            ToDate = "ToDate",
            Days = "Days",
            Remarks = "Remarks",
            Attachments = "Attachments",
            EmployeeEmployeeCode = "EmployeeEmployeeCode",
            EmployeeEmployeeName = "EmployeeEmployeeName",
            EmployeeAddress = "EmployeeAddress",
            EmployeeCountryId = "EmployeeCountryId",
            EmployeeEmployeeStatus = "EmployeeEmployeeStatus",
            EmployeeEmployeeTypeId = "EmployeeEmployeeTypeId",
            EmployeeDesignationId = "EmployeeDesignationId",
            EmployeeResidentId = "EmployeeResidentId",
            EmployeeRidExpiryDate = "EmployeeRidExpiryDate",
            EmployeePassportNumber = "EmployeePassportNumber",
            EmployeePassportExpiryDate = "EmployeePassportExpiryDate",
            EmployeeMobileNumber = "EmployeeMobileNumber",
            EmployeeBasicSalary = "EmployeeBasicSalary",
            EmployeeAllowance = "EmployeeAllowance"
        }
    }
}
declare namespace SerExtraCore.HRM {
    namespace EmployeeLeavesService {
        const baseUrl = "HRM/EmployeeLeaves";
        function Create(request: Serenity.SaveRequest<EmployeeLeavesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<EmployeeLeavesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeLeavesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<EmployeeLeavesRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeLeavesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<EmployeeLeavesRow>>;
        const enum Methods {
            Create = "HRM/EmployeeLeaves/Create",
            Update = "HRM/EmployeeLeaves/Update",
            Delete = "HRM/EmployeeLeaves/Delete",
            Retrieve = "HRM/EmployeeLeaves/Retrieve",
            List = "HRM/EmployeeLeaves/List"
        }
    }
}
declare namespace SerExtraCore.HRM {
    class PayrollPaymentColumns {
        static readonly columnsKey = "HRM.PayrollPayment";
    }
}
declare namespace SerExtraCore.HRM {
    interface PayrollPaymentForm {
        TrxDate: Serenity.DateEditor;
        EmployeeId: Serenity.LookupEditor;
        BasicPay: Serenity.DecimalEditor;
        Allowance: Serenity.DecimalEditor;
        OverTime: Serenity.DecimalEditor;
        Other: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        Remarks: Serenity.TextAreaEditor;
        PaymentType: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
    }
    class PayrollPaymentForm extends Serenity.PrefixedContext {
        static readonly formKey = "HRM.PayrollPayment";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.HRM {
    interface PayrollPaymentRow {
        Id?: number;
        TrxDate?: string;
        PayrollStructureId?: number;
        EmployeeId?: number;
        BasicPay?: number;
        Allowance?: number;
        OverTime?: number;
        Other?: number;
        Total?: number;
        Remarks?: string;
        PayrollStructureStructureName?: string;
        PayrollStructureFromDate?: string;
        PayrollStructureToDate?: string;
        PayrollStructureRemarks?: string;
        EmployeeEmployeeCode?: string;
        EmployeeEmployeeName?: string;
        EmployeeAddress?: string;
        EmployeeCountryId?: number;
        EmployeeEmployeeStatus?: number;
        EmployeeEmployeeTypeId?: number;
        EmployeeDesignationId?: number;
        EmployeeResidentId?: string;
        EmployeeRidExpiryDate?: string;
        EmployeePassportNumber?: string;
        EmployeePassportExpiryDate?: string;
        EmployeeMobileNumber?: string;
        EmployeeBasicSalary?: number;
        EmployeeAllowance?: number;
        PaymentType?: AccountTypes;
        AccountId?: number;
        Payments?: Accounts.PaymentRow[];
        AccountAccountName?: string;
    }
    namespace PayrollPaymentRow {
        const idProperty = "Id";
        const nameProperty = "Remarks";
        const localTextPrefix = "HRM.PayrollPayment";
        const deletePermission = "HRM:PayrollStructures";
        const insertPermission = "HRM:PayrollStructures";
        const readPermission = "HRM:PayrollStructures";
        const updatePermission = "HRM:PayrollStructures";
        const enum Fields {
            Id = "Id",
            TrxDate = "TrxDate",
            PayrollStructureId = "PayrollStructureId",
            EmployeeId = "EmployeeId",
            BasicPay = "BasicPay",
            Allowance = "Allowance",
            OverTime = "OverTime",
            Other = "Other",
            Total = "Total",
            Remarks = "Remarks",
            PayrollStructureStructureName = "PayrollStructureStructureName",
            PayrollStructureFromDate = "PayrollStructureFromDate",
            PayrollStructureToDate = "PayrollStructureToDate",
            PayrollStructureRemarks = "PayrollStructureRemarks",
            EmployeeEmployeeCode = "EmployeeEmployeeCode",
            EmployeeEmployeeName = "EmployeeEmployeeName",
            EmployeeAddress = "EmployeeAddress",
            EmployeeCountryId = "EmployeeCountryId",
            EmployeeEmployeeStatus = "EmployeeEmployeeStatus",
            EmployeeEmployeeTypeId = "EmployeeEmployeeTypeId",
            EmployeeDesignationId = "EmployeeDesignationId",
            EmployeeResidentId = "EmployeeResidentId",
            EmployeeRidExpiryDate = "EmployeeRidExpiryDate",
            EmployeePassportNumber = "EmployeePassportNumber",
            EmployeePassportExpiryDate = "EmployeePassportExpiryDate",
            EmployeeMobileNumber = "EmployeeMobileNumber",
            EmployeeBasicSalary = "EmployeeBasicSalary",
            EmployeeAllowance = "EmployeeAllowance",
            PaymentType = "PaymentType",
            AccountId = "AccountId",
            Payments = "Payments",
            AccountAccountName = "AccountAccountName"
        }
    }
}
declare namespace SerExtraCore.HRM {
    namespace PayrollPaymentService {
        const baseUrl = "HRM/PayrollPayment";
        function Create(request: Serenity.SaveRequest<PayrollPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<PayrollPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PayrollPaymentRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<PayrollPaymentRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PayrollPaymentRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<PayrollPaymentRow>>;
        const enum Methods {
            Create = "HRM/PayrollPayment/Create",
            Update = "HRM/PayrollPayment/Update",
            Delete = "HRM/PayrollPayment/Delete",
            Retrieve = "HRM/PayrollPayment/Retrieve",
            List = "HRM/PayrollPayment/List"
        }
    }
}
declare namespace SerExtraCore.HRM {
    class PayrollStructuresColumns {
        static readonly columnsKey = "HRM.PayrollStructures";
    }
}
declare namespace SerExtraCore.HRM {
    interface PayrollStructuresForm {
        StructureName: Serenity.StringEditor;
        FromDate: Serenity.DateEditor;
        ToDate: Serenity.DateEditor;
        Remarks: Serenity.TextAreaEditor;
        PayrollPayment: PayrollPaymentEditor;
    }
    class PayrollStructuresForm extends Serenity.PrefixedContext {
        static readonly formKey = "HRM.PayrollStructures";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.HRM {
    interface PayrollStructuresRow {
        Id?: number;
        StructureName?: string;
        FromDate?: string;
        ToDate?: string;
        Remarks?: string;
        PayrollPayment?: PayrollPaymentRow[];
    }
    namespace PayrollStructuresRow {
        const idProperty = "Id";
        const nameProperty = "StructureName";
        const localTextPrefix = "HRM.PayrollStructures";
        const deletePermission = "HRM:PayrollStructures";
        const insertPermission = "HRM:PayrollStructures";
        const readPermission = "HRM:PayrollStructures";
        const updatePermission = "HRM:PayrollStructures";
        const enum Fields {
            Id = "Id",
            StructureName = "StructureName",
            FromDate = "FromDate",
            ToDate = "ToDate",
            Remarks = "Remarks",
            PayrollPayment = "PayrollPayment"
        }
    }
}
declare namespace SerExtraCore.HRM {
    namespace PayrollStructuresService {
        const baseUrl = "HRM/PayrollStructures";
        function Create(request: Serenity.SaveRequest<PayrollStructuresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<PayrollStructuresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PayrollStructuresRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<PayrollStructuresRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PayrollStructuresRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<PayrollStructuresRow>>;
        const enum Methods {
            Create = "HRM/PayrollStructures/Create",
            Update = "HRM/PayrollStructures/Update",
            Delete = "HRM/PayrollStructures/Delete",
            Retrieve = "HRM/PayrollStructures/Retrieve",
            List = "HRM/PayrollStructures/List"
        }
    }
}
declare namespace SerExtraCore {
    enum InvoiceStatus {
        Value1 = 1,
        Value2 = 2,
        Value3 = 3
    }
}
declare namespace SerExtraCore {
    enum LedgerTypes {
        Value1 = 1,
        Value2 = 2,
        Value3 = 3,
        Value4 = 4,
        Value5 = 5
    }
}
declare namespace SerExtraCore {
    enum LookupType {
        Value1 = 1,
        Value2 = 2
    }
}
declare namespace SerExtraCore.Master {
    class ChargesColumns {
        static readonly columnsKey = "Master.Charges";
    }
}
declare namespace SerExtraCore.Master {
    interface ChargesForm {
        ChargeName: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        ChartOrder: Serenity.IntegerEditor;
        TaxCodeId: Serenity.LookupEditor;
    }
    class ChargesForm extends Serenity.PrefixedContext {
        static readonly formKey = "Master.Charges";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Master {
    interface ChargesRow {
        Id?: number;
        ChargeName?: string;
        Description?: string;
        Slno?: number;
        TaxCodeId?: number;
        ChartOrder?: number;
        TaxPer?: number;
        TaxCode?: string;
        TaxRate?: number;
    }
    namespace ChargesRow {
        const idProperty = "Id";
        const nameProperty = "ChargeName";
        const localTextPrefix = "Master.Charges";
        const lookupKey = "Master.Charges";
        function getLookup(): Q.Lookup<ChargesRow>;
        const deletePermission = "Master:Charges";
        const insertPermission = "Master:Charges";
        const readPermission = "Master:Charges";
        const updatePermission = "Master:Charges";
        const enum Fields {
            Id = "Id",
            ChargeName = "ChargeName",
            Description = "Description",
            Slno = "Slno",
            TaxCodeId = "TaxCodeId",
            ChartOrder = "ChartOrder",
            TaxPer = "TaxPer",
            TaxCode = "TaxCode",
            TaxRate = "TaxRate"
        }
    }
}
declare namespace SerExtraCore.Master {
    namespace ChargesService {
        const baseUrl = "Master/Charges";
        function Create(request: Serenity.SaveRequest<ChargesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<ChargesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ChargesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ChargesRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ChargesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ChargesRow>>;
        const enum Methods {
            Create = "Master/Charges/Create",
            Update = "Master/Charges/Update",
            Delete = "Master/Charges/Delete",
            Retrieve = "Master/Charges/Retrieve",
            List = "Master/Charges/List"
        }
    }
}
declare namespace SerExtraCore.Master {
    class ClearanceStatusColumns {
        static readonly columnsKey = "Master.ClearanceStatus";
    }
}
declare namespace SerExtraCore.Master {
    interface ClearanceStatusForm {
        Status: Serenity.StringEditor;
        ChartOrder: Serenity.IntegerEditor;
    }
    class ClearanceStatusForm extends Serenity.PrefixedContext {
        static readonly formKey = "Master.ClearanceStatus";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Master {
    interface ClearanceStatusRow {
        Id?: number;
        Status?: string;
        ChartOrder?: number;
    }
    namespace ClearanceStatusRow {
        const idProperty = "Id";
        const nameProperty = "Status";
        const localTextPrefix = "Master.ClearanceStatus";
        const lookupKey = "Master.ClearanceStatus";
        function getLookup(): Q.Lookup<ClearanceStatusRow>;
        const deletePermission = "Master:ClearanceStatus";
        const insertPermission = "Master:ClearanceStatus";
        const readPermission = "Master:ClearanceStatus";
        const updatePermission = "Master:ClearanceStatus";
        const enum Fields {
            Id = "Id",
            Status = "Status",
            ChartOrder = "ChartOrder"
        }
    }
}
declare namespace SerExtraCore.Master {
    namespace ClearanceStatusService {
        const baseUrl = "Master/ClearanceStatus";
        function Create(request: Serenity.SaveRequest<ClearanceStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<ClearanceStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClearanceStatusRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ClearanceStatusRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClearanceStatusRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ClearanceStatusRow>>;
        const enum Methods {
            Create = "Master/ClearanceStatus/Create",
            Update = "Master/ClearanceStatus/Update",
            Delete = "Master/ClearanceStatus/Delete",
            Retrieve = "Master/ClearanceStatus/Retrieve",
            List = "Master/ClearanceStatus/List"
        }
    }
}
declare namespace SerExtraCore.Master {
    class CountriesColumns {
        static readonly columnsKey = "Master.Countries";
    }
}
declare namespace SerExtraCore.Master {
    interface CountriesForm {
        CountryCode: Serenity.StringEditor;
        CountryName: Serenity.StringEditor;
    }
    class CountriesForm extends Serenity.PrefixedContext {
        static readonly formKey = "Master.Countries";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Master {
    interface CountriesRow {
        Id?: number;
        CountryCode?: string;
        CountryName?: string;
        Slno?: number;
    }
    namespace CountriesRow {
        const idProperty = "Id";
        const nameProperty = "CountryName";
        const localTextPrefix = "Master.Countries";
        const lookupKey = "Master.Countries";
        function getLookup(): Q.Lookup<CountriesRow>;
        const deletePermission = "Master:Countries";
        const insertPermission = "Master:Countries";
        const readPermission = "Master:Countries";
        const updatePermission = "Master:Countries";
        const enum Fields {
            Id = "Id",
            CountryCode = "CountryCode",
            CountryName = "CountryName",
            Slno = "Slno"
        }
    }
}
declare namespace SerExtraCore.Master {
    namespace CountriesService {
        const baseUrl = "Master/Countries";
        function Create(request: Serenity.SaveRequest<CountriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<CountriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CountriesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<CountriesRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CountriesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<CountriesRow>>;
        const enum Methods {
            Create = "Master/Countries/Create",
            Update = "Master/Countries/Update",
            Delete = "Master/Countries/Delete",
            Retrieve = "Master/Countries/Retrieve",
            List = "Master/Countries/List"
        }
    }
}
declare namespace SerExtraCore.Master {
    class CurrenciesColumns {
        static readonly columnsKey = "Master.Currencies";
    }
}
declare namespace SerExtraCore.Master {
    interface CurrenciesForm {
        CurrencyCode: Serenity.StringEditor;
        CurrencyName: Serenity.StringEditor;
        ExchangeRate: Serenity.DecimalEditor;
        CurrencyUnit: Serenity.StringEditor;
        SubCurrencyUnit: Serenity.StringEditor;
    }
    class CurrenciesForm extends Serenity.PrefixedContext {
        static readonly formKey = "Master.Currencies";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Master {
    interface CurrenciesRow {
        Id?: number;
        CurrencyCode?: string;
        CurrencyName?: string;
        ExchangeRate?: number;
        CurrencyUnit?: string;
        SubCurrencyUnit?: string;
        Slno?: number;
    }
    namespace CurrenciesRow {
        const idProperty = "Id";
        const nameProperty = "CurrencyCode";
        const localTextPrefix = "Master.Currencies";
        const lookupKey = "Master.Currencies";
        function getLookup(): Q.Lookup<CurrenciesRow>;
        const deletePermission = "Master:Currencies";
        const insertPermission = "Master:Currencies";
        const readPermission = "Master:Currencies";
        const updatePermission = "Master:Currencies";
        const enum Fields {
            Id = "Id",
            CurrencyCode = "CurrencyCode",
            CurrencyName = "CurrencyName",
            ExchangeRate = "ExchangeRate",
            CurrencyUnit = "CurrencyUnit",
            SubCurrencyUnit = "SubCurrencyUnit",
            Slno = "Slno"
        }
    }
}
declare namespace SerExtraCore.Master {
    namespace CurrenciesService {
        const baseUrl = "Master/Currencies";
        function Create(request: Serenity.SaveRequest<CurrenciesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<CurrenciesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CurrenciesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<CurrenciesRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CurrenciesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<CurrenciesRow>>;
        const enum Methods {
            Create = "Master/Currencies/Create",
            Update = "Master/Currencies/Update",
            Delete = "Master/Currencies/Delete",
            Retrieve = "Master/Currencies/Retrieve",
            List = "Master/Currencies/List"
        }
    }
}
declare namespace SerExtraCore.Master {
    class CustomersColumns {
        static readonly columnsKey = "Master.Customers";
    }
}
declare namespace SerExtraCore.Master {
    interface CustomersForm {
        CustomerCode: Serenity.StringEditor;
        CustomerName: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        Place: Serenity.StringEditor;
        StateId: Serenity.LookupEditor;
        TaxRegNo: Serenity.StringEditor;
        Telephone: Serenity.StringEditor;
        Email: Serenity.EmailAddressEditor;
        ContactPerson: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        DueDays: Serenity.IntegerEditor;
        CreationDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        OpeningDate: Serenity.DateEditor;
        Opening: Serenity.DecimalEditor;
        jVAdjustmentsRow: Accounts.JVAdjustmentsEditor;
    }
    class CustomersForm extends Serenity.PrefixedContext {
        static readonly formKey = "Master.Customers";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Master {
    interface CustomersRow {
        Id?: number;
        CustomerCode?: string;
        CustomerName?: string;
        Address?: string;
        Place?: string;
        Telephone?: string;
        Email?: string;
        ContactPerson?: string;
        Mobile?: string;
        CreationDate?: string;
        Description?: string;
        DueDays?: number;
        TaxRegNo?: string;
        jVAdjustmentsRow?: Accounts.JVAdjustmentsRow[];
        OpeningDate?: string;
        Opening?: number;
        Slno?: number;
        FullName?: string;
        StateId?: number;
        StateName?: string;
    }
    namespace CustomersRow {
        const idProperty = "Id";
        const nameProperty = "FullName";
        const localTextPrefix = "Master.Customers";
        const lookupKey = "Master.Customers";
        function getLookup(): Q.Lookup<CustomersRow>;
        const deletePermission = "Master:Customers";
        const insertPermission = "Master:Customers";
        const readPermission = "Master:Customers";
        const updatePermission = "Master:Customers";
        const enum Fields {
            Id = "Id",
            CustomerCode = "CustomerCode",
            CustomerName = "CustomerName",
            Address = "Address",
            Place = "Place",
            Telephone = "Telephone",
            Email = "Email",
            ContactPerson = "ContactPerson",
            Mobile = "Mobile",
            CreationDate = "CreationDate",
            Description = "Description",
            DueDays = "DueDays",
            TaxRegNo = "TaxRegNo",
            jVAdjustmentsRow = "jVAdjustmentsRow",
            OpeningDate = "OpeningDate",
            Opening = "Opening",
            Slno = "Slno",
            FullName = "FullName",
            StateId = "StateId",
            StateName = "StateName"
        }
    }
}
declare namespace SerExtraCore.Master {
    namespace CustomersService {
        const baseUrl = "Master/Customers";
        function Create(request: Serenity.SaveRequest<CustomersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<CustomersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomersRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<CustomersRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomersRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<CustomersRow>>;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;
        const enum Methods {
            Create = "Master/Customers/Create",
            Update = "Master/Customers/Update",
            Delete = "Master/Customers/Delete",
            Retrieve = "Master/Customers/Retrieve",
            List = "Master/Customers/List",
            GetNextNumber = "Master/Customers/GetNextNumber"
        }
    }
}
declare namespace SerExtraCore.Master {
    class DesignationColumns {
        static readonly columnsKey = "Master.Designation";
    }
}
declare namespace SerExtraCore.Master {
    interface DesignationForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }
    class DesignationForm extends Serenity.PrefixedContext {
        static readonly formKey = "Master.Designation";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Master {
    interface DesignationRow {
        Id?: number;
        Name?: string;
        Description?: string;
        Slno?: number;
    }
    namespace DesignationRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Master.Designation";
        const lookupKey = "Master.Designation";
        function getLookup(): Q.Lookup<DesignationRow>;
        const deletePermission = "Master:Designation";
        const insertPermission = "Master:Designation";
        const readPermission = "Master:Designation";
        const updatePermission = "Master:Designation";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            Slno = "Slno"
        }
    }
}
declare namespace SerExtraCore.Master {
    namespace DesignationService {
        const baseUrl = "Master/Designation";
        function Create(request: Serenity.SaveRequest<DesignationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<DesignationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DesignationRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<DesignationRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DesignationRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<DesignationRow>>;
        const enum Methods {
            Create = "Master/Designation/Create",
            Update = "Master/Designation/Update",
            Delete = "Master/Designation/Delete",
            Retrieve = "Master/Designation/Retrieve",
            List = "Master/Designation/List"
        }
    }
}
declare namespace SerExtraCore.Master {
    class EmployeeMasterColumns {
        static readonly columnsKey = "Master.EmployeeMaster";
    }
}
declare namespace SerExtraCore.Master {
    interface EmployeeMasterForm {
        EmployeeCode: Serenity.StringEditor;
        EmployeeName: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        CountryId: Serenity.LookupEditor;
        MobileNumber: Serenity.StringEditor;
        EmployeeTypeId: Serenity.LookupEditor;
        DesignationId: Serenity.LookupEditor;
        EmployeeStatus: Serenity.EnumEditor;
        ResidentId: Serenity.StringEditor;
        RidExpiryDate: Serenity.DateEditor;
        PassportNumber: Serenity.StringEditor;
        PassportExpiryDate: Serenity.DateEditor;
        BasicSalary: Serenity.DecimalEditor;
        Allowance: Serenity.DecimalEditor;
    }
    class EmployeeMasterForm extends Serenity.PrefixedContext {
        static readonly formKey = "Master.EmployeeMaster";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Master {
    interface EmployeeMasterRow {
        Id?: number;
        EmployeeCode?: string;
        EmployeeName?: string;
        Address?: string;
        CountryId?: number;
        EmployeeStatus?: EmployeeStatus;
        EmployeeTypeId?: number;
        DesignationId?: number;
        ResidentId?: string;
        RidExpiryDate?: string;
        PassportNumber?: string;
        PassportExpiryDate?: string;
        MobileNumber?: string;
        BasicSalary?: number;
        Allowance?: number;
        Slno?: number;
        FullName?: string;
        CountryCountryCode?: string;
        CountryCountryName?: string;
        EmployeeTypeType?: string;
        EmployeeTypeDescription?: string;
        DesignationName?: string;
        DesignationDescription?: string;
    }
    namespace EmployeeMasterRow {
        const idProperty = "Id";
        const nameProperty = "FullName";
        const localTextPrefix = "Master.EmployeeMaster";
        const lookupKey = "Master.EmployeeMaster";
        function getLookup(): Q.Lookup<EmployeeMasterRow>;
        const deletePermission = "Master:EmployeeMaster";
        const insertPermission = "Master:EmployeeMaster";
        const readPermission = "Master:EmployeeMaster";
        const updatePermission = "Master:EmployeeMaster";
        const enum Fields {
            Id = "Id",
            EmployeeCode = "EmployeeCode",
            EmployeeName = "EmployeeName",
            Address = "Address",
            CountryId = "CountryId",
            EmployeeStatus = "EmployeeStatus",
            EmployeeTypeId = "EmployeeTypeId",
            DesignationId = "DesignationId",
            ResidentId = "ResidentId",
            RidExpiryDate = "RidExpiryDate",
            PassportNumber = "PassportNumber",
            PassportExpiryDate = "PassportExpiryDate",
            MobileNumber = "MobileNumber",
            BasicSalary = "BasicSalary",
            Allowance = "Allowance",
            Slno = "Slno",
            FullName = "FullName",
            CountryCountryCode = "CountryCountryCode",
            CountryCountryName = "CountryCountryName",
            EmployeeTypeType = "EmployeeTypeType",
            EmployeeTypeDescription = "EmployeeTypeDescription",
            DesignationName = "DesignationName",
            DesignationDescription = "DesignationDescription"
        }
    }
}
declare namespace SerExtraCore.Master {
    namespace EmployeeMasterService {
        const baseUrl = "Master/EmployeeMaster";
        function Create(request: Serenity.SaveRequest<EmployeeMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<EmployeeMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeMasterRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<EmployeeMasterRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeMasterRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<EmployeeMasterRow>>;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;
        const enum Methods {
            Create = "Master/EmployeeMaster/Create",
            Update = "Master/EmployeeMaster/Update",
            Delete = "Master/EmployeeMaster/Delete",
            Retrieve = "Master/EmployeeMaster/Retrieve",
            List = "Master/EmployeeMaster/List",
            GetNextNumber = "Master/EmployeeMaster/GetNextNumber"
        }
    }
}
declare namespace SerExtraCore.Master {
    class EmployeeTypeColumns {
        static readonly columnsKey = "Master.EmployeeType";
    }
}
declare namespace SerExtraCore.Master {
    interface EmployeeTypeForm {
        Type: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }
    class EmployeeTypeForm extends Serenity.PrefixedContext {
        static readonly formKey = "Master.EmployeeType";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Master {
    interface EmployeeTypeRow {
        Id?: number;
        Type?: string;
        Description?: string;
        Slno?: number;
    }
    namespace EmployeeTypeRow {
        const idProperty = "Id";
        const nameProperty = "Type";
        const localTextPrefix = "Master.EmployeeType";
        const lookupKey = "Master.EmployeeType";
        function getLookup(): Q.Lookup<EmployeeTypeRow>;
        const deletePermission = "Master:EmployeeType";
        const insertPermission = "Master:EmployeeType";
        const readPermission = "Master:EmployeeType";
        const updatePermission = "Master:EmployeeType";
        const enum Fields {
            Id = "Id",
            Type = "Type",
            Description = "Description",
            Slno = "Slno"
        }
    }
}
declare namespace SerExtraCore.Master {
    namespace EmployeeTypeService {
        const baseUrl = "Master/EmployeeType";
        function Create(request: Serenity.SaveRequest<EmployeeTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<EmployeeTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeTypeRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<EmployeeTypeRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeTypeRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<EmployeeTypeRow>>;
        const enum Methods {
            Create = "Master/EmployeeType/Create",
            Update = "Master/EmployeeType/Update",
            Delete = "Master/EmployeeType/Delete",
            Retrieve = "Master/EmployeeType/Retrieve",
            List = "Master/EmployeeType/List"
        }
    }
}
declare namespace SerExtraCore.Master {
    class OutsourceColumns {
        static readonly columnsKey = "Master.Outsource";
    }
}
declare namespace SerExtraCore.Master {
    interface OutsourceForm {
        Name: Serenity.IntegerEditor;
        Description: Serenity.TextAreaEditor;
    }
    class OutsourceForm extends Serenity.PrefixedContext {
        static readonly formKey = "Master.Outsource";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Master {
    interface OutsourceRow {
        Id?: number;
        Name?: number;
        Description?: string;
        Slno?: number;
    }
    namespace OutsourceRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "Master.Outsource";
        const lookupKey = "Master.Outsource";
        function getLookup(): Q.Lookup<OutsourceRow>;
        const deletePermission = "Master:Outsource";
        const insertPermission = "Master:Outsource";
        const readPermission = "Master:Outsource";
        const updatePermission = "Master:Outsource";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            Slno = "Slno"
        }
    }
}
declare namespace SerExtraCore.Master {
    namespace OutsourceService {
        const baseUrl = "Master/Outsource";
        function Create(request: Serenity.SaveRequest<OutsourceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<OutsourceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutsourceRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<OutsourceRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutsourceRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<OutsourceRow>>;
        const enum Methods {
            Create = "Master/Outsource/Create",
            Update = "Master/Outsource/Update",
            Delete = "Master/Outsource/Delete",
            Retrieve = "Master/Outsource/Retrieve",
            List = "Master/Outsource/List"
        }
    }
}
declare namespace SerExtraCore.Master {
    class PortsColumns {
        static readonly columnsKey = "Master.Ports";
    }
}
declare namespace SerExtraCore.Master {
    interface PortsForm {
        PortName: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
    }
    class PortsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Master.Ports";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Master {
    interface PortsRow {
        Id?: number;
        PortName?: string;
        CountryId?: number;
        CountryCountryCode?: string;
        CountryCountryName?: string;
    }
    namespace PortsRow {
        const idProperty = "Id";
        const nameProperty = "PortName";
        const localTextPrefix = "Master.Ports";
        const lookupKey = "Master.Ports";
        function getLookup(): Q.Lookup<PortsRow>;
        const deletePermission = "Master:Ports";
        const insertPermission = "Master:Ports";
        const readPermission = "Master:Ports";
        const updatePermission = "Master:Ports";
        const enum Fields {
            Id = "Id",
            PortName = "PortName",
            CountryId = "CountryId",
            CountryCountryCode = "CountryCountryCode",
            CountryCountryName = "CountryCountryName"
        }
    }
}
declare namespace SerExtraCore.Master {
    namespace PortsService {
        const baseUrl = "Master/Ports";
        function Create(request: Serenity.SaveRequest<PortsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<PortsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PortsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<PortsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PortsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<PortsRow>>;
        const enum Methods {
            Create = "Master/Ports/Create",
            Update = "Master/Ports/Update",
            Delete = "Master/Ports/Delete",
            Retrieve = "Master/Ports/Retrieve",
            List = "Master/Ports/List"
        }
    }
}
declare namespace SerExtraCore.Master {
    class ProductsColumns {
        static readonly columnsKey = "Master.Products";
    }
}
declare namespace SerExtraCore.Master {
    interface ProductsForm {
        ProductCode: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
    }
    class ProductsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Master.Products";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Master {
    interface ProductsRow {
        Id?: number;
        ProductCode?: string;
        ProductName?: string;
        UnitPrice?: number;
        FullName?: string;
    }
    namespace ProductsRow {
        const idProperty = "Id";
        const nameProperty = "FullName";
        const localTextPrefix = "Master.Products";
        const lookupKey = "Master.Products";
        function getLookup(): Q.Lookup<ProductsRow>;
        const deletePermission = "Master:Products";
        const insertPermission = "Master:Products";
        const readPermission = "Master:Products";
        const updatePermission = "Master:Products";
        const enum Fields {
            Id = "Id",
            ProductCode = "ProductCode",
            ProductName = "ProductName",
            UnitPrice = "UnitPrice",
            FullName = "FullName"
        }
    }
}
declare namespace SerExtraCore.Master {
    namespace ProductsService {
        const baseUrl = "Master/Products";
        function Create(request: Serenity.SaveRequest<ProductsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<ProductsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ProductsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ProductsRow>>;
        const enum Methods {
            Create = "Master/Products/Create",
            Update = "Master/Products/Update",
            Delete = "Master/Products/Delete",
            Retrieve = "Master/Products/Retrieve",
            List = "Master/Products/List"
        }
    }
}
declare namespace SerExtraCore.Master {
    class ShippingAreasColumns {
        static readonly columnsKey = "Master.ShippingAreas";
    }
}
declare namespace SerExtraCore.Master {
    interface ShippingAreasForm {
        AreaName: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }
    class ShippingAreasForm extends Serenity.PrefixedContext {
        static readonly formKey = "Master.ShippingAreas";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Master {
    interface ShippingAreasRow {
        Id?: number;
        AreaName?: string;
        Description?: string;
        Slno?: number;
    }
    namespace ShippingAreasRow {
        const idProperty = "Id";
        const nameProperty = "AreaName";
        const localTextPrefix = "Master.ShippingAreas";
        const lookupKey = "Master.ShippingAreas";
        function getLookup(): Q.Lookup<ShippingAreasRow>;
        const deletePermission = "Master:ShippingAreas";
        const insertPermission = "Master:ShippingAreas";
        const readPermission = "Master:ShippingAreas";
        const updatePermission = "Master:ShippingAreas";
        const enum Fields {
            Id = "Id",
            AreaName = "AreaName",
            Description = "Description",
            Slno = "Slno"
        }
    }
}
declare namespace SerExtraCore.Master {
    namespace ShippingAreasService {
        const baseUrl = "Master/ShippingAreas";
        function Create(request: Serenity.SaveRequest<ShippingAreasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<ShippingAreasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShippingAreasRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ShippingAreasRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShippingAreasRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ShippingAreasRow>>;
        const enum Methods {
            Create = "Master/ShippingAreas/Create",
            Update = "Master/ShippingAreas/Update",
            Delete = "Master/ShippingAreas/Delete",
            Retrieve = "Master/ShippingAreas/Retrieve",
            List = "Master/ShippingAreas/List"
        }
    }
}
declare namespace SerExtraCore.Master {
    class SpecificationsColumns {
        static readonly columnsKey = "Master.Specifications";
    }
}
declare namespace SerExtraCore.Master {
    interface SpecificationsForm {
        Specifications: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }
    class SpecificationsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Master.Specifications";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Master {
    interface SpecificationsRow {
        Id?: number;
        Specifications?: string;
        Description?: string;
        Slno?: number;
    }
    namespace SpecificationsRow {
        const idProperty = "Id";
        const nameProperty = "Specifications";
        const localTextPrefix = "Master.Specifications";
        const lookupKey = "Master.Specifications";
        function getLookup(): Q.Lookup<SpecificationsRow>;
        const deletePermission = "Master:Specifications";
        const insertPermission = "Master:Specifications";
        const readPermission = "Master:Specifications";
        const updatePermission = "Master:Specifications";
        const enum Fields {
            Id = "Id",
            Specifications = "Specifications",
            Description = "Description",
            Slno = "Slno"
        }
    }
}
declare namespace SerExtraCore.Master {
    namespace SpecificationsService {
        const baseUrl = "Master/Specifications";
        function Create(request: Serenity.SaveRequest<SpecificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<SpecificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SpecificationsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<SpecificationsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SpecificationsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<SpecificationsRow>>;
        const enum Methods {
            Create = "Master/Specifications/Create",
            Update = "Master/Specifications/Update",
            Delete = "Master/Specifications/Delete",
            Retrieve = "Master/Specifications/Retrieve",
            List = "Master/Specifications/List"
        }
    }
}
declare namespace SerExtraCore.Master {
    class SupplierColumns {
        static readonly columnsKey = "Master.Supplier";
    }
}
declare namespace SerExtraCore.Master {
    interface SupplierForm {
        SupplierCode: Serenity.StringEditor;
        SupplierName: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        Place: Serenity.StringEditor;
        TaxRegNo: Serenity.StringEditor;
        Telephone: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ContactPerson: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        CreationDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        OpeningDate: Serenity.DateEditor;
        Opening: Serenity.DecimalEditor;
        jVAdjustmentsRow: Accounts.JVAdjustmentsEditor;
    }
    class SupplierForm extends Serenity.PrefixedContext {
        static readonly formKey = "Master.Supplier";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Master {
    interface SupplierRow {
        Id?: number;
        SupplierCode?: string;
        SupplierName?: string;
        Address?: string;
        Place?: string;
        Telephone?: string;
        Email?: string;
        ContactPerson?: string;
        Mobile?: string;
        TaxRegNo?: string;
        CreationDate?: string;
        Description?: string;
        OpeningDate?: string;
        Opening?: number;
        jVAdjustmentsRow?: Accounts.JVAdjustmentsRow[];
        Slno?: number;
        FullName?: string;
    }
    namespace SupplierRow {
        const idProperty = "Id";
        const nameProperty = "SupplierName";
        const localTextPrefix = "Master.Supplier";
        const lookupKey = "Master.Supplier";
        function getLookup(): Q.Lookup<SupplierRow>;
        const deletePermission = "Master:Supplier";
        const insertPermission = "Master:Supplier";
        const readPermission = "Master:Supplier";
        const updatePermission = "Master:Supplier";
        const enum Fields {
            Id = "Id",
            SupplierCode = "SupplierCode",
            SupplierName = "SupplierName",
            Address = "Address",
            Place = "Place",
            Telephone = "Telephone",
            Email = "Email",
            ContactPerson = "ContactPerson",
            Mobile = "Mobile",
            TaxRegNo = "TaxRegNo",
            CreationDate = "CreationDate",
            Description = "Description",
            OpeningDate = "OpeningDate",
            Opening = "Opening",
            jVAdjustmentsRow = "jVAdjustmentsRow",
            Slno = "Slno",
            FullName = "FullName"
        }
    }
}
declare namespace SerExtraCore.Master {
    namespace SupplierService {
        const baseUrl = "Master/Supplier";
        function Create(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<SupplierRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<SupplierRow>>;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;
        const enum Methods {
            Create = "Master/Supplier/Create",
            Update = "Master/Supplier/Update",
            Delete = "Master/Supplier/Delete",
            Retrieve = "Master/Supplier/Retrieve",
            List = "Master/Supplier/List",
            GetNextNumber = "Master/Supplier/GetNextNumber"
        }
    }
}
declare namespace SerExtraCore.Master {
    class TaxCodeColumns {
        static readonly columnsKey = "Master.TaxCode";
    }
}
declare namespace SerExtraCore.Master {
    interface TaxCodeForm {
        Name: Serenity.StringEditor;
        Rate: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }
    class TaxCodeForm extends Serenity.PrefixedContext {
        static readonly formKey = "Master.TaxCode";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Master {
    interface TaxCodeRow {
        Id?: number;
        Name?: string;
        Rate?: number;
        Description?: string;
    }
    namespace TaxCodeRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Master.TaxCode";
        const lookupKey = "Master.TaxCode";
        function getLookup(): Q.Lookup<TaxCodeRow>;
        const deletePermission = "Master:TaxCode";
        const insertPermission = "Master:TaxCode";
        const readPermission = "Master:TaxCode";
        const updatePermission = "Master:TaxCode";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Rate = "Rate",
            Description = "Description"
        }
    }
}
declare namespace SerExtraCore.Master {
    namespace TaxCodeService {
        const baseUrl = "Master/TaxCode";
        function Create(request: Serenity.SaveRequest<TaxCodeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<TaxCodeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TaxCodeRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<TaxCodeRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TaxCodeRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<TaxCodeRow>>;
        const enum Methods {
            Create = "Master/TaxCode/Create",
            Update = "Master/TaxCode/Update",
            Delete = "Master/TaxCode/Delete",
            Retrieve = "Master/TaxCode/Retrieve",
            List = "Master/TaxCode/List"
        }
    }
}
declare namespace SerExtraCore.Master {
    class VehicleModelsColumns {
        static readonly columnsKey = "Master.VehicleModels";
    }
}
declare namespace SerExtraCore.Master {
    interface VehicleModelsForm {
        ModelName: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }
    class VehicleModelsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Master.VehicleModels";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Master {
    interface VehicleModelsRow {
        Id?: number;
        ModelName?: string;
        Description?: string;
        Slno?: number;
    }
    namespace VehicleModelsRow {
        const idProperty = "Id";
        const nameProperty = "ModelName";
        const localTextPrefix = "Master.VehicleModels";
        const lookupKey = "Master.VehicleModels";
        function getLookup(): Q.Lookup<VehicleModelsRow>;
        const deletePermission = "Master:VehicleModels";
        const insertPermission = "Master:VehicleModels";
        const readPermission = "Master:VehicleModels";
        const updatePermission = "Master:VehicleModels";
        const enum Fields {
            Id = "Id",
            ModelName = "ModelName",
            Description = "Description",
            Slno = "Slno"
        }
    }
}
declare namespace SerExtraCore.Master {
    namespace VehicleModelsService {
        const baseUrl = "Master/VehicleModels";
        function Create(request: Serenity.SaveRequest<VehicleModelsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<VehicleModelsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VehicleModelsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<VehicleModelsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VehicleModelsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<VehicleModelsRow>>;
        const enum Methods {
            Create = "Master/VehicleModels/Create",
            Update = "Master/VehicleModels/Update",
            Delete = "Master/VehicleModels/Delete",
            Retrieve = "Master/VehicleModels/Retrieve",
            List = "Master/VehicleModels/List"
        }
    }
}
declare namespace SerExtraCore.Master {
    class VehicleSpecificationsColumns {
        static readonly columnsKey = "Master.VehicleSpecifications";
    }
}
declare namespace SerExtraCore.Master {
    interface VehicleSpecificationsForm {
        VehicleId: Serenity.IntegerEditor;
        SpecificationId: Serenity.IntegerEditor;
    }
    class VehicleSpecificationsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Master.VehicleSpecifications";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Master {
    interface VehicleSpecificationsRow {
        Id?: number;
        VehicleId?: number;
        SpecificationId?: number;
        VehicleTypeOfVehicle?: number;
        VehicleThrough?: number;
        VehicleVehicleNumber?: string;
        VehicleVehicleModel?: number;
        VehicleRegistraionNumber?: string;
        VehicleDescription?: string;
        VehicleRegistrationDate?: string;
        VehicleExpiryDate?: string;
        VehicleDriver?: number;
        VehiclePdoApproved?: boolean;
        Slno?: number;
        SpecificationSpecifications?: string;
        SpecificationDescription?: string;
    }
    namespace VehicleSpecificationsRow {
        const idProperty = "Id";
        const localTextPrefix = "Master.VehicleSpecifications";
        const deletePermission = "Master:Vehicles";
        const insertPermission = "Master:Vehicles";
        const readPermission = "Master:Vehicles";
        const updatePermission = "Master:Vehicles";
        const enum Fields {
            Id = "Id",
            VehicleId = "VehicleId",
            SpecificationId = "SpecificationId",
            VehicleTypeOfVehicle = "VehicleTypeOfVehicle",
            VehicleThrough = "VehicleThrough",
            VehicleVehicleNumber = "VehicleVehicleNumber",
            VehicleVehicleModel = "VehicleVehicleModel",
            VehicleRegistraionNumber = "VehicleRegistraionNumber",
            VehicleDescription = "VehicleDescription",
            VehicleRegistrationDate = "VehicleRegistrationDate",
            VehicleExpiryDate = "VehicleExpiryDate",
            VehicleDriver = "VehicleDriver",
            VehiclePdoApproved = "VehiclePdoApproved",
            Slno = "Slno",
            SpecificationSpecifications = "SpecificationSpecifications",
            SpecificationDescription = "SpecificationDescription"
        }
    }
}
declare namespace SerExtraCore.Master {
    namespace VehicleSpecificationsService {
        const baseUrl = "Master/VehicleSpecifications";
        function Create(request: Serenity.SaveRequest<VehicleSpecificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<VehicleSpecificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VehicleSpecificationsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<VehicleSpecificationsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VehicleSpecificationsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<VehicleSpecificationsRow>>;
        const enum Methods {
            Create = "Master/VehicleSpecifications/Create",
            Update = "Master/VehicleSpecifications/Update",
            Delete = "Master/VehicleSpecifications/Delete",
            Retrieve = "Master/VehicleSpecifications/Retrieve",
            List = "Master/VehicleSpecifications/List"
        }
    }
}
declare namespace SerExtraCore.Master {
    class VehiclesColumns {
        static readonly columnsKey = "Master.Vehicles";
    }
}
declare namespace SerExtraCore.Master {
    interface VehiclesForm {
        TypeOfVehicle: Serenity.EnumEditor;
        SupplierId: Serenity.LookupEditor;
        OwnerId: Serenity.LookupEditor;
        VehicleNumber: Serenity.StringEditor;
        HSN: Serenity.StringEditor;
        PrimeMover: Serenity.StringEditor;
        VehicleModel: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
        VehicleSpecifications: Serenity.LookupEditor;
        RegistrationDate: Serenity.DateEditor;
        ExpiryDate: Serenity.DateEditor;
        Driver: Serenity.LookupEditor;
        PdoApproved: Serenity.BooleanEditor;
    }
    class VehiclesForm extends Serenity.PrefixedContext {
        static readonly formKey = "Master.Vehicles";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Master {
    interface VehiclesRow {
        Id?: number;
        TypeOfVehicle?: VehicleTypes;
        Through?: number;
        VehicleNumber?: string;
        VehicleModel?: number;
        RegistraionNumber?: string;
        Description?: string;
        RegistrationDate?: string;
        ExpiryDate?: string;
        Driver?: number;
        PdoApproved?: boolean;
        SupplierId?: number;
        Slno?: number;
        VehicleSpecifications?: number[];
        PrimeMover?: string;
        ThroughName?: number;
        ThroughDescription?: string;
        SupplierName?: string;
        DriverEmployeeCode?: string;
        DriverEmployeeName?: string;
        DriverAddress?: string;
        DriverCountryId?: number;
        DriverEmployeeStatus?: number;
        DriverEmployeeTypeId?: number;
        DriverDesignationId?: number;
        DriverResidentId?: string;
        DriverRidExpiryDate?: string;
        DriverPassportNumber?: string;
        DriverPassportExpiryDate?: string;
        DriverMobileNumber?: string;
        DriverBasicSalary?: number;
        DriverAllowance?: number;
        ModelName?: string;
        HSN?: string;
        OwnerId?: number;
        OwnerName?: string;
    }
    namespace VehiclesRow {
        const idProperty = "Id";
        const nameProperty = "VehicleNumber";
        const localTextPrefix = "Master.Vehicles";
        const lookupKey = "Master.Vehicles";
        function getLookup(): Q.Lookup<VehiclesRow>;
        const deletePermission = "Master:Vehicles";
        const insertPermission = "Master:Vehicles";
        const readPermission = "Master:Vehicles";
        const updatePermission = "Master:Vehicles";
        const enum Fields {
            Id = "Id",
            TypeOfVehicle = "TypeOfVehicle",
            Through = "Through",
            VehicleNumber = "VehicleNumber",
            VehicleModel = "VehicleModel",
            RegistraionNumber = "RegistraionNumber",
            Description = "Description",
            RegistrationDate = "RegistrationDate",
            ExpiryDate = "ExpiryDate",
            Driver = "Driver",
            PdoApproved = "PdoApproved",
            SupplierId = "SupplierId",
            Slno = "Slno",
            VehicleSpecifications = "VehicleSpecifications",
            PrimeMover = "PrimeMover",
            ThroughName = "ThroughName",
            ThroughDescription = "ThroughDescription",
            SupplierName = "SupplierName",
            DriverEmployeeCode = "DriverEmployeeCode",
            DriverEmployeeName = "DriverEmployeeName",
            DriverAddress = "DriverAddress",
            DriverCountryId = "DriverCountryId",
            DriverEmployeeStatus = "DriverEmployeeStatus",
            DriverEmployeeTypeId = "DriverEmployeeTypeId",
            DriverDesignationId = "DriverDesignationId",
            DriverResidentId = "DriverResidentId",
            DriverRidExpiryDate = "DriverRidExpiryDate",
            DriverPassportNumber = "DriverPassportNumber",
            DriverPassportExpiryDate = "DriverPassportExpiryDate",
            DriverMobileNumber = "DriverMobileNumber",
            DriverBasicSalary = "DriverBasicSalary",
            DriverAllowance = "DriverAllowance",
            ModelName = "ModelName",
            HSN = "HSN",
            OwnerId = "OwnerId",
            OwnerName = "OwnerName"
        }
    }
}
declare namespace SerExtraCore.Master {
    namespace VehiclesService {
        const baseUrl = "Master/Vehicles";
        function Create(request: Serenity.SaveRequest<VehiclesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<VehiclesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VehiclesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<VehiclesRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VehiclesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<VehiclesRow>>;
        const enum Methods {
            Create = "Master/Vehicles/Create",
            Update = "Master/Vehicles/Update",
            Delete = "Master/Vehicles/Delete",
            Retrieve = "Master/Vehicles/Retrieve",
            List = "Master/Vehicles/List"
        }
    }
}
declare namespace SerExtraCore.MaterialsDetails {
    class MaterialsDetailsColumns {
        static readonly columnsKey = "MaterialsDetails.MaterialsDetails";
    }
}
declare namespace SerExtraCore.MaterialsDetails {
    interface MaterialsDetailsForm {
        Materials: Serenity.StringEditor;
        Units: UOMAmount.UOMAmountEditor;
    }
    class MaterialsDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = "MaterialsDetails.MaterialsDetails";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.MaterialsDetails {
    interface MaterialsDetailsRow {
        Id?: number;
        Materials?: string;
        Units?: UOMAmount.UOMAmountRow[];
    }
    namespace MaterialsDetailsRow {
        const idProperty = "Id";
        const nameProperty = "Materials";
        const localTextPrefix = "MaterialsDetails.MaterialsDetails";
        const lookupKey = "MaterialsDetails.MaterialsDetails";
        function getLookup(): Q.Lookup<MaterialsDetailsRow>;
        const deletePermission = "Master:MaterialsDetails";
        const insertPermission = "Master:MaterialsDetails";
        const readPermission = "Master:MaterialsDetails";
        const updatePermission = "Master:MaterialsDetails";
        const enum Fields {
            Id = "Id",
            Materials = "Materials",
            Units = "Units"
        }
    }
}
declare namespace SerExtraCore.MaterialsDetails {
    namespace MaterialsDetailsService {
        const baseUrl = "MaterialsDetails/MaterialsDetails";
        function Create(request: Serenity.SaveRequest<MaterialsDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<MaterialsDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaterialsDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<MaterialsDetailsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaterialsDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<MaterialsDetailsRow>>;
        const enum Methods {
            Create = "MaterialsDetails/MaterialsDetails/Create",
            Update = "MaterialsDetails/MaterialsDetails/Update",
            Delete = "MaterialsDetails/MaterialsDetails/Delete",
            Retrieve = "MaterialsDetails/MaterialsDetails/Retrieve",
            List = "MaterialsDetails/MaterialsDetails/List"
        }
    }
}
declare namespace SerExtraCore.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static readonly formKey = "Membership.ChangePassword";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SerExtraCore.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static readonly formKey = "Membership.ForgotPassword";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace SerExtraCore.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static readonly formKey = "Membership.Login";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace SerExtraCore.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static readonly formKey = "Membership.ResetPassword";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SerExtraCore.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static readonly formKey = "Membership.SignUp";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace SerExtraCore.PDCPayments {
    class PdcPaymentDetailsColumns {
        static readonly columnsKey = "PDCPayments.PdcPaymentDetails";
    }
}
declare namespace SerExtraCore.PDCPayments {
    interface PdcPaymentDetailsForm {
        Date: Serenity.DateEditor;
        ChequeNo: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        ChequeType: Serenity.EnumEditor;
        ChequeStatus: Serenity.EnumEditor;
        StatusDate: Serenity.DateEditor;
        PaymentType: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
    }
    class PdcPaymentDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = "PDCPayments.PdcPaymentDetails";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.PDCPayments {
    interface PdcPaymentDetailsRow {
        Id?: number;
        PdcPaymentsId?: number;
        Date?: string;
        ChequeNo?: string;
        Amount?: number;
        Receipts?: Accounts.ReceiptRow[];
        Payment?: Accounts.PaymentRow[];
        PaymentType?: AccountTypes;
        AccountId?: number;
        ChequeStatus?: ChequeStatus;
        StatusDate?: string;
        ChequeType?: ChequeType;
        SuppliersPaymentId?: number;
        InvoiceCollectionId?: number;
        ConsignmentAdvanceId?: number;
        PurchaseId?: number;
        MoneyInOutId?: number;
        AccountAccountName?: string;
        PdcPaymentsPdcNumber?: string;
        PdcPaymentsTrxDate?: string;
        PdcPaymentsCompany?: string;
        PdcPaymentsStartDate?: string;
        PdcPaymentsInstallments?: number;
        PdcPaymentsEndDate?: string;
        PdcPaymentsInstallmentAmount?: number;
        PdcPaymentsNotes?: string;
    }
    namespace PdcPaymentDetailsRow {
        const idProperty = "Id";
        const nameProperty = "ChequeNo";
        const localTextPrefix = "PDCPayments.PdcPaymentDetails";
        const deletePermission = "PDCPayments:PdcPayments";
        const insertPermission = "PDCPayments:PdcPayments";
        const readPermission = "PDCPayments:PdcPayments";
        const updatePermission = "PDCPayments:PdcPayments";
        const enum Fields {
            Id = "Id",
            PdcPaymentsId = "PdcPaymentsId",
            Date = "Date",
            ChequeNo = "ChequeNo",
            Amount = "Amount",
            Receipts = "Receipts",
            Payment = "Payment",
            PaymentType = "PaymentType",
            AccountId = "AccountId",
            ChequeStatus = "ChequeStatus",
            StatusDate = "StatusDate",
            ChequeType = "ChequeType",
            SuppliersPaymentId = "SuppliersPaymentId",
            InvoiceCollectionId = "InvoiceCollectionId",
            ConsignmentAdvanceId = "ConsignmentAdvanceId",
            PurchaseId = "PurchaseId",
            MoneyInOutId = "MoneyInOutId",
            AccountAccountName = "AccountAccountName",
            PdcPaymentsPdcNumber = "PdcPaymentsPdcNumber",
            PdcPaymentsTrxDate = "PdcPaymentsTrxDate",
            PdcPaymentsCompany = "PdcPaymentsCompany",
            PdcPaymentsStartDate = "PdcPaymentsStartDate",
            PdcPaymentsInstallments = "PdcPaymentsInstallments",
            PdcPaymentsEndDate = "PdcPaymentsEndDate",
            PdcPaymentsInstallmentAmount = "PdcPaymentsInstallmentAmount",
            PdcPaymentsNotes = "PdcPaymentsNotes"
        }
    }
}
declare namespace SerExtraCore.PDCPayments {
    namespace PdcPaymentDetailsService {
        const baseUrl = "PDCPayments/PdcPaymentDetails";
        function Create(request: Serenity.SaveRequest<PdcPaymentDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<PdcPaymentDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PdcPaymentDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<PdcPaymentDetailsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PdcPaymentDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<PdcPaymentDetailsRow>>;
        const enum Methods {
            Create = "PDCPayments/PdcPaymentDetails/Create",
            Update = "PDCPayments/PdcPaymentDetails/Update",
            Delete = "PDCPayments/PdcPaymentDetails/Delete",
            Retrieve = "PDCPayments/PdcPaymentDetails/Retrieve",
            List = "PDCPayments/PdcPaymentDetails/List"
        }
    }
}
declare namespace SerExtraCore.PDCPayments {
    class PdcPaymentsColumns {
        static readonly columnsKey = "PDCPayments.PdcPayments";
    }
}
declare namespace SerExtraCore.PDCPayments {
    interface PdcPaymentsForm {
        PdcNumber: Serenity.StringEditor;
        TrxDate: Serenity.DateEditor;
        Company: Serenity.StringEditor;
        ChequeType: Serenity.EnumEditor;
        StartDate: Serenity.DateEditor;
        Installments: Serenity.IntegerEditor;
        EndDate: Serenity.DateEditor;
        InstallmentAmount: Serenity.DecimalEditor;
        SupplierId: Serenity.LookupEditor;
        PdcPaymentDetails: PdcPaymentDetailsEditor;
        Notes: Serenity.TextAreaEditor;
    }
    class PdcPaymentsForm extends Serenity.PrefixedContext {
        static readonly formKey = "PDCPayments.PdcPayments";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.PDCPayments {
    interface PdcPaymentsRow {
        Id?: number;
        PdcNumber?: string;
        TrxDate?: string;
        Company?: string;
        StartDate?: string;
        Installments?: number;
        EndDate?: string;
        InstallmentAmount?: number;
        Notes?: string;
        ChequeType?: ChequeType;
        Slno?: number;
        PdcPaymentDetails?: PdcPaymentDetailsRow[];
        SupplierId?: number;
        SupplierSupplierName?: string;
    }
    namespace PdcPaymentsRow {
        const idProperty = "Id";
        const nameProperty = "PdcNumber";
        const localTextPrefix = "PDCPayments.PdcPayments";
        const deletePermission = "PDCPayments:PdcPayments";
        const insertPermission = "PDCPayments:PdcPayments";
        const readPermission = "PDCPayments:PdcPayments";
        const updatePermission = "PDCPayments:PdcPayments";
        const enum Fields {
            Id = "Id",
            PdcNumber = "PdcNumber",
            TrxDate = "TrxDate",
            Company = "Company",
            StartDate = "StartDate",
            Installments = "Installments",
            EndDate = "EndDate",
            InstallmentAmount = "InstallmentAmount",
            Notes = "Notes",
            ChequeType = "ChequeType",
            Slno = "Slno",
            PdcPaymentDetails = "PdcPaymentDetails",
            SupplierId = "SupplierId",
            SupplierSupplierName = "SupplierSupplierName"
        }
    }
}
declare namespace SerExtraCore.PDCPayments {
    namespace PdcPaymentsService {
        const baseUrl = "PDCPayments/PdcPayments";
        function Create(request: Serenity.SaveRequest<PdcPaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<PdcPaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PdcPaymentsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<PdcPaymentsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PdcPaymentsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<PdcPaymentsRow>>;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;
        function GetDateList(request: Web.Modules.MonthDifferenceRequest, onSuccess?: (response: PdcPaymentDetailsRow[]) => void, opt?: Q.ServiceOptions<any>): PromiseLike<PdcPaymentDetailsRow[]>;
        function GetMonthDifference(request: Web.Modules.MonthDifferenceRequest, onSuccess?: (response: Web.Modules.MonthDifferenceResponce) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.MonthDifferenceResponce>;
        function GetMonthTodate(request: Web.Modules.MonthDifferenceRequest, onSuccess?: (response: Web.Modules.MonthDifferenceRequest) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Web.Modules.MonthDifferenceRequest>;
        const enum Methods {
            Create = "PDCPayments/PdcPayments/Create",
            Update = "PDCPayments/PdcPayments/Update",
            Delete = "PDCPayments/PdcPayments/Delete",
            Retrieve = "PDCPayments/PdcPayments/Retrieve",
            List = "PDCPayments/PdcPayments/List",
            GetNextNumber = "PDCPayments/PdcPayments/GetNextNumber",
            GetDateList = "PDCPayments/PdcPayments/GetDateList",
            GetMonthDifference = "PDCPayments/PdcPayments/GetMonthDifference",
            GetMonthTodate = "PDCPayments/PdcPayments/GetMonthTodate"
        }
    }
}
declare namespace SerExtraCore {
    enum ParameterDataTypes {
        Value1 = 1,
        Value2 = 2,
        Value3 = 3,
        Value4 = 4,
        Value5 = 5,
        Value6 = 6
    }
}
declare namespace SerExtraCore {
    enum ParameterEditorTypes {
        Value1 = 1,
        Value2 = 2,
        Value3 = 3,
        Value5 = 4,
        Value4 = 5
    }
}
declare namespace SerExtraCore {
    enum PaymentStatus {
        Value1 = 1,
        Value2 = 2
    }
}
declare namespace SerExtraCore {
    enum PaymentType {
        Value1 = 1,
        Value2 = 2
    }
}
declare namespace SerExtraCore.PumpDetails {
    class PumpDetailsColumns {
        static readonly columnsKey = "PumpDetails.PumpDetails";
    }
}
declare namespace SerExtraCore.PumpDetails {
    interface PumpDetailsForm {
        PumpName: Serenity.StringEditor;
        PumpPlace: Serenity.StringEditor;
        Address: Serenity.StringEditor;
    }
    class PumpDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = "PumpDetails.PumpDetails";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.PumpDetails {
    interface PumpDetailsRow {
        Id?: number;
        PumpName?: string;
        PumpPlace?: string;
        Address?: string;
    }
    namespace PumpDetailsRow {
        const idProperty = "Id";
        const nameProperty = "PumpName";
        const localTextPrefix = "PumpDetails.PumpDetails";
        const lookupKey = "PumpDetails.PumpDetails";
        function getLookup(): Q.Lookup<PumpDetailsRow>;
        const deletePermission = "Master:PumpDetails";
        const insertPermission = "Master:PumpDetails";
        const readPermission = "Master:PumpDetails";
        const updatePermission = "Master:PumpDetails";
        const enum Fields {
            Id = "Id",
            PumpName = "PumpName",
            PumpPlace = "PumpPlace",
            Address = "Address"
        }
    }
}
declare namespace SerExtraCore.PumpDetails {
    namespace PumpDetailsService {
        const baseUrl = "PumpDetails/PumpDetails";
        function Create(request: Serenity.SaveRequest<PumpDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<PumpDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PumpDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<PumpDetailsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PumpDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<PumpDetailsRow>>;
        const enum Methods {
            Create = "PumpDetails/PumpDetails/Create",
            Update = "PumpDetails/PumpDetails/Update",
            Delete = "PumpDetails/PumpDetails/Delete",
            Retrieve = "PumpDetails/PumpDetails/Retrieve",
            List = "PumpDetails/PumpDetails/List"
        }
    }
}
declare namespace SerExtraCore {
    enum PymentTypes {
        Cash = 1,
        Bank = 2,
        Cheque = 3
    }
}
declare namespace SerExtraCore {
    enum QuotationTypes {
        Value1 = 1,
        Value2 = 2,
        Value3 = 3
    }
}
declare namespace SerExtraCore.Reports {
    class ReportDataSetsColumns {
        static readonly columnsKey = "Reports.ReportDataSets";
    }
}
declare namespace SerExtraCore.Reports {
    interface ReportDataSetsForm {
        DataSetName: Serenity.StringEditor;
        SqlQuery: Serenity.TextAreaEditor;
    }
    class ReportDataSetsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Reports.ReportDataSets";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Reports {
    interface ReportDataSetsRow {
        Id?: number;
        ReportDesignId?: number;
        SqlQuery?: string;
        DataSetName?: string;
        ReportDesignName?: string;
        ReportDesignDesign?: string;
    }
    namespace ReportDataSetsRow {
        const idProperty = "Id";
        const nameProperty = "SqlQuery";
        const localTextPrefix = "Reports.ReportDataSets";
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            ReportDesignId = "ReportDesignId",
            SqlQuery = "SqlQuery",
            DataSetName = "DataSetName",
            ReportDesignName = "ReportDesignName",
            ReportDesignDesign = "ReportDesignDesign"
        }
    }
}
declare namespace SerExtraCore.Reports {
    namespace ReportDataSetsService {
        const baseUrl = "Reports/ReportDataSets";
        function Create(request: Serenity.SaveRequest<ReportDataSetsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<ReportDataSetsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReportDataSetsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ReportDataSetsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReportDataSetsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ReportDataSetsRow>>;
        const enum Methods {
            Create = "Reports/ReportDataSets/Create",
            Update = "Reports/ReportDataSets/Update",
            Delete = "Reports/ReportDataSets/Delete",
            Retrieve = "Reports/ReportDataSets/Retrieve",
            List = "Reports/ReportDataSets/List"
        }
    }
}
declare namespace SerExtraCore.Reports {
    class ReportDesignsColumns {
        static readonly columnsKey = "Reports.ReportDesigns";
    }
}
declare namespace SerExtraCore.Reports {
    interface ReportDesignsForm {
        Name: Serenity.StringEditor;
        Category: Serenity.StringEditor;
        PermissionKey: Serenity.StringEditor;
        Design: Serenity.TextAreaEditor;
        ReportParameters: ReportParametersEditor;
        ReportDataSets: ReportDataSetsEditor;
    }
    class ReportDesignsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Reports.ReportDesigns";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Reports {
    interface ReportDesignsRow {
        Id?: number;
        Name?: string;
        Design?: string;
        Category?: string;
        PermissionKey?: string;
        ReportType?: number;
        ReportDataSets?: ReportDataSetsRow[];
        ReportParameters?: ReportParametersRow[];
    }
    namespace ReportDesignsRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Reports.ReportDesigns";
        const lookupKey = "Reports.ReportDesigns";
        function getLookup(): Q.Lookup<ReportDesignsRow>;
        const deletePermission = "Administration:ReportDesigns";
        const insertPermission = "Administration:ReportDesigns";
        const readPermission = "Administration:ReportDesigns";
        const updatePermission = "Administration:ReportDesigns";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Design = "Design",
            Category = "Category",
            PermissionKey = "PermissionKey",
            ReportType = "ReportType",
            ReportDataSets = "ReportDataSets",
            ReportParameters = "ReportParameters"
        }
    }
}
declare namespace SerExtraCore.Reports {
    namespace ReportDesignsService {
        const baseUrl = "Reports/ReportDesigns";
        function Create(request: Serenity.SaveRequest<ReportDesignsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<ReportDesignsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReportDesignsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ReportDesignsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReportDesignsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ReportDesignsRow>>;
        const enum Methods {
            Create = "Reports/ReportDesigns/Create",
            Update = "Reports/ReportDesigns/Update",
            Delete = "Reports/ReportDesigns/Delete",
            Retrieve = "Reports/ReportDesigns/Retrieve",
            List = "Reports/ReportDesigns/List"
        }
    }
}
declare namespace SerExtraCore.Reports {
    class ReportParametersColumns {
        static readonly columnsKey = "Reports.ReportParameters";
    }
}
declare namespace SerExtraCore.Reports {
    interface ReportParametersForm {
        ParameterName: Serenity.StringEditor;
        DataType: Serenity.EnumEditor;
        EditorType: Serenity.EnumEditor;
        LookupType: Serenity.EnumEditor;
        LookupName: Serenity.StringEditor;
        CustomLookupId: Serenity.LookupEditor;
        DefaultValue: Serenity.StringEditor;
        IsRequired: Serenity.BooleanEditor;
    }
    class ReportParametersForm extends Serenity.PrefixedContext {
        static readonly formKey = "Reports.ReportParameters";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Reports {
    interface ReportParametersRow {
        Id?: number;
        ReportDesignId?: number;
        ParameterName?: string;
        DataType?: ParameterDataTypes;
        EditorType?: ParameterEditorTypes;
        LookupName?: string;
        DefaultValue?: string;
        IsRequired?: boolean;
        LookupType?: LookupType;
        CustomLookupId?: number;
        ReportDesignName?: string;
        ReportDesignDesign?: string;
    }
    namespace ReportParametersRow {
        const idProperty = "Id";
        const nameProperty = "ParameterName";
        const localTextPrefix = "Reports.ReportParameters";
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            Id = "Id",
            ReportDesignId = "ReportDesignId",
            ParameterName = "ParameterName",
            DataType = "DataType",
            EditorType = "EditorType",
            LookupName = "LookupName",
            DefaultValue = "DefaultValue",
            IsRequired = "IsRequired",
            LookupType = "LookupType",
            CustomLookupId = "CustomLookupId",
            ReportDesignName = "ReportDesignName",
            ReportDesignDesign = "ReportDesignDesign"
        }
    }
}
declare namespace SerExtraCore.Reports {
    namespace ReportParametersService {
        const baseUrl = "Reports/ReportParameters";
        function Create(request: Serenity.SaveRequest<ReportParametersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<ReportParametersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReportParametersRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ReportParametersRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReportParametersRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ReportParametersRow>>;
        const enum Methods {
            Create = "Reports/ReportParameters/Create",
            Update = "Reports/ReportParameters/Update",
            Delete = "Reports/ReportParameters/Delete",
            Retrieve = "Reports/ReportParameters/Retrieve",
            List = "Reports/ReportParameters/List"
        }
    }
}
declare namespace SerExtraCore {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        ReportHeader?: string;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace SerExtraCore.ServiceAmount {
    class ServiceAmountColumns {
        static readonly columnsKey = "ServiceAmount.ServiceAmount";
    }
}
declare namespace SerExtraCore.ServiceAmount {
    interface ServiceAmountForm {
        ServiceId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        Photo: Serenity.ImageUploadEditor;
    }
    class ServiceAmountForm extends Serenity.PrefixedContext {
        static readonly formKey = "ServiceAmount.ServiceAmount";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.ServiceAmount {
    interface ServiceAmountRow {
        Id?: number;
        ServiceId?: number;
        TsId?: number;
        Amount?: number;
        ServiceServiceName?: string;
        TsTsNo?: string;
        TsVehicleId?: number;
        TsAdvance?: number;
        TsStartKm?: number;
        TsEndKm?: number;
        TsTotalKm?: number;
        TsTotalLiter?: number;
        TsMileage?: number;
        TsStartdate?: string;
        TsEnddate?: string;
        TsTotaldays?: number;
        TsRto?: number;
        TsPc?: number;
        TsTotalDriverCommission?: number;
        TsTotalCommison?: number;
        TsTotalLoadingExpense?: number;
        TsTotalUnloadExpense?: number;
        TsTotalOtherExpense?: number;
        TsTotalFright?: number;
        TsProfit?: number;
        Photo?: string;
    }
    namespace ServiceAmountRow {
        const idProperty = "Id";
        const localTextPrefix = "ServiceAmount.ServiceAmount";
        const lookupKey = "ServiceAmount.ServiceAmount";
        function getLookup(): Q.Lookup<ServiceAmountRow>;
        const deletePermission = "Master:ServiceAmount";
        const insertPermission = "Master:ServiceAmount";
        const readPermission = "Master:ServiceAmount";
        const updatePermission = "Master:ServiceAmount";
        const enum Fields {
            Id = "Id",
            ServiceId = "ServiceId",
            TsId = "TsId",
            Amount = "Amount",
            ServiceServiceName = "ServiceServiceName",
            TsTsNo = "TsTsNo",
            TsVehicleId = "TsVehicleId",
            TsAdvance = "TsAdvance",
            TsStartKm = "TsStartKm",
            TsEndKm = "TsEndKm",
            TsTotalKm = "TsTotalKm",
            TsTotalLiter = "TsTotalLiter",
            TsMileage = "TsMileage",
            TsStartdate = "TsStartdate",
            TsEnddate = "TsEnddate",
            TsTotaldays = "TsTotaldays",
            TsRto = "TsRto",
            TsPc = "TsPc",
            TsTotalDriverCommission = "TsTotalDriverCommission",
            TsTotalCommison = "TsTotalCommison",
            TsTotalLoadingExpense = "TsTotalLoadingExpense",
            TsTotalUnloadExpense = "TsTotalUnloadExpense",
            TsTotalOtherExpense = "TsTotalOtherExpense",
            TsTotalFright = "TsTotalFright",
            TsProfit = "TsProfit",
            Photo = "Photo"
        }
    }
}
declare namespace SerExtraCore.ServiceAmount {
    namespace ServiceAmountService {
        const baseUrl = "ServiceAmount/ServiceAmount";
        function Create(request: Serenity.SaveRequest<ServiceAmountRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<ServiceAmountRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ServiceAmountRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ServiceAmountRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ServiceAmountRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ServiceAmountRow>>;
        const enum Methods {
            Create = "ServiceAmount/ServiceAmount/Create",
            Update = "ServiceAmount/ServiceAmount/Update",
            Delete = "ServiceAmount/ServiceAmount/Delete",
            Retrieve = "ServiceAmount/ServiceAmount/Retrieve",
            List = "ServiceAmount/ServiceAmount/List"
        }
    }
}
declare namespace SerExtraCore.Services {
    class ServicesColumns {
        static readonly columnsKey = "Services.Services";
    }
}
declare namespace SerExtraCore.Services {
    interface ServicesForm {
        ServiceName: Serenity.StringEditor;
    }
    class ServicesForm extends Serenity.PrefixedContext {
        static readonly formKey = "Services.Services";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Services {
    interface ServicesRow {
        Id?: number;
        ServiceName?: string;
    }
    namespace ServicesRow {
        const idProperty = "Id";
        const nameProperty = "ServiceName";
        const localTextPrefix = "Services.Services";
        const lookupKey = "Services.Services";
        function getLookup(): Q.Lookup<ServicesRow>;
        const deletePermission = "Master:Services";
        const insertPermission = "Master:Services";
        const readPermission = "Master:Services";
        const updatePermission = "Master:Services";
        const enum Fields {
            Id = "Id",
            ServiceName = "ServiceName"
        }
    }
}
declare namespace SerExtraCore.Services {
    namespace ServicesService {
        const baseUrl = "Services/Services";
        function Create(request: Serenity.SaveRequest<ServicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<ServicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ServicesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ServicesRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ServicesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ServicesRow>>;
        const enum Methods {
            Create = "Services/Services/Create",
            Update = "Services/Services/Update",
            Delete = "Services/Services/Delete",
            Retrieve = "Services/Services/Retrieve",
            List = "Services/Services/List"
        }
    }
}
declare namespace SerExtraCore.SettlementDetails {
    class SettlementDetailsColumns {
        static readonly columnsKey = "SettlementDetails.SettlementDetails";
    }
}
declare namespace SerExtraCore.SettlementDetails {
    interface SettlementDetailsForm {
        TsNo: Serenity.LookupEditor;
        MoneyInOutTsNo: Serenity.IntegerEditor;
        TripAdvance: Serenity.IntegerEditor;
        TripBalance: Serenity.IntegerEditor;
        TSNumber: Serenity.StringEditor;
        TollTag: Serenity.IntegerEditor;
        FualAmount: Serenity.DecimalEditor;
        Advance: Serenity.DecimalEditor;
        TripBalancee: Serenity.DecimalEditor;
        toll: Serenity.DecimalEditor;
        extraexpense: Extr.ExtrEditor;
        Crossing: Crossing.CrossingEditor;
    }
    class SettlementDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = "SettlementDetails.SettlementDetails";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.SettlementDetails {
    interface SettlementDetailsRow {
        Id?: number;
        TsNo?: number;
        MoneyInOutTsNo?: number;
        TripAdvance?: number;
        TripBalance?: number;
        TollTag?: number;
        TsNo1?: string;
        TsNoVehicleId?: number;
        TsNoAdvance?: number;
        TsNoStartKm?: number;
        TsNoEndKm?: number;
        TsNoTotalKm?: number;
        TsNoTotalLiter?: number;
        TsNoMileage?: number;
        TsNoStartdate?: string;
        TsNoEnddate?: string;
        TsNoTotaldays?: number;
        TsNoRto?: number;
        TsNoPc?: number;
        TsNoTotalDriverCommission?: number;
        TsNoTotalCommison?: number;
        TsNoTotalLoadingExpense?: number;
        TsNoTotalUnloadExpense?: number;
        TsNoTotalOtherExpense?: number;
        TsNoTotalFright?: number;
        TsNoProfit?: number;
        TsNoTotalFuelAmount?: number;
        TsNoDrivertwoBata?: number;
        MoneyInOutTsNoVType?: number;
        MoneyInOutTsNoTrxDate?: string;
        MoneyInOutTsNoVNo?: number;
        MoneyInOutTsNoCustomerId?: number;
        MoneyInOutTsNoEmployeeId?: number;
        MoneyInOutTsNoSupplierId?: number;
        MoneyInOutTsNoVehicleId?: number;
        MoneyInOutTsNoAmount?: number;
        MoneyInOutTsNoTaxPer?: number;
        MoneyInOutTsNoTaxAmount?: number;
        MoneyInOutTsNoTotalAmount?: number;
        MoneyInOutTsNoAccountHeadId?: number;
        MoneyInOutTsNoPaymentMethod?: number;
        MoneyInOutTsNoAccountId?: number;
        MoneyInOutTsNoRemarks?: string;
        MoneyInOutTsNoConsignmentId?: number;
        MoneyInOutTsNoTsId?: number;
        TripAdvanceTsNo?: string;
        TripAdvanceVehicleId?: number;
        TripAdvanceAdvance?: number;
        TripAdvanceStartKm?: number;
        TripAdvanceEndKm?: number;
        TripAdvanceTotalKm?: number;
        TripAdvanceTotalLiter?: number;
        TripAdvanceMileage?: number;
        TripAdvanceStartdate?: string;
        TripAdvanceEnddate?: string;
        TripAdvanceTotaldays?: number;
        TripAdvanceRto?: number;
        TripAdvancePc?: number;
        TripAdvanceTotalDriverCommission?: number;
        TripAdvanceTotalCommison?: number;
        TripAdvanceTotalLoadingExpense?: number;
        TripAdvanceTotalUnloadExpense?: number;
        TripAdvanceTotalOtherExpense?: number;
        TripAdvanceTotalFright?: number;
        TripAdvanceProfit?: number;
        TripAdvanceTotalFuelAmount?: number;
        TripAdvanceDrivertwoBata?: number;
        TripBalanceTsNo?: string;
        TripBalanceVehicleId?: number;
        TripBalanceAdvance?: number;
        TripBalanceStartKm?: number;
        TripBalanceEndKm?: number;
        TripBalanceTotalKm?: number;
        TripBalanceTotalLiter?: number;
        TripBalanceMileage?: number;
        TripBalanceStartdate?: string;
        TripBalanceEnddate?: string;
        TripBalanceTotaldays?: number;
        TripBalanceRto?: number;
        TripBalancePc?: number;
        TripBalanceTotalDriverCommission?: number;
        TripBalanceTotalCommison?: number;
        TripBalanceTotalLoadingExpense?: number;
        TripBalanceTotalUnloadExpense?: number;
        TripBalanceTotalOtherExpense?: number;
        TripBalanceTotalFright?: number;
        TripBalanceProfit?: number;
        TripBalanceTotalFuelAmount?: number;
        TripBalanceDrivertwoBata?: number;
        TollTagTsNo?: string;
        TollTagVehicleId?: number;
        TollTagAdvance?: number;
        TollTagStartKm?: number;
        TollTagEndKm?: number;
        TollTagTotalKm?: number;
        TollTagTotalLiter?: number;
        TollTagMileage?: number;
        TollTagStartdate?: string;
        TollTagEnddate?: string;
        TollTagTotaldays?: number;
        TollTagRto?: number;
        TollTagPc?: number;
        TollTagTotalDriverCommission?: number;
        TollTagTotalCommison?: number;
        TollTagTotalLoadingExpense?: number;
        TollTagTotalUnloadExpense?: number;
        TollTagTotalOtherExpense?: number;
        TollTagTotalFright?: number;
        TollTagProfit?: number;
        TollTagTotalFuelAmount?: number;
        TollTagDrivertwoBata?: number;
        TSNumber?: string;
        TripBalancee?: number;
        Advance?: number;
        toll?: number;
        FualAmount?: number;
        extraexpense?: Extr.ExtrRow[];
        Crossing?: Crossing.CrossingRow[];
    }
    namespace SettlementDetailsRow {
        const idProperty = "Id";
        const localTextPrefix = "SettlementDetails.SettlementDetails";
        const deletePermission = "Master:SettlementDetails";
        const insertPermission = "Master:SettlementDetails";
        const readPermission = "Master:SettlementDetails";
        const updatePermission = "Master:SettlementDetails";
        const enum Fields {
            Id = "Id",
            TsNo = "TsNo",
            MoneyInOutTsNo = "MoneyInOutTsNo",
            TripAdvance = "TripAdvance",
            TripBalance = "TripBalance",
            TollTag = "TollTag",
            TsNo1 = "TsNo1",
            TsNoVehicleId = "TsNoVehicleId",
            TsNoAdvance = "TsNoAdvance",
            TsNoStartKm = "TsNoStartKm",
            TsNoEndKm = "TsNoEndKm",
            TsNoTotalKm = "TsNoTotalKm",
            TsNoTotalLiter = "TsNoTotalLiter",
            TsNoMileage = "TsNoMileage",
            TsNoStartdate = "TsNoStartdate",
            TsNoEnddate = "TsNoEnddate",
            TsNoTotaldays = "TsNoTotaldays",
            TsNoRto = "TsNoRto",
            TsNoPc = "TsNoPc",
            TsNoTotalDriverCommission = "TsNoTotalDriverCommission",
            TsNoTotalCommison = "TsNoTotalCommison",
            TsNoTotalLoadingExpense = "TsNoTotalLoadingExpense",
            TsNoTotalUnloadExpense = "TsNoTotalUnloadExpense",
            TsNoTotalOtherExpense = "TsNoTotalOtherExpense",
            TsNoTotalFright = "TsNoTotalFright",
            TsNoProfit = "TsNoProfit",
            TsNoTotalFuelAmount = "TsNoTotalFuelAmount",
            TsNoDrivertwoBata = "TsNoDrivertwoBata",
            MoneyInOutTsNoVType = "MoneyInOutTsNoVType",
            MoneyInOutTsNoTrxDate = "MoneyInOutTsNoTrxDate",
            MoneyInOutTsNoVNo = "MoneyInOutTsNoVNo",
            MoneyInOutTsNoCustomerId = "MoneyInOutTsNoCustomerId",
            MoneyInOutTsNoEmployeeId = "MoneyInOutTsNoEmployeeId",
            MoneyInOutTsNoSupplierId = "MoneyInOutTsNoSupplierId",
            MoneyInOutTsNoVehicleId = "MoneyInOutTsNoVehicleId",
            MoneyInOutTsNoAmount = "MoneyInOutTsNoAmount",
            MoneyInOutTsNoTaxPer = "MoneyInOutTsNoTaxPer",
            MoneyInOutTsNoTaxAmount = "MoneyInOutTsNoTaxAmount",
            MoneyInOutTsNoTotalAmount = "MoneyInOutTsNoTotalAmount",
            MoneyInOutTsNoAccountHeadId = "MoneyInOutTsNoAccountHeadId",
            MoneyInOutTsNoPaymentMethod = "MoneyInOutTsNoPaymentMethod",
            MoneyInOutTsNoAccountId = "MoneyInOutTsNoAccountId",
            MoneyInOutTsNoRemarks = "MoneyInOutTsNoRemarks",
            MoneyInOutTsNoConsignmentId = "MoneyInOutTsNoConsignmentId",
            MoneyInOutTsNoTsId = "MoneyInOutTsNoTsId",
            TripAdvanceTsNo = "TripAdvanceTsNo",
            TripAdvanceVehicleId = "TripAdvanceVehicleId",
            TripAdvanceAdvance = "TripAdvanceAdvance",
            TripAdvanceStartKm = "TripAdvanceStartKm",
            TripAdvanceEndKm = "TripAdvanceEndKm",
            TripAdvanceTotalKm = "TripAdvanceTotalKm",
            TripAdvanceTotalLiter = "TripAdvanceTotalLiter",
            TripAdvanceMileage = "TripAdvanceMileage",
            TripAdvanceStartdate = "TripAdvanceStartdate",
            TripAdvanceEnddate = "TripAdvanceEnddate",
            TripAdvanceTotaldays = "TripAdvanceTotaldays",
            TripAdvanceRto = "TripAdvanceRto",
            TripAdvancePc = "TripAdvancePc",
            TripAdvanceTotalDriverCommission = "TripAdvanceTotalDriverCommission",
            TripAdvanceTotalCommison = "TripAdvanceTotalCommison",
            TripAdvanceTotalLoadingExpense = "TripAdvanceTotalLoadingExpense",
            TripAdvanceTotalUnloadExpense = "TripAdvanceTotalUnloadExpense",
            TripAdvanceTotalOtherExpense = "TripAdvanceTotalOtherExpense",
            TripAdvanceTotalFright = "TripAdvanceTotalFright",
            TripAdvanceProfit = "TripAdvanceProfit",
            TripAdvanceTotalFuelAmount = "TripAdvanceTotalFuelAmount",
            TripAdvanceDrivertwoBata = "TripAdvanceDrivertwoBata",
            TripBalanceTsNo = "TripBalanceTsNo",
            TripBalanceVehicleId = "TripBalanceVehicleId",
            TripBalanceAdvance = "TripBalanceAdvance",
            TripBalanceStartKm = "TripBalanceStartKm",
            TripBalanceEndKm = "TripBalanceEndKm",
            TripBalanceTotalKm = "TripBalanceTotalKm",
            TripBalanceTotalLiter = "TripBalanceTotalLiter",
            TripBalanceMileage = "TripBalanceMileage",
            TripBalanceStartdate = "TripBalanceStartdate",
            TripBalanceEnddate = "TripBalanceEnddate",
            TripBalanceTotaldays = "TripBalanceTotaldays",
            TripBalanceRto = "TripBalanceRto",
            TripBalancePc = "TripBalancePc",
            TripBalanceTotalDriverCommission = "TripBalanceTotalDriverCommission",
            TripBalanceTotalCommison = "TripBalanceTotalCommison",
            TripBalanceTotalLoadingExpense = "TripBalanceTotalLoadingExpense",
            TripBalanceTotalUnloadExpense = "TripBalanceTotalUnloadExpense",
            TripBalanceTotalOtherExpense = "TripBalanceTotalOtherExpense",
            TripBalanceTotalFright = "TripBalanceTotalFright",
            TripBalanceProfit = "TripBalanceProfit",
            TripBalanceTotalFuelAmount = "TripBalanceTotalFuelAmount",
            TripBalanceDrivertwoBata = "TripBalanceDrivertwoBata",
            TollTagTsNo = "TollTagTsNo",
            TollTagVehicleId = "TollTagVehicleId",
            TollTagAdvance = "TollTagAdvance",
            TollTagStartKm = "TollTagStartKm",
            TollTagEndKm = "TollTagEndKm",
            TollTagTotalKm = "TollTagTotalKm",
            TollTagTotalLiter = "TollTagTotalLiter",
            TollTagMileage = "TollTagMileage",
            TollTagStartdate = "TollTagStartdate",
            TollTagEnddate = "TollTagEnddate",
            TollTagTotaldays = "TollTagTotaldays",
            TollTagRto = "TollTagRto",
            TollTagPc = "TollTagPc",
            TollTagTotalDriverCommission = "TollTagTotalDriverCommission",
            TollTagTotalCommison = "TollTagTotalCommison",
            TollTagTotalLoadingExpense = "TollTagTotalLoadingExpense",
            TollTagTotalUnloadExpense = "TollTagTotalUnloadExpense",
            TollTagTotalOtherExpense = "TollTagTotalOtherExpense",
            TollTagTotalFright = "TollTagTotalFright",
            TollTagProfit = "TollTagProfit",
            TollTagTotalFuelAmount = "TollTagTotalFuelAmount",
            TollTagDrivertwoBata = "TollTagDrivertwoBata",
            TSNumber = "TSNumber",
            TripBalancee = "TripBalancee",
            Advance = "Advance",
            toll = "toll",
            FualAmount = "FualAmount",
            extraexpense = "extraexpense",
            Crossing = "Crossing"
        }
    }
}
declare namespace SerExtraCore.SettlementDetails {
    namespace SettlementDetailsService {
        const baseUrl = "SettlementDetails/SettlementDetails";
        function Create(request: Serenity.SaveRequest<SettlementDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<SettlementDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SettlementDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<SettlementDetailsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SettlementDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<SettlementDetailsRow>>;
        const enum Methods {
            Create = "SettlementDetails/SettlementDetails/Create",
            Update = "SettlementDetails/SettlementDetails/Update",
            Delete = "SettlementDetails/SettlementDetails/Delete",
            Retrieve = "SettlementDetails/SettlementDetails/Retrieve",
            List = "SettlementDetails/SettlementDetails/List"
        }
    }
}
declare namespace SerExtraCore.States {
    class StatesColumns {
        static readonly columnsKey = "States.States";
    }
}
declare namespace SerExtraCore.States {
    interface StatesForm {
        Name: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
    }
    class StatesForm extends Serenity.PrefixedContext {
        static readonly formKey = "States.States";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.States {
    interface StatesRow {
        Id?: number;
        CountryId?: number;
        Name?: string;
        Code?: string;
        CountryCountryCode?: string;
        CountryCountryName?: string;
    }
    namespace StatesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "States.States";
        const lookupKey = "States.States";
        function getLookup(): Q.Lookup<StatesRow>;
        const deletePermission = "Master:States";
        const insertPermission = "Master:States";
        const readPermission = "Master:States";
        const updatePermission = "Master:States";
        const enum Fields {
            Id = "Id",
            CountryId = "CountryId",
            Name = "Name",
            Code = "Code",
            CountryCountryCode = "CountryCountryCode",
            CountryCountryName = "CountryCountryName"
        }
    }
}
declare namespace SerExtraCore.States {
    namespace StatesService {
        const baseUrl = "States/States";
        function Create(request: Serenity.SaveRequest<StatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<StatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StatesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<StatesRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StatesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<StatesRow>>;
        const enum Methods {
            Create = "States/States/Create",
            Update = "States/States/Update",
            Delete = "States/States/Delete",
            Retrieve = "States/States/Retrieve",
            List = "States/States/List"
        }
    }
}
declare namespace SerExtraCore {
    enum TaxPaidBy {
        Value1 = 1,
        Value2 = 2,
        Value3 = 3
    }
}
declare namespace SerExtraCore.Texts {
    namespace Db {
        namespace Accounts {
            namespace AccountHeads {
                const Code: string;
                const Description: string;
                const Id: string;
                const LedgerType: string;
                const ParentHeadCode: string;
                const ParentHeadDescription: string;
                const ParentHeadId: string;
                const ParentHeadLedgerType: string;
                const ParentHeadParentHeadId: string;
                const Slno: string;
            }
            namespace Accounts {
                const AccountHeadCode: string;
                const AccountHeadDescription: string;
                const AccountHeadId: string;
                const AccountHeadLedgerType: string;
                const AccountHeadParentHeadId: string;
                const AccountName: string;
                const AccountNo: string;
                const BankName: string;
                const BrachName: string;
                const Id: string;
                const Slno: string;
                const Type: string;
            }
            namespace BankReconciliation {
                const AccountId: string;
                const AccountName: string;
                const BankReconciliation: string;
                const Credit: string;
                const Debit: string;
                const Id: string;
                const Remarks: string;
                const TrxDate: string;
                const VNo: string;
            }
            namespace Contra {
                const Amount: string;
                const CreditAccountAccountHeadId: string;
                const CreditAccountAccountName: string;
                const CreditAccountAccountNo: string;
                const CreditAccountBankName: string;
                const CreditAccountBrachName: string;
                const CreditAccountHeadCode: string;
                const CreditAccountHeadDescription: string;
                const CreditAccountHeadId: string;
                const CreditAccountHeadLedgerType: string;
                const CreditAccountHeadParentHeadId: string;
                const CreditAccountId: string;
                const CreditAccountType: string;
                const CustomerAddress: string;
                const CustomerContactPerson: string;
                const CustomerCreationDate: string;
                const CustomerCustomerCode: string;
                const CustomerCustomerName: string;
                const CustomerDescription: string;
                const CustomerEmail: string;
                const CustomerId: string;
                const CustomerMobile: string;
                const CustomerPlace: string;
                const CustomerTelephone: string;
                const DebitAccountAccountHeadId: string;
                const DebitAccountAccountName: string;
                const DebitAccountAccountNo: string;
                const DebitAccountBankName: string;
                const DebitAccountBrachName: string;
                const DebitAccountHeadCode: string;
                const DebitAccountHeadDescription: string;
                const DebitAccountHeadId: string;
                const DebitAccountHeadLedgerType: string;
                const DebitAccountHeadParentHeadId: string;
                const DebitAccountId: string;
                const DebitAccountType: string;
                const EmployeeAddress: string;
                const EmployeeAllowance: string;
                const EmployeeBasicSalary: string;
                const EmployeeCountryId: string;
                const EmployeeDesignationId: string;
                const EmployeeEmployeeCode: string;
                const EmployeeEmployeeName: string;
                const EmployeeEmployeeStatus: string;
                const EmployeeEmployeeTypeId: string;
                const EmployeeId: string;
                const EmployeeMobileNumber: string;
                const EmployeePassportExpiryDate: string;
                const EmployeePassportNumber: string;
                const EmployeeResidentId: string;
                const EmployeeRidExpiryDate: string;
                const EntityType: string;
                const Id: string;
                const InvoiceCollectionAccountId: string;
                const InvoiceCollectionCollectionNumber: string;
                const InvoiceCollectionCustomerId: string;
                const InvoiceCollectionId: string;
                const InvoiceCollectionPaymentType: string;
                const InvoiceCollectionStatus: string;
                const InvoiceCollectionStatusUser: string;
                const InvoiceCollectionTotalAmount: string;
                const InvoiceCollectionTrxDate: string;
                const PaymentMethod: string;
                const Remarks: string;
                const Slno: string;
                const TrxDate: string;
                const VNo: string;
                const VType: string;
            }
            namespace JVAdjustments {
                const Amount: string;
                const BankReconciliation: string;
                const ConsignmentBilling: string;
                const ConsignmentClientJobNo: string;
                const ConsignmentConsigneeId: string;
                const ConsignmentDate: string;
                const ConsignmentDriver: string;
                const ConsignmentEndDate: string;
                const ConsignmentId: string;
                const ConsignmentJobNo: string;
                const ConsignmentPayment: string;
                const ConsignmentPaymentMode: string;
                const ConsignmentShipperId: string;
                const ConsignmentShippingAreaFrom: string;
                const ConsignmentShippingAreaTo: string;
                const ConsignmentStartDate: string;
                const ConsignmentStatus: string;
                const ConsignmentSupplierAmount: string;
                const ConsignmentSupplierId: string;
                const ConsignmentTotalAmount: string;
                const ConsignmentTotalNoOfPkgs: string;
                const ConsignmentTotalVolume: string;
                const ConsignmentTotalWeight: string;
                const ConsignmentType: string;
                const ConsignmentTypeOfPkg: string;
                const ConsignmentVehicleId: string;
                const ConsignmentVehicleNumber: string;
                const ConsignmentWayBillNo: string;
                const CreditAccountAccountHeadId: string;
                const CreditAccountAccountName: string;
                const CreditAccountAccountNo: string;
                const CreditAccountBankName: string;
                const CreditAccountBrachName: string;
                const CreditAccountHeadCode: string;
                const CreditAccountHeadDescription: string;
                const CreditAccountHeadId: string;
                const CreditAccountHeadLedgerType: string;
                const CreditAccountHeadParentHeadId: string;
                const CreditAccountId: string;
                const CreditAccountType: string;
                const CreditCustomerId: string;
                const CreditEmployeeId: string;
                const CreditSupplierId: string;
                const CreditVehicleId: string;
                const CustomerAddress: string;
                const CustomerContactPerson: string;
                const CustomerCreationDate: string;
                const CustomerCustomerCode: string;
                const CustomerCustomerName: string;
                const CustomerDescription: string;
                const CustomerEmail: string;
                const CustomerId: string;
                const CustomerMobile: string;
                const CustomerPlace: string;
                const CustomerTelephone: string;
                const DebitAccountAccountHeadId: string;
                const DebitAccountAccountName: string;
                const DebitAccountAccountNo: string;
                const DebitAccountBankName: string;
                const DebitAccountBrachName: string;
                const DebitAccountHeadCode: string;
                const DebitAccountHeadDescription: string;
                const DebitAccountHeadId: string;
                const DebitAccountHeadLedgerType: string;
                const DebitAccountHeadParentHeadId: string;
                const DebitAccountId: string;
                const DebitAccountType: string;
                const DebitSupplierId: string;
                const EmployeeAddress: string;
                const EmployeeAllowance: string;
                const EmployeeBasicSalary: string;
                const EmployeeCountryId: string;
                const EmployeeDesignationId: string;
                const EmployeeEmployeeCode: string;
                const EmployeeEmployeeName: string;
                const EmployeeEmployeeStatus: string;
                const EmployeeEmployeeTypeId: string;
                const EmployeeId: string;
                const EmployeeMobileNumber: string;
                const EmployeePassportExpiryDate: string;
                const EmployeePassportNumber: string;
                const EmployeeResidentId: string;
                const EmployeeRidExpiryDate: string;
                const EntityType: string;
                const Id: string;
                const InvoiceCollectionAccountId: string;
                const InvoiceCollectionCollectionNumber: string;
                const InvoiceCollectionCustomerId: string;
                const InvoiceCollectionId: string;
                const InvoiceCollectionPaymentType: string;
                const InvoiceCollectionStatus: string;
                const InvoiceCollectionStatusUser: string;
                const InvoiceCollectionTotalAmount: string;
                const InvoiceCollectionTrxDate: string;
                const OpeningCustomerId: string;
                const OpeningSupplierId: string;
                const PaymentMethod: string;
                const Remarks: string;
                const Slno: string;
                const SupplierAddress: string;
                const SupplierContactPerson: string;
                const SupplierCreationDate: string;
                const SupplierDescription: string;
                const SupplierEmail: string;
                const SupplierId: string;
                const SupplierMobile: string;
                const SupplierPaymentAccountId: string;
                const SupplierPaymentCode: string;
                const SupplierPaymentDate: string;
                const SupplierPaymentId: string;
                const SupplierPaymentPaymentType: string;
                const SupplierPaymentStatus: string;
                const SupplierPaymentStatusUser: string;
                const SupplierPaymentSupplierId: string;
                const SupplierPaymentTotalAmount: string;
                const SupplierPlace: string;
                const SupplierSupplierCode: string;
                const SupplierSupplierName: string;
                const SupplierTelephone: string;
                const TrxDate: string;
                const VNo: string;
                const VType: string;
                const VehicleDescription: string;
                const VehicleDriver: string;
                const VehicleExpiryDate: string;
                const VehicleId: string;
                const VehiclePdoApproved: string;
                const VehiclePrimeMover: string;
                const VehicleRegistraionNumber: string;
                const VehicleRegistrationDate: string;
                const VehicleSupplierId: string;
                const VehicleThrough: string;
                const VehicleTypeOfVehicle: string;
                const VehicleVehicleModel: string;
                const VehicleVehicleNumber: string;
            }
            namespace MoneyIn {
                const AccountAccountHeadId: string;
                const AccountAccountName: string;
                const AccountAccountNo: string;
                const AccountBankName: string;
                const AccountBrachName: string;
                const AccountHeadCode: string;
                const AccountHeadDescription: string;
                const AccountHeadId: string;
                const AccountHeadLedgerType: string;
                const AccountHeadParentHeadId: string;
                const AccountId: string;
                const AccountType: string;
                const Amount: string;
                const CustomerAddress: string;
                const CustomerContactPerson: string;
                const CustomerCreationDate: string;
                const CustomerCustomerCode: string;
                const CustomerCustomerName: string;
                const CustomerDescription: string;
                const CustomerDueDays: string;
                const CustomerEmail: string;
                const CustomerId: string;
                const CustomerMobile: string;
                const CustomerOpening: string;
                const CustomerOpeningDate: string;
                const CustomerPlace: string;
                const CustomerTaxRegNo: string;
                const CustomerTelephone: string;
                const EmployeeAddress: string;
                const EmployeeAllowance: string;
                const EmployeeBasicSalary: string;
                const EmployeeCountryId: string;
                const EmployeeDesignationId: string;
                const EmployeeEmployeeCode: string;
                const EmployeeEmployeeName: string;
                const EmployeeEmployeeStatus: string;
                const EmployeeEmployeeTypeId: string;
                const EmployeeId: string;
                const EmployeeMobileNumber: string;
                const EmployeePassportExpiryDate: string;
                const EmployeePassportNumber: string;
                const EmployeeResidentId: string;
                const EmployeeRidExpiryDate: string;
                const Id: string;
                const PaymentMethod: string;
                const PdcPaymentDetails: string;
                const Receipts: string;
                const Remarks: string;
                const SupplierAddress: string;
                const SupplierContactPerson: string;
                const SupplierCreationDate: string;
                const SupplierDescription: string;
                const SupplierEmail: string;
                const SupplierId: string;
                const SupplierMobile: string;
                const SupplierOpening: string;
                const SupplierOpeningDate: string;
                const SupplierPlace: string;
                const SupplierSupplierCode: string;
                const SupplierSupplierName: string;
                const SupplierTelephone: string;
                const TSNo: string;
                const TaxAmount: string;
                const TaxPer: string;
                const TotalAmount: string;
                const TrxDate: string;
                const TsId: string;
                const VNo: string;
                const VType: string;
                const VehicleDescription: string;
                const VehicleDriver: string;
                const VehicleExpiryDate: string;
                const VehicleId: string;
                const VehiclePdoApproved: string;
                const VehiclePrimeMover: string;
                const VehicleRegistraionNumber: string;
                const VehicleRegistrationDate: string;
                const VehicleSupplierId: string;
                const VehicleThrough: string;
                const VehicleTypeOfVehicle: string;
                const VehicleVehicleModel: string;
                const VehicleVehicleNumber: string;
            }
            namespace MoneyOut {
                const AccountAccountHeadId: string;
                const AccountAccountName: string;
                const AccountAccountNo: string;
                const AccountBankName: string;
                const AccountBrachName: string;
                const AccountHeadCode: string;
                const AccountHeadDescription: string;
                const AccountHeadId: string;
                const AccountHeadLedgerType: string;
                const AccountHeadParentHeadId: string;
                const AccountId: string;
                const AccountType: string;
                const Amount: string;
                const ConsignmentId: string;
                const ConsignmentJobNo: string;
                const CustomerAddress: string;
                const CustomerContactPerson: string;
                const CustomerCreationDate: string;
                const CustomerCustomerCode: string;
                const CustomerCustomerName: string;
                const CustomerDescription: string;
                const CustomerDueDays: string;
                const CustomerEmail: string;
                const CustomerId: string;
                const CustomerMobile: string;
                const CustomerOpening: string;
                const CustomerOpeningDate: string;
                const CustomerPlace: string;
                const CustomerTaxRegNo: string;
                const CustomerTelephone: string;
                const EmployeeAddress: string;
                const EmployeeAllowance: string;
                const EmployeeBasicSalary: string;
                const EmployeeCountryId: string;
                const EmployeeDesignationId: string;
                const EmployeeEmployeeCode: string;
                const EmployeeEmployeeName: string;
                const EmployeeEmployeeStatus: string;
                const EmployeeEmployeeTypeId: string;
                const EmployeeId: string;
                const EmployeeMobileNumber: string;
                const EmployeePassportExpiryDate: string;
                const EmployeePassportNumber: string;
                const EmployeeResidentId: string;
                const EmployeeRidExpiryDate: string;
                const FuelId: string;
                const Id: string;
                const PaymentMethod: string;
                const Payments: string;
                const PdcPaymentDetails: string;
                const Remarks: string;
                const SupplierAddress: string;
                const SupplierContactPerson: string;
                const SupplierCreationDate: string;
                const SupplierDescription: string;
                const SupplierEmail: string;
                const SupplierId: string;
                const SupplierMobile: string;
                const SupplierOpening: string;
                const SupplierOpeningDate: string;
                const SupplierPlace: string;
                const SupplierSupplierCode: string;
                const SupplierSupplierName: string;
                const SupplierTelephone: string;
                const TSNo: string;
                const TaxAmount: string;
                const TaxPer: string;
                const TotalAmount: string;
                const TrxDate: string;
                const TsId: string;
                const VNo: string;
                const VType: string;
                const VehicleDescription: string;
                const VehicleDriver: string;
                const VehicleExpiryDate: string;
                const VehicleId: string;
                const VehiclePdoApproved: string;
                const VehiclePrimeMover: string;
                const VehicleRegistraionNumber: string;
                const VehicleRegistrationDate: string;
                const VehicleSupplierId: string;
                const VehicleThrough: string;
                const VehicleTypeOfVehicle: string;
                const VehicleVehicleModel: string;
                const VehicleVehicleNumber: string;
            }
            namespace Payment {
                const Amount: string;
                const ConsignmentChargesId: string;
                const ConsignmentId: string;
                const ConsignmentJobNo: string;
                const ConsignmentVehicleDetailsId: string;
                const CreditAccountAccountHeadId: string;
                const CreditAccountAccountName: string;
                const CreditAccountAccountNo: string;
                const CreditAccountBankName: string;
                const CreditAccountBrachName: string;
                const CreditAccountHeadCode: string;
                const CreditAccountHeadDescription: string;
                const CreditAccountHeadId: string;
                const CreditAccountHeadLedgerType: string;
                const CreditAccountHeadParentHeadId: string;
                const CreditAccountId: string;
                const CreditAccountType: string;
                const CustomerAddress: string;
                const CustomerContactPerson: string;
                const CustomerCreationDate: string;
                const CustomerCustomerCode: string;
                const CustomerCustomerName: string;
                const CustomerDescription: string;
                const CustomerEmail: string;
                const CustomerId: string;
                const CustomerMobile: string;
                const CustomerPlace: string;
                const CustomerTelephone: string;
                const DebitAccountAccountHeadId: string;
                const DebitAccountAccountName: string;
                const DebitAccountAccountNo: string;
                const DebitAccountBankName: string;
                const DebitAccountBrachName: string;
                const DebitAccountHeadCode: string;
                const DebitAccountHeadDescription: string;
                const DebitAccountHeadId: string;
                const DebitAccountHeadLedgerType: string;
                const DebitAccountHeadParentHeadId: string;
                const DebitAccountId: string;
                const DebitAccountType: string;
                const EmployeeAddress: string;
                const EmployeeAllowance: string;
                const EmployeeBasicSalary: string;
                const EmployeeCountryId: string;
                const EmployeeDesignationId: string;
                const EmployeeEmployeeCode: string;
                const EmployeeEmployeeName: string;
                const EmployeeEmployeeStatus: string;
                const EmployeeEmployeeTypeId: string;
                const EmployeeId: string;
                const EmployeeMobileNumber: string;
                const EmployeePassportExpiryDate: string;
                const EmployeePassportNumber: string;
                const EmployeeResidentId: string;
                const EmployeeRidExpiryDate: string;
                const EntityType: string;
                const FuelId: string;
                const FuelTsId: string;
                const Id: string;
                const InvoiceCollectionAccountId: string;
                const InvoiceCollectionCollectionNumber: string;
                const InvoiceCollectionCustomerId: string;
                const InvoiceCollectionId: string;
                const InvoiceCollectionPaymentType: string;
                const InvoiceCollectionStatus: string;
                const InvoiceCollectionStatusUser: string;
                const InvoiceCollectionTotalAmount: string;
                const InvoiceCollectionTrxDate: string;
                const MoneyInOutId: string;
                const PDCPaymentDetailsId: string;
                const PaymentMethod: string;
                const PayrollPaymentId: string;
                const PurchaseId: string;
                const Remarks: string;
                const Slno: string;
                const SupplierId: string;
                const SupplierName: string;
                const SupplierPaymentId: string;
                const TSNo: string;
                const TrxDate: string;
                const VNo: string;
                const VType: string;
                const VehicleId: string;
                const VehicleNumber: string;
            }
            namespace Receipt {
                const Amount: string;
                const BankReconciliation: string;
                const ConsignmentAdvanceConsignmentId: string;
                const CreditAccountAccountHeadId: string;
                const CreditAccountAccountName: string;
                const CreditAccountAccountNo: string;
                const CreditAccountBankName: string;
                const CreditAccountBrachName: string;
                const CreditAccountHeadCode: string;
                const CreditAccountHeadDescription: string;
                const CreditAccountHeadId: string;
                const CreditAccountHeadLedgerType: string;
                const CreditAccountHeadParentHeadId: string;
                const CreditAccountId: string;
                const CreditAccountType: string;
                const CustomerAddress: string;
                const CustomerContactPerson: string;
                const CustomerCreationDate: string;
                const CustomerCustomerCode: string;
                const CustomerCustomerName: string;
                const CustomerDescription: string;
                const CustomerEmail: string;
                const CustomerId: string;
                const CustomerMobile: string;
                const CustomerPlace: string;
                const CustomerTelephone: string;
                const DebitAccountAccountHeadId: string;
                const DebitAccountAccountName: string;
                const DebitAccountAccountNo: string;
                const DebitAccountBankName: string;
                const DebitAccountBrachName: string;
                const DebitAccountHeadCode: string;
                const DebitAccountHeadDescription: string;
                const DebitAccountHeadId: string;
                const DebitAccountHeadLedgerType: string;
                const DebitAccountHeadParentHeadId: string;
                const DebitAccountId: string;
                const DebitAccountType: string;
                const DeliveryServiceId: string;
                const EmployeeAddress: string;
                const EmployeeAllowance: string;
                const EmployeeBasicSalary: string;
                const EmployeeCountryId: string;
                const EmployeeDesignationId: string;
                const EmployeeEmployeeCode: string;
                const EmployeeEmployeeName: string;
                const EmployeeEmployeeStatus: string;
                const EmployeeEmployeeTypeId: string;
                const EmployeeId: string;
                const EmployeeMobileNumber: string;
                const EmployeePassportExpiryDate: string;
                const EmployeePassportNumber: string;
                const EmployeeResidentId: string;
                const EmployeeRidExpiryDate: string;
                const EntityType: string;
                const FreightId: string;
                const Id: string;
                const InvoiceCollectionAccountId: string;
                const InvoiceCollectionCollectionNumber: string;
                const InvoiceCollectionCustomerId: string;
                const InvoiceCollectionId: string;
                const InvoiceCollectionPaymentType: string;
                const InvoiceCollectionStatus: string;
                const InvoiceCollectionStatusUser: string;
                const InvoiceCollectionTotalAmount: string;
                const InvoiceCollectionTrxDate: string;
                const InvoiceId: string;
                const MoneyInOutId: string;
                const PDCPaymentDetailsId: string;
                const PDCReceiptDetailsId: string;
                const PaymentMethod: string;
                const Remarks: string;
                const Slno: string;
                const TrxDate: string;
                const TsId: string;
                const VNo: string;
                const VType: string;
            }
        }
        namespace Administration {
            namespace Configuration {
                const AccountName: string;
                const AccountNumber: string;
                const BankName: string;
                const ChargesLedgerId: string;
                const Consignee: string;
                const CustomerOpeningLedgerId: string;
                const DefaultCurrency: string;
                const DriverAdvanceLedgerId: string;
                const IbanNo: string;
                const Id: string;
                const InvoiceApprovalHierarchyId: string;
                const InvoiceCollectionApprovalHierarchyId: string;
                const InvoiceCollectionLedgerCode: string;
                const InvoiceCollectionLedgerDescription: string;
                const InvoiceCollectionLedgerId: string;
                const InvoiceCollectionLedgerLedgerType: string;
                const InvoiceCollectionLedgerParentHeadId: string;
                const InvoiceLedgerId: string;
                const InvoiceRemarks: string;
                const KSATermsAndConditions: string;
                const OpeningLedgerId: string;
                const PDCDepositsLedger: string;
                const PDCWithdrawalsLedger: string;
                const PDOTermsAndConditions: string;
                const PurchaseLedgerId: string;
                const QuotationPrefix: string;
                const ReceivableLedgerId: string;
                const ReportHeader: string;
                const SalaryLedgerId: string;
                const Shipper: string;
                const SupplierOpeningLedgerId: string;
                const SupplierPaymentLedgerId: string;
                const SwiftCode: string;
                const TaxLedgerId: string;
                const TaxRegNo: string;
                const UAETermsAndConditions: string;
            }
            namespace CustomLookups {
                const Id: string;
                const LookupName: string;
                const SqlQuery: string;
            }
            namespace Language {
                const Id: string;
                const LanguageId: string;
                const LanguageName: string;
            }
            namespace Role {
                const RoleId: string;
                const RoleName: string;
            }
            namespace RolePermission {
                const PermissionKey: string;
                const RoleId: string;
                const RolePermissionId: string;
                const RoleRoleName: string;
            }
            namespace Translation {
                const CustomText: string;
                const EntityPlural: string;
                const Key: string;
                const OverrideConfirmation: string;
                const SaveChangesButton: string;
                const SourceLanguage: string;
                const SourceText: string;
                const TargetLanguage: string;
                const TargetText: string;
            }
            namespace User {
                const DisplayName: string;
                const Email: string;
                const HierarchyId: string;
                const HierarchyName: string;
                const InsertDate: string;
                const InsertUserId: string;
                const IsActive: string;
                const LastDirectoryUpdate: string;
                const Password: string;
                const PasswordConfirm: string;
                const PasswordHash: string;
                const PasswordSalt: string;
                const Source: string;
                const UpdateDate: string;
                const UpdateUserId: string;
                const UserId: string;
                const UserImage: string;
                const Username: string;
            }
            namespace UserHierarchy {
                const Descrription: string;
                const HierarchyName: string;
                const HierarchyOrder: string;
                const Id: string;
            }
            namespace UserPermission {
                const Granted: string;
                const PermissionKey: string;
                const User: string;
                const UserId: string;
                const UserPermissionId: string;
                const Username: string;
            }
            namespace UserRole {
                const RoleId: string;
                const User: string;
                const UserId: string;
                const UserRoleId: string;
                const Username: string;
            }
        }
        namespace CommisionDetails {
            namespace CommisionDetails {
                const CommissionAmount: string;
                const DriverAddress: string;
                const DriverAllowance: string;
                const DriverBasicSalary: string;
                const DriverCountryId: string;
                const DriverDesignationId: string;
                const DriverEmployeeCode: string;
                const DriverEmployeeName: string;
                const DriverEmployeeStatus: string;
                const DriverEmployeeTypeId: string;
                const DriverId: string;
                const DriverMobileNumber: string;
                const DriverPassportExpiryDate: string;
                const DriverPassportNumber: string;
                const DriverResidentId: string;
                const DriverRidExpiryDate: string;
                const Id: string;
                const MobileNumber: string;
                const Percentage: string;
                const PercentageId: string;
                const TsAdvance: string;
                const TsEndKm: string;
                const TsEnddate: string;
                const TsId: string;
                const TsMileage: string;
                const TsPc: string;
                const TsProfit: string;
                const TsRto: string;
                const TsStartKm: string;
                const TsStartdate: string;
                const TsTotalCommison: string;
                const TsTotalDriverCommission: string;
                const TsTotalFright: string;
                const TsTotalKm: string;
                const TsTotalLiter: string;
                const TsTotalLoadingExpense: string;
                const TsTotalOtherExpense: string;
                const TsTotalUnloadExpense: string;
                const TsTotaldays: string;
                const TsTsNo: string;
                const TsVehicleId: string;
            }
        }
        namespace CommissionPercentage {
            namespace CommissionPercentage {
                const Id: string;
                const Percentage: string;
            }
        }
        namespace Common {
            namespace UserPreference {
                const Name: string;
                const PreferenceType: string;
                const UserId: string;
                const UserPreferenceId: string;
                const Value: string;
            }
        }
        namespace Companies {
            namespace Companies {
                const Address: string;
                const Id: string;
                const Name: string;
                const StateCountryId: string;
                const StateId: string;
                const StateName: string;
            }
        }
        namespace Crossing {
            namespace Crossing {
                const Amount: string;
                const Id: string;
                const Name: string;
                const Settlementid: string;
                const SettlementidAdvance: string;
                const SettlementidFualAmount: string;
                const SettlementidMoneyInOutTsNo: string;
                const SettlementidToll: string;
                const SettlementidTollTag: string;
                const SettlementidTripAdvance: string;
                const SettlementidTripBalance: string;
                const SettlementidTripBalancee: string;
                const SettlementidTsNo: string;
                const SettlementidTsNumber: string;
            }
        }
        namespace Documents {
            namespace DocumentType {
                const Id: string;
                const TypeName: string;
            }
            namespace Documents {
                const Attachments: string;
                const DocumentTypeId: string;
                const DocumentTypeTypeName: string;
                const DueDate: string;
                const ExpiryDate: string;
                const Id: string;
                const IssueDate: string;
                const Name: string;
                const NoteList: string;
                const TrxDate: string;
                const TrxNo: string;
            }
        }
        namespace Expenses {
            namespace Expenses {
                const Enddate: string;
                const Expense: string;
                const ExpenseAccountHeadId: string;
                const ExpenseAccountId: string;
                const ExpenseAmount: string;
                const ExpenseConsignmentId: string;
                const ExpenseCustomerId: string;
                const ExpenseEmployeeId: string;
                const ExpensePaymentMethod: string;
                const ExpenseRemarks: string;
                const ExpenseSupplierId: string;
                const ExpenseTaxAmount: string;
                const ExpenseTaxPer: string;
                const ExpenseTotalAmount: string;
                const ExpenseTrxDate: string;
                const ExpenseTsId: string;
                const ExpenseVNo: string;
                const ExpenseVType: string;
                const ExpenseVehicleId: string;
                const FromPlace: string;
                const FromPlaceAreaName: string;
                const FromPlaceDescription: string;
                const Id: string;
                const Profit: string;
                const Startdate: string;
                const ToPlace: string;
                const ToPlaceAreaName: string;
                const ToPlaceDescription: string;
                const TsAdvance: string;
                const TsDrivertwoBata: string;
                const TsEndKm: string;
                const TsEnddate: string;
                const TsExtraBill: string;
                const TsId: string;
                const TsMileage: string;
                const TsPc: string;
                const TsProfit: string;
                const TsRemarks: string;
                const TsRto: string;
                const TsStartKm: string;
                const TsStartdate: string;
                const TsToll: string;
                const TsTotalCommison: string;
                const TsTotalDriverCommission: string;
                const TsTotalExpense: string;
                const TsTotalFright: string;
                const TsTotalFuelAmount: string;
                const TsTotalKm: string;
                const TsTotalLiter: string;
                const TsTotalLoadingExpense: string;
                const TsTotalOtherExpense: string;
                const TsTotalUnloadExpense: string;
                const TsTotaldays: string;
                const TsTsNo: string;
                const TsVehicleId: string;
                const VehicleId: string;
                const VehicleNumber: string;
            }
        }
        namespace Extr {
            namespace Extr {
                const Amount: string;
                const Id: string;
                const Name: string;
                const Settlementid: string;
                const SettlementidAdvance: string;
                const SettlementidFualAmount: string;
                const SettlementidMoneyInOutTsNo: string;
                const SettlementidToll: string;
                const SettlementidTollTag: string;
                const SettlementidTripAdvance: string;
                const SettlementidTripBalance: string;
                const SettlementidTripBalancee: string;
                const SettlementidTsNo: string;
                const SettlementidTsNumber: string;
            }
        }
        namespace FuelDetails {
            namespace FuelDetails {
                const AmountType: string;
                const Date: string;
                const DebitAccountId: string;
                const Expenses: string;
                const FuelId: string;
                const Id: string;
                const LiterRate: string;
                const PaymentMethod: string;
                const Photo: string;
                const PumpAddress: string;
                const PumpId: string;
                const PumpName: string;
                const PumpPumpName: string;
                const PumpPumpPlace: string;
                const Qty: string;
                const SupplierName: string;
                const Supplierid: string;
                const TotalAmt: string;
                const TsAdvance: string;
                const TsEndKm: string;
                const TsEnddate: string;
                const TsId: string;
                const TsMileage: string;
                const TsPc: string;
                const TsProfit: string;
                const TsRto: string;
                const TsStartKm: string;
                const TsStartdate: string;
                const TsTotalCommison: string;
                const TsTotalDriverCommission: string;
                const TsTotalFright: string;
                const TsTotalKm: string;
                const TsTotalLiter: string;
                const TsTotalLoadingExpense: string;
                const TsTotalOtherExpense: string;
                const TsTotalUnloadExpense: string;
                const TsTotaldays: string;
                const TsTsNo: string;
                const TsVehicleId: string;
            }
        }
        namespace HRM {
            namespace EmployeeLeaves {
                const Attachments: string;
                const Days: string;
                const EmployeeAddress: string;
                const EmployeeAllowance: string;
                const EmployeeBasicSalary: string;
                const EmployeeCountryId: string;
                const EmployeeDesignationId: string;
                const EmployeeEmployeeCode: string;
                const EmployeeEmployeeName: string;
                const EmployeeEmployeeStatus: string;
                const EmployeeEmployeeTypeId: string;
                const EmployeeId: string;
                const EmployeeMobileNumber: string;
                const EmployeePassportExpiryDate: string;
                const EmployeePassportNumber: string;
                const EmployeeResidentId: string;
                const EmployeeRidExpiryDate: string;
                const FromDate: string;
                const Id: string;
                const Remarks: string;
                const ToDate: string;
            }
            namespace PayrollPayment {
                const AccountAccountName: string;
                const AccountId: string;
                const Allowance: string;
                const BasicPay: string;
                const EmployeeAddress: string;
                const EmployeeAllowance: string;
                const EmployeeBasicSalary: string;
                const EmployeeCountryId: string;
                const EmployeeDesignationId: string;
                const EmployeeEmployeeCode: string;
                const EmployeeEmployeeName: string;
                const EmployeeEmployeeStatus: string;
                const EmployeeEmployeeTypeId: string;
                const EmployeeId: string;
                const EmployeeMobileNumber: string;
                const EmployeePassportExpiryDate: string;
                const EmployeePassportNumber: string;
                const EmployeeResidentId: string;
                const EmployeeRidExpiryDate: string;
                const Id: string;
                const Other: string;
                const OverTime: string;
                const PaymentType: string;
                const Payments: string;
                const PayrollStructureFromDate: string;
                const PayrollStructureId: string;
                const PayrollStructureRemarks: string;
                const PayrollStructureStructureName: string;
                const PayrollStructureToDate: string;
                const Remarks: string;
                const Total: string;
                const TrxDate: string;
            }
            namespace PayrollStructures {
                const FromDate: string;
                const Id: string;
                const PayrollPayment: string;
                const Remarks: string;
                const StructureName: string;
                const ToDate: string;
            }
        }
        namespace Master {
            namespace Charges {
                const ChargeName: string;
                const ChartOrder: string;
                const Description: string;
                const Id: string;
                const Slno: string;
                const TaxCode: string;
                const TaxCodeId: string;
                const TaxPer: string;
                const TaxRate: string;
            }
            namespace ClearanceStatus {
                const ChartOrder: string;
                const Id: string;
                const Status: string;
            }
            namespace Countries {
                const CountryCode: string;
                const CountryName: string;
                const Id: string;
                const Slno: string;
            }
            namespace Currencies {
                const CurrencyCode: string;
                const CurrencyName: string;
                const CurrencyUnit: string;
                const ExchangeRate: string;
                const Id: string;
                const Slno: string;
                const SubCurrencyUnit: string;
            }
            namespace Customers {
                const Address: string;
                const ContactPerson: string;
                const CreationDate: string;
                const CustomerCode: string;
                const CustomerName: string;
                const Description: string;
                const DueDays: string;
                const Email: string;
                const FullName: string;
                const Id: string;
                const Mobile: string;
                const Opening: string;
                const OpeningDate: string;
                const Place: string;
                const Slno: string;
                const StateId: string;
                const StateName: string;
                const TaxRegNo: string;
                const Telephone: string;
                const jVAdjustmentsRow: string;
            }
            namespace Designation {
                const Description: string;
                const Id: string;
                const Name: string;
                const Slno: string;
            }
            namespace EmployeeMaster {
                const Address: string;
                const Allowance: string;
                const BasicSalary: string;
                const CountryCountryCode: string;
                const CountryCountryName: string;
                const CountryId: string;
                const DesignationDescription: string;
                const DesignationId: string;
                const DesignationName: string;
                const EmployeeCode: string;
                const EmployeeName: string;
                const EmployeeStatus: string;
                const EmployeeTypeDescription: string;
                const EmployeeTypeId: string;
                const EmployeeTypeType: string;
                const FullName: string;
                const Id: string;
                const MobileNumber: string;
                const PassportExpiryDate: string;
                const PassportNumber: string;
                const ResidentId: string;
                const RidExpiryDate: string;
                const Slno: string;
            }
            namespace EmployeeType {
                const Description: string;
                const Id: string;
                const Slno: string;
                const Type: string;
            }
            namespace Outsource {
                const Description: string;
                const Id: string;
                const Name: string;
                const Slno: string;
            }
            namespace Ports {
                const CountryCountryCode: string;
                const CountryCountryName: string;
                const CountryId: string;
                const Id: string;
                const PortName: string;
            }
            namespace Products {
                const FullName: string;
                const Id: string;
                const ProductCode: string;
                const ProductName: string;
                const UnitPrice: string;
            }
            namespace ShippingAreas {
                const AreaName: string;
                const Description: string;
                const Id: string;
                const Slno: string;
            }
            namespace Specifications {
                const Description: string;
                const Id: string;
                const Slno: string;
                const Specifications: string;
            }
            namespace Supplier {
                const Address: string;
                const ContactPerson: string;
                const CreationDate: string;
                const Description: string;
                const Email: string;
                const FullName: string;
                const Id: string;
                const Mobile: string;
                const Opening: string;
                const OpeningDate: string;
                const Place: string;
                const Slno: string;
                const SupplierCode: string;
                const SupplierName: string;
                const TaxRegNo: string;
                const Telephone: string;
                const jVAdjustmentsRow: string;
            }
            namespace TaxCode {
                const Description: string;
                const Id: string;
                const Name: string;
                const Rate: string;
            }
            namespace VehicleModels {
                const Description: string;
                const Id: string;
                const ModelName: string;
                const Slno: string;
            }
            namespace VehicleSpecifications {
                const Id: string;
                const Slno: string;
                const SpecificationDescription: string;
                const SpecificationId: string;
                const SpecificationSpecifications: string;
                const VehicleDescription: string;
                const VehicleDriver: string;
                const VehicleExpiryDate: string;
                const VehicleId: string;
                const VehiclePdoApproved: string;
                const VehicleRegistraionNumber: string;
                const VehicleRegistrationDate: string;
                const VehicleThrough: string;
                const VehicleTypeOfVehicle: string;
                const VehicleVehicleModel: string;
                const VehicleVehicleNumber: string;
            }
            namespace Vehicles {
                const Description: string;
                const Driver: string;
                const DriverAddress: string;
                const DriverAllowance: string;
                const DriverBasicSalary: string;
                const DriverCountryId: string;
                const DriverDesignationId: string;
                const DriverEmployeeCode: string;
                const DriverEmployeeName: string;
                const DriverEmployeeStatus: string;
                const DriverEmployeeTypeId: string;
                const DriverMobileNumber: string;
                const DriverPassportExpiryDate: string;
                const DriverPassportNumber: string;
                const DriverResidentId: string;
                const DriverRidExpiryDate: string;
                const ExpiryDate: string;
                const HSN: string;
                const Id: string;
                const ModelName: string;
                const OwnerId: string;
                const OwnerName: string;
                const PdoApproved: string;
                const PrimeMover: string;
                const RegistraionNumber: string;
                const RegistrationDate: string;
                const Slno: string;
                const SupplierId: string;
                const SupplierName: string;
                const Through: string;
                const ThroughDescription: string;
                const ThroughName: string;
                const TypeOfVehicle: string;
                const VehicleModel: string;
                const VehicleNumber: string;
                const VehicleSpecifications: string;
            }
        }
        namespace MaterialsDetails {
            namespace MaterialsDetails {
                const Id: string;
                const Materials: string;
                const Units: string;
            }
        }
        namespace Northwind {
            namespace Note {
                const EntityId: string;
                const EntityType: string;
                const InsertDate: string;
                const InsertUserDisplayName: string;
                const InsertUserId: string;
                const NoteId: string;
                const Text: string;
            }
        }
        namespace PDCPayments {
            namespace PdcPaymentDetails {
                const AccountAccountName: string;
                const AccountId: string;
                const Amount: string;
                const ChequeNo: string;
                const ChequeStatus: string;
                const ChequeType: string;
                const ConsignmentAdvanceId: string;
                const Date: string;
                const Id: string;
                const InvoiceCollectionId: string;
                const MoneyInOutId: string;
                const Payment: string;
                const PaymentType: string;
                const PdcPaymentsCompany: string;
                const PdcPaymentsEndDate: string;
                const PdcPaymentsId: string;
                const PdcPaymentsInstallmentAmount: string;
                const PdcPaymentsInstallments: string;
                const PdcPaymentsNotes: string;
                const PdcPaymentsPdcNumber: string;
                const PdcPaymentsStartDate: string;
                const PdcPaymentsTrxDate: string;
                const PurchaseId: string;
                const Receipts: string;
                const StatusDate: string;
                const SuppliersPaymentId: string;
            }
            namespace PdcPayments {
                const ChequeType: string;
                const Company: string;
                const EndDate: string;
                const Id: string;
                const InstallmentAmount: string;
                const Installments: string;
                const Notes: string;
                const PdcNumber: string;
                const PdcPaymentDetails: string;
                const Slno: string;
                const StartDate: string;
                const SupplierId: string;
                const SupplierSupplierName: string;
                const TrxDate: string;
            }
        }
        namespace PumpDetails {
            namespace PumpDetails {
                const Address: string;
                const Id: string;
                const PumpName: string;
                const PumpPlace: string;
            }
        }
        namespace Reports {
            namespace ReportDataSets {
                const DataSetName: string;
                const Id: string;
                const ReportDesignDesign: string;
                const ReportDesignId: string;
                const ReportDesignName: string;
                const SqlQuery: string;
            }
            namespace ReportDesigns {
                const Category: string;
                const Design: string;
                const Id: string;
                const Name: string;
                const PermissionKey: string;
                const ReportDataSets: string;
                const ReportParameters: string;
                const ReportType: string;
            }
            namespace ReportParameters {
                const CustomLookupId: string;
                const DataType: string;
                const DefaultValue: string;
                const EditorType: string;
                const Id: string;
                const IsRequired: string;
                const LookupName: string;
                const LookupType: string;
                const ParameterName: string;
                const ReportDesignDesign: string;
                const ReportDesignId: string;
                const ReportDesignName: string;
            }
        }
        namespace ServiceAmount {
            namespace ServiceAmount {
                const Amount: string;
                const Id: string;
                const Photo: string;
                const ServiceId: string;
                const ServiceServiceName: string;
                const TsAdvance: string;
                const TsEndKm: string;
                const TsEnddate: string;
                const TsId: string;
                const TsMileage: string;
                const TsPc: string;
                const TsProfit: string;
                const TsRto: string;
                const TsStartKm: string;
                const TsStartdate: string;
                const TsTotalCommison: string;
                const TsTotalDriverCommission: string;
                const TsTotalFright: string;
                const TsTotalKm: string;
                const TsTotalLiter: string;
                const TsTotalLoadingExpense: string;
                const TsTotalOtherExpense: string;
                const TsTotalUnloadExpense: string;
                const TsTotaldays: string;
                const TsTsNo: string;
                const TsVehicleId: string;
            }
        }
        namespace Services {
            namespace Services {
                const Id: string;
                const ServiceName: string;
            }
        }
        namespace SettlementDetails {
            namespace SettlementDetails {
                const Advance: string;
                const Crossing: string;
                const FualAmount: string;
                const Id: string;
                const MoneyInOutTsNo: string;
                const MoneyInOutTsNoAccountHeadId: string;
                const MoneyInOutTsNoAccountId: string;
                const MoneyInOutTsNoAmount: string;
                const MoneyInOutTsNoConsignmentId: string;
                const MoneyInOutTsNoCustomerId: string;
                const MoneyInOutTsNoEmployeeId: string;
                const MoneyInOutTsNoPaymentMethod: string;
                const MoneyInOutTsNoRemarks: string;
                const MoneyInOutTsNoSupplierId: string;
                const MoneyInOutTsNoTaxAmount: string;
                const MoneyInOutTsNoTaxPer: string;
                const MoneyInOutTsNoTotalAmount: string;
                const MoneyInOutTsNoTrxDate: string;
                const MoneyInOutTsNoTsId: string;
                const MoneyInOutTsNoVNo: string;
                const MoneyInOutTsNoVType: string;
                const MoneyInOutTsNoVehicleId: string;
                const TSNumber: string;
                const TollTag: string;
                const TollTagAdvance: string;
                const TollTagDrivertwoBata: string;
                const TollTagEndKm: string;
                const TollTagEnddate: string;
                const TollTagMileage: string;
                const TollTagPc: string;
                const TollTagProfit: string;
                const TollTagRto: string;
                const TollTagStartKm: string;
                const TollTagStartdate: string;
                const TollTagTotalCommison: string;
                const TollTagTotalDriverCommission: string;
                const TollTagTotalFright: string;
                const TollTagTotalFuelAmount: string;
                const TollTagTotalKm: string;
                const TollTagTotalLiter: string;
                const TollTagTotalLoadingExpense: string;
                const TollTagTotalOtherExpense: string;
                const TollTagTotalUnloadExpense: string;
                const TollTagTotaldays: string;
                const TollTagTsNo: string;
                const TollTagVehicleId: string;
                const TripAdvance: string;
                const TripAdvanceAdvance: string;
                const TripAdvanceDrivertwoBata: string;
                const TripAdvanceEndKm: string;
                const TripAdvanceEnddate: string;
                const TripAdvanceMileage: string;
                const TripAdvancePc: string;
                const TripAdvanceProfit: string;
                const TripAdvanceRto: string;
                const TripAdvanceStartKm: string;
                const TripAdvanceStartdate: string;
                const TripAdvanceTotalCommison: string;
                const TripAdvanceTotalDriverCommission: string;
                const TripAdvanceTotalFright: string;
                const TripAdvanceTotalFuelAmount: string;
                const TripAdvanceTotalKm: string;
                const TripAdvanceTotalLiter: string;
                const TripAdvanceTotalLoadingExpense: string;
                const TripAdvanceTotalOtherExpense: string;
                const TripAdvanceTotalUnloadExpense: string;
                const TripAdvanceTotaldays: string;
                const TripAdvanceTsNo: string;
                const TripAdvanceVehicleId: string;
                const TripBalance: string;
                const TripBalanceAdvance: string;
                const TripBalanceDrivertwoBata: string;
                const TripBalanceEndKm: string;
                const TripBalanceEnddate: string;
                const TripBalanceMileage: string;
                const TripBalancePc: string;
                const TripBalanceProfit: string;
                const TripBalanceRto: string;
                const TripBalanceStartKm: string;
                const TripBalanceStartdate: string;
                const TripBalanceTotalCommison: string;
                const TripBalanceTotalDriverCommission: string;
                const TripBalanceTotalFright: string;
                const TripBalanceTotalFuelAmount: string;
                const TripBalanceTotalKm: string;
                const TripBalanceTotalLiter: string;
                const TripBalanceTotalLoadingExpense: string;
                const TripBalanceTotalOtherExpense: string;
                const TripBalanceTotalUnloadExpense: string;
                const TripBalanceTotaldays: string;
                const TripBalanceTsNo: string;
                const TripBalanceVehicleId: string;
                const TripBalancee: string;
                const TsNo: string;
                const TsNo1: string;
                const TsNoAdvance: string;
                const TsNoDrivertwoBata: string;
                const TsNoEndKm: string;
                const TsNoEnddate: string;
                const TsNoMileage: string;
                const TsNoPc: string;
                const TsNoProfit: string;
                const TsNoRto: string;
                const TsNoStartKm: string;
                const TsNoStartdate: string;
                const TsNoTotalCommison: string;
                const TsNoTotalDriverCommission: string;
                const TsNoTotalFright: string;
                const TsNoTotalFuelAmount: string;
                const TsNoTotalKm: string;
                const TsNoTotalLiter: string;
                const TsNoTotalLoadingExpense: string;
                const TsNoTotalOtherExpense: string;
                const TsNoTotalUnloadExpense: string;
                const TsNoTotaldays: string;
                const TsNoVehicleId: string;
                const extraexpense: string;
                const toll: string;
            }
        }
        namespace States {
            namespace States {
                const Code: string;
                const CountryCountryCode: string;
                const CountryCountryName: string;
                const CountryId: string;
                const Id: string;
                const Name: string;
            }
        }
        namespace Transactions {
            namespace Clearance {
                const Attachment: string;
                const ChargeableWeight: string;
                const Consignee: string;
                const ConsigneeAddress: string;
                const ConsigneeContactPerson: string;
                const ConsigneeCreationDate: string;
                const ConsigneeCustomerCode: string;
                const ConsigneeCustomerName: string;
                const ConsigneeDescription: string;
                const ConsigneeDueDays: string;
                const ConsigneeEmail: string;
                const ConsigneeMobile: string;
                const ConsigneeOpening: string;
                const ConsigneeOpeningDate: string;
                const ConsigneePlace: string;
                const ConsigneeTaxRegNo: string;
                const ConsigneeTelephone: string;
                const ContainerNo: string;
                const CustomerRef: string;
                const Eta: string;
                const Etd: string;
                const Hbldate: string;
                const Hblno: string;
                const Id: string;
                const JobRef: string;
                const Mbldate: string;
                const Mblno: string;
                const NoOfPackages: string;
                const PackageType: string;
                const PortDischarge: string;
                const PortDischargeCountryId: string;
                const PortDischargePortName: string;
                const PortLoading: string;
                const PortLoadingCountryId: string;
                const PortLoadingPortName: string;
                const Shipper: string;
                const ShipperAddress: string;
                const ShipperContactPerson: string;
                const ShipperCreationDate: string;
                const ShipperCustomerCode: string;
                const ShipperCustomerName: string;
                const ShipperDescription: string;
                const ShipperDueDays: string;
                const ShipperEmail: string;
                const ShipperMobile: string;
                const ShipperOpening: string;
                const ShipperOpeningDate: string;
                const ShipperPlace: string;
                const ShipperTaxRegNo: string;
                const ShipperTelephone: string;
                const Status: string;
                const Status1: string;
                const Vessel: string;
                const Volume: string;
                const Weight: string;
            }
            namespace Consignment {
                const AdvanceAccountId: string;
                const AdvanceAmount: string;
                const AdvancePaymentType: string;
                const AdvanceReceipt: string;
                const BalanceAmount: string;
                const Billing: string;
                const BillingCustomerCode: string;
                const BillingCustomerName: string;
                const Cgst: string;
                const CgstAmt: string;
                const ChargeDetailList: string;
                const ClearanceId: string;
                const ClientJobNo: string;
                const ConsigneeAddress: string;
                const ConsigneeContactPerson: string;
                const ConsigneeCreationDate: string;
                const ConsigneeCustomerCode: string;
                const ConsigneeCustomerName: string;
                const ConsigneeDescription: string;
                const ConsigneeEmail: string;
                const ConsigneeId: string;
                const ConsigneeMobile: string;
                const ConsigneePlace: string;
                const ConsigneeTelephone: string;
                const ConsignmentTripDates: string;
                const ConsignmentVehicleDetails: string;
                const Date: string;
                const Driver: string;
                const DriverAddress: string;
                const DriverAllowance: string;
                const DriverBasicSalary: string;
                const DriverCountryId: string;
                const DriverDesignationId: string;
                const DriverEmployeeCode: string;
                const DriverEmployeeName: string;
                const DriverEmployeeStatus: string;
                const DriverEmployeeTypeId: string;
                const DriverMobileNumber: string;
                const DriverPassportExpiryDate: string;
                const DriverPassportNumber: string;
                const DriverResidentId: string;
                const DriverRidExpiryDate: string;
                const EndDate: string;
                const Expenses: string;
                const FromLocations: string;
                const FullName: string;
                const Id: string;
                const Igst: string;
                const IgstAmt: string;
                const InvoiceNumber: string;
                const JobNo: string;
                const LoadedDate: string;
                const Payment: string;
                const PaymentMode: string;
                const PdcPaymentDetails: string;
                const Po: string;
                const Sgst: string;
                const SgstAmt: string;
                const ShipperAddress: string;
                const ShipperContactPerson: string;
                const ShipperCreationDate: string;
                const ShipperCustomerCode: string;
                const ShipperCustomerName: string;
                const ShipperDescription: string;
                const ShipperEmail: string;
                const ShipperId: string;
                const ShipperMobile: string;
                const ShipperPlace: string;
                const ShipperTelephone: string;
                const ShippingAreaFrom: string;
                const ShippingAreaFromAreaName: string;
                const ShippingAreaFromDescription: string;
                const ShippingAreaTo: string;
                const ShippingAreaToAreaName: string;
                const ShippingAreaToDescription: string;
                const Slno: string;
                const StartDate: string;
                const Status: string;
                const SupplierAmount: string;
                const SupplierId: string;
                const TaxPaidBy: string;
                const ToLocations: string;
                const TotalAmount: string;
                const TotalFreightAmount: string;
                const TotalNoOfPkgs: string;
                const TotalTaxAmount: string;
                const TotalVolume: string;
                const TotalWeight: string;
                const Type: string;
                const TypeOfPkg: string;
                const VehicleDescription: string;
                const VehicleDriver: string;
                const VehicleExpiryDate: string;
                const VehicleId: string;
                const VehicleNumber: string;
                const VehiclePdoApproved: string;
                const VehicleRegistraionNumber: string;
                const VehicleRegistrationDate: string;
                const VehicleThrough: string;
                const VehicleTypeOfVehicle: string;
                const VehicleVehicleModel: string;
                const VehicleVehicleNumber: string;
                const WayBillNo: string;
            }
            namespace ConsignmentCharges {
                const AccountId: string;
                const Amount: string;
                const ChargeChargeName: string;
                const ChargeDescription: string;
                const ChargeId: string;
                const ConsignmentChargesId: string;
                const ConsignmentClientJobNo: string;
                const ConsignmentConsigneeId: string;
                const ConsignmentDate: string;
                const ConsignmentDriver: string;
                const ConsignmentId: string;
                const ConsignmentJobNo: string;
                const ConsignmentPayment: string;
                const ConsignmentShipperId: string;
                const ConsignmentShippingAreaFrom: string;
                const ConsignmentShippingAreaTo: string;
                const ConsignmentTotalAmount: string;
                const ConsignmentTotalNoOfPkgs: string;
                const ConsignmentTotalVolume: string;
                const ConsignmentTotalWeight: string;
                const ConsignmentType: string;
                const ConsignmentTypeOfPkg: string;
                const ConsignmentVehicleDetailId: string;
                const ConsignmentVehicleId: string;
                const ConsignmentVehicleNumber: string;
                const ConsignmentWayBillNo: string;
                const CurrencyCurrencyCode: string;
                const CurrencyCurrencyName: string;
                const CurrencyExchangeRate: string;
                const CurrencyId: string;
                const Date: string;
                const Description: string;
                const DisAmount: string;
                const ExchangeRate: string;
                const Id: string;
                const PaymentType: string;
                const Payments: string;
                const Qty: string;
                const Slno: string;
                const SupplierAdvanceAmount: string;
                const SupplierAmount: string;
                const SupplierId: string;
                const TaxAmount: string;
                const TaxPer: string;
                const TaxableAmount: string;
                const Total: string;
                const TotalAmount: string;
                const TotalAmountInLocalCurrency: string;
                const UOMId: string;
                const UomUnit: string;
            }
            namespace ConsignmentTripDates {
                const ConsignmentBilling: string;
                const ConsignmentClientJobNo: string;
                const ConsignmentConsigneeId: string;
                const ConsignmentDate: string;
                const ConsignmentDriver: string;
                const ConsignmentEndDate: string;
                const ConsignmentId: string;
                const ConsignmentJobNo: string;
                const ConsignmentPayment: string;
                const ConsignmentPaymentMode: string;
                const ConsignmentShipperId: string;
                const ConsignmentShippingAreaFrom: string;
                const ConsignmentShippingAreaTo: string;
                const ConsignmentStartDate: string;
                const ConsignmentStatus: string;
                const ConsignmentTotalAmount: string;
                const ConsignmentTotalNoOfPkgs: string;
                const ConsignmentTotalVolume: string;
                const ConsignmentTotalWeight: string;
                const ConsignmentType: string;
                const ConsignmentTypeOfPkg: string;
                const ConsignmentVehicleId: string;
                const ConsignmentVehicleNumber: string;
                const ConsignmentWayBillNo: string;
                const EndDate: string;
                const Id: string;
                const StartDate: string;
            }
            namespace ConsignmentVehicleDetails {
                const AccountId: string;
                const Amount: string;
                const ChargeId: string;
                const ConsignmentBilling: string;
                const ConsignmentClientJobNo: string;
                const ConsignmentConsigneeId: string;
                const ConsignmentDate: string;
                const ConsignmentDriver: string;
                const ConsignmentId: string;
                const ConsignmentJobNo: string;
                const ConsignmentPayment: string;
                const ConsignmentPaymentMode: string;
                const ConsignmentShipperId: string;
                const ConsignmentShippingAreaFrom: string;
                const ConsignmentShippingAreaTo: string;
                const ConsignmentStatus: string;
                const ConsignmentTotalAmount: string;
                const ConsignmentTotalNoOfPkgs: string;
                const ConsignmentTotalVolume: string;
                const ConsignmentTotalWeight: string;
                const ConsignmentType: string;
                const ConsignmentTypeOfPkg: string;
                const ConsignmentVehicleId: string;
                const ConsignmentVehicleNumber: string;
                const ConsignmentWayBillNo: string;
                const CountryCountryCode: string;
                const CountryCountryName: string;
                const CountryId: string;
                const CurrencyId: string;
                const Date: string;
                const Description: string;
                const DisAmount: string;
                const Driver: string;
                const DriverAddress: string;
                const DriverAdvance: string;
                const DriverAdvanceAccount: string;
                const DriverAdvancePaymentType: string;
                const DriverAllowance: string;
                const DriverBasicSalary: string;
                const DriverCountryId: string;
                const DriverDesignationId: string;
                const DriverEmployeeCode: string;
                const DriverEmployeeName: string;
                const DriverEmployeeStatus: string;
                const DriverEmployeeTypeId: string;
                const DriverKmFrom: string;
                const DriverKmTo: string;
                const DriverMobileNumber: string;
                const DriverName: string;
                const DriverPassportExpiryDate: string;
                const DriverPassportNumber: string;
                const DriverResidentId: string;
                const DriverRidExpiryDate: string;
                const EndDate: string;
                const ExchangeRate: string;
                const GpskmFrom: string;
                const GpskmTo: string;
                const Id: string;
                const Number: string;
                const PaymentType: string;
                const Payments: string;
                const Qty: string;
                const ResidentID: string;
                const ShippingAreaFrom: string;
                const ShippingAreaFromAreaName: string;
                const ShippingAreaFromDescription: string;
                const ShippingAreaTo: string;
                const ShippingAreaToAreaName: string;
                const ShippingAreaToDescription: string;
                const Slno: string;
                const StartDate: string;
                const SupplierAdvanceAmount: string;
                const SupplierAmount: string;
                const SupplierId: string;
                const TaxAmount: string;
                const TaxPer: string;
                const TaxableAmount: string;
                const Total: string;
                const TotalAmount: string;
                const TotalAmountInLocalCurrency: string;
                const TotalNoOfPkgs: string;
                const TotalVolume: string;
                const TotalWeight: string;
                const Type: string;
                const TypeOfPkg: string;
                const TypeOfVehicle: string;
                const VehicleCharges: string;
                const VehicleDescription: string;
                const VehicleDriver: string;
                const VehicleExpiryDate: string;
                const VehicleId: string;
                const VehicleNumber: string;
                const VehiclePdoApproved: string;
                const VehicleRegistraionNumber: string;
                const VehicleRegistrationDate: string;
                const VehicleSpecifications: string;
                const VehicleThrough: string;
                const VehicleTypeOfVehicle: string;
                const VehicleVehicleModel: string;
                const VehicleVehicleNumber: string;
            }
            namespace ConsignmentVehicleSpecifications {
                const ConsignmentVehicleDetailConsignmentId: string;
                const ConsignmentVehicleDetailCountryId: string;
                const ConsignmentVehicleDetailDriver: string;
                const ConsignmentVehicleDetailDriverKmFrom: string;
                const ConsignmentVehicleDetailDriverKmTo: string;
                const ConsignmentVehicleDetailDriverName: string;
                const ConsignmentVehicleDetailEndDate: string;
                const ConsignmentVehicleDetailGpskmFrom: string;
                const ConsignmentVehicleDetailGpskmTo: string;
                const ConsignmentVehicleDetailId: string;
                const ConsignmentVehicleDetailNumber: string;
                const ConsignmentVehicleDetailResidentId: string;
                const ConsignmentVehicleDetailShippingAreaFrom: string;
                const ConsignmentVehicleDetailShippingAreaTo: string;
                const ConsignmentVehicleDetailStartDate: string;
                const ConsignmentVehicleDetailSupplierAmount: string;
                const ConsignmentVehicleDetailSupplierId: string;
                const ConsignmentVehicleDetailTotalNoOfPkgs: string;
                const ConsignmentVehicleDetailTotalVolume: string;
                const ConsignmentVehicleDetailTotalWeight: string;
                const ConsignmentVehicleDetailType: string;
                const ConsignmentVehicleDetailTypeOfPkg: string;
                const ConsignmentVehicleDetailTypeOfVehicle: string;
                const ConsignmentVehicleDetailVehicleId: string;
                const ConsignmentVehicleDetailVehicleNumber: string;
                const Id: string;
                const SpecificationDescription: string;
                const SpecificationId: string;
                const SpecificationSpecifications: string;
            }
            namespace DeliveryServiceDetails {
                const DeliveryServiceBillNo: string;
                const DeliveryServiceConsigneeId: string;
                const DeliveryServiceConsignorId: string;
                const DeliveryServiceHandDate: string;
                const DeliveryServiceId: string;
                const DeliveryServiceNote: string;
                const DeliveryServicePaymentType: string;
                const DeliveryServiceReceivedDate: string;
                const DeliveryServiceShippingAreaFrom: string;
                const DeliveryServiceShippingAreaTo: string;
                const DeliveryServiceTotalAmount: string;
                const DeliveryServiceTrxDate: string;
                const Id: string;
                const ParcelType: string;
                const ParcelTypeOtherLang: string;
                const Quantity: string;
                const TotalAmount: string;
                const UnitPrice: string;
            }
            namespace DeliveryServices {
                const AccountId: string;
                const BillNo: string;
                const ConsigneeAddress: string;
                const ConsigneeContactPerson: string;
                const ConsigneeCreationDate: string;
                const ConsigneeCustomerCode: string;
                const ConsigneeCustomerName: string;
                const ConsigneeDescription: string;
                const ConsigneeDueDays: string;
                const ConsigneeEmail: string;
                const ConsigneeId: string;
                const ConsigneeMobile: string;
                const ConsigneeOpening: string;
                const ConsigneeOpeningDate: string;
                const ConsigneePlace: string;
                const ConsigneeTaxRegNo: string;
                const ConsigneeTelephone: string;
                const ConsignorAddress: string;
                const ConsignorContactPerson: string;
                const ConsignorCreationDate: string;
                const ConsignorCustomerCode: string;
                const ConsignorCustomerName: string;
                const ConsignorDescription: string;
                const ConsignorDueDays: string;
                const ConsignorEmail: string;
                const ConsignorId: string;
                const ConsignorMobile: string;
                const ConsignorOpening: string;
                const ConsignorOpeningDate: string;
                const ConsignorPlace: string;
                const ConsignorTaxRegNo: string;
                const ConsignorTelephone: string;
                const ContactNo: string;
                const DeliveryServiceDetails: string;
                const DeliveryStatus: string;
                const HandDate: string;
                const IDNo: string;
                const Id: string;
                const Note: string;
                const PaymentType: string;
                const PaymentTypeA: string;
                const Receipts: string;
                const ReceivedDate: string;
                const ReceiverDetails: string;
                const ShippingAreaFrom: string;
                const ShippingAreaFromAreaName: string;
                const ShippingAreaFromDescription: string;
                const ShippingAreaTo: string;
                const ShippingAreaToAreaName: string;
                const ShippingAreaToDescription: string;
                const TotalAmount: string;
                const TrxDate: string;
            }
            namespace Invoice {
                const AdvanceAmount: string;
                const BalanceAmount: string;
                const Billing: string;
                const BillingCustomerCode: string;
                const BillingCustomerName: string;
                const Cgst: string;
                const CgstAmt: string;
                const ChargeDetailList: string;
                const ClearanceId: string;
                const ClientJobNo: string;
                const ConsigneeAddress: string;
                const ConsigneeContactPerson: string;
                const ConsigneeCreationDate: string;
                const ConsigneeCustomerCode: string;
                const ConsigneeCustomerName: string;
                const ConsigneeDescription: string;
                const ConsigneeEmail: string;
                const ConsigneeId: string;
                const ConsigneeMobile: string;
                const ConsigneePlace: string;
                const ConsigneeTelephone: string;
                const ConsignmentClientJobNo: string;
                const ConsignmentConsigneeId: string;
                const ConsignmentConsignmentDate: string;
                const ConsignmentDate: string;
                const ConsignmentDriver: string;
                const ConsignmentId: string;
                const ConsignmentJobNo: string;
                const ConsignmentPayment: string;
                const ConsignmentShipperId: string;
                const ConsignmentShippingAreaFrom: string;
                const ConsignmentShippingAreaTo: string;
                const ConsignmentTotalAmount: string;
                const ConsignmentTotalNoOfPkgs: string;
                const ConsignmentTotalVolume: string;
                const ConsignmentTotalWeight: string;
                const ConsignmentType: string;
                const ConsignmentTypeOfPkg: string;
                const ConsignmentVehicleId: string;
                const ConsignmentVehicleNumber: string;
                const ConsignmentWayBillNo: string;
                const Driver: string;
                const DriverAddress: string;
                const DriverAllowance: string;
                const DriverBasicSalary: string;
                const DriverCountryId: string;
                const DriverDesignationId: string;
                const DriverEmployeeCode: string;
                const DriverEmployeeName: string;
                const DriverEmployeeStatus: string;
                const DriverEmployeeTypeId: string;
                const DriverKmFrom: string;
                const DriverKmTo: string;
                const DriverMobileNumber: string;
                const DriverPassportExpiryDate: string;
                const DriverPassportNumber: string;
                const DriverResidentId: string;
                const DriverRidExpiryDate: string;
                const EndDate: string;
                const FromLocations: string;
                const GpskmFrom: string;
                const GpskmTo: string;
                const Id: string;
                const Igst: string;
                const IgstAmt: string;
                const InvoiceDate: string;
                const InvoiceDues: string;
                const InvoiceNo: string;
                const InvoiceTripDates: string;
                const InvoiceVehicleDetails: string;
                const JobNo: string;
                const Payment: string;
                const PaymentMode: string;
                const PaymentStatus: string;
                const Receipts: string;
                const Remarks: string;
                const Sgst: string;
                const SgstAmt: string;
                const ShipperAddress: string;
                const ShipperContactPerson: string;
                const ShipperCreationDate: string;
                const ShipperCustomerCode: string;
                const ShipperCustomerName: string;
                const ShipperDescription: string;
                const ShipperEmail: string;
                const ShipperId: string;
                const ShipperMobile: string;
                const ShipperPlace: string;
                const ShipperTelephone: string;
                const ShippingAreaFrom: string;
                const ShippingAreaFromAreaName: string;
                const ShippingAreaFromDescription: string;
                const ShippingAreaTo: string;
                const ShippingAreaToAreaName: string;
                const ShippingAreaToDescription: string;
                const Slno: string;
                const StartDate: string;
                const Status: string;
                const StatusUser: string;
                const StatusUserDisplayName: string;
                const StatusUserEmail: string;
                const StatusUserInsertDate: string;
                const StatusUserInsertUserId: string;
                const StatusUserIsActive: string;
                const StatusUserLastDirectoryUpdate: string;
                const StatusUserPasswordHash: string;
                const StatusUserPasswordSalt: string;
                const StatusUserSource: string;
                const StatusUserUpdateDate: string;
                const StatusUserUpdateUserId: string;
                const StatusUserUserImage: string;
                const StatusUserUsername: string;
                const SupplierAmount: string;
                const SupplierId: string;
                const SupplierPaymentStatus: string;
                const ToLocations: string;
                const TotalAmount: string;
                const TotalNoOfPkgs: string;
                const TotalVolume: string;
                const TotalWeight: string;
                const Type: string;
                const TypeOfPkg: string;
                const VehicleDescription: string;
                const VehicleDriver: string;
                const VehicleExpiryDate: string;
                const VehicleId: string;
                const VehicleNumber: string;
                const VehiclePdoApproved: string;
                const VehicleRegistraionNumber: string;
                const VehicleRegistrationDate: string;
                const VehicleThrough: string;
                const VehicleTypeOfVehicle: string;
                const VehicleVehicleModel: string;
                const VehicleVehicleNumber: string;
                const WayBillNo: string;
            }
            namespace InvoiceCharges {
                const AccountId: string;
                const Amount: string;
                const ChargeChargeName: string;
                const ChargeChartOrder: string;
                const ChargeDescription: string;
                const ChargeId: string;
                const ConsignmentId: string;
                const CurrencyCurrencyCode: string;
                const CurrencyCurrencyName: string;
                const CurrencyExchangeRate: string;
                const CurrencyId: string;
                const Date: string;
                const Description: string;
                const DisAmount: string;
                const ExchangeRate: string;
                const FullName: string;
                const Id: string;
                const InvoiceChargeVehicleDetailId: string;
                const InvoiceClientJobNo: string;
                const InvoiceConsigneeId: string;
                const InvoiceConsignmentDate: string;
                const InvoiceConsignmentId: string;
                const InvoiceDriver: string;
                const InvoiceDriverKmFrom: string;
                const InvoiceDriverKmTo: string;
                const InvoiceGpskmFrom: string;
                const InvoiceGpskmTo: string;
                const InvoiceId: string;
                const InvoiceInvoiceDate: string;
                const InvoiceInvoiceNo: string;
                const InvoiceJobNo: string;
                const InvoicePayment: string;
                const InvoiceShipperId: string;
                const InvoiceShippingAreaFrom: string;
                const InvoiceShippingAreaTo: string;
                const InvoiceStatus: string;
                const InvoiceStatusUser: string;
                const InvoiceTotalAmount: string;
                const InvoiceTotalNoOfPkgs: string;
                const InvoiceTotalVolume: string;
                const InvoiceTotalWeight: string;
                const InvoiceType: string;
                const InvoiceTypeOfPkg: string;
                const InvoiceVehicleDetailId: string;
                const InvoiceVehicleId: string;
                const InvoiceVehicleNumber: string;
                const InvoiceWayBillNo: string;
                const PaymentType: string;
                const Qty: string;
                const Slno: string;
                const SupplierAdvanceAmount: string;
                const SupplierAmount: string;
                const SupplierId: string;
                const SupplierPaymentStatus: string;
                const TaxAmount: string;
                const TaxPer: string;
                const TaxableAmount: string;
                const Total: string;
                const TotalAmount: string;
                const TotalAmountInLocalCurrency: string;
            }
            namespace InvoiceCollection {
                const AccountAccountHeadId: string;
                const AccountAccountName: string;
                const AccountAccountNo: string;
                const AccountBankName: string;
                const AccountBrachName: string;
                const AccountId: string;
                const AccountType: string;
                const CollectionNumber: string;
                const CustomerAddress: string;
                const CustomerContactPerson: string;
                const CustomerCreationDate: string;
                const CustomerCustomerCode: string;
                const CustomerCustomerName: string;
                const CustomerDescription: string;
                const CustomerEmail: string;
                const CustomerId: string;
                const CustomerMobile: string;
                const CustomerPlace: string;
                const CustomerTelephone: string;
                const DetailList: string;
                const Id: string;
                const PaymentType: string;
                const PdcPaymentDetails: string;
                const Receipts: string;
                const Slno: string;
                const Status: string;
                const StatusUser: string;
                const StatusUserDisplayName: string;
                const StatusUserEmail: string;
                const StatusUserInsertDate: string;
                const StatusUserInsertUserId: string;
                const StatusUserIsActive: string;
                const StatusUserLastDirectoryUpdate: string;
                const StatusUserPasswordHash: string;
                const StatusUserPasswordSalt: string;
                const StatusUserSource: string;
                const StatusUserUpdateDate: string;
                const StatusUserUpdateUserId: string;
                const StatusUserUserImage: string;
                const StatusUserUsername: string;
                const TotalAmount: string;
                const TrxDate: string;
            }
            namespace InvoiceCollectionDetails {
                const Amount: string;
                const ChequeDate: string;
                const ChequeNumber: string;
                const Id: string;
                const InvoiceClientJobNo: string;
                const InvoiceCollectionAccountId: string;
                const InvoiceCollectionCollectionNumber: string;
                const InvoiceCollectionCustomerId: string;
                const InvoiceCollectionId: string;
                const InvoiceCollectionPaymentType: string;
                const InvoiceCollectionStatus: string;
                const InvoiceCollectionStatusUser: string;
                const InvoiceCollectionTotalAmount: string;
                const InvoiceCollectionTrxDate: string;
                const InvoiceConsigneeId: string;
                const InvoiceConsignmentDate: string;
                const InvoiceConsignmentId: string;
                const InvoiceDriver: string;
                const InvoiceDriverKmFrom: string;
                const InvoiceDriverKmTo: string;
                const InvoiceGpskmFrom: string;
                const InvoiceGpskmTo: string;
                const InvoiceId: string;
                const InvoiceInvoiceDate: string;
                const InvoiceInvoiceNo: string;
                const InvoiceJobNo: string;
                const InvoicePayment: string;
                const InvoicePaymentStatus: string;
                const InvoiceShipperId: string;
                const InvoiceShippingAreaFrom: string;
                const InvoiceShippingAreaTo: string;
                const InvoiceStatus: string;
                const InvoiceStatusUser: string;
                const InvoiceTotalAmount: string;
                const InvoiceTotalNoOfPkgs: string;
                const InvoiceTotalVolume: string;
                const InvoiceTotalWeight: string;
                const InvoiceType: string;
                const InvoiceTypeOfPkg: string;
                const InvoiceVehicleId: string;
                const InvoiceVehicleNumber: string;
                const InvoiceWayBillNo: string;
            }
            namespace InvoiceDueDetails {
                const Amount: string;
                const DueDate: string;
                const DueDays: string;
                const Id: string;
                const InvoiceBilling: string;
                const InvoiceClientJobNo: string;
                const InvoiceConsigneeId: string;
                const InvoiceConsignmentDate: string;
                const InvoiceConsignmentId: string;
                const InvoiceDriver: string;
                const InvoiceDriverKmFrom: string;
                const InvoiceDriverKmTo: string;
                const InvoiceEndDate: string;
                const InvoiceGpskmFrom: string;
                const InvoiceGpskmTo: string;
                const InvoiceId: string;
                const InvoiceInvoiceDate: string;
                const InvoiceInvoiceNo: string;
                const InvoiceJobNo: string;
                const InvoicePayment: string;
                const InvoicePaymentMode: string;
                const InvoicePaymentStatus: string;
                const InvoiceShipperId: string;
                const InvoiceShippingAreaFrom: string;
                const InvoiceShippingAreaTo: string;
                const InvoiceStartDate: string;
                const InvoiceStatus: string;
                const InvoiceStatusUser: string;
                const InvoiceSupplierAmount: string;
                const InvoiceSupplierId: string;
                const InvoiceSupplierPaymentStatus: string;
                const InvoiceTotalAmount: string;
                const InvoiceTotalNoOfPkgs: string;
                const InvoiceTotalVolume: string;
                const InvoiceTotalWeight: string;
                const InvoiceType: string;
                const InvoiceTypeOfPkg: string;
                const InvoiceVehicleId: string;
                const InvoiceVehicleNumber: string;
                const InvoiceWayBillNo: string;
            }
            namespace InvoiceTripDates {
                const EndDate: string;
                const Id: string;
                const InvoiceBilling: string;
                const InvoiceClientJobNo: string;
                const InvoiceConsigneeId: string;
                const InvoiceConsignmentDate: string;
                const InvoiceConsignmentId: string;
                const InvoiceDriver: string;
                const InvoiceDriverKmFrom: string;
                const InvoiceDriverKmTo: string;
                const InvoiceEndDate: string;
                const InvoiceGpskmFrom: string;
                const InvoiceGpskmTo: string;
                const InvoiceId: string;
                const InvoiceInvoiceDate: string;
                const InvoiceInvoiceNo: string;
                const InvoiceJobNo: string;
                const InvoicePayment: string;
                const InvoicePaymentMode: string;
                const InvoicePaymentStatus: string;
                const InvoiceShipperId: string;
                const InvoiceShippingAreaFrom: string;
                const InvoiceShippingAreaTo: string;
                const InvoiceStartDate: string;
                const InvoiceStatus: string;
                const InvoiceStatusUser: string;
                const InvoiceTotalAmount: string;
                const InvoiceTotalNoOfPkgs: string;
                const InvoiceTotalVolume: string;
                const InvoiceTotalWeight: string;
                const InvoiceType: string;
                const InvoiceTypeOfPkg: string;
                const InvoiceVehicleId: string;
                const InvoiceVehicleNumber: string;
                const InvoiceWayBillNo: string;
                const StartDate: string;
            }
            namespace InvoiceVehicleDetails {
                const AccountId: string;
                const Amount: string;
                const ChargeId: string;
                const ConsignmentId: string;
                const ConsignmentVehicleDetailsId: string;
                const CountryCountryCode: string;
                const CountryCountryName: string;
                const CountryId: string;
                const CurrencyCurrencyCode: string;
                const CurrencyCurrencyName: string;
                const CurrencyId: string;
                const Date: string;
                const Description: string;
                const DisAmount: string;
                const Driver: string;
                const DriverAddress: string;
                const DriverAllowance: string;
                const DriverBasicSalary: string;
                const DriverCountryId: string;
                const DriverDesignationId: string;
                const DriverEmployeeCode: string;
                const DriverEmployeeName: string;
                const DriverEmployeeStatus: string;
                const DriverEmployeeTypeId: string;
                const DriverKmFrom: string;
                const DriverKmTo: string;
                const DriverMobileNumber: string;
                const DriverName: string;
                const DriverPassportExpiryDate: string;
                const DriverPassportNumber: string;
                const DriverResidentId: string;
                const DriverRidExpiryDate: string;
                const EndDate: string;
                const ExchangeRate: string;
                const FullName: string;
                const GpskmFrom: string;
                const GpskmTo: string;
                const Id: string;
                const InvoiceBilling: string;
                const InvoiceClientJobNo: string;
                const InvoiceConsigneeId: string;
                const InvoiceConsignmentDate: string;
                const InvoiceConsignmentId: string;
                const InvoiceDriver: string;
                const InvoiceDriverKmFrom: string;
                const InvoiceDriverKmTo: string;
                const InvoiceGpskmFrom: string;
                const InvoiceGpskmTo: string;
                const InvoiceId: string;
                const InvoiceInvoiceDate: string;
                const InvoiceInvoiceNo: string;
                const InvoiceJobNo: string;
                const InvoicePayment: string;
                const InvoicePaymentMode: string;
                const InvoicePaymentStatus: string;
                const InvoiceShipperId: string;
                const InvoiceShippingAreaFrom: string;
                const InvoiceShippingAreaTo: string;
                const InvoiceStatus: string;
                const InvoiceStatusUser: string;
                const InvoiceTotalAmount: string;
                const InvoiceTotalNoOfPkgs: string;
                const InvoiceTotalVolume: string;
                const InvoiceTotalWeight: string;
                const InvoiceType: string;
                const InvoiceTypeOfPkg: string;
                const InvoiceVehicleId: string;
                const InvoiceVehicleNumber: string;
                const InvoiceWayBillNo: string;
                const Number: string;
                const PaymentType: string;
                const Qty: string;
                const ResidentID: string;
                const ShippingAreaFrom: string;
                const ShippingAreaFromAreaName: string;
                const ShippingAreaFromDescription: string;
                const ShippingAreaTo: string;
                const ShippingAreaToAreaName: string;
                const ShippingAreaToDescription: string;
                const Slno: string;
                const StartDate: string;
                const SupplierAdvanceAmount: string;
                const SupplierAmount: string;
                const SupplierId: string;
                const SupplierPaymentStatus: string;
                const TaxAmount: string;
                const TaxPer: string;
                const TaxableAmount: string;
                const Total: string;
                const TotalAmount: string;
                const TotalAmountInLocalCurrency: string;
                const TotalNoOfPkgs: string;
                const TotalVolume: string;
                const TotalWeight: string;
                const Type: string;
                const TypeOfPkg: string;
                const TypeOfVehicle: string;
                const VehicleCharges: string;
                const VehicleDescription: string;
                const VehicleDriver: string;
                const VehicleExpiryDate: string;
                const VehicleId: string;
                const VehicleNumber: string;
                const VehiclePdoApproved: string;
                const VehicleRegistraionNumber: string;
                const VehicleRegistrationDate: string;
                const VehicleSpecifications: string;
                const VehicleThrough: string;
                const VehicleTypeOfVehicle: string;
                const VehicleVehicleModel: string;
                const VehicleVehicleNumber: string;
            }
            namespace InvoiceVehicleSpecifications {
                const Id: string;
                const InvoiceVehicleDetailCountryId: string;
                const InvoiceVehicleDetailDriver: string;
                const InvoiceVehicleDetailDriverKmFrom: string;
                const InvoiceVehicleDetailDriverKmTo: string;
                const InvoiceVehicleDetailDriverName: string;
                const InvoiceVehicleDetailEndDate: string;
                const InvoiceVehicleDetailGpskmFrom: string;
                const InvoiceVehicleDetailGpskmTo: string;
                const InvoiceVehicleDetailId: string;
                const InvoiceVehicleDetailInvoiceId: string;
                const InvoiceVehicleDetailNumber: string;
                const InvoiceVehicleDetailResidentId: string;
                const InvoiceVehicleDetailShippingAreaFrom: string;
                const InvoiceVehicleDetailShippingAreaTo: string;
                const InvoiceVehicleDetailStartDate: string;
                const InvoiceVehicleDetailSupplierAmount: string;
                const InvoiceVehicleDetailSupplierId: string;
                const InvoiceVehicleDetailSupplierPaymentStatus: string;
                const InvoiceVehicleDetailTotalNoOfPkgs: string;
                const InvoiceVehicleDetailTotalVolume: string;
                const InvoiceVehicleDetailTotalWeight: string;
                const InvoiceVehicleDetailType: string;
                const InvoiceVehicleDetailTypeOfPkg: string;
                const InvoiceVehicleDetailTypeOfVehicle: string;
                const InvoiceVehicleDetailVehicleId: string;
                const InvoiceVehicleDetailVehicleNumber: string;
                const SpecificationDescription: string;
                const SpecificationId: string;
                const SpecificationSpecifications: string;
            }
            namespace Purchase {
                const AccountAccountName: string;
                const AccountId: string;
                const Id: string;
                const PaidAmount: string;
                const Payment: string;
                const PaymentMode: string;
                const PaymentType: string;
                const PdcPaymentDetails: string;
                const PurchaseDetails: string;
                const RefNo: string;
                const SupplierId: string;
                const SupplierName: string;
                const TotalAmount: string;
                const TrxDate: string;
            }
            namespace PurchaseDetails {
                const DisAmount: string;
                const DisPer: string;
                const Id: string;
                const LineTotal: string;
                const ProductId: string;
                const ProductProductCode: string;
                const ProductProductName: string;
                const ProductUnitPrice: string;
                const PurchaseId: string;
                const PurchaseRefNo: string;
                const PurchaseTotalAmount: string;
                const PurchaseTrxDate: string;
                const Quantity: string;
                const TaxAmount: string;
                const TaxPer: string;
                const TaxableAmount: string;
                const TotalAmount: string;
                const UnitPrice: string;
            }
            namespace QuotationDetails {
                const ChargeChargeName: string;
                const ChargeChartOrder: string;
                const ChargeDescription: string;
                const ChargeId: string;
                const ChargeTaxCodeId: string;
                const ChargeTaxPer: string;
                const CurrencyCurrencyCode: string;
                const CurrencyCurrencyName: string;
                const CurrencyCurrencyUnit: string;
                const CurrencyExchangeRate: string;
                const CurrencyId: string;
                const CurrencySubCurrencyUnit: string;
                const Description: string;
                const ExchangeRate: string;
                const Id: string;
                const Quantity: string;
                const QuotationContactPerson: string;
                const QuotationCustomerId: string;
                const QuotationDate: string;
                const QuotationEmail: string;
                const QuotationEnquiryref: string;
                const QuotationFaxNo: string;
                const QuotationId: string;
                const QuotationMobile: string;
                const QuotationNote: string;
                const QuotationQuotNo: string;
                const QuotationTotalAmount: string;
                const QuotationVehicleType: string;
                const Rate: string;
                const TaxAmount: string;
                const TaxPer: string;
                const TaxableAmount: string;
                const TotalAmount: string;
                const TotalAmountInLocalCurrency: string;
                const Unit: string;
            }
            namespace Quotations {
                const ContactPerson: string;
                const CustomerAddress: string;
                const CustomerContactPerson: string;
                const CustomerCreationDate: string;
                const CustomerCustomerCode: string;
                const CustomerCustomerName: string;
                const CustomerDescription: string;
                const CustomerDueDays: string;
                const CustomerEmail: string;
                const CustomerId: string;
                const CustomerMobile: string;
                const CustomerOpening: string;
                const CustomerOpeningDate: string;
                const CustomerPlace: string;
                const CustomerTaxRegNo: string;
                const CustomerTelephone: string;
                const Date: string;
                const Email: string;
                const Enquiryref: string;
                const FaxNo: string;
                const Id: string;
                const Mobile: string;
                const Note: string;
                const QuotNo: string;
                const QuotationDetails: string;
                const QuotationType: string;
                const TermsAndConditions: string;
                const TotalAmount: string;
                const VehicleType: string;
            }
            namespace SuppliersPayment {
                const AccountAccountHeadId: string;
                const AccountAccountName: string;
                const AccountAccountNo: string;
                const AccountBankName: string;
                const AccountBrachName: string;
                const AccountId: string;
                const AccountType: string;
                const Code: string;
                const Date: string;
                const Description: string;
                const DocumentNO: string;
                const Id: string;
                const InvoiceCharges: string;
                const InvoiceVehicleDetails: string;
                const Invoices: string;
                const OldBalance: string;
                const PaymentType: string;
                const Payments: string;
                const PdcPaymentDetails: string;
                const Slno: string;
                const Status: string;
                const StatusUser: string;
                const StatusUserDisplayName: string;
                const StatusUserEmail: string;
                const StatusUserInsertDate: string;
                const StatusUserInsertUserId: string;
                const StatusUserIsActive: string;
                const StatusUserLastDirectoryUpdate: string;
                const StatusUserPasswordHash: string;
                const StatusUserPasswordSalt: string;
                const StatusUserSource: string;
                const StatusUserUpdateDate: string;
                const StatusUserUpdateUserId: string;
                const StatusUserUserImage: string;
                const StatusUserUsername: string;
                const SupplierAddress: string;
                const SupplierContactPerson: string;
                const SupplierCreationDate: string;
                const SupplierDescription: string;
                const SupplierEmail: string;
                const SupplierId: string;
                const SupplierMobile: string;
                const SupplierPlace: string;
                const SupplierSupplierCode: string;
                const SupplierSupplierName: string;
                const SupplierTelephone: string;
                const TotalAmount: string;
            }
            namespace SuppliersPaymentInvoiceCharges {
                const Amount: string;
                const Id: string;
                const InvoiceChargeFullName: string;
                const InvoiceChargesAmount: string;
                const InvoiceChargesChargeId: string;
                const InvoiceChargesCurrencyId: string;
                const InvoiceChargesDate: string;
                const InvoiceChargesDescription: string;
                const InvoiceChargesExchangeRate: string;
                const InvoiceChargesId: string;
                const InvoiceChargesInvoiceId: string;
                const InvoiceChargesInvoiceVehicleDetailId: string;
                const InvoiceChargesQty: string;
                const InvoiceChargesTotalAmount: string;
                const InvoiceChargesTotalAmountInLocalCurrency: string;
                const SuppliersPaymentAccountId: string;
                const SuppliersPaymentCode: string;
                const SuppliersPaymentDate: string;
                const SuppliersPaymentDescription: string;
                const SuppliersPaymentDocumentNo: string;
                const SuppliersPaymentId: string;
                const SuppliersPaymentOldBalance: string;
                const SuppliersPaymentPaymentType: string;
                const SuppliersPaymentStatus: string;
                const SuppliersPaymentStatusUser: string;
                const SuppliersPaymentSupplierId: string;
                const SuppliersPaymentTotalAmount: string;
            }
            namespace SuppliersPaymentInvoiceVehicleDetails {
                const Amount: string;
                const Id: string;
                const InvoiceVehicleDetailCountryId: string;
                const InvoiceVehicleDetailDriver: string;
                const InvoiceVehicleDetailDriverName: string;
                const InvoiceVehicleDetailEndDate: string;
                const InvoiceVehicleDetailFullName: string;
                const InvoiceVehicleDetailId: string;
                const InvoiceVehicleDetailInvoiceId: string;
                const InvoiceVehicleDetailNumber: string;
                const InvoiceVehicleDetailResidentId: string;
                const InvoiceVehicleDetailShippingAreaFrom: string;
                const InvoiceVehicleDetailShippingAreaTo: string;
                const InvoiceVehicleDetailStartDate: string;
                const InvoiceVehicleDetailSupplierAmount: string;
                const InvoiceVehicleDetailSupplierId: string;
                const InvoiceVehicleDetailSupplierPaymentStatus: string;
                const InvoiceVehicleDetailType: string;
                const InvoiceVehicleDetailTypeOfVehicle: string;
                const InvoiceVehicleDetailVehicleId: string;
                const InvoiceVehicleDetailVehicleNumber: string;
                const SuppliersPaymentAccountId: string;
                const SuppliersPaymentCode: string;
                const SuppliersPaymentDate: string;
                const SuppliersPaymentId: string;
                const SuppliersPaymentPaymentType: string;
                const SuppliersPaymentStatus: string;
                const SuppliersPaymentStatusUser: string;
                const SuppliersPaymentSupplierId: string;
                const SuppliersPaymentTotalAmount: string;
            }
            namespace SuppliersPaymentInvoices {
                const Id: string;
                const InvoiceBilling: string;
                const InvoiceClientJobNo: string;
                const InvoiceConsigneeId: string;
                const InvoiceConsignmentDate: string;
                const InvoiceConsignmentId: string;
                const InvoiceDriver: string;
                const InvoiceDriverKmFrom: string;
                const InvoiceDriverKmTo: string;
                const InvoiceEndDate: string;
                const InvoiceGpskmFrom: string;
                const InvoiceGpskmTo: string;
                const InvoiceId: string;
                const InvoiceInvoiceDate: string;
                const InvoiceInvoiceNo: string;
                const InvoiceJobNo: string;
                const InvoicePayment: string;
                const InvoicePaymentMode: string;
                const InvoicePaymentStatus: string;
                const InvoiceShipperId: string;
                const InvoiceShippingAreaFrom: string;
                const InvoiceShippingAreaTo: string;
                const InvoiceStartDate: string;
                const InvoiceStatus: string;
                const InvoiceStatusUser: string;
                const InvoiceSupplierAmount: string;
                const InvoiceSupplierId: string;
                const InvoiceSupplierPaymentStatus: string;
                const InvoiceTotalAmount: string;
                const InvoiceTotalNoOfPkgs: string;
                const InvoiceTotalVolume: string;
                const InvoiceTotalWeight: string;
                const InvoiceType: string;
                const InvoiceTypeOfPkg: string;
                const InvoiceVehicleId: string;
                const InvoiceVehicleNumber: string;
                const InvoiceWayBillNo: string;
                const SuppliersPaymentCode: string;
                const SuppliersPaymentDate: string;
                const SuppliersPaymentId: string;
                const SuppliersPaymentSupplierId: string;
                const SuppliersPaymentTotalAmount: string;
            }
        }
        namespace UOM {
            namespace UOM {
                const Id: string;
                const Unit: string;
            }
        }
        namespace UOMAmount {
            namespace UOMAmount {
                const Id: string;
                const Materials: string;
                const MaterialsId: string;
                const Rate: string;
                const UomId: string;
                const UomUnit: string;
            }
        }
        namespace VehicleFreight {
            namespace VehicleFreight {
                const CashCredit: string;
                const DebitAccountId: string;
                const FromPlace: string;
                const FromPlaceAreaName: string;
                const FromPlaceDescription: string;
                const Id: string;
                const LoadingExpense: string;
                const MaterialId: string;
                const Materials: string;
                const Party: string;
                const PaymentMethod: string;
                const PerTonRate: string;
                const Receipts: string;
                const ToPlace: string;
                const ToPlaceAreaName: string;
                const ToPlaceDescription: string;
                const TotalCommission: string;
                const TotalFreight: string;
                const TripDate: string;
                const TsAdvance: string;
                const TsEndKm: string;
                const TsEnddate: string;
                const TsId: string;
                const TsMileage: string;
                const TsPc: string;
                const TsProfit: string;
                const TsRto: string;
                const TsStartKm: string;
                const TsStartdate: string;
                const TsTotalCommison: string;
                const TsTotalDriverCommission: string;
                const TsTotalFright: string;
                const TsTotalKm: string;
                const TsTotalLiter: string;
                const TsTotalLoadingExpense: string;
                const TsTotalOtherExpense: string;
                const TsTotalUnloadExpense: string;
                const TsTotaldays: string;
                const TsTsNo: string;
                const TsVehicleId: string;
                const Unit: string;
                const UnitId: string;
                const UnitPrice: string;
                const UnloadingExpense: string;
                const partys: string;
                const partyy: string;
            }
        }
        namespace VehicleMovDetails {
            namespace VehicleMovDetails {
                const Advance: string;
                const CommisionDetails: string;
                const DrivertwoBata: string;
                const EndKm: string;
                const Enddate: string;
                const ExtraBill: string;
                const FuelDetails: string;
                const FuelId: string;
                const Id: string;
                const Mileage: string;
                const Payments: string;
                const Pc: string;
                const Profit: string;
                const Receipts: string;
                const Remarks: string;
                const Rto: string;
                const ServiceAmount: string;
                const StartKm: string;
                const Startdate: string;
                const Toll: string;
                const TotalCommison: string;
                const TotalDriverCommission: string;
                const TotalExpense: string;
                const TotalFright: string;
                const TotalFuelAmount: string;
                const TotalKm: string;
                const TotalLiter: string;
                const TotalLoadingExpense: string;
                const TotalOtherExpense: string;
                const TotalUnloadExpense: string;
                const Totaldays: string;
                const TsNo: string;
                const VehicleDescription: string;
                const VehicleDriver: string;
                const VehicleExpiryDate: string;
                const VehicleFreight: string;
                const VehicleId: string;
                const VehicleNumber: string;
                const VehiclePdoApproved: string;
                const VehiclePrimeMover: string;
                const VehicleRegistraionNumber: string;
                const VehicleRegistrationDate: string;
                const VehicleSupplierId: string;
                const VehicleThrough: string;
                const VehicleTypeOfVehicle: string;
                const VehicleVehicleModel: string;
                const VehicleVehicleNumber: string;
            }
        }
        namespace _Ext {
            namespace AuditLog {
                const ActionDate: string;
                const ActionType: string;
                const EntityId: string;
                const EntityTableName: string;
                const Id: string;
                const IpAddress: string;
                const NewEntity: string;
                const OldEntity: string;
                const SessionId: string;
                const UserId: string;
                const VersionNo: string;
            }
        }
    }
    namespace Forms {
        namespace Membership {
            namespace ChangePassword {
                const FormTitle: string;
                const SubmitButton: string;
                const Success: string;
            }
            namespace ForgotPassword {
                const BackToLogin: string;
                const FormInfo: string;
                const FormTitle: string;
                const SubmitButton: string;
                const Success: string;
            }
            namespace Login {
                const FacebookButton: string;
                const ForgotPassword: string;
                const FormTitle: string;
                const GoogleButton: string;
                const OR: string;
                const RememberMe: string;
                const SignInButton: string;
                const SignUpButton: string;
            }
            namespace ResetPassword {
                const BackToLogin: string;
                const EmailSubject: string;
                const FormTitle: string;
                const SubmitButton: string;
                const Success: string;
            }
            namespace SignUp {
                const AcceptTerms: string;
                const ActivateEmailSubject: string;
                const ActivationCompleteMessage: string;
                const BackToLogin: string;
                const ConfirmEmail: string;
                const ConfirmPassword: string;
                const DisplayName: string;
                const Email: string;
                const FormInfo: string;
                const FormTitle: string;
                const Password: string;
                const SubmitButton: string;
                const Success: string;
            }
        }
    }
    namespace Site {
        namespace AccessDenied {
            const ClickToChangeUser: string;
            const ClickToLogin: string;
            const LackPermissions: string;
            const NotLoggedIn: string;
            const PageTitle: string;
        }
        namespace BasicProgressDialog {
            const CancelTitle: string;
            const PleaseWait: string;
        }
        namespace BulkServiceAction {
            const AllHadErrorsFormat: string;
            const AllSuccessFormat: string;
            const ConfirmationFormat: string;
            const ErrorCount: string;
            const NothingToProcess: string;
            const SomeHadErrorsFormat: string;
            const SuccessCount: string;
        }
        namespace Dashboard {
            const ContentDescription: string;
        }
        namespace Layout {
            const FooterCopyright: string;
            const FooterInfo: string;
            const FooterRights: string;
            const GeneralSettings: string;
            const Language: string;
            const Theme: string;
            const ThemeBlack: string;
            const ThemeBlackLight: string;
            const ThemeBlue: string;
            const ThemeBlueLight: string;
            const ThemeGreen: string;
            const ThemeGreenLight: string;
            const ThemePurple: string;
            const ThemePurpleLight: string;
            const ThemeRed: string;
            const ThemeRedLight: string;
            const ThemeYellow: string;
            const ThemeYellowLight: string;
        }
        namespace RolePermissionDialog {
            const DialogTitle: string;
            const EditButton: string;
            const SaveSuccess: string;
        }
        namespace UserDialog {
            const EditPermissionsButton: string;
            const EditRolesButton: string;
        }
        namespace UserPermissionDialog {
            const DialogTitle: string;
            const Grant: string;
            const Permission: string;
            const Revoke: string;
            const SaveSuccess: string;
        }
        namespace UserRoleDialog {
            const DialogTitle: string;
            const SaveSuccess: string;
        }
        namespace ValidationError {
            const Title: string;
        }
    }
    namespace Validation {
        const AuthenticationError: string;
        const CantFindUserWithEmail: string;
        const CurrentPasswordMismatch: string;
        const DeleteForeignKeyError: string;
        const EmailConfirm: string;
        const EmailInUse: string;
        const InvalidActivateToken: string;
        const InvalidResetToken: string;
        const MinRequiredPasswordLength: string;
        const SavePrimaryKeyError: string;
    }
}
declare namespace SerExtraCore.Transactions {
    class ClearanceColumns {
        static readonly columnsKey = "Transactions.Clearance";
    }
}
declare namespace SerExtraCore.Transactions {
    interface ClearanceForm {
        Mblno: Serenity.StringEditor;
        Mbldate: Serenity.DateEditor;
        Hblno: Serenity.StringEditor;
        Hbldate: Serenity.DateEditor;
        Eta: Serenity.DateTimeEditor;
        Etd: Serenity.DateTimeEditor;
        Status: Serenity.LookupEditor;
        PortLoading: Serenity.LookupEditor;
        PortDischarge: Serenity.LookupEditor;
        Attachment: Serenity.MultipleImageUploadEditor;
        Shipper: Serenity.LookupEditor;
        Consignee: Serenity.LookupEditor;
        Vessel: Serenity.StringEditor;
        ContainerNo: Serenity.StringEditor;
        JobRef: Serenity.StringEditor;
        CustomerRef: Serenity.StringEditor;
        PackageType: Serenity.StringEditor;
        Weight: Serenity.StringEditor;
        ChargeableWeight: Serenity.StringEditor;
        NoOfPackages: Serenity.DecimalEditor;
        Volume: Serenity.DecimalEditor;
    }
    class ClearanceForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.Clearance";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface ClearanceRow {
        Id?: number;
        Mblno?: string;
        Mbldate?: string;
        Hblno?: string;
        Hbldate?: string;
        Eta?: string;
        Etd?: string;
        Status?: number;
        Attachment?: string;
        PortLoading?: number;
        PortDischarge?: number;
        Shipper?: number;
        Consignee?: number;
        Vessel?: string;
        ContainerNo?: string;
        JobRef?: string;
        CustomerRef?: string;
        PackageType?: string;
        Weight?: string;
        ChargeableWeight?: string;
        NoOfPackages?: number;
        Volume?: number;
        Status1?: string;
        PortLoadingPortName?: string;
        PortLoadingCountryId?: number;
        PortDischargePortName?: string;
        PortDischargeCountryId?: number;
        ShipperCustomerCode?: string;
        ShipperCustomerName?: string;
        ShipperAddress?: string;
        ShipperPlace?: string;
        ShipperTelephone?: string;
        ShipperEmail?: string;
        ShipperContactPerson?: string;
        ShipperMobile?: string;
        ShipperCreationDate?: string;
        ShipperDescription?: string;
        ShipperDueDays?: number;
        ShipperOpening?: number;
        ShipperOpeningDate?: string;
        ShipperTaxRegNo?: string;
        ConsigneeCustomerCode?: string;
        ConsigneeCustomerName?: string;
        ConsigneeAddress?: string;
        ConsigneePlace?: string;
        ConsigneeTelephone?: string;
        ConsigneeEmail?: string;
        ConsigneeContactPerson?: string;
        ConsigneeMobile?: string;
        ConsigneeCreationDate?: string;
        ConsigneeDescription?: string;
        ConsigneeDueDays?: number;
        ConsigneeOpening?: number;
        ConsigneeOpeningDate?: string;
        ConsigneeTaxRegNo?: string;
    }
    namespace ClearanceRow {
        const idProperty = "Id";
        const nameProperty = "Mblno";
        const localTextPrefix = "Transactions.Clearance";
        const lookupKey = "Transactions.Clearance";
        function getLookup(): Q.Lookup<ClearanceRow>;
        const deletePermission = "Transactions:Clearance";
        const insertPermission = "Transactions:Clearance";
        const readPermission = "Transactions:Clearance";
        const updatePermission = "Transactions:Clearance";
        const enum Fields {
            Id = "Id",
            Mblno = "Mblno",
            Mbldate = "Mbldate",
            Hblno = "Hblno",
            Hbldate = "Hbldate",
            Eta = "Eta",
            Etd = "Etd",
            Status = "Status",
            Attachment = "Attachment",
            PortLoading = "PortLoading",
            PortDischarge = "PortDischarge",
            Shipper = "Shipper",
            Consignee = "Consignee",
            Vessel = "Vessel",
            ContainerNo = "ContainerNo",
            JobRef = "JobRef",
            CustomerRef = "CustomerRef",
            PackageType = "PackageType",
            Weight = "Weight",
            ChargeableWeight = "ChargeableWeight",
            NoOfPackages = "NoOfPackages",
            Volume = "Volume",
            Status1 = "Status1",
            PortLoadingPortName = "PortLoadingPortName",
            PortLoadingCountryId = "PortLoadingCountryId",
            PortDischargePortName = "PortDischargePortName",
            PortDischargeCountryId = "PortDischargeCountryId",
            ShipperCustomerCode = "ShipperCustomerCode",
            ShipperCustomerName = "ShipperCustomerName",
            ShipperAddress = "ShipperAddress",
            ShipperPlace = "ShipperPlace",
            ShipperTelephone = "ShipperTelephone",
            ShipperEmail = "ShipperEmail",
            ShipperContactPerson = "ShipperContactPerson",
            ShipperMobile = "ShipperMobile",
            ShipperCreationDate = "ShipperCreationDate",
            ShipperDescription = "ShipperDescription",
            ShipperDueDays = "ShipperDueDays",
            ShipperOpening = "ShipperOpening",
            ShipperOpeningDate = "ShipperOpeningDate",
            ShipperTaxRegNo = "ShipperTaxRegNo",
            ConsigneeCustomerCode = "ConsigneeCustomerCode",
            ConsigneeCustomerName = "ConsigneeCustomerName",
            ConsigneeAddress = "ConsigneeAddress",
            ConsigneePlace = "ConsigneePlace",
            ConsigneeTelephone = "ConsigneeTelephone",
            ConsigneeEmail = "ConsigneeEmail",
            ConsigneeContactPerson = "ConsigneeContactPerson",
            ConsigneeMobile = "ConsigneeMobile",
            ConsigneeCreationDate = "ConsigneeCreationDate",
            ConsigneeDescription = "ConsigneeDescription",
            ConsigneeDueDays = "ConsigneeDueDays",
            ConsigneeOpening = "ConsigneeOpening",
            ConsigneeOpeningDate = "ConsigneeOpeningDate",
            ConsigneeTaxRegNo = "ConsigneeTaxRegNo"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace ClearanceService {
        const baseUrl = "Transactions/Clearance";
        function Create(request: Serenity.SaveRequest<ClearanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<ClearanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClearanceRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ClearanceRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClearanceRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ClearanceRow>>;
        const enum Methods {
            Create = "Transactions/Clearance/Create",
            Update = "Transactions/Clearance/Update",
            Delete = "Transactions/Clearance/Delete",
            Retrieve = "Transactions/Clearance/Retrieve",
            List = "Transactions/Clearance/List"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    class ConsignmentChargesColumns {
        static readonly columnsKey = "Transactions.ConsignmentCharges";
    }
}
declare namespace SerExtraCore.Transactions {
    interface ConsignmentChargesForm {
        ChargeId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        UOMId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        DisAmount: Serenity.DecimalEditor;
        TaxableAmount: Serenity.DecimalEditor;
        TaxPer: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        CurrencyId: Serenity.LookupEditor;
        ExchangeRate: Serenity.DecimalEditor;
        TotalAmountInLocalCurrency: Serenity.DecimalEditor;
        SupplierAmount: Serenity.DecimalEditor;
        SupplierId: Serenity.LookupEditor;
        SupplierAdvanceAmount: Serenity.DecimalEditor;
        PaymentType: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
    }
    class ConsignmentChargesForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.ConsignmentCharges";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface ConsignmentChargesRow {
        Id?: number;
        ConsignmentId?: number;
        ChargeId?: number;
        Description?: string;
        Amount?: number;
        Qty?: number;
        TotalAmount?: number;
        CurrencyId?: number;
        ExchangeRate?: number;
        TotalAmountInLocalCurrency?: number;
        Date?: string;
        TaxPer?: number;
        TaxAmount?: number;
        TaxableAmount?: number;
        Total?: number;
        DisAmount?: number;
        Slno?: number;
        Payments?: Accounts.PaymentRow[];
        SupplierAmount?: number;
        SupplierId?: number;
        SupplierAdvanceAmount?: number;
        PaymentType?: AccountTypes;
        AccountId?: number;
        ConsignmentChargesId?: number;
        ConsignmentVehicleDetailId?: number;
        ConsignmentDate?: string;
        ConsignmentWayBillNo?: string;
        ConsignmentJobNo?: string;
        ConsignmentClientJobNo?: string;
        ConsignmentShipperId?: number;
        ConsignmentConsigneeId?: number;
        ConsignmentVehicleId?: number;
        ConsignmentType?: string;
        ConsignmentVehicleNumber?: string;
        ConsignmentDriver?: number;
        ConsignmentPayment?: number;
        ConsignmentTypeOfPkg?: string;
        ConsignmentTotalVolume?: string;
        ConsignmentTotalWeight?: string;
        ConsignmentTotalNoOfPkgs?: string;
        ConsignmentShippingAreaFrom?: number;
        ConsignmentShippingAreaTo?: number;
        ConsignmentTotalAmount?: number;
        ChargeChargeName?: string;
        ChargeDescription?: string;
        CurrencyCurrencyCode?: string;
        CurrencyCurrencyName?: string;
        CurrencyExchangeRate?: number;
        UOMId?: number;
        UomUnit?: string;
    }
    namespace ConsignmentChargesRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "Transactions.ConsignmentCharges";
        const deletePermission = "Transactions:Consignment";
        const insertPermission = "Transactions:Consignment";
        const readPermission = "Transactions:Consignment";
        const updatePermission = "Transactions:Consignment";
        const enum Fields {
            Id = "Id",
            ConsignmentId = "ConsignmentId",
            ChargeId = "ChargeId",
            Description = "Description",
            Amount = "Amount",
            Qty = "Qty",
            TotalAmount = "TotalAmount",
            CurrencyId = "CurrencyId",
            ExchangeRate = "ExchangeRate",
            TotalAmountInLocalCurrency = "TotalAmountInLocalCurrency",
            Date = "Date",
            TaxPer = "TaxPer",
            TaxAmount = "TaxAmount",
            TaxableAmount = "TaxableAmount",
            Total = "Total",
            DisAmount = "DisAmount",
            Slno = "Slno",
            Payments = "Payments",
            SupplierAmount = "SupplierAmount",
            SupplierId = "SupplierId",
            SupplierAdvanceAmount = "SupplierAdvanceAmount",
            PaymentType = "PaymentType",
            AccountId = "AccountId",
            ConsignmentChargesId = "ConsignmentChargesId",
            ConsignmentVehicleDetailId = "ConsignmentVehicleDetailId",
            ConsignmentDate = "ConsignmentDate",
            ConsignmentWayBillNo = "ConsignmentWayBillNo",
            ConsignmentJobNo = "ConsignmentJobNo",
            ConsignmentClientJobNo = "ConsignmentClientJobNo",
            ConsignmentShipperId = "ConsignmentShipperId",
            ConsignmentConsigneeId = "ConsignmentConsigneeId",
            ConsignmentVehicleId = "ConsignmentVehicleId",
            ConsignmentType = "ConsignmentType",
            ConsignmentVehicleNumber = "ConsignmentVehicleNumber",
            ConsignmentDriver = "ConsignmentDriver",
            ConsignmentPayment = "ConsignmentPayment",
            ConsignmentTypeOfPkg = "ConsignmentTypeOfPkg",
            ConsignmentTotalVolume = "ConsignmentTotalVolume",
            ConsignmentTotalWeight = "ConsignmentTotalWeight",
            ConsignmentTotalNoOfPkgs = "ConsignmentTotalNoOfPkgs",
            ConsignmentShippingAreaFrom = "ConsignmentShippingAreaFrom",
            ConsignmentShippingAreaTo = "ConsignmentShippingAreaTo",
            ConsignmentTotalAmount = "ConsignmentTotalAmount",
            ChargeChargeName = "ChargeChargeName",
            ChargeDescription = "ChargeDescription",
            CurrencyCurrencyCode = "CurrencyCurrencyCode",
            CurrencyCurrencyName = "CurrencyCurrencyName",
            CurrencyExchangeRate = "CurrencyExchangeRate",
            UOMId = "UOMId",
            UomUnit = "UomUnit"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace ConsignmentChargesService {
        const baseUrl = "Transactions/ConsignmentCharges";
        function Create(request: Serenity.SaveRequest<ConsignmentChargesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<ConsignmentChargesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConsignmentChargesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ConsignmentChargesRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConsignmentChargesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ConsignmentChargesRow>>;
        const enum Methods {
            Create = "Transactions/ConsignmentCharges/Create",
            Update = "Transactions/ConsignmentCharges/Update",
            Delete = "Transactions/ConsignmentCharges/Delete",
            Retrieve = "Transactions/ConsignmentCharges/Retrieve",
            List = "Transactions/ConsignmentCharges/List"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    class ConsignmentColumns {
        static readonly columnsKey = "Transactions.Consignment";
    }
}
declare namespace SerExtraCore.Transactions {
    interface ConsignmentForm {
        Date: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        JobNo: Serenity.StringEditor;
        LoadedDate: Serenity.DateEditor;
        WayBillNo: Serenity.StringEditor;
        ClientJobNo: Serenity.StringEditor;
        Payment: Serenity.EnumEditor;
        PaymentMode: Serenity.EnumEditor;
        ClearanceId: Serenity.LookupEditor;
        ShipperId: Serenity.LookupEditor;
        ConsigneeId: Serenity.LookupEditor;
        Billing: Serenity.LookupEditor;
        ConsignmentVehicleDetails: ConsignmentVehicleDetailsEditor;
        ChargeDetailList: ConsignmentChargeEditor;
        TotalAmount: Serenity.DecimalEditor;
        AdvancePaymentType: Serenity.EnumEditor;
        AdvanceAccountId: Serenity.LookupEditor;
        Sgst: Serenity.DecimalEditor;
        SgstAmt: Serenity.DecimalEditor;
        Cgst: Serenity.DecimalEditor;
        CgstAmt: Serenity.DecimalEditor;
        Igst: Serenity.DecimalEditor;
        IgstAmt: Serenity.DecimalEditor;
        TotalTaxAmount: Serenity.DecimalEditor;
        TotalFreightAmount: Serenity.DecimalEditor;
        TaxPaidBy: Serenity.EnumEditor;
        AdvanceAmount: Serenity.DecimalEditor;
        Extracharge: Serenity.DecimalEditor;
        BalanceAmount: Serenity.DecimalEditor;
        PdcPaymentDetails: PDCPayments.PdcPaymentDetailsEditor;
        Status: Serenity.EnumEditor;
        Expenses: Accounts.ConsignmentExpenseEditor;
        AdvanceReceipt: ReceiptEditor;
    }
    class ConsignmentForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.Consignment";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface ConsignmentRow {
        Id?: number;
        Slno?: number;
        Date?: string;
        WayBillNo?: string;
        JobNo?: string;
        ClientJobNo?: string;
        ShipperId?: number;
        ConsigneeId?: number;
        VehicleId?: number;
        Type?: string;
        VehicleNumber?: string;
        Driver?: number;
        Payment?: ConsignmentPaymentTypes;
        TypeOfPkg?: string;
        TotalVolume?: string;
        TotalWeight?: string;
        TotalNoOfPkgs?: string;
        ShippingAreaFrom?: number;
        ShippingAreaTo?: number;
        TotalAmount?: number;
        Status?: ConsignmentStatus;
        Billing?: number;
        FullName?: string;
        ClearanceId?: number;
        BillingCustomerCode?: string;
        BillingCustomerName?: string;
        ChargeDetailList?: ConsignmentChargesRow[];
        PaymentMode?: ConsignmentPaymentMode;
        Expenses?: Accounts.PaymentRow[];
        ConsignmentVehicleDetails?: ConsignmentVehicleDetailsRow[];
        ConsignmentTripDates?: ConsignmentTripDatesRow[];
        StartDate?: string;
        EndDate?: string;
        SupplierAmount?: number;
        SupplierId?: number;
        AdvanceAmount?: number;
        AdvancePaymentType?: PymentTypes;
        AdvanceAccountId?: number;
        BalanceAmount?: number;
        AdvanceReceipt?: Accounts.ReceiptRow[];
        PdcPaymentDetails?: PDCPayments.PdcPaymentDetailsRow[];
        FromLocations?: string;
        ToLocations?: string;
        ShipperCustomerCode?: string;
        ShipperCustomerName?: string;
        ShipperAddress?: string;
        ShipperPlace?: string;
        ShipperTelephone?: string;
        ShipperEmail?: string;
        ShipperContactPerson?: string;
        ShipperMobile?: string;
        ShipperCreationDate?: string;
        ShipperDescription?: string;
        ConsigneeCustomerCode?: string;
        ConsigneeCustomerName?: string;
        ConsigneeAddress?: string;
        ConsigneePlace?: string;
        ConsigneeTelephone?: string;
        ConsigneeEmail?: string;
        ConsigneeContactPerson?: string;
        ConsigneeMobile?: string;
        ConsigneeCreationDate?: string;
        ConsigneeDescription?: string;
        InvoiceNumber?: string;
        VehicleTypeOfVehicle?: number;
        VehicleThrough?: number;
        VehicleVehicleNumber?: string;
        VehicleVehicleModel?: number;
        VehicleRegistraionNumber?: string;
        VehicleDescription?: string;
        VehicleRegistrationDate?: string;
        VehicleExpiryDate?: string;
        VehicleDriver?: number;
        VehiclePdoApproved?: boolean;
        DriverEmployeeCode?: string;
        DriverEmployeeName?: string;
        DriverAddress?: string;
        DriverCountryId?: number;
        DriverEmployeeStatus?: number;
        DriverEmployeeTypeId?: number;
        DriverDesignationId?: number;
        DriverResidentId?: string;
        DriverRidExpiryDate?: string;
        DriverPassportNumber?: string;
        DriverPassportExpiryDate?: string;
        DriverMobileNumber?: string;
        DriverBasicSalary?: number;
        DriverAllowance?: number;
        ShippingAreaFromAreaName?: string;
        ShippingAreaFromDescription?: string;
        ShippingAreaToAreaName?: string;
        ShippingAreaToDescription?: string;
        TaxPaidBy?: TaxPaidBy;
        TotalTaxAmount?: number;
        Cgst?: number;
        Sgst?: number;
        Igst?: number;
        CgstAmt?: number;
        SgstAmt?: number;
        IgstAmt?: number;
        TotalFreightAmount?: number;
        Po?: string;
        LoadedDate?: string;
    }
    namespace ConsignmentRow {
        const idProperty = "Id";
        const nameProperty = "FullName";
        const localTextPrefix = "Transactions.Consignment";
        const lookupKey = "Transactions.Consignment";
        function getLookup(): Q.Lookup<ConsignmentRow>;
        const deletePermission = "Transactions:Consignment";
        const insertPermission = "Transactions:Consignment";
        const readPermission = "Transactions:Consignment";
        const updatePermission = "Transactions:Consignment";
        const enum Fields {
            Id = "Id",
            Slno = "Slno",
            Date = "Date",
            WayBillNo = "WayBillNo",
            JobNo = "JobNo",
            ClientJobNo = "ClientJobNo",
            ShipperId = "ShipperId",
            ConsigneeId = "ConsigneeId",
            VehicleId = "VehicleId",
            Type = "Type",
            VehicleNumber = "VehicleNumber",
            Driver = "Driver",
            Payment = "Payment",
            TypeOfPkg = "TypeOfPkg",
            TotalVolume = "TotalVolume",
            TotalWeight = "TotalWeight",
            TotalNoOfPkgs = "TotalNoOfPkgs",
            ShippingAreaFrom = "ShippingAreaFrom",
            ShippingAreaTo = "ShippingAreaTo",
            TotalAmount = "TotalAmount",
            Status = "Status",
            Billing = "Billing",
            FullName = "FullName",
            ClearanceId = "ClearanceId",
            BillingCustomerCode = "BillingCustomerCode",
            BillingCustomerName = "BillingCustomerName",
            ChargeDetailList = "ChargeDetailList",
            PaymentMode = "PaymentMode",
            Expenses = "Expenses",
            ConsignmentVehicleDetails = "ConsignmentVehicleDetails",
            ConsignmentTripDates = "ConsignmentTripDates",
            StartDate = "StartDate",
            EndDate = "EndDate",
            SupplierAmount = "SupplierAmount",
            SupplierId = "SupplierId",
            AdvanceAmount = "AdvanceAmount",
            AdvancePaymentType = "AdvancePaymentType",
            AdvanceAccountId = "AdvanceAccountId",
            BalanceAmount = "BalanceAmount",
            AdvanceReceipt = "AdvanceReceipt",
            PdcPaymentDetails = "PdcPaymentDetails",
            FromLocations = "FromLocations",
            ToLocations = "ToLocations",
            ShipperCustomerCode = "ShipperCustomerCode",
            ShipperCustomerName = "ShipperCustomerName",
            ShipperAddress = "ShipperAddress",
            ShipperPlace = "ShipperPlace",
            ShipperTelephone = "ShipperTelephone",
            ShipperEmail = "ShipperEmail",
            ShipperContactPerson = "ShipperContactPerson",
            ShipperMobile = "ShipperMobile",
            ShipperCreationDate = "ShipperCreationDate",
            ShipperDescription = "ShipperDescription",
            ConsigneeCustomerCode = "ConsigneeCustomerCode",
            ConsigneeCustomerName = "ConsigneeCustomerName",
            ConsigneeAddress = "ConsigneeAddress",
            ConsigneePlace = "ConsigneePlace",
            ConsigneeTelephone = "ConsigneeTelephone",
            ConsigneeEmail = "ConsigneeEmail",
            ConsigneeContactPerson = "ConsigneeContactPerson",
            ConsigneeMobile = "ConsigneeMobile",
            ConsigneeCreationDate = "ConsigneeCreationDate",
            ConsigneeDescription = "ConsigneeDescription",
            InvoiceNumber = "InvoiceNumber",
            VehicleTypeOfVehicle = "VehicleTypeOfVehicle",
            VehicleThrough = "VehicleThrough",
            VehicleVehicleNumber = "VehicleVehicleNumber",
            VehicleVehicleModel = "VehicleVehicleModel",
            VehicleRegistraionNumber = "VehicleRegistraionNumber",
            VehicleDescription = "VehicleDescription",
            VehicleRegistrationDate = "VehicleRegistrationDate",
            VehicleExpiryDate = "VehicleExpiryDate",
            VehicleDriver = "VehicleDriver",
            VehiclePdoApproved = "VehiclePdoApproved",
            DriverEmployeeCode = "DriverEmployeeCode",
            DriverEmployeeName = "DriverEmployeeName",
            DriverAddress = "DriverAddress",
            DriverCountryId = "DriverCountryId",
            DriverEmployeeStatus = "DriverEmployeeStatus",
            DriverEmployeeTypeId = "DriverEmployeeTypeId",
            DriverDesignationId = "DriverDesignationId",
            DriverResidentId = "DriverResidentId",
            DriverRidExpiryDate = "DriverRidExpiryDate",
            DriverPassportNumber = "DriverPassportNumber",
            DriverPassportExpiryDate = "DriverPassportExpiryDate",
            DriverMobileNumber = "DriverMobileNumber",
            DriverBasicSalary = "DriverBasicSalary",
            DriverAllowance = "DriverAllowance",
            ShippingAreaFromAreaName = "ShippingAreaFromAreaName",
            ShippingAreaFromDescription = "ShippingAreaFromDescription",
            ShippingAreaToAreaName = "ShippingAreaToAreaName",
            ShippingAreaToDescription = "ShippingAreaToDescription",
            TaxPaidBy = "TaxPaidBy",
            TotalTaxAmount = "TotalTaxAmount",
            Cgst = "Cgst",
            Sgst = "Sgst",
            Igst = "Igst",
            CgstAmt = "CgstAmt",
            SgstAmt = "SgstAmt",
            IgstAmt = "IgstAmt",
            TotalFreightAmount = "TotalFreightAmount",
            Po = "Po",
            LoadedDate = "LoadedDate"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace ConsignmentService {
        const baseUrl = "Transactions/Consignment";
        function Create(request: Serenity.SaveRequest<ConsignmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<ConsignmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConsignmentRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ConsignmentRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConsignmentRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ConsignmentRow>>;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;
        const enum Methods {
            Create = "Transactions/Consignment/Create",
            Update = "Transactions/Consignment/Update",
            Delete = "Transactions/Consignment/Delete",
            Retrieve = "Transactions/Consignment/Retrieve",
            List = "Transactions/Consignment/List",
            GetNextNumber = "Transactions/Consignment/GetNextNumber"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    class ConsignmentTripDatesColumns {
        static readonly columnsKey = "Transactions.ConsignmentTripDates";
    }
}
declare namespace SerExtraCore.Transactions {
    interface ConsignmentTripDatesForm {
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
    }
    class ConsignmentTripDatesForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.ConsignmentTripDates";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface ConsignmentTripDatesRow {
        Id?: number;
        ConsignmentId?: number;
        StartDate?: string;
        EndDate?: string;
        ConsignmentDate?: string;
        ConsignmentWayBillNo?: string;
        ConsignmentJobNo?: string;
        ConsignmentClientJobNo?: string;
        ConsignmentShipperId?: number;
        ConsignmentConsigneeId?: number;
        ConsignmentVehicleId?: number;
        ConsignmentType?: string;
        ConsignmentVehicleNumber?: string;
        ConsignmentDriver?: number;
        ConsignmentPayment?: number;
        ConsignmentTypeOfPkg?: string;
        ConsignmentTotalVolume?: string;
        ConsignmentTotalWeight?: string;
        ConsignmentTotalNoOfPkgs?: string;
        ConsignmentShippingAreaFrom?: number;
        ConsignmentShippingAreaTo?: number;
        ConsignmentTotalAmount?: number;
        ConsignmentStatus?: number;
        ConsignmentPaymentMode?: number;
        ConsignmentBilling?: number;
        ConsignmentStartDate?: string;
        ConsignmentEndDate?: string;
    }
    namespace ConsignmentTripDatesRow {
        const idProperty = "Id";
        const localTextPrefix = "Transactions.ConsignmentTripDates";
        const deletePermission = "Transactions:Consignment";
        const insertPermission = "Transactions:Consignment";
        const readPermission = "Transactions:Consignment";
        const updatePermission = "Transactions:Consignment";
        const enum Fields {
            Id = "Id",
            ConsignmentId = "ConsignmentId",
            StartDate = "StartDate",
            EndDate = "EndDate",
            ConsignmentDate = "ConsignmentDate",
            ConsignmentWayBillNo = "ConsignmentWayBillNo",
            ConsignmentJobNo = "ConsignmentJobNo",
            ConsignmentClientJobNo = "ConsignmentClientJobNo",
            ConsignmentShipperId = "ConsignmentShipperId",
            ConsignmentConsigneeId = "ConsignmentConsigneeId",
            ConsignmentVehicleId = "ConsignmentVehicleId",
            ConsignmentType = "ConsignmentType",
            ConsignmentVehicleNumber = "ConsignmentVehicleNumber",
            ConsignmentDriver = "ConsignmentDriver",
            ConsignmentPayment = "ConsignmentPayment",
            ConsignmentTypeOfPkg = "ConsignmentTypeOfPkg",
            ConsignmentTotalVolume = "ConsignmentTotalVolume",
            ConsignmentTotalWeight = "ConsignmentTotalWeight",
            ConsignmentTotalNoOfPkgs = "ConsignmentTotalNoOfPkgs",
            ConsignmentShippingAreaFrom = "ConsignmentShippingAreaFrom",
            ConsignmentShippingAreaTo = "ConsignmentShippingAreaTo",
            ConsignmentTotalAmount = "ConsignmentTotalAmount",
            ConsignmentStatus = "ConsignmentStatus",
            ConsignmentPaymentMode = "ConsignmentPaymentMode",
            ConsignmentBilling = "ConsignmentBilling",
            ConsignmentStartDate = "ConsignmentStartDate",
            ConsignmentEndDate = "ConsignmentEndDate"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace ConsignmentTripDatesService {
        const baseUrl = "Transactions/ConsignmentTripDates";
        function Create(request: Serenity.SaveRequest<ConsignmentTripDatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<ConsignmentTripDatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConsignmentTripDatesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ConsignmentTripDatesRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConsignmentTripDatesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ConsignmentTripDatesRow>>;
        const enum Methods {
            Create = "Transactions/ConsignmentTripDates/Create",
            Update = "Transactions/ConsignmentTripDates/Update",
            Delete = "Transactions/ConsignmentTripDates/Delete",
            Retrieve = "Transactions/ConsignmentTripDates/Retrieve",
            List = "Transactions/ConsignmentTripDates/List"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    class ConsignmentVehicleDetailsColumns {
        static readonly columnsKey = "Transactions.ConsignmentVehicleDetails";
    }
}
declare namespace SerExtraCore.Transactions {
    interface ConsignmentVehicleDetailsForm {
        TypeOfVehicle: Serenity.EnumEditor;
        VehicleId: Serenity.LookupEditor;
        Type: Serenity.StringEditor;
        VehicleNumber: Serenity.StringEditor;
        VehicleSpecifications: Serenity.LookupEditor;
        Driver: Serenity.LookupEditor;
        DriverAdvance: Serenity.IntegerEditor;
        DriverAdvancePaymentType: Serenity.EnumEditor;
        DriverAdvanceAccount: Serenity.LookupEditor;
        DriverName: Serenity.StringEditor;
        Number: Serenity.StringEditor;
        ResidentID: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        ShippingAreaFrom: Serenity.LookupEditor;
        ShippingAreaTo: Serenity.LookupEditor;
        ChargeId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        Amount: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        DisAmount: Serenity.DecimalEditor;
        TaxableAmount: Serenity.DecimalEditor;
        TaxPer: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        CurrencyId: Serenity.LookupEditor;
        ExchangeRate: Serenity.DecimalEditor;
        TotalAmountInLocalCurrency: Serenity.DecimalEditor;
        VehicleCharges: ConsignmentChargeEditor;
        SupplierAmount: Serenity.DecimalEditor;
        SupplierId: Serenity.LookupEditor;
        SupplierAdvanceAmount: Serenity.DecimalEditor;
        PaymentType: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
    }
    class ConsignmentVehicleDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.ConsignmentVehicleDetails";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface ConsignmentVehicleDetailsRow {
        Id?: number;
        ConsignmentId?: number;
        VehicleId?: number;
        Type?: string;
        VehicleNumber?: string;
        Driver?: number;
        DriverAdvance?: number;
        ShippingAreaFrom?: number;
        ShippingAreaTo?: number;
        StartDate?: string;
        EndDate?: string;
        DriverKmFrom?: number;
        DriverKmTo?: number;
        GpskmFrom?: number;
        GpskmTo?: number;
        TypeOfPkg?: string;
        TotalVolume?: string;
        TotalWeight?: string;
        TotalNoOfPkgs?: string;
        ChargeId?: number;
        Description?: string;
        Amount?: number;
        Qty?: number;
        TotalAmount?: number;
        CurrencyId?: number;
        ExchangeRate?: number;
        TotalAmountInLocalCurrency?: number;
        Date?: string;
        TaxPer?: number;
        TaxAmount?: number;
        TaxableAmount?: number;
        Total?: number;
        DisAmount?: number;
        VehicleSpecifications?: number[];
        Slno?: number;
        TypeOfVehicle?: VehicleTypes;
        SupplierAmount?: number;
        SupplierId?: number;
        SupplierAdvanceAmount?: number;
        PaymentType?: AccountTypes;
        AccountId?: number;
        DriverAdvancePaymentType?: AccountTypes;
        DriverAdvanceAccount?: number;
        Payments?: Accounts.PaymentRow[];
        VehicleCharges?: ConsignmentChargesRow[];
        DriverName?: string;
        Number?: string;
        ResidentID?: string;
        CountryId?: number;
        CountryCountryCode?: string;
        CountryCountryName?: string;
        ConsignmentDate?: string;
        ConsignmentWayBillNo?: string;
        ConsignmentJobNo?: string;
        ConsignmentClientJobNo?: string;
        ConsignmentShipperId?: number;
        ConsignmentConsigneeId?: number;
        ConsignmentVehicleId?: number;
        ConsignmentType?: string;
        ConsignmentVehicleNumber?: string;
        ConsignmentDriver?: number;
        ConsignmentPayment?: number;
        ConsignmentTypeOfPkg?: string;
        ConsignmentTotalVolume?: string;
        ConsignmentTotalWeight?: string;
        ConsignmentTotalNoOfPkgs?: string;
        ConsignmentShippingAreaFrom?: number;
        ConsignmentShippingAreaTo?: number;
        ConsignmentTotalAmount?: number;
        ConsignmentStatus?: number;
        ConsignmentPaymentMode?: number;
        ConsignmentBilling?: number;
        VehicleTypeOfVehicle?: number;
        VehicleThrough?: number;
        VehicleVehicleNumber?: string;
        VehicleVehicleModel?: number;
        VehicleRegistraionNumber?: string;
        VehicleDescription?: string;
        VehicleRegistrationDate?: string;
        VehicleExpiryDate?: string;
        VehicleDriver?: number;
        VehiclePdoApproved?: boolean;
        DriverEmployeeCode?: string;
        DriverEmployeeName?: string;
        DriverAddress?: string;
        DriverCountryId?: number;
        DriverEmployeeStatus?: number;
        DriverEmployeeTypeId?: number;
        DriverDesignationId?: number;
        DriverResidentId?: string;
        DriverRidExpiryDate?: string;
        DriverPassportNumber?: string;
        DriverPassportExpiryDate?: string;
        DriverMobileNumber?: string;
        DriverBasicSalary?: number;
        DriverAllowance?: number;
        ShippingAreaFromAreaName?: string;
        ShippingAreaFromDescription?: string;
        ShippingAreaToAreaName?: string;
        ShippingAreaToDescription?: string;
    }
    namespace ConsignmentVehicleDetailsRow {
        const idProperty = "Id";
        const nameProperty = "VehicleNumber";
        const localTextPrefix = "Transactions.ConsignmentVehicleDetails";
        const lookupKey = "Transactions.ConsignmentVehicleDetails";
        function getLookup(): Q.Lookup<ConsignmentVehicleDetailsRow>;
        const deletePermission = "Transactions:Consignment";
        const insertPermission = "Transactions:Consignment";
        const readPermission = "Transactions:Consignment";
        const updatePermission = "Transactions:Consignment";
        const enum Fields {
            Id = "Id",
            ConsignmentId = "ConsignmentId",
            VehicleId = "VehicleId",
            Type = "Type",
            VehicleNumber = "VehicleNumber",
            Driver = "Driver",
            DriverAdvance = "DriverAdvance",
            ShippingAreaFrom = "ShippingAreaFrom",
            ShippingAreaTo = "ShippingAreaTo",
            StartDate = "StartDate",
            EndDate = "EndDate",
            DriverKmFrom = "DriverKmFrom",
            DriverKmTo = "DriverKmTo",
            GpskmFrom = "GpskmFrom",
            GpskmTo = "GpskmTo",
            TypeOfPkg = "TypeOfPkg",
            TotalVolume = "TotalVolume",
            TotalWeight = "TotalWeight",
            TotalNoOfPkgs = "TotalNoOfPkgs",
            ChargeId = "ChargeId",
            Description = "Description",
            Amount = "Amount",
            Qty = "Qty",
            TotalAmount = "TotalAmount",
            CurrencyId = "CurrencyId",
            ExchangeRate = "ExchangeRate",
            TotalAmountInLocalCurrency = "TotalAmountInLocalCurrency",
            Date = "Date",
            TaxPer = "TaxPer",
            TaxAmount = "TaxAmount",
            TaxableAmount = "TaxableAmount",
            Total = "Total",
            DisAmount = "DisAmount",
            VehicleSpecifications = "VehicleSpecifications",
            Slno = "Slno",
            TypeOfVehicle = "TypeOfVehicle",
            SupplierAmount = "SupplierAmount",
            SupplierId = "SupplierId",
            SupplierAdvanceAmount = "SupplierAdvanceAmount",
            PaymentType = "PaymentType",
            AccountId = "AccountId",
            DriverAdvancePaymentType = "DriverAdvancePaymentType",
            DriverAdvanceAccount = "DriverAdvanceAccount",
            Payments = "Payments",
            VehicleCharges = "VehicleCharges",
            DriverName = "DriverName",
            Number = "Number",
            ResidentID = "ResidentID",
            CountryId = "CountryId",
            CountryCountryCode = "CountryCountryCode",
            CountryCountryName = "CountryCountryName",
            ConsignmentDate = "ConsignmentDate",
            ConsignmentWayBillNo = "ConsignmentWayBillNo",
            ConsignmentJobNo = "ConsignmentJobNo",
            ConsignmentClientJobNo = "ConsignmentClientJobNo",
            ConsignmentShipperId = "ConsignmentShipperId",
            ConsignmentConsigneeId = "ConsignmentConsigneeId",
            ConsignmentVehicleId = "ConsignmentVehicleId",
            ConsignmentType = "ConsignmentType",
            ConsignmentVehicleNumber = "ConsignmentVehicleNumber",
            ConsignmentDriver = "ConsignmentDriver",
            ConsignmentPayment = "ConsignmentPayment",
            ConsignmentTypeOfPkg = "ConsignmentTypeOfPkg",
            ConsignmentTotalVolume = "ConsignmentTotalVolume",
            ConsignmentTotalWeight = "ConsignmentTotalWeight",
            ConsignmentTotalNoOfPkgs = "ConsignmentTotalNoOfPkgs",
            ConsignmentShippingAreaFrom = "ConsignmentShippingAreaFrom",
            ConsignmentShippingAreaTo = "ConsignmentShippingAreaTo",
            ConsignmentTotalAmount = "ConsignmentTotalAmount",
            ConsignmentStatus = "ConsignmentStatus",
            ConsignmentPaymentMode = "ConsignmentPaymentMode",
            ConsignmentBilling = "ConsignmentBilling",
            VehicleTypeOfVehicle = "VehicleTypeOfVehicle",
            VehicleThrough = "VehicleThrough",
            VehicleVehicleNumber = "VehicleVehicleNumber",
            VehicleVehicleModel = "VehicleVehicleModel",
            VehicleRegistraionNumber = "VehicleRegistraionNumber",
            VehicleDescription = "VehicleDescription",
            VehicleRegistrationDate = "VehicleRegistrationDate",
            VehicleExpiryDate = "VehicleExpiryDate",
            VehicleDriver = "VehicleDriver",
            VehiclePdoApproved = "VehiclePdoApproved",
            DriverEmployeeCode = "DriverEmployeeCode",
            DriverEmployeeName = "DriverEmployeeName",
            DriverAddress = "DriverAddress",
            DriverCountryId = "DriverCountryId",
            DriverEmployeeStatus = "DriverEmployeeStatus",
            DriverEmployeeTypeId = "DriverEmployeeTypeId",
            DriverDesignationId = "DriverDesignationId",
            DriverResidentId = "DriverResidentId",
            DriverRidExpiryDate = "DriverRidExpiryDate",
            DriverPassportNumber = "DriverPassportNumber",
            DriverPassportExpiryDate = "DriverPassportExpiryDate",
            DriverMobileNumber = "DriverMobileNumber",
            DriverBasicSalary = "DriverBasicSalary",
            DriverAllowance = "DriverAllowance",
            ShippingAreaFromAreaName = "ShippingAreaFromAreaName",
            ShippingAreaFromDescription = "ShippingAreaFromDescription",
            ShippingAreaToAreaName = "ShippingAreaToAreaName",
            ShippingAreaToDescription = "ShippingAreaToDescription"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace ConsignmentVehicleDetailsService {
        const baseUrl = "Transactions/ConsignmentVehicleDetails";
        function Create(request: Serenity.SaveRequest<ConsignmentVehicleDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<ConsignmentVehicleDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConsignmentVehicleDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ConsignmentVehicleDetailsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConsignmentVehicleDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ConsignmentVehicleDetailsRow>>;
        const enum Methods {
            Create = "Transactions/ConsignmentVehicleDetails/Create",
            Update = "Transactions/ConsignmentVehicleDetails/Update",
            Delete = "Transactions/ConsignmentVehicleDetails/Delete",
            Retrieve = "Transactions/ConsignmentVehicleDetails/Retrieve",
            List = "Transactions/ConsignmentVehicleDetails/List"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    class ConsignmentVehicleSpecificationsColumns {
        static readonly columnsKey = "Transactions.ConsignmentVehicleSpecifications";
    }
}
declare namespace SerExtraCore.Transactions {
    interface ConsignmentVehicleSpecificationsForm {
        ConsignmentVehicleDetailId: Serenity.IntegerEditor;
        SpecificationId: Serenity.IntegerEditor;
    }
    class ConsignmentVehicleSpecificationsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.ConsignmentVehicleSpecifications";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface ConsignmentVehicleSpecificationsRow {
        Id?: number;
        ConsignmentVehicleDetailId?: number;
        SpecificationId?: number;
        ConsignmentVehicleDetailConsignmentId?: number;
        ConsignmentVehicleDetailVehicleId?: number;
        ConsignmentVehicleDetailType?: string;
        ConsignmentVehicleDetailVehicleNumber?: string;
        ConsignmentVehicleDetailDriver?: number;
        ConsignmentVehicleDetailShippingAreaFrom?: number;
        ConsignmentVehicleDetailShippingAreaTo?: number;
        ConsignmentVehicleDetailTypeOfVehicle?: number;
        ConsignmentVehicleDetailStartDate?: string;
        ConsignmentVehicleDetailEndDate?: string;
        ConsignmentVehicleDetailDriverName?: string;
        ConsignmentVehicleDetailNumber?: string;
        ConsignmentVehicleDetailResidentId?: string;
        ConsignmentVehicleDetailCountryId?: number;
        ConsignmentVehicleDetailSupplierAmount?: number;
        ConsignmentVehicleDetailSupplierId?: number;
        ConsignmentVehicleDetailDriverKmFrom?: number;
        ConsignmentVehicleDetailDriverKmTo?: number;
        ConsignmentVehicleDetailGpskmFrom?: number;
        ConsignmentVehicleDetailGpskmTo?: number;
        ConsignmentVehicleDetailTypeOfPkg?: string;
        ConsignmentVehicleDetailTotalVolume?: string;
        ConsignmentVehicleDetailTotalWeight?: string;
        ConsignmentVehicleDetailTotalNoOfPkgs?: string;
        SpecificationSpecifications?: string;
        SpecificationDescription?: string;
    }
    namespace ConsignmentVehicleSpecificationsRow {
        const idProperty = "Id";
        const localTextPrefix = "Transactions.ConsignmentVehicleSpecifications";
        const deletePermission = "Transactions:Consignment";
        const insertPermission = "Transactions:Consignment";
        const readPermission = "Transactions:Consignment";
        const updatePermission = "Transactions:Consignment";
        const enum Fields {
            Id = "Id",
            ConsignmentVehicleDetailId = "ConsignmentVehicleDetailId",
            SpecificationId = "SpecificationId",
            ConsignmentVehicleDetailConsignmentId = "ConsignmentVehicleDetailConsignmentId",
            ConsignmentVehicleDetailVehicleId = "ConsignmentVehicleDetailVehicleId",
            ConsignmentVehicleDetailType = "ConsignmentVehicleDetailType",
            ConsignmentVehicleDetailVehicleNumber = "ConsignmentVehicleDetailVehicleNumber",
            ConsignmentVehicleDetailDriver = "ConsignmentVehicleDetailDriver",
            ConsignmentVehicleDetailShippingAreaFrom = "ConsignmentVehicleDetailShippingAreaFrom",
            ConsignmentVehicleDetailShippingAreaTo = "ConsignmentVehicleDetailShippingAreaTo",
            ConsignmentVehicleDetailTypeOfVehicle = "ConsignmentVehicleDetailTypeOfVehicle",
            ConsignmentVehicleDetailStartDate = "ConsignmentVehicleDetailStartDate",
            ConsignmentVehicleDetailEndDate = "ConsignmentVehicleDetailEndDate",
            ConsignmentVehicleDetailDriverName = "ConsignmentVehicleDetailDriverName",
            ConsignmentVehicleDetailNumber = "ConsignmentVehicleDetailNumber",
            ConsignmentVehicleDetailResidentId = "ConsignmentVehicleDetailResidentId",
            ConsignmentVehicleDetailCountryId = "ConsignmentVehicleDetailCountryId",
            ConsignmentVehicleDetailSupplierAmount = "ConsignmentVehicleDetailSupplierAmount",
            ConsignmentVehicleDetailSupplierId = "ConsignmentVehicleDetailSupplierId",
            ConsignmentVehicleDetailDriverKmFrom = "ConsignmentVehicleDetailDriverKmFrom",
            ConsignmentVehicleDetailDriverKmTo = "ConsignmentVehicleDetailDriverKmTo",
            ConsignmentVehicleDetailGpskmFrom = "ConsignmentVehicleDetailGpskmFrom",
            ConsignmentVehicleDetailGpskmTo = "ConsignmentVehicleDetailGpskmTo",
            ConsignmentVehicleDetailTypeOfPkg = "ConsignmentVehicleDetailTypeOfPkg",
            ConsignmentVehicleDetailTotalVolume = "ConsignmentVehicleDetailTotalVolume",
            ConsignmentVehicleDetailTotalWeight = "ConsignmentVehicleDetailTotalWeight",
            ConsignmentVehicleDetailTotalNoOfPkgs = "ConsignmentVehicleDetailTotalNoOfPkgs",
            SpecificationSpecifications = "SpecificationSpecifications",
            SpecificationDescription = "SpecificationDescription"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace ConsignmentVehicleSpecificationsService {
        const baseUrl = "Transactions/ConsignmentVehicleSpecifications";
        function Create(request: Serenity.SaveRequest<ConsignmentVehicleSpecificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<ConsignmentVehicleSpecificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConsignmentVehicleSpecificationsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<ConsignmentVehicleSpecificationsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConsignmentVehicleSpecificationsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<ConsignmentVehicleSpecificationsRow>>;
        const enum Methods {
            Create = "Transactions/ConsignmentVehicleSpecifications/Create",
            Update = "Transactions/ConsignmentVehicleSpecifications/Update",
            Delete = "Transactions/ConsignmentVehicleSpecifications/Delete",
            Retrieve = "Transactions/ConsignmentVehicleSpecifications/Retrieve",
            List = "Transactions/ConsignmentVehicleSpecifications/List"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    interface DeliveryPrintModel extends Serenity.ServiceResponse {
        Delivery?: DeliveryServicesRow;
        Details?: DeliveryServiceDetailsRow[];
        amountinwords?: string;
    }
}
declare namespace SerExtraCore.Transactions {
    class DeliveryServiceDetailsColumns {
        static readonly columnsKey = "Transactions.DeliveryServiceDetails";
    }
}
declare namespace SerExtraCore.Transactions {
    interface DeliveryServiceDetailsForm {
        ParcelType: Serenity.StringEditor;
        ParcelTypeOtherLang: Serenity.StringEditor;
        Quantity: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
    }
    class DeliveryServiceDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.DeliveryServiceDetails";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface DeliveryServiceDetailsRow {
        Id?: number;
        DeliveryServiceId?: number;
        ParcelType?: string;
        ParcelTypeOtherLang?: string;
        Quantity?: number;
        UnitPrice?: number;
        TotalAmount?: number;
        DeliveryServiceBillNo?: string;
        DeliveryServiceTrxDate?: string;
        DeliveryServiceConsigneeId?: number;
        DeliveryServiceConsignorId?: number;
        DeliveryServiceShippingAreaFrom?: number;
        DeliveryServiceShippingAreaTo?: number;
        DeliveryServiceHandDate?: string;
        DeliveryServiceReceivedDate?: string;
        DeliveryServiceNote?: string;
        DeliveryServicePaymentType?: number;
        DeliveryServiceTotalAmount?: number;
    }
    namespace DeliveryServiceDetailsRow {
        const idProperty = "Id";
        const nameProperty = "ParcelType";
        const localTextPrefix = "Transactions.DeliveryServiceDetails";
        const deletePermission = "Transactions:DeliveryServices";
        const insertPermission = "Transactions:DeliveryServices";
        const readPermission = "Transactions:DeliveryServices";
        const updatePermission = "Transactions:DeliveryServices";
        const enum Fields {
            Id = "Id",
            DeliveryServiceId = "DeliveryServiceId",
            ParcelType = "ParcelType",
            ParcelTypeOtherLang = "ParcelTypeOtherLang",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            TotalAmount = "TotalAmount",
            DeliveryServiceBillNo = "DeliveryServiceBillNo",
            DeliveryServiceTrxDate = "DeliveryServiceTrxDate",
            DeliveryServiceConsigneeId = "DeliveryServiceConsigneeId",
            DeliveryServiceConsignorId = "DeliveryServiceConsignorId",
            DeliveryServiceShippingAreaFrom = "DeliveryServiceShippingAreaFrom",
            DeliveryServiceShippingAreaTo = "DeliveryServiceShippingAreaTo",
            DeliveryServiceHandDate = "DeliveryServiceHandDate",
            DeliveryServiceReceivedDate = "DeliveryServiceReceivedDate",
            DeliveryServiceNote = "DeliveryServiceNote",
            DeliveryServicePaymentType = "DeliveryServicePaymentType",
            DeliveryServiceTotalAmount = "DeliveryServiceTotalAmount"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace DeliveryServiceDetailsService {
        const baseUrl = "Transactions/DeliveryServiceDetails";
        function Create(request: Serenity.SaveRequest<DeliveryServiceDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<DeliveryServiceDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DeliveryServiceDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<DeliveryServiceDetailsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DeliveryServiceDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<DeliveryServiceDetailsRow>>;
        const enum Methods {
            Create = "Transactions/DeliveryServiceDetails/Create",
            Update = "Transactions/DeliveryServiceDetails/Update",
            Delete = "Transactions/DeliveryServiceDetails/Delete",
            Retrieve = "Transactions/DeliveryServiceDetails/Retrieve",
            List = "Transactions/DeliveryServiceDetails/List"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    class DeliveryServicesColumns {
        static readonly columnsKey = "Transactions.DeliveryServices";
    }
}
declare namespace SerExtraCore.Transactions {
    interface DeliveryServicesForm {
        BillNo: Serenity.StringEditor;
        TrxDate: Serenity.DateEditor;
        PaymentType: Serenity.EnumEditor;
        ConsigneeId: Serenity.LookupEditor;
        ConsignorId: Serenity.LookupEditor;
        ShippingAreaFrom: Serenity.LookupEditor;
        ShippingAreaTo: Serenity.LookupEditor;
        HandDate: Serenity.DateEditor;
        ReceivedDate: Serenity.DateEditor;
        DeliveryServiceDetails: DeliveryServiceDetailsEditor;
        TotalAmount: Serenity.DecimalEditor;
        ReceiverDetails: Serenity.TextAreaEditor;
        IDNo: Serenity.StringEditor;
        ContactNo: Serenity.StringEditor;
        PaymentTypeA: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
        DeliveryStatus: Serenity.EnumEditor;
        Note: Serenity.TextAreaEditor;
        Receipts: ReceiptEditor;
    }
    class DeliveryServicesForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.DeliveryServices";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface DeliveryServicesRow {
        Id?: number;
        BillNo?: string;
        TrxDate?: string;
        ConsigneeId?: number;
        ConsignorId?: number;
        ShippingAreaFrom?: number;
        ShippingAreaTo?: number;
        HandDate?: string;
        ReceivedDate?: string;
        Note?: string;
        PaymentType?: PaymentType;
        TotalAmount?: number;
        PaymentTypeA?: PymentTypes;
        AccountId?: number;
        DeliveryStatus?: DeliveryStatus;
        ReceiverDetails?: string;
        ContactNo?: string;
        IDNo?: string;
        ConsigneeCustomerCode?: string;
        ConsigneeCustomerName?: string;
        ConsigneeAddress?: string;
        ConsigneePlace?: string;
        ConsigneeTelephone?: string;
        ConsigneeEmail?: string;
        ConsigneeContactPerson?: string;
        ConsigneeMobile?: string;
        ConsigneeCreationDate?: string;
        ConsigneeDescription?: string;
        ConsigneeDueDays?: number;
        ConsigneeOpening?: number;
        ConsigneeOpeningDate?: string;
        ConsigneeTaxRegNo?: string;
        ConsignorCustomerCode?: string;
        ConsignorCustomerName?: string;
        ConsignorAddress?: string;
        ConsignorPlace?: string;
        ConsignorTelephone?: string;
        ConsignorEmail?: string;
        ConsignorContactPerson?: string;
        ConsignorMobile?: string;
        ConsignorCreationDate?: string;
        ConsignorDescription?: string;
        ConsignorDueDays?: number;
        ConsignorOpening?: number;
        ConsignorOpeningDate?: string;
        ConsignorTaxRegNo?: string;
        ShippingAreaFromAreaName?: string;
        ShippingAreaFromDescription?: string;
        ShippingAreaToAreaName?: string;
        ShippingAreaToDescription?: string;
        DeliveryServiceDetails?: DeliveryServiceDetailsRow[];
        Receipts?: Accounts.ReceiptRow[];
    }
    namespace DeliveryServicesRow {
        const idProperty = "Id";
        const nameProperty = "BillNo";
        const localTextPrefix = "Transactions.DeliveryServices";
        const deletePermission = "Transactions:DeliveryServices";
        const insertPermission = "Transactions:DeliveryServices";
        const readPermission = "Transactions:DeliveryServices";
        const updatePermission = "Transactions:DeliveryServices";
        const enum Fields {
            Id = "Id",
            BillNo = "BillNo",
            TrxDate = "TrxDate",
            ConsigneeId = "ConsigneeId",
            ConsignorId = "ConsignorId",
            ShippingAreaFrom = "ShippingAreaFrom",
            ShippingAreaTo = "ShippingAreaTo",
            HandDate = "HandDate",
            ReceivedDate = "ReceivedDate",
            Note = "Note",
            PaymentType = "PaymentType",
            TotalAmount = "TotalAmount",
            PaymentTypeA = "PaymentTypeA",
            AccountId = "AccountId",
            DeliveryStatus = "DeliveryStatus",
            ReceiverDetails = "ReceiverDetails",
            ContactNo = "ContactNo",
            IDNo = "IDNo",
            ConsigneeCustomerCode = "ConsigneeCustomerCode",
            ConsigneeCustomerName = "ConsigneeCustomerName",
            ConsigneeAddress = "ConsigneeAddress",
            ConsigneePlace = "ConsigneePlace",
            ConsigneeTelephone = "ConsigneeTelephone",
            ConsigneeEmail = "ConsigneeEmail",
            ConsigneeContactPerson = "ConsigneeContactPerson",
            ConsigneeMobile = "ConsigneeMobile",
            ConsigneeCreationDate = "ConsigneeCreationDate",
            ConsigneeDescription = "ConsigneeDescription",
            ConsigneeDueDays = "ConsigneeDueDays",
            ConsigneeOpening = "ConsigneeOpening",
            ConsigneeOpeningDate = "ConsigneeOpeningDate",
            ConsigneeTaxRegNo = "ConsigneeTaxRegNo",
            ConsignorCustomerCode = "ConsignorCustomerCode",
            ConsignorCustomerName = "ConsignorCustomerName",
            ConsignorAddress = "ConsignorAddress",
            ConsignorPlace = "ConsignorPlace",
            ConsignorTelephone = "ConsignorTelephone",
            ConsignorEmail = "ConsignorEmail",
            ConsignorContactPerson = "ConsignorContactPerson",
            ConsignorMobile = "ConsignorMobile",
            ConsignorCreationDate = "ConsignorCreationDate",
            ConsignorDescription = "ConsignorDescription",
            ConsignorDueDays = "ConsignorDueDays",
            ConsignorOpening = "ConsignorOpening",
            ConsignorOpeningDate = "ConsignorOpeningDate",
            ConsignorTaxRegNo = "ConsignorTaxRegNo",
            ShippingAreaFromAreaName = "ShippingAreaFromAreaName",
            ShippingAreaFromDescription = "ShippingAreaFromDescription",
            ShippingAreaToAreaName = "ShippingAreaToAreaName",
            ShippingAreaToDescription = "ShippingAreaToDescription",
            DeliveryServiceDetails = "DeliveryServiceDetails",
            Receipts = "Receipts"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace DeliveryServicesService {
        const baseUrl = "Transactions/DeliveryServices";
        function Create(request: Serenity.SaveRequest<DeliveryServicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<DeliveryServicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DeliveryServicesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<DeliveryServicesRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DeliveryServicesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<DeliveryServicesRow>>;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;
        const enum Methods {
            Create = "Transactions/DeliveryServices/Create",
            Update = "Transactions/DeliveryServices/Update",
            Delete = "Transactions/DeliveryServices/Delete",
            Retrieve = "Transactions/DeliveryServices/Retrieve",
            List = "Transactions/DeliveryServices/List",
            GetNextNumber = "Transactions/DeliveryServices/GetNextNumber"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceChargesColumns {
        static readonly columnsKey = "Transactions.InvoiceCharges";
    }
}
declare namespace SerExtraCore.Transactions {
    interface InvoiceChargesForm {
        ChargeId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        Amount: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        DisAmount: Serenity.DecimalEditor;
        TaxableAmount: Serenity.DecimalEditor;
        TaxPer: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        CurrencyId: Serenity.LookupEditor;
        ExchangeRate: Serenity.DecimalEditor;
        TotalAmountInLocalCurrency: Serenity.DecimalEditor;
        SupplierAmount: Serenity.DecimalEditor;
        SupplierId: Serenity.LookupEditor;
        SupplierAdvanceAmount: Serenity.DecimalEditor;
        PaymentType: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
        SupplierPaymentStatus: Serenity.EnumEditor;
    }
    class InvoiceChargesForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.InvoiceCharges";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface InvoiceChargesRow {
        Id?: number;
        InvoiceId?: number;
        ChargeId?: number;
        Description?: string;
        Amount?: number;
        Qty?: number;
        TotalAmount?: number;
        CurrencyId?: number;
        ExchangeRate?: number;
        TotalAmountInLocalCurrency?: number;
        Slno?: number;
        FullName?: string;
        SupplierAmount?: number;
        SupplierId?: number;
        SupplierAdvanceAmount?: number;
        PaymentType?: AccountTypes;
        AccountId?: number;
        SupplierPaymentStatus?: PaymentStatus;
        InvoiceVehicleDetailId?: number;
        InvoiceChargeVehicleDetailId?: number;
        Date?: string;
        TaxPer?: number;
        TaxAmount?: number;
        TaxableAmount?: number;
        Total?: number;
        DisAmount?: number;
        InvoiceInvoiceDate?: string;
        InvoiceInvoiceNo?: string;
        InvoiceConsignmentId?: number;
        InvoiceConsignmentDate?: string;
        InvoiceWayBillNo?: string;
        InvoiceJobNo?: string;
        InvoiceClientJobNo?: string;
        InvoiceShipperId?: number;
        InvoiceConsigneeId?: number;
        InvoiceVehicleId?: number;
        InvoiceType?: string;
        InvoiceVehicleNumber?: string;
        InvoiceDriver?: number;
        InvoicePayment?: number;
        InvoiceTypeOfPkg?: string;
        InvoiceTotalVolume?: string;
        InvoiceTotalWeight?: string;
        InvoiceTotalNoOfPkgs?: string;
        InvoiceShippingAreaFrom?: number;
        InvoiceShippingAreaTo?: number;
        InvoiceTotalAmount?: number;
        InvoiceDriverKmFrom?: number;
        InvoiceDriverKmTo?: number;
        InvoiceGpskmFrom?: number;
        InvoiceGpskmTo?: number;
        InvoiceStatus?: number;
        InvoiceStatusUser?: number;
        ChargeChargeName?: string;
        ChargeDescription?: string;
        ChargeChartOrder?: number;
        CurrencyCurrencyCode?: string;
        CurrencyCurrencyName?: string;
        CurrencyExchangeRate?: number;
        ConsignmentId?: number;
    }
    namespace InvoiceChargesRow {
        const idProperty = "Id";
        const nameProperty = "FullName";
        const localTextPrefix = "Transactions.InvoiceCharges";
        const lookupKey = "Transactions.InvoiceCharges";
        function getLookup(): Q.Lookup<InvoiceChargesRow>;
        const deletePermission = "Transactions:Invoice";
        const insertPermission = "Transactions:Invoice";
        const readPermission = "Transactions:Invoice";
        const updatePermission = "Transactions:Invoice";
        const enum Fields {
            Id = "Id",
            InvoiceId = "InvoiceId",
            ChargeId = "ChargeId",
            Description = "Description",
            Amount = "Amount",
            Qty = "Qty",
            TotalAmount = "TotalAmount",
            CurrencyId = "CurrencyId",
            ExchangeRate = "ExchangeRate",
            TotalAmountInLocalCurrency = "TotalAmountInLocalCurrency",
            Slno = "Slno",
            FullName = "FullName",
            SupplierAmount = "SupplierAmount",
            SupplierId = "SupplierId",
            SupplierAdvanceAmount = "SupplierAdvanceAmount",
            PaymentType = "PaymentType",
            AccountId = "AccountId",
            SupplierPaymentStatus = "SupplierPaymentStatus",
            InvoiceVehicleDetailId = "InvoiceVehicleDetailId",
            InvoiceChargeVehicleDetailId = "InvoiceChargeVehicleDetailId",
            Date = "Date",
            TaxPer = "TaxPer",
            TaxAmount = "TaxAmount",
            TaxableAmount = "TaxableAmount",
            Total = "Total",
            DisAmount = "DisAmount",
            InvoiceInvoiceDate = "InvoiceInvoiceDate",
            InvoiceInvoiceNo = "InvoiceInvoiceNo",
            InvoiceConsignmentId = "InvoiceConsignmentId",
            InvoiceConsignmentDate = "InvoiceConsignmentDate",
            InvoiceWayBillNo = "InvoiceWayBillNo",
            InvoiceJobNo = "InvoiceJobNo",
            InvoiceClientJobNo = "InvoiceClientJobNo",
            InvoiceShipperId = "InvoiceShipperId",
            InvoiceConsigneeId = "InvoiceConsigneeId",
            InvoiceVehicleId = "InvoiceVehicleId",
            InvoiceType = "InvoiceType",
            InvoiceVehicleNumber = "InvoiceVehicleNumber",
            InvoiceDriver = "InvoiceDriver",
            InvoicePayment = "InvoicePayment",
            InvoiceTypeOfPkg = "InvoiceTypeOfPkg",
            InvoiceTotalVolume = "InvoiceTotalVolume",
            InvoiceTotalWeight = "InvoiceTotalWeight",
            InvoiceTotalNoOfPkgs = "InvoiceTotalNoOfPkgs",
            InvoiceShippingAreaFrom = "InvoiceShippingAreaFrom",
            InvoiceShippingAreaTo = "InvoiceShippingAreaTo",
            InvoiceTotalAmount = "InvoiceTotalAmount",
            InvoiceDriverKmFrom = "InvoiceDriverKmFrom",
            InvoiceDriverKmTo = "InvoiceDriverKmTo",
            InvoiceGpskmFrom = "InvoiceGpskmFrom",
            InvoiceGpskmTo = "InvoiceGpskmTo",
            InvoiceStatus = "InvoiceStatus",
            InvoiceStatusUser = "InvoiceStatusUser",
            ChargeChargeName = "ChargeChargeName",
            ChargeDescription = "ChargeDescription",
            ChargeChartOrder = "ChargeChartOrder",
            CurrencyCurrencyCode = "CurrencyCurrencyCode",
            CurrencyCurrencyName = "CurrencyCurrencyName",
            CurrencyExchangeRate = "CurrencyExchangeRate",
            ConsignmentId = "ConsignmentId"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace InvoiceChargesService {
        const baseUrl = "Transactions/InvoiceCharges";
        function Create(request: Serenity.SaveRequest<InvoiceChargesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<InvoiceChargesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceChargesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<InvoiceChargesRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceChargesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<InvoiceChargesRow>>;
        const enum Methods {
            Create = "Transactions/InvoiceCharges/Create",
            Update = "Transactions/InvoiceCharges/Update",
            Delete = "Transactions/InvoiceCharges/Delete",
            Retrieve = "Transactions/InvoiceCharges/Retrieve",
            List = "Transactions/InvoiceCharges/List"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceCollectionColumns {
        static readonly columnsKey = "Transactions.InvoiceCollection";
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceCollectionDetailsColumns {
        static readonly columnsKey = "Transactions.InvoiceCollectionDetails";
    }
}
declare namespace SerExtraCore.Transactions {
    interface InvoiceCollectionDetailsForm {
        InvoiceId: CustomerInvoiceLookupEditor;
        Amount: Serenity.DecimalEditor;
    }
    class InvoiceCollectionDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.InvoiceCollectionDetails";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface InvoiceCollectionDetailsRow {
        Id?: number;
        InvoiceCollectionId?: number;
        InvoiceId?: number;
        Amount?: number;
        ChequeNumber?: string;
        ChequeDate?: string;
        InvoiceCollectionTrxDate?: string;
        InvoiceCollectionCollectionNumber?: string;
        InvoiceCollectionCustomerId?: number;
        InvoiceCollectionTotalAmount?: number;
        InvoiceCollectionPaymentType?: number;
        InvoiceCollectionAccountId?: number;
        InvoiceCollectionStatus?: number;
        InvoiceCollectionStatusUser?: number;
        InvoiceInvoiceDate?: string;
        InvoiceInvoiceNo?: string;
        InvoiceConsignmentId?: number;
        InvoiceConsignmentDate?: string;
        InvoiceWayBillNo?: string;
        InvoiceJobNo?: string;
        InvoiceClientJobNo?: string;
        InvoiceShipperId?: number;
        InvoiceConsigneeId?: number;
        InvoiceVehicleId?: number;
        InvoiceType?: string;
        InvoiceVehicleNumber?: string;
        InvoiceDriver?: number;
        InvoicePayment?: number;
        InvoiceTypeOfPkg?: string;
        InvoiceTotalVolume?: string;
        InvoiceTotalWeight?: string;
        InvoiceTotalNoOfPkgs?: string;
        InvoiceShippingAreaFrom?: number;
        InvoiceShippingAreaTo?: number;
        InvoiceTotalAmount?: number;
        InvoiceDriverKmFrom?: number;
        InvoiceDriverKmTo?: number;
        InvoiceGpskmFrom?: number;
        InvoiceGpskmTo?: number;
        InvoiceStatus?: number;
        InvoiceStatusUser?: number;
        InvoicePaymentStatus?: number;
    }
    namespace InvoiceCollectionDetailsRow {
        const idProperty = "Id";
        const nameProperty = "ChequeNumber";
        const localTextPrefix = "Transactions.InvoiceCollectionDetails";
        const deletePermission = "Transactions:InvoiceCollection";
        const insertPermission = "Transactions:InvoiceCollection";
        const readPermission = "Transactions:InvoiceCollection";
        const updatePermission = "Transactions:InvoiceCollection";
        const enum Fields {
            Id = "Id",
            InvoiceCollectionId = "InvoiceCollectionId",
            InvoiceId = "InvoiceId",
            Amount = "Amount",
            ChequeNumber = "ChequeNumber",
            ChequeDate = "ChequeDate",
            InvoiceCollectionTrxDate = "InvoiceCollectionTrxDate",
            InvoiceCollectionCollectionNumber = "InvoiceCollectionCollectionNumber",
            InvoiceCollectionCustomerId = "InvoiceCollectionCustomerId",
            InvoiceCollectionTotalAmount = "InvoiceCollectionTotalAmount",
            InvoiceCollectionPaymentType = "InvoiceCollectionPaymentType",
            InvoiceCollectionAccountId = "InvoiceCollectionAccountId",
            InvoiceCollectionStatus = "InvoiceCollectionStatus",
            InvoiceCollectionStatusUser = "InvoiceCollectionStatusUser",
            InvoiceInvoiceDate = "InvoiceInvoiceDate",
            InvoiceInvoiceNo = "InvoiceInvoiceNo",
            InvoiceConsignmentId = "InvoiceConsignmentId",
            InvoiceConsignmentDate = "InvoiceConsignmentDate",
            InvoiceWayBillNo = "InvoiceWayBillNo",
            InvoiceJobNo = "InvoiceJobNo",
            InvoiceClientJobNo = "InvoiceClientJobNo",
            InvoiceShipperId = "InvoiceShipperId",
            InvoiceConsigneeId = "InvoiceConsigneeId",
            InvoiceVehicleId = "InvoiceVehicleId",
            InvoiceType = "InvoiceType",
            InvoiceVehicleNumber = "InvoiceVehicleNumber",
            InvoiceDriver = "InvoiceDriver",
            InvoicePayment = "InvoicePayment",
            InvoiceTypeOfPkg = "InvoiceTypeOfPkg",
            InvoiceTotalVolume = "InvoiceTotalVolume",
            InvoiceTotalWeight = "InvoiceTotalWeight",
            InvoiceTotalNoOfPkgs = "InvoiceTotalNoOfPkgs",
            InvoiceShippingAreaFrom = "InvoiceShippingAreaFrom",
            InvoiceShippingAreaTo = "InvoiceShippingAreaTo",
            InvoiceTotalAmount = "InvoiceTotalAmount",
            InvoiceDriverKmFrom = "InvoiceDriverKmFrom",
            InvoiceDriverKmTo = "InvoiceDriverKmTo",
            InvoiceGpskmFrom = "InvoiceGpskmFrom",
            InvoiceGpskmTo = "InvoiceGpskmTo",
            InvoiceStatus = "InvoiceStatus",
            InvoiceStatusUser = "InvoiceStatusUser",
            InvoicePaymentStatus = "InvoicePaymentStatus"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace InvoiceCollectionDetailsService {
        const baseUrl = "Transactions/InvoiceCollectionDetails";
        function Create(request: Serenity.SaveRequest<InvoiceCollectionDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<InvoiceCollectionDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceCollectionDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<InvoiceCollectionDetailsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceCollectionDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<InvoiceCollectionDetailsRow>>;
        const enum Methods {
            Create = "Transactions/InvoiceCollectionDetails/Create",
            Update = "Transactions/InvoiceCollectionDetails/Update",
            Delete = "Transactions/InvoiceCollectionDetails/Delete",
            Retrieve = "Transactions/InvoiceCollectionDetails/Retrieve",
            List = "Transactions/InvoiceCollectionDetails/List"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    interface InvoiceCollectionForm {
        TrxDate: Serenity.DateEditor;
        CollectionNumber: Serenity.StringEditor;
        CustomerId: Serenity.LookupEditor;
        DetailList: InvoiceCollectonDetailsEditor;
        TotalAmount: Serenity.DecimalEditor;
        PaymentType: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
        PdcPaymentDetails: PDCPayments.PdcPaymentDetailsEditor;
        Status: Serenity.EnumEditor;
        StatusUser: Serenity.LookupEditor;
        Receipts: ReceiptEditor;
    }
    class InvoiceCollectionForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.InvoiceCollection";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface InvoiceCollectionRow {
        Id?: number;
        TrxDate?: string;
        CollectionNumber?: string;
        CustomerId?: number;
        TotalAmount?: number;
        PaymentType?: PymentTypes;
        AccountId?: number;
        Status?: InvoiceStatus;
        StatusUser?: number;
        Slno?: number;
        DetailList?: InvoiceCollectionDetailsRow[];
        Receipts?: Accounts.ReceiptRow[];
        PdcPaymentDetails?: PDCPayments.PdcPaymentDetailsRow[];
        CustomerCustomerCode?: string;
        CustomerCustomerName?: string;
        CustomerAddress?: string;
        CustomerPlace?: string;
        CustomerTelephone?: string;
        CustomerEmail?: string;
        CustomerContactPerson?: string;
        CustomerMobile?: string;
        CustomerCreationDate?: string;
        CustomerDescription?: string;
        AccountType?: number;
        AccountAccountName?: string;
        AccountAccountNo?: string;
        AccountBankName?: string;
        AccountBrachName?: string;
        AccountAccountHeadId?: number;
        StatusUserUsername?: string;
        StatusUserDisplayName?: string;
        StatusUserEmail?: string;
        StatusUserSource?: string;
        StatusUserPasswordHash?: string;
        StatusUserPasswordSalt?: string;
        StatusUserLastDirectoryUpdate?: string;
        StatusUserUserImage?: string;
        StatusUserInsertDate?: string;
        StatusUserInsertUserId?: number;
        StatusUserUpdateDate?: string;
        StatusUserUpdateUserId?: number;
        StatusUserIsActive?: number;
    }
    namespace InvoiceCollectionRow {
        const idProperty = "Id";
        const nameProperty = "CollectionNumber";
        const localTextPrefix = "Transactions.InvoiceCollection";
        const deletePermission = "Transactions:InvoiceCollection";
        const insertPermission = "Transactions:InvoiceCollection";
        const readPermission = "Transactions:InvoiceCollection";
        const updatePermission = "Transactions:InvoiceCollection";
        const enum Fields {
            Id = "Id",
            TrxDate = "TrxDate",
            CollectionNumber = "CollectionNumber",
            CustomerId = "CustomerId",
            TotalAmount = "TotalAmount",
            PaymentType = "PaymentType",
            AccountId = "AccountId",
            Status = "Status",
            StatusUser = "StatusUser",
            Slno = "Slno",
            DetailList = "DetailList",
            Receipts = "Receipts",
            PdcPaymentDetails = "PdcPaymentDetails",
            CustomerCustomerCode = "CustomerCustomerCode",
            CustomerCustomerName = "CustomerCustomerName",
            CustomerAddress = "CustomerAddress",
            CustomerPlace = "CustomerPlace",
            CustomerTelephone = "CustomerTelephone",
            CustomerEmail = "CustomerEmail",
            CustomerContactPerson = "CustomerContactPerson",
            CustomerMobile = "CustomerMobile",
            CustomerCreationDate = "CustomerCreationDate",
            CustomerDescription = "CustomerDescription",
            AccountType = "AccountType",
            AccountAccountName = "AccountAccountName",
            AccountAccountNo = "AccountAccountNo",
            AccountBankName = "AccountBankName",
            AccountBrachName = "AccountBrachName",
            AccountAccountHeadId = "AccountAccountHeadId",
            StatusUserUsername = "StatusUserUsername",
            StatusUserDisplayName = "StatusUserDisplayName",
            StatusUserEmail = "StatusUserEmail",
            StatusUserSource = "StatusUserSource",
            StatusUserPasswordHash = "StatusUserPasswordHash",
            StatusUserPasswordSalt = "StatusUserPasswordSalt",
            StatusUserLastDirectoryUpdate = "StatusUserLastDirectoryUpdate",
            StatusUserUserImage = "StatusUserUserImage",
            StatusUserInsertDate = "StatusUserInsertDate",
            StatusUserInsertUserId = "StatusUserInsertUserId",
            StatusUserUpdateDate = "StatusUserUpdateDate",
            StatusUserUpdateUserId = "StatusUserUpdateUserId",
            StatusUserIsActive = "StatusUserIsActive"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace InvoiceCollectionService {
        const baseUrl = "Transactions/InvoiceCollection";
        function Create(request: Serenity.SaveRequest<InvoiceCollectionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<InvoiceCollectionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceCollectionRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<InvoiceCollectionRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceCollectionRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<InvoiceCollectionRow>>;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;
        const enum Methods {
            Create = "Transactions/InvoiceCollection/Create",
            Update = "Transactions/InvoiceCollection/Update",
            Delete = "Transactions/InvoiceCollection/Delete",
            Retrieve = "Transactions/InvoiceCollection/Retrieve",
            List = "Transactions/InvoiceCollection/List",
            GetNextNumber = "Transactions/InvoiceCollection/GetNextNumber"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceColumns {
        static readonly columnsKey = "Transactions.Invoice";
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceDueDetailsColumns {
        static readonly columnsKey = "Transactions.InvoiceDueDetails";
    }
}
declare namespace SerExtraCore.Transactions {
    interface InvoiceDueDetailsForm {
        DueDays: Serenity.IntegerEditor;
        DueDate: Serenity.DateEditor;
        Amount: Serenity.DecimalEditor;
    }
    class InvoiceDueDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.InvoiceDueDetails";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface InvoiceDueDetailsRow {
        Id?: number;
        InvoiceId?: number;
        DueDays?: number;
        DueDate?: string;
        Amount?: number;
        InvoiceInvoiceDate?: string;
        InvoiceInvoiceNo?: string;
        InvoiceConsignmentId?: number;
        InvoiceConsignmentDate?: string;
        InvoiceWayBillNo?: string;
        InvoiceJobNo?: string;
        InvoiceClientJobNo?: string;
        InvoiceShipperId?: number;
        InvoiceConsigneeId?: number;
        InvoiceVehicleId?: number;
        InvoiceType?: string;
        InvoiceVehicleNumber?: string;
        InvoiceDriver?: number;
        InvoicePayment?: number;
        InvoiceTypeOfPkg?: string;
        InvoiceTotalVolume?: string;
        InvoiceTotalWeight?: string;
        InvoiceTotalNoOfPkgs?: string;
        InvoiceShippingAreaFrom?: number;
        InvoiceShippingAreaTo?: number;
        InvoiceTotalAmount?: number;
        InvoiceDriverKmFrom?: number;
        InvoiceDriverKmTo?: number;
        InvoiceGpskmFrom?: number;
        InvoiceGpskmTo?: number;
        InvoiceStatus?: number;
        InvoiceStatusUser?: number;
        InvoicePaymentStatus?: number;
        InvoicePaymentMode?: number;
        InvoiceBilling?: number;
        InvoiceStartDate?: string;
        InvoiceEndDate?: string;
        InvoiceSupplierAmount?: number;
        InvoiceSupplierId?: number;
        InvoiceSupplierPaymentStatus?: number;
    }
    namespace InvoiceDueDetailsRow {
        const idProperty = "Id";
        const localTextPrefix = "Transactions.InvoiceDueDetails";
        const deletePermission = "Transactions:Invoice";
        const insertPermission = "Transactions:Invoice";
        const readPermission = "Transactions:Invoice";
        const updatePermission = "Transactions:Invoice";
        const enum Fields {
            Id = "Id",
            InvoiceId = "InvoiceId",
            DueDays = "DueDays",
            DueDate = "DueDate",
            Amount = "Amount",
            InvoiceInvoiceDate = "InvoiceInvoiceDate",
            InvoiceInvoiceNo = "InvoiceInvoiceNo",
            InvoiceConsignmentId = "InvoiceConsignmentId",
            InvoiceConsignmentDate = "InvoiceConsignmentDate",
            InvoiceWayBillNo = "InvoiceWayBillNo",
            InvoiceJobNo = "InvoiceJobNo",
            InvoiceClientJobNo = "InvoiceClientJobNo",
            InvoiceShipperId = "InvoiceShipperId",
            InvoiceConsigneeId = "InvoiceConsigneeId",
            InvoiceVehicleId = "InvoiceVehicleId",
            InvoiceType = "InvoiceType",
            InvoiceVehicleNumber = "InvoiceVehicleNumber",
            InvoiceDriver = "InvoiceDriver",
            InvoicePayment = "InvoicePayment",
            InvoiceTypeOfPkg = "InvoiceTypeOfPkg",
            InvoiceTotalVolume = "InvoiceTotalVolume",
            InvoiceTotalWeight = "InvoiceTotalWeight",
            InvoiceTotalNoOfPkgs = "InvoiceTotalNoOfPkgs",
            InvoiceShippingAreaFrom = "InvoiceShippingAreaFrom",
            InvoiceShippingAreaTo = "InvoiceShippingAreaTo",
            InvoiceTotalAmount = "InvoiceTotalAmount",
            InvoiceDriverKmFrom = "InvoiceDriverKmFrom",
            InvoiceDriverKmTo = "InvoiceDriverKmTo",
            InvoiceGpskmFrom = "InvoiceGpskmFrom",
            InvoiceGpskmTo = "InvoiceGpskmTo",
            InvoiceStatus = "InvoiceStatus",
            InvoiceStatusUser = "InvoiceStatusUser",
            InvoicePaymentStatus = "InvoicePaymentStatus",
            InvoicePaymentMode = "InvoicePaymentMode",
            InvoiceBilling = "InvoiceBilling",
            InvoiceStartDate = "InvoiceStartDate",
            InvoiceEndDate = "InvoiceEndDate",
            InvoiceSupplierAmount = "InvoiceSupplierAmount",
            InvoiceSupplierId = "InvoiceSupplierId",
            InvoiceSupplierPaymentStatus = "InvoiceSupplierPaymentStatus"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace InvoiceDueDetailsService {
        const baseUrl = "Transactions/InvoiceDueDetails";
        function Create(request: Serenity.SaveRequest<InvoiceDueDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<InvoiceDueDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceDueDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<InvoiceDueDetailsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceDueDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<InvoiceDueDetailsRow>>;
        const enum Methods {
            Create = "Transactions/InvoiceDueDetails/Create",
            Update = "Transactions/InvoiceDueDetails/Update",
            Delete = "Transactions/InvoiceDueDetails/Delete",
            Retrieve = "Transactions/InvoiceDueDetails/Retrieve",
            List = "Transactions/InvoiceDueDetails/List"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    interface InvoiceForm {
        InvoiceDate: Serenity.DateEditor;
        InvoiceNo: Serenity.StringEditor;
        ConsignmentId: Serenity.LookupEditor;
        ConsignmentDate: Serenity.DateEditor;
        EndDate: Serenity.DateTimeEditor;
        WayBillNo: Serenity.StringEditor;
        JobNo: Serenity.StringEditor;
        ClientJobNo: Serenity.StringEditor;
        Payment: Serenity.EnumEditor;
        PaymentMode: Serenity.EnumEditor;
        ClearanceId: Serenity.LookupEditor;
        ShipperId: Serenity.LookupEditor;
        ConsigneeId: Serenity.LookupEditor;
        Billing: Serenity.LookupEditor;
        InvoiceVehicleDetails: InvoiceVehicleDetailsEditor;
        ChargeDetailList: InvoiceChargeEditor;
        Sgst: Serenity.DecimalEditor;
        SgstAmt: Serenity.DecimalEditor;
        Cgst: Serenity.DecimalEditor;
        CgstAmt: Serenity.DecimalEditor;
        Igst: Serenity.DecimalEditor;
        IgstAmt: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        AdvanceAmount: Serenity.DecimalEditor;
        BalanceAmount: Serenity.DecimalEditor;
        InvoiceDues: InvoiceDueDetailsEditor;
        Status: Serenity.EnumEditor;
        StatusUser: Serenity.LookupEditor;
        PaymentStatus: Serenity.EnumEditor;
        Remarks: Serenity.TextAreaEditor;
        Receipts: ReceiptEditor;
    }
    class InvoiceForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.Invoice";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface InvoiceRow {
        Id?: number;
        InvoiceDate?: string;
        InvoiceNo?: string;
        ConsignmentId?: number[];
        ConsignmentDate?: string;
        WayBillNo?: string;
        JobNo?: string;
        ClientJobNo?: string;
        ShipperId?: number;
        ConsigneeId?: number;
        VehicleId?: number;
        Type?: string;
        VehicleNumber?: string;
        Driver?: number;
        Payment?: ConsignmentPaymentTypes;
        TypeOfPkg?: string;
        TotalVolume?: string;
        TotalWeight?: string;
        TotalNoOfPkgs?: string;
        ShippingAreaFrom?: number;
        ShippingAreaTo?: number;
        TotalAmount?: number;
        DriverKmFrom?: number;
        DriverKmTo?: number;
        GpskmFrom?: number;
        GpskmTo?: number;
        Status?: InvoiceStatus;
        StatusUser?: number;
        Slno?: number;
        PaymentStatus?: PaymentStatus;
        Billing?: number;
        BillingCustomerCode?: string;
        BillingCustomerName?: string;
        FromLocations?: string;
        ToLocations?: string;
        ChargeDetailList?: InvoiceChargesRow[];
        PaymentMode?: ConsignmentPaymentMode;
        InvoiceDues?: InvoiceDueDetailsRow[];
        InvoiceVehicleDetails?: InvoiceVehicleDetailsRow[];
        StartDate?: string;
        EndDate?: string;
        ClearanceId?: number;
        SupplierAmount?: number;
        SupplierId?: number;
        SupplierPaymentStatus?: PaymentStatus;
        AdvanceAmount?: number;
        BalanceAmount?: number;
        InvoiceTripDates?: InvoiceTripDatesRow[];
        ConsignmentConsignmentDate?: string;
        ConsignmentWayBillNo?: string;
        ConsignmentJobNo?: string;
        ConsignmentClientJobNo?: string;
        ConsignmentShipperId?: number;
        ConsignmentConsigneeId?: number;
        ConsignmentVehicleId?: number;
        ConsignmentType?: string;
        ConsignmentVehicleNumber?: string;
        ConsignmentDriver?: number;
        ConsignmentPayment?: number;
        ConsignmentTypeOfPkg?: string;
        ConsignmentTotalVolume?: string;
        ConsignmentTotalWeight?: string;
        ConsignmentTotalNoOfPkgs?: string;
        ConsignmentShippingAreaFrom?: number;
        ConsignmentShippingAreaTo?: number;
        ConsignmentTotalAmount?: number;
        ShipperCustomerCode?: string;
        ShipperCustomerName?: string;
        ShipperAddress?: string;
        ShipperPlace?: string;
        ShipperTelephone?: string;
        ShipperEmail?: string;
        ShipperContactPerson?: string;
        ShipperMobile?: string;
        ShipperCreationDate?: string;
        ShipperDescription?: string;
        ConsigneeCustomerCode?: string;
        ConsigneeCustomerName?: string;
        ConsigneeAddress?: string;
        ConsigneePlace?: string;
        ConsigneeTelephone?: string;
        ConsigneeEmail?: string;
        ConsigneeContactPerson?: string;
        ConsigneeMobile?: string;
        ConsigneeCreationDate?: string;
        ConsigneeDescription?: string;
        VehicleTypeOfVehicle?: number;
        VehicleThrough?: number;
        VehicleVehicleNumber?: string;
        VehicleVehicleModel?: number;
        VehicleRegistraionNumber?: string;
        VehicleDescription?: string;
        VehicleRegistrationDate?: string;
        VehicleExpiryDate?: string;
        VehicleDriver?: number;
        VehiclePdoApproved?: boolean;
        DriverEmployeeCode?: string;
        DriverEmployeeName?: string;
        DriverAddress?: string;
        DriverCountryId?: number;
        DriverEmployeeStatus?: number;
        DriverEmployeeTypeId?: number;
        DriverDesignationId?: number;
        DriverResidentId?: string;
        DriverRidExpiryDate?: string;
        DriverPassportNumber?: string;
        DriverPassportExpiryDate?: string;
        DriverMobileNumber?: string;
        DriverBasicSalary?: number;
        DriverAllowance?: number;
        ShippingAreaFromAreaName?: string;
        ShippingAreaFromDescription?: string;
        ShippingAreaToAreaName?: string;
        ShippingAreaToDescription?: string;
        StatusUserUsername?: string;
        StatusUserDisplayName?: string;
        StatusUserEmail?: string;
        StatusUserSource?: string;
        StatusUserPasswordHash?: string;
        StatusUserPasswordSalt?: string;
        StatusUserLastDirectoryUpdate?: string;
        StatusUserUserImage?: string;
        StatusUserInsertDate?: string;
        StatusUserInsertUserId?: number;
        StatusUserUpdateDate?: string;
        StatusUserUpdateUserId?: number;
        StatusUserIsActive?: number;
        Remarks?: string;
        Receipts?: Accounts.ReceiptRow[];
        Cgst?: number;
        Sgst?: number;
        Igst?: number;
        CgstAmt?: number;
        SgstAmt?: number;
        IgstAmt?: number;
    }
    namespace InvoiceRow {
        const idProperty = "Id";
        const nameProperty = "InvoiceNo";
        const localTextPrefix = "Transactions.Invoice";
        const lookupKey = "Transactions.Invoice";
        function getLookup(): Q.Lookup<InvoiceRow>;
        const deletePermission = "Transactions:Invoice";
        const insertPermission = "Transactions:Invoice";
        const readPermission = "Transactions:Invoice";
        const updatePermission = "Transactions:Invoice";
        const enum Fields {
            Id = "Id",
            InvoiceDate = "InvoiceDate",
            InvoiceNo = "InvoiceNo",
            ConsignmentId = "ConsignmentId",
            ConsignmentDate = "ConsignmentDate",
            WayBillNo = "WayBillNo",
            JobNo = "JobNo",
            ClientJobNo = "ClientJobNo",
            ShipperId = "ShipperId",
            ConsigneeId = "ConsigneeId",
            VehicleId = "VehicleId",
            Type = "Type",
            VehicleNumber = "VehicleNumber",
            Driver = "Driver",
            Payment = "Payment",
            TypeOfPkg = "TypeOfPkg",
            TotalVolume = "TotalVolume",
            TotalWeight = "TotalWeight",
            TotalNoOfPkgs = "TotalNoOfPkgs",
            ShippingAreaFrom = "ShippingAreaFrom",
            ShippingAreaTo = "ShippingAreaTo",
            TotalAmount = "TotalAmount",
            DriverKmFrom = "DriverKmFrom",
            DriverKmTo = "DriverKmTo",
            GpskmFrom = "GpskmFrom",
            GpskmTo = "GpskmTo",
            Status = "Status",
            StatusUser = "StatusUser",
            Slno = "Slno",
            PaymentStatus = "PaymentStatus",
            Billing = "Billing",
            BillingCustomerCode = "BillingCustomerCode",
            BillingCustomerName = "BillingCustomerName",
            FromLocations = "FromLocations",
            ToLocations = "ToLocations",
            ChargeDetailList = "ChargeDetailList",
            PaymentMode = "PaymentMode",
            InvoiceDues = "InvoiceDues",
            InvoiceVehicleDetails = "InvoiceVehicleDetails",
            StartDate = "StartDate",
            EndDate = "EndDate",
            ClearanceId = "ClearanceId",
            SupplierAmount = "SupplierAmount",
            SupplierId = "SupplierId",
            SupplierPaymentStatus = "SupplierPaymentStatus",
            AdvanceAmount = "AdvanceAmount",
            BalanceAmount = "BalanceAmount",
            InvoiceTripDates = "InvoiceTripDates",
            ConsignmentConsignmentDate = "ConsignmentConsignmentDate",
            ConsignmentWayBillNo = "ConsignmentWayBillNo",
            ConsignmentJobNo = "ConsignmentJobNo",
            ConsignmentClientJobNo = "ConsignmentClientJobNo",
            ConsignmentShipperId = "ConsignmentShipperId",
            ConsignmentConsigneeId = "ConsignmentConsigneeId",
            ConsignmentVehicleId = "ConsignmentVehicleId",
            ConsignmentType = "ConsignmentType",
            ConsignmentVehicleNumber = "ConsignmentVehicleNumber",
            ConsignmentDriver = "ConsignmentDriver",
            ConsignmentPayment = "ConsignmentPayment",
            ConsignmentTypeOfPkg = "ConsignmentTypeOfPkg",
            ConsignmentTotalVolume = "ConsignmentTotalVolume",
            ConsignmentTotalWeight = "ConsignmentTotalWeight",
            ConsignmentTotalNoOfPkgs = "ConsignmentTotalNoOfPkgs",
            ConsignmentShippingAreaFrom = "ConsignmentShippingAreaFrom",
            ConsignmentShippingAreaTo = "ConsignmentShippingAreaTo",
            ConsignmentTotalAmount = "ConsignmentTotalAmount",
            ShipperCustomerCode = "ShipperCustomerCode",
            ShipperCustomerName = "ShipperCustomerName",
            ShipperAddress = "ShipperAddress",
            ShipperPlace = "ShipperPlace",
            ShipperTelephone = "ShipperTelephone",
            ShipperEmail = "ShipperEmail",
            ShipperContactPerson = "ShipperContactPerson",
            ShipperMobile = "ShipperMobile",
            ShipperCreationDate = "ShipperCreationDate",
            ShipperDescription = "ShipperDescription",
            ConsigneeCustomerCode = "ConsigneeCustomerCode",
            ConsigneeCustomerName = "ConsigneeCustomerName",
            ConsigneeAddress = "ConsigneeAddress",
            ConsigneePlace = "ConsigneePlace",
            ConsigneeTelephone = "ConsigneeTelephone",
            ConsigneeEmail = "ConsigneeEmail",
            ConsigneeContactPerson = "ConsigneeContactPerson",
            ConsigneeMobile = "ConsigneeMobile",
            ConsigneeCreationDate = "ConsigneeCreationDate",
            ConsigneeDescription = "ConsigneeDescription",
            VehicleTypeOfVehicle = "VehicleTypeOfVehicle",
            VehicleThrough = "VehicleThrough",
            VehicleVehicleNumber = "VehicleVehicleNumber",
            VehicleVehicleModel = "VehicleVehicleModel",
            VehicleRegistraionNumber = "VehicleRegistraionNumber",
            VehicleDescription = "VehicleDescription",
            VehicleRegistrationDate = "VehicleRegistrationDate",
            VehicleExpiryDate = "VehicleExpiryDate",
            VehicleDriver = "VehicleDriver",
            VehiclePdoApproved = "VehiclePdoApproved",
            DriverEmployeeCode = "DriverEmployeeCode",
            DriverEmployeeName = "DriverEmployeeName",
            DriverAddress = "DriverAddress",
            DriverCountryId = "DriverCountryId",
            DriverEmployeeStatus = "DriverEmployeeStatus",
            DriverEmployeeTypeId = "DriverEmployeeTypeId",
            DriverDesignationId = "DriverDesignationId",
            DriverResidentId = "DriverResidentId",
            DriverRidExpiryDate = "DriverRidExpiryDate",
            DriverPassportNumber = "DriverPassportNumber",
            DriverPassportExpiryDate = "DriverPassportExpiryDate",
            DriverMobileNumber = "DriverMobileNumber",
            DriverBasicSalary = "DriverBasicSalary",
            DriverAllowance = "DriverAllowance",
            ShippingAreaFromAreaName = "ShippingAreaFromAreaName",
            ShippingAreaFromDescription = "ShippingAreaFromDescription",
            ShippingAreaToAreaName = "ShippingAreaToAreaName",
            ShippingAreaToDescription = "ShippingAreaToDescription",
            StatusUserUsername = "StatusUserUsername",
            StatusUserDisplayName = "StatusUserDisplayName",
            StatusUserEmail = "StatusUserEmail",
            StatusUserSource = "StatusUserSource",
            StatusUserPasswordHash = "StatusUserPasswordHash",
            StatusUserPasswordSalt = "StatusUserPasswordSalt",
            StatusUserLastDirectoryUpdate = "StatusUserLastDirectoryUpdate",
            StatusUserUserImage = "StatusUserUserImage",
            StatusUserInsertDate = "StatusUserInsertDate",
            StatusUserInsertUserId = "StatusUserInsertUserId",
            StatusUserUpdateDate = "StatusUserUpdateDate",
            StatusUserUpdateUserId = "StatusUserUpdateUserId",
            StatusUserIsActive = "StatusUserIsActive",
            Remarks = "Remarks",
            Receipts = "Receipts",
            Cgst = "Cgst",
            Sgst = "Sgst",
            Igst = "Igst",
            CgstAmt = "CgstAmt",
            SgstAmt = "SgstAmt",
            IgstAmt = "IgstAmt"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace InvoiceService {
        const baseUrl = "Transactions/Invoice";
        function Create(request: Serenity.SaveRequest<InvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<InvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<InvoiceRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<InvoiceRow>>;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;
        function LoginUser(request: Serenity.ServiceRequest, onSuccess?: (response: string) => void, opt?: Q.ServiceOptions<any>): PromiseLike<string>;
        const enum Methods {
            Create = "Transactions/Invoice/Create",
            Update = "Transactions/Invoice/Update",
            Delete = "Transactions/Invoice/Delete",
            Retrieve = "Transactions/Invoice/Retrieve",
            List = "Transactions/Invoice/List",
            GetNextNumber = "Transactions/Invoice/GetNextNumber",
            LoginUser = "Transactions/Invoice/LoginUser"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceTripDatesColumns {
        static readonly columnsKey = "Transactions.InvoiceTripDates";
    }
}
declare namespace SerExtraCore.Transactions {
    interface InvoiceTripDatesForm {
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
    }
    class InvoiceTripDatesForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.InvoiceTripDates";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface InvoiceTripDatesRow {
        Id?: number;
        InvoiceId?: number;
        StartDate?: string;
        EndDate?: string;
        InvoiceInvoiceDate?: string;
        InvoiceInvoiceNo?: string;
        InvoiceConsignmentId?: number;
        InvoiceConsignmentDate?: string;
        InvoiceWayBillNo?: string;
        InvoiceJobNo?: string;
        InvoiceClientJobNo?: string;
        InvoiceShipperId?: number;
        InvoiceConsigneeId?: number;
        InvoiceVehicleId?: number;
        InvoiceType?: string;
        InvoiceVehicleNumber?: string;
        InvoiceDriver?: number;
        InvoicePayment?: number;
        InvoiceTypeOfPkg?: string;
        InvoiceTotalVolume?: string;
        InvoiceTotalWeight?: string;
        InvoiceTotalNoOfPkgs?: string;
        InvoiceShippingAreaFrom?: number;
        InvoiceShippingAreaTo?: number;
        InvoiceTotalAmount?: number;
        InvoiceDriverKmFrom?: number;
        InvoiceDriverKmTo?: number;
        InvoiceGpskmFrom?: number;
        InvoiceGpskmTo?: number;
        InvoiceStatus?: number;
        InvoiceStatusUser?: number;
        InvoicePaymentStatus?: number;
        InvoicePaymentMode?: number;
        InvoiceBilling?: number;
        InvoiceStartDate?: string;
        InvoiceEndDate?: string;
    }
    namespace InvoiceTripDatesRow {
        const idProperty = "Id";
        const localTextPrefix = "Transactions.InvoiceTripDates";
        const deletePermission = "Transactions:Invoice";
        const insertPermission = "Transactions:Invoice";
        const readPermission = "Transactions:Invoice";
        const updatePermission = "Transactions:Invoice";
        const enum Fields {
            Id = "Id",
            InvoiceId = "InvoiceId",
            StartDate = "StartDate",
            EndDate = "EndDate",
            InvoiceInvoiceDate = "InvoiceInvoiceDate",
            InvoiceInvoiceNo = "InvoiceInvoiceNo",
            InvoiceConsignmentId = "InvoiceConsignmentId",
            InvoiceConsignmentDate = "InvoiceConsignmentDate",
            InvoiceWayBillNo = "InvoiceWayBillNo",
            InvoiceJobNo = "InvoiceJobNo",
            InvoiceClientJobNo = "InvoiceClientJobNo",
            InvoiceShipperId = "InvoiceShipperId",
            InvoiceConsigneeId = "InvoiceConsigneeId",
            InvoiceVehicleId = "InvoiceVehicleId",
            InvoiceType = "InvoiceType",
            InvoiceVehicleNumber = "InvoiceVehicleNumber",
            InvoiceDriver = "InvoiceDriver",
            InvoicePayment = "InvoicePayment",
            InvoiceTypeOfPkg = "InvoiceTypeOfPkg",
            InvoiceTotalVolume = "InvoiceTotalVolume",
            InvoiceTotalWeight = "InvoiceTotalWeight",
            InvoiceTotalNoOfPkgs = "InvoiceTotalNoOfPkgs",
            InvoiceShippingAreaFrom = "InvoiceShippingAreaFrom",
            InvoiceShippingAreaTo = "InvoiceShippingAreaTo",
            InvoiceTotalAmount = "InvoiceTotalAmount",
            InvoiceDriverKmFrom = "InvoiceDriverKmFrom",
            InvoiceDriverKmTo = "InvoiceDriverKmTo",
            InvoiceGpskmFrom = "InvoiceGpskmFrom",
            InvoiceGpskmTo = "InvoiceGpskmTo",
            InvoiceStatus = "InvoiceStatus",
            InvoiceStatusUser = "InvoiceStatusUser",
            InvoicePaymentStatus = "InvoicePaymentStatus",
            InvoicePaymentMode = "InvoicePaymentMode",
            InvoiceBilling = "InvoiceBilling",
            InvoiceStartDate = "InvoiceStartDate",
            InvoiceEndDate = "InvoiceEndDate"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace InvoiceTripDatesService {
        const baseUrl = "Transactions/InvoiceTripDates";
        function Create(request: Serenity.SaveRequest<InvoiceTripDatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<InvoiceTripDatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceTripDatesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<InvoiceTripDatesRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceTripDatesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<InvoiceTripDatesRow>>;
        const enum Methods {
            Create = "Transactions/InvoiceTripDates/Create",
            Update = "Transactions/InvoiceTripDates/Update",
            Delete = "Transactions/InvoiceTripDates/Delete",
            Retrieve = "Transactions/InvoiceTripDates/Retrieve",
            List = "Transactions/InvoiceTripDates/List"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceVehicleDetailsColumns {
        static readonly columnsKey = "Transactions.InvoiceVehicleDetails";
    }
}
declare namespace SerExtraCore.Transactions {
    interface InvoiceVehicleDetailsForm {
        TypeOfVehicle: Serenity.EnumEditor;
        VehicleId: Serenity.LookupEditor;
        Type: Serenity.StringEditor;
        VehicleNumber: Serenity.StringEditor;
        VehicleSpecifications: Serenity.LookupEditor;
        Driver: Serenity.LookupEditor;
        DriverName: Serenity.StringEditor;
        Number: Serenity.StringEditor;
        ResidentID: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        ShippingAreaFrom: Serenity.LookupEditor;
        ShippingAreaTo: Serenity.LookupEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        ChargeId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        Amount: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        DisAmount: Serenity.DecimalEditor;
        TaxableAmount: Serenity.DecimalEditor;
        TaxPer: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        CurrencyId: Serenity.LookupEditor;
        ExchangeRate: Serenity.DecimalEditor;
        TotalAmountInLocalCurrency: Serenity.DecimalEditor;
        VehicleCharges: InvoiceChargeEditor;
        SupplierAmount: Serenity.DecimalEditor;
        SupplierId: Serenity.LookupEditor;
        SupplierAdvanceAmount: Serenity.DecimalEditor;
        PaymentType: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
        SupplierPaymentStatus: Serenity.EnumEditor;
    }
    class InvoiceVehicleDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.InvoiceVehicleDetails";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface InvoiceVehicleDetailsRow {
        Id?: number;
        InvoiceId?: number;
        VehicleId?: number;
        Type?: string;
        VehicleNumber?: string;
        Driver?: number;
        ShippingAreaFrom?: number;
        ShippingAreaTo?: number;
        StartDate?: string;
        EndDate?: string;
        Slno?: number;
        FullName?: string;
        DriverKmFrom?: number;
        DriverKmTo?: number;
        GpskmFrom?: number;
        GpskmTo?: number;
        Total?: number;
        DisAmount?: number;
        TypeOfPkg?: string;
        TotalVolume?: string;
        TotalWeight?: string;
        TotalNoOfPkgs?: string;
        ChargeId?: number;
        Description?: string;
        Amount?: number;
        Qty?: number;
        TotalAmount?: number;
        CurrencyId?: number;
        ExchangeRate?: number;
        TotalAmountInLocalCurrency?: number;
        Date?: string;
        TaxPer?: number;
        TaxAmount?: number;
        TaxableAmount?: number;
        TypeOfVehicle?: VehicleTypes;
        SupplierAmount?: number;
        SupplierId?: number;
        SupplierAdvanceAmount?: number;
        PaymentType?: AccountTypes;
        AccountId?: number;
        SupplierPaymentStatus?: PaymentStatus;
        ConsignmentVehicleDetailsId?: number;
        DriverName?: string;
        Number?: string;
        ResidentID?: string;
        CountryId?: number;
        CountryCountryCode?: string;
        CountryCountryName?: string;
        VehicleSpecifications?: number[];
        VehicleCharges?: InvoiceChargesRow[];
        InvoiceInvoiceDate?: string;
        InvoiceInvoiceNo?: string;
        InvoiceConsignmentId?: number;
        InvoiceConsignmentDate?: string;
        InvoiceWayBillNo?: string;
        InvoiceJobNo?: string;
        InvoiceClientJobNo?: string;
        InvoiceShipperId?: number;
        InvoiceConsigneeId?: number;
        InvoiceVehicleId?: number;
        InvoiceType?: string;
        InvoiceVehicleNumber?: string;
        InvoiceDriver?: number;
        InvoicePayment?: number;
        InvoiceTypeOfPkg?: string;
        InvoiceTotalVolume?: string;
        InvoiceTotalWeight?: string;
        InvoiceTotalNoOfPkgs?: string;
        InvoiceShippingAreaFrom?: number;
        InvoiceShippingAreaTo?: number;
        InvoiceTotalAmount?: number;
        InvoiceDriverKmFrom?: number;
        InvoiceDriverKmTo?: number;
        InvoiceGpskmFrom?: number;
        InvoiceGpskmTo?: number;
        InvoiceStatus?: number;
        InvoiceStatusUser?: number;
        InvoicePaymentStatus?: number;
        InvoicePaymentMode?: number;
        InvoiceBilling?: number;
        VehicleTypeOfVehicle?: number;
        VehicleThrough?: number;
        VehicleVehicleNumber?: string;
        VehicleVehicleModel?: number;
        VehicleRegistraionNumber?: string;
        VehicleDescription?: string;
        VehicleRegistrationDate?: string;
        VehicleExpiryDate?: string;
        VehicleDriver?: number;
        VehiclePdoApproved?: boolean;
        DriverEmployeeCode?: string;
        DriverEmployeeName?: string;
        DriverAddress?: string;
        DriverCountryId?: number;
        DriverEmployeeStatus?: number;
        DriverEmployeeTypeId?: number;
        DriverDesignationId?: number;
        DriverResidentId?: string;
        DriverRidExpiryDate?: string;
        DriverPassportNumber?: string;
        DriverPassportExpiryDate?: string;
        DriverMobileNumber?: string;
        DriverBasicSalary?: number;
        DriverAllowance?: number;
        ShippingAreaFromAreaName?: string;
        ShippingAreaFromDescription?: string;
        ShippingAreaToAreaName?: string;
        ShippingAreaToDescription?: string;
        CurrencyCurrencyCode?: string;
        CurrencyCurrencyName?: string;
        ConsignmentId?: number;
    }
    namespace InvoiceVehicleDetailsRow {
        const idProperty = "Id";
        const nameProperty = "FullName";
        const localTextPrefix = "Transactions.InvoiceVehicleDetails";
        const lookupKey = "Transactions.InvoiceVehicleDetails";
        function getLookup(): Q.Lookup<InvoiceVehicleDetailsRow>;
        const deletePermission = "Transactions:Invoice";
        const insertPermission = "Transactions:Invoice";
        const readPermission = "Transactions:Invoice";
        const updatePermission = "Transactions:Invoice";
        const enum Fields {
            Id = "Id",
            InvoiceId = "InvoiceId",
            VehicleId = "VehicleId",
            Type = "Type",
            VehicleNumber = "VehicleNumber",
            Driver = "Driver",
            ShippingAreaFrom = "ShippingAreaFrom",
            ShippingAreaTo = "ShippingAreaTo",
            StartDate = "StartDate",
            EndDate = "EndDate",
            Slno = "Slno",
            FullName = "FullName",
            DriverKmFrom = "DriverKmFrom",
            DriverKmTo = "DriverKmTo",
            GpskmFrom = "GpskmFrom",
            GpskmTo = "GpskmTo",
            Total = "Total",
            DisAmount = "DisAmount",
            TypeOfPkg = "TypeOfPkg",
            TotalVolume = "TotalVolume",
            TotalWeight = "TotalWeight",
            TotalNoOfPkgs = "TotalNoOfPkgs",
            ChargeId = "ChargeId",
            Description = "Description",
            Amount = "Amount",
            Qty = "Qty",
            TotalAmount = "TotalAmount",
            CurrencyId = "CurrencyId",
            ExchangeRate = "ExchangeRate",
            TotalAmountInLocalCurrency = "TotalAmountInLocalCurrency",
            Date = "Date",
            TaxPer = "TaxPer",
            TaxAmount = "TaxAmount",
            TaxableAmount = "TaxableAmount",
            TypeOfVehicle = "TypeOfVehicle",
            SupplierAmount = "SupplierAmount",
            SupplierId = "SupplierId",
            SupplierAdvanceAmount = "SupplierAdvanceAmount",
            PaymentType = "PaymentType",
            AccountId = "AccountId",
            SupplierPaymentStatus = "SupplierPaymentStatus",
            ConsignmentVehicleDetailsId = "ConsignmentVehicleDetailsId",
            DriverName = "DriverName",
            Number = "Number",
            ResidentID = "ResidentID",
            CountryId = "CountryId",
            CountryCountryCode = "CountryCountryCode",
            CountryCountryName = "CountryCountryName",
            VehicleSpecifications = "VehicleSpecifications",
            VehicleCharges = "VehicleCharges",
            InvoiceInvoiceDate = "InvoiceInvoiceDate",
            InvoiceInvoiceNo = "InvoiceInvoiceNo",
            InvoiceConsignmentId = "InvoiceConsignmentId",
            InvoiceConsignmentDate = "InvoiceConsignmentDate",
            InvoiceWayBillNo = "InvoiceWayBillNo",
            InvoiceJobNo = "InvoiceJobNo",
            InvoiceClientJobNo = "InvoiceClientJobNo",
            InvoiceShipperId = "InvoiceShipperId",
            InvoiceConsigneeId = "InvoiceConsigneeId",
            InvoiceVehicleId = "InvoiceVehicleId",
            InvoiceType = "InvoiceType",
            InvoiceVehicleNumber = "InvoiceVehicleNumber",
            InvoiceDriver = "InvoiceDriver",
            InvoicePayment = "InvoicePayment",
            InvoiceTypeOfPkg = "InvoiceTypeOfPkg",
            InvoiceTotalVolume = "InvoiceTotalVolume",
            InvoiceTotalWeight = "InvoiceTotalWeight",
            InvoiceTotalNoOfPkgs = "InvoiceTotalNoOfPkgs",
            InvoiceShippingAreaFrom = "InvoiceShippingAreaFrom",
            InvoiceShippingAreaTo = "InvoiceShippingAreaTo",
            InvoiceTotalAmount = "InvoiceTotalAmount",
            InvoiceDriverKmFrom = "InvoiceDriverKmFrom",
            InvoiceDriverKmTo = "InvoiceDriverKmTo",
            InvoiceGpskmFrom = "InvoiceGpskmFrom",
            InvoiceGpskmTo = "InvoiceGpskmTo",
            InvoiceStatus = "InvoiceStatus",
            InvoiceStatusUser = "InvoiceStatusUser",
            InvoicePaymentStatus = "InvoicePaymentStatus",
            InvoicePaymentMode = "InvoicePaymentMode",
            InvoiceBilling = "InvoiceBilling",
            VehicleTypeOfVehicle = "VehicleTypeOfVehicle",
            VehicleThrough = "VehicleThrough",
            VehicleVehicleNumber = "VehicleVehicleNumber",
            VehicleVehicleModel = "VehicleVehicleModel",
            VehicleRegistraionNumber = "VehicleRegistraionNumber",
            VehicleDescription = "VehicleDescription",
            VehicleRegistrationDate = "VehicleRegistrationDate",
            VehicleExpiryDate = "VehicleExpiryDate",
            VehicleDriver = "VehicleDriver",
            VehiclePdoApproved = "VehiclePdoApproved",
            DriverEmployeeCode = "DriverEmployeeCode",
            DriverEmployeeName = "DriverEmployeeName",
            DriverAddress = "DriverAddress",
            DriverCountryId = "DriverCountryId",
            DriverEmployeeStatus = "DriverEmployeeStatus",
            DriverEmployeeTypeId = "DriverEmployeeTypeId",
            DriverDesignationId = "DriverDesignationId",
            DriverResidentId = "DriverResidentId",
            DriverRidExpiryDate = "DriverRidExpiryDate",
            DriverPassportNumber = "DriverPassportNumber",
            DriverPassportExpiryDate = "DriverPassportExpiryDate",
            DriverMobileNumber = "DriverMobileNumber",
            DriverBasicSalary = "DriverBasicSalary",
            DriverAllowance = "DriverAllowance",
            ShippingAreaFromAreaName = "ShippingAreaFromAreaName",
            ShippingAreaFromDescription = "ShippingAreaFromDescription",
            ShippingAreaToAreaName = "ShippingAreaToAreaName",
            ShippingAreaToDescription = "ShippingAreaToDescription",
            CurrencyCurrencyCode = "CurrencyCurrencyCode",
            CurrencyCurrencyName = "CurrencyCurrencyName",
            ConsignmentId = "ConsignmentId"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace InvoiceVehicleDetailsService {
        const baseUrl = "Transactions/InvoiceVehicleDetails";
        function Create(request: Serenity.SaveRequest<InvoiceVehicleDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<InvoiceVehicleDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceVehicleDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<InvoiceVehicleDetailsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceVehicleDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<InvoiceVehicleDetailsRow>>;
        const enum Methods {
            Create = "Transactions/InvoiceVehicleDetails/Create",
            Update = "Transactions/InvoiceVehicleDetails/Update",
            Delete = "Transactions/InvoiceVehicleDetails/Delete",
            Retrieve = "Transactions/InvoiceVehicleDetails/Retrieve",
            List = "Transactions/InvoiceVehicleDetails/List"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceVehicleSpecificationsColumns {
        static readonly columnsKey = "Transactions.InvoiceVehicleSpecifications";
    }
}
declare namespace SerExtraCore.Transactions {
    interface InvoiceVehicleSpecificationsForm {
        InvoiceVehicleDetailId: Serenity.IntegerEditor;
        SpecificationId: Serenity.IntegerEditor;
    }
    class InvoiceVehicleSpecificationsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.InvoiceVehicleSpecifications";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface InvoiceVehicleSpecificationsRow {
        Id?: number;
        InvoiceVehicleDetailId?: number;
        SpecificationId?: number;
        InvoiceVehicleDetailInvoiceId?: number;
        InvoiceVehicleDetailVehicleId?: number;
        InvoiceVehicleDetailType?: string;
        InvoiceVehicleDetailVehicleNumber?: string;
        InvoiceVehicleDetailDriver?: number;
        InvoiceVehicleDetailShippingAreaFrom?: number;
        InvoiceVehicleDetailShippingAreaTo?: number;
        InvoiceVehicleDetailTypeOfVehicle?: number;
        InvoiceVehicleDetailStartDate?: string;
        InvoiceVehicleDetailEndDate?: string;
        InvoiceVehicleDetailDriverName?: string;
        InvoiceVehicleDetailNumber?: string;
        InvoiceVehicleDetailResidentId?: string;
        InvoiceVehicleDetailCountryId?: number;
        InvoiceVehicleDetailSupplierAmount?: number;
        InvoiceVehicleDetailSupplierId?: number;
        InvoiceVehicleDetailSupplierPaymentStatus?: number;
        InvoiceVehicleDetailDriverKmFrom?: number;
        InvoiceVehicleDetailDriverKmTo?: number;
        InvoiceVehicleDetailGpskmFrom?: number;
        InvoiceVehicleDetailGpskmTo?: number;
        InvoiceVehicleDetailTypeOfPkg?: string;
        InvoiceVehicleDetailTotalVolume?: string;
        InvoiceVehicleDetailTotalWeight?: string;
        InvoiceVehicleDetailTotalNoOfPkgs?: string;
        SpecificationSpecifications?: string;
        SpecificationDescription?: string;
    }
    namespace InvoiceVehicleSpecificationsRow {
        const idProperty = "Id";
        const localTextPrefix = "Transactions.InvoiceVehicleSpecifications";
        const deletePermission = "Transactions:Invoice";
        const insertPermission = "Transactions:Invoice";
        const readPermission = "Transactions:Invoice";
        const updatePermission = "Transactions:Invoice";
        const enum Fields {
            Id = "Id",
            InvoiceVehicleDetailId = "InvoiceVehicleDetailId",
            SpecificationId = "SpecificationId",
            InvoiceVehicleDetailInvoiceId = "InvoiceVehicleDetailInvoiceId",
            InvoiceVehicleDetailVehicleId = "InvoiceVehicleDetailVehicleId",
            InvoiceVehicleDetailType = "InvoiceVehicleDetailType",
            InvoiceVehicleDetailVehicleNumber = "InvoiceVehicleDetailVehicleNumber",
            InvoiceVehicleDetailDriver = "InvoiceVehicleDetailDriver",
            InvoiceVehicleDetailShippingAreaFrom = "InvoiceVehicleDetailShippingAreaFrom",
            InvoiceVehicleDetailShippingAreaTo = "InvoiceVehicleDetailShippingAreaTo",
            InvoiceVehicleDetailTypeOfVehicle = "InvoiceVehicleDetailTypeOfVehicle",
            InvoiceVehicleDetailStartDate = "InvoiceVehicleDetailStartDate",
            InvoiceVehicleDetailEndDate = "InvoiceVehicleDetailEndDate",
            InvoiceVehicleDetailDriverName = "InvoiceVehicleDetailDriverName",
            InvoiceVehicleDetailNumber = "InvoiceVehicleDetailNumber",
            InvoiceVehicleDetailResidentId = "InvoiceVehicleDetailResidentId",
            InvoiceVehicleDetailCountryId = "InvoiceVehicleDetailCountryId",
            InvoiceVehicleDetailSupplierAmount = "InvoiceVehicleDetailSupplierAmount",
            InvoiceVehicleDetailSupplierId = "InvoiceVehicleDetailSupplierId",
            InvoiceVehicleDetailSupplierPaymentStatus = "InvoiceVehicleDetailSupplierPaymentStatus",
            InvoiceVehicleDetailDriverKmFrom = "InvoiceVehicleDetailDriverKmFrom",
            InvoiceVehicleDetailDriverKmTo = "InvoiceVehicleDetailDriverKmTo",
            InvoiceVehicleDetailGpskmFrom = "InvoiceVehicleDetailGpskmFrom",
            InvoiceVehicleDetailGpskmTo = "InvoiceVehicleDetailGpskmTo",
            InvoiceVehicleDetailTypeOfPkg = "InvoiceVehicleDetailTypeOfPkg",
            InvoiceVehicleDetailTotalVolume = "InvoiceVehicleDetailTotalVolume",
            InvoiceVehicleDetailTotalWeight = "InvoiceVehicleDetailTotalWeight",
            InvoiceVehicleDetailTotalNoOfPkgs = "InvoiceVehicleDetailTotalNoOfPkgs",
            SpecificationSpecifications = "SpecificationSpecifications",
            SpecificationDescription = "SpecificationDescription"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace InvoiceVehicleSpecificationsService {
        const baseUrl = "Transactions/InvoiceVehicleSpecifications";
        function Create(request: Serenity.SaveRequest<InvoiceVehicleSpecificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<InvoiceVehicleSpecificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceVehicleSpecificationsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<InvoiceVehicleSpecificationsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceVehicleSpecificationsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<InvoiceVehicleSpecificationsRow>>;
        const enum Methods {
            Create = "Transactions/InvoiceVehicleSpecifications/Create",
            Update = "Transactions/InvoiceVehicleSpecifications/Update",
            Delete = "Transactions/InvoiceVehicleSpecifications/Delete",
            Retrieve = "Transactions/InvoiceVehicleSpecifications/Retrieve",
            List = "Transactions/InvoiceVehicleSpecifications/List"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    interface OrderDetailReportData extends Serenity.ServiceResponse {
        EntityId?: number;
        Invoice?: InvoiceRow;
        configuration?: Administration.ConfigurationRow;
        Details?: InvoiceChargesRow[];
        Customer?: Master.CustomersRow;
        totalamount?: number;
        amountinwords?: string;
        linecount?: number;
        PagingList?: PagedItems[];
        PrintDate?: string;
        User?: string;
        clearanceRow?: ClearanceRow;
    }
}
declare namespace SerExtraCore.Transactions {
    interface PagedItems {
        pageDetails?: InvoiceChargesRow[];
        rowcount?: number;
        pagenumber?: number;
    }
}
declare namespace SerExtraCore.Transactions {
    class PurchaseColumns {
        static readonly columnsKey = "Transactions.Purchase";
    }
}
declare namespace SerExtraCore.Transactions {
    class PurchaseDetailsColumns {
        static readonly columnsKey = "Transactions.PurchaseDetails";
    }
}
declare namespace SerExtraCore.Transactions {
    interface PurchaseDetailsForm {
        ProductId: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        DisPer: Serenity.DecimalEditor;
        DisAmount: Serenity.DecimalEditor;
        TaxableAmount: Serenity.DecimalEditor;
        TaxPer: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        LineTotal: Serenity.DecimalEditor;
    }
    class PurchaseDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.PurchaseDetails";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface PurchaseDetailsRow {
        Id?: number;
        PurchaseId?: number;
        ProductId?: number;
        UnitPrice?: number;
        Quantity?: number;
        TotalAmount?: number;
        DisPer?: number;
        DisAmount?: number;
        TaxableAmount?: number;
        TaxPer?: number;
        TaxAmount?: number;
        LineTotal?: number;
        PurchaseTrxDate?: string;
        PurchaseRefNo?: string;
        PurchaseTotalAmount?: number;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductUnitPrice?: number;
    }
    namespace PurchaseDetailsRow {
        const idProperty = "Id";
        const localTextPrefix = "Transactions.PurchaseDetails";
        const deletePermission = "Transactions:Purchase";
        const insertPermission = "Transactions:Purchase";
        const readPermission = "Transactions:Purchase";
        const updatePermission = "Transactions:Purchase";
        const enum Fields {
            Id = "Id",
            PurchaseId = "PurchaseId",
            ProductId = "ProductId",
            UnitPrice = "UnitPrice",
            Quantity = "Quantity",
            TotalAmount = "TotalAmount",
            DisPer = "DisPer",
            DisAmount = "DisAmount",
            TaxableAmount = "TaxableAmount",
            TaxPer = "TaxPer",
            TaxAmount = "TaxAmount",
            LineTotal = "LineTotal",
            PurchaseTrxDate = "PurchaseTrxDate",
            PurchaseRefNo = "PurchaseRefNo",
            PurchaseTotalAmount = "PurchaseTotalAmount",
            ProductProductCode = "ProductProductCode",
            ProductProductName = "ProductProductName",
            ProductUnitPrice = "ProductUnitPrice"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace PurchaseDetailsService {
        const baseUrl = "Transactions/PurchaseDetails";
        function Create(request: Serenity.SaveRequest<PurchaseDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<PurchaseDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<PurchaseDetailsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<PurchaseDetailsRow>>;
        const enum Methods {
            Create = "Transactions/PurchaseDetails/Create",
            Update = "Transactions/PurchaseDetails/Update",
            Delete = "Transactions/PurchaseDetails/Delete",
            Retrieve = "Transactions/PurchaseDetails/Retrieve",
            List = "Transactions/PurchaseDetails/List"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    interface PurchaseForm {
        TrxDate: Serenity.DateEditor;
        SupplierId: Serenity.LookupEditor;
        PaymentMode: Serenity.EnumEditor;
        RefNo: Serenity.StringEditor;
        PurchaseDetails: PurchaseDetailsEditor;
        TotalAmount: Serenity.DecimalEditor;
        PaidAmount: Serenity.DecimalEditor;
        PaymentType: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
        PdcPaymentDetails: PDCPayments.PdcPaymentDetailsEditor;
        Payment: ReceiptEditor;
    }
    class PurchaseForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.Purchase";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface PurchaseRow {
        Id?: number;
        TrxDate?: string;
        RefNo?: string;
        TotalAmount?: number;
        PurchaseDetails?: PurchaseDetailsRow[];
        SupplierId?: number;
        SupplierName?: string;
        PaymentMode?: ConsignmentPaymentMode;
        PaidAmount?: number;
        PaymentType?: PymentTypes;
        AccountId?: number;
        AccountAccountName?: string;
        PdcPaymentDetails?: PDCPayments.PdcPaymentDetailsRow[];
        Payment?: Accounts.PaymentRow[];
    }
    namespace PurchaseRow {
        const idProperty = "Id";
        const nameProperty = "RefNo";
        const localTextPrefix = "Transactions.Purchase";
        const deletePermission = "Transactions:Purchase";
        const insertPermission = "Transactions:Purchase";
        const readPermission = "Transactions:Purchase";
        const updatePermission = "Transactions:Purchase";
        const enum Fields {
            Id = "Id",
            TrxDate = "TrxDate",
            RefNo = "RefNo",
            TotalAmount = "TotalAmount",
            PurchaseDetails = "PurchaseDetails",
            SupplierId = "SupplierId",
            SupplierName = "SupplierName",
            PaymentMode = "PaymentMode",
            PaidAmount = "PaidAmount",
            PaymentType = "PaymentType",
            AccountId = "AccountId",
            AccountAccountName = "AccountAccountName",
            PdcPaymentDetails = "PdcPaymentDetails",
            Payment = "Payment"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace PurchaseService {
        const baseUrl = "Transactions/Purchase";
        function Create(request: Serenity.SaveRequest<PurchaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<PurchaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<PurchaseRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<PurchaseRow>>;
        const enum Methods {
            Create = "Transactions/Purchase/Create",
            Update = "Transactions/Purchase/Update",
            Delete = "Transactions/Purchase/Delete",
            Retrieve = "Transactions/Purchase/Retrieve",
            List = "Transactions/Purchase/List"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    class QuotationDetailsColumns {
        static readonly columnsKey = "Transactions.QuotationDetails";
    }
}
declare namespace SerExtraCore.Transactions {
    interface QuotationDetailsForm {
        ChargeId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
        Unit: Serenity.StringEditor;
        Quantity: Serenity.DecimalEditor;
        Rate: Serenity.DecimalEditor;
        TaxableAmount: Serenity.DecimalEditor;
        TaxPer: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        CurrencyId: Serenity.LookupEditor;
        ExchangeRate: Serenity.DecimalEditor;
        TotalAmountInLocalCurrency: Serenity.DecimalEditor;
    }
    class QuotationDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.QuotationDetails";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface QuotationDetailsRow {
        Id?: number;
        QuotationId?: number;
        ChargeId?: number;
        Description?: string;
        Unit?: string;
        Quantity?: number;
        Rate?: number;
        TaxableAmount?: number;
        TaxPer?: number;
        TaxAmount?: number;
        TotalAmount?: number;
        CurrencyId?: number;
        ExchangeRate?: number;
        TotalAmountInLocalCurrency?: number;
        QuotationCustomerId?: number;
        QuotationDate?: string;
        QuotationQuotNo?: string;
        QuotationContactPerson?: string;
        QuotationMobile?: string;
        QuotationEmail?: string;
        QuotationEnquiryref?: string;
        QuotationFaxNo?: string;
        QuotationTotalAmount?: number;
        QuotationNote?: string;
        QuotationVehicleType?: string;
        ChargeChargeName?: string;
        ChargeDescription?: string;
        ChargeChartOrder?: number;
        ChargeTaxPer?: number;
        ChargeTaxCodeId?: number;
        CurrencyCurrencyCode?: string;
        CurrencyCurrencyName?: string;
        CurrencyExchangeRate?: number;
        CurrencyCurrencyUnit?: string;
        CurrencySubCurrencyUnit?: string;
    }
    namespace QuotationDetailsRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "Transactions.QuotationDetails";
        const deletePermission = "Transactions:Quotations";
        const insertPermission = "Transactions:Quotations";
        const readPermission = "Transactions:Quotations";
        const updatePermission = "Transactions:Quotations";
        const enum Fields {
            Id = "Id",
            QuotationId = "QuotationId",
            ChargeId = "ChargeId",
            Description = "Description",
            Unit = "Unit",
            Quantity = "Quantity",
            Rate = "Rate",
            TaxableAmount = "TaxableAmount",
            TaxPer = "TaxPer",
            TaxAmount = "TaxAmount",
            TotalAmount = "TotalAmount",
            CurrencyId = "CurrencyId",
            ExchangeRate = "ExchangeRate",
            TotalAmountInLocalCurrency = "TotalAmountInLocalCurrency",
            QuotationCustomerId = "QuotationCustomerId",
            QuotationDate = "QuotationDate",
            QuotationQuotNo = "QuotationQuotNo",
            QuotationContactPerson = "QuotationContactPerson",
            QuotationMobile = "QuotationMobile",
            QuotationEmail = "QuotationEmail",
            QuotationEnquiryref = "QuotationEnquiryref",
            QuotationFaxNo = "QuotationFaxNo",
            QuotationTotalAmount = "QuotationTotalAmount",
            QuotationNote = "QuotationNote",
            QuotationVehicleType = "QuotationVehicleType",
            ChargeChargeName = "ChargeChargeName",
            ChargeDescription = "ChargeDescription",
            ChargeChartOrder = "ChargeChartOrder",
            ChargeTaxPer = "ChargeTaxPer",
            ChargeTaxCodeId = "ChargeTaxCodeId",
            CurrencyCurrencyCode = "CurrencyCurrencyCode",
            CurrencyCurrencyName = "CurrencyCurrencyName",
            CurrencyExchangeRate = "CurrencyExchangeRate",
            CurrencyCurrencyUnit = "CurrencyCurrencyUnit",
            CurrencySubCurrencyUnit = "CurrencySubCurrencyUnit"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace QuotationDetailsService {
        const baseUrl = "Transactions/QuotationDetails";
        function Create(request: Serenity.SaveRequest<QuotationDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<QuotationDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<QuotationDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<QuotationDetailsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<QuotationDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<QuotationDetailsRow>>;
        const enum Methods {
            Create = "Transactions/QuotationDetails/Create",
            Update = "Transactions/QuotationDetails/Update",
            Delete = "Transactions/QuotationDetails/Delete",
            Retrieve = "Transactions/QuotationDetails/Retrieve",
            List = "Transactions/QuotationDetails/List"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    interface QuotationFormatItems extends Serenity.ServiceResponse {
        quotations?: QuotationsRow;
        configuration?: Administration.ConfigurationRow;
        Details?: QuotationDetailsRow[];
        Customer?: Master.CustomersRow;
        amountinwords?: string;
        type?: string;
    }
}
declare namespace SerExtraCore.Transactions {
    class QuotationsColumns {
        static readonly columnsKey = "Transactions.Quotations";
    }
}
declare namespace SerExtraCore.Transactions {
    interface QuotationsForm {
        QuotNo: Serenity.StringEditor;
        CustomerId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        FaxNo: Serenity.StringEditor;
        ContactPerson: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Enquiryref: Serenity.StringEditor;
        VehicleType: Serenity.StringEditor;
        QuotationDetails: QuotationDetailsEditor;
        TotalAmount: Serenity.DecimalEditor;
        Note: Serenity.TextAreaEditor;
        QuotationType: Serenity.EnumEditor;
        TermsAndConditions: Serenity.HtmlContentEditor;
    }
    class QuotationsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.Quotations";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface QuotationsRow {
        Id?: number;
        CustomerId?: number;
        Date?: string;
        QuotNo?: string;
        ContactPerson?: string;
        Mobile?: string;
        Email?: string;
        Enquiryref?: string;
        FaxNo?: string;
        TotalAmount?: number;
        Note?: string;
        VehicleType?: string;
        TermsAndConditions?: string;
        QuotationType?: QuotationTypes;
        QuotationDetails?: QuotationDetailsRow[];
        CustomerCustomerCode?: string;
        CustomerCustomerName?: string;
        CustomerAddress?: string;
        CustomerPlace?: string;
        CustomerTelephone?: string;
        CustomerEmail?: string;
        CustomerContactPerson?: string;
        CustomerMobile?: string;
        CustomerCreationDate?: string;
        CustomerDescription?: string;
        CustomerDueDays?: number;
        CustomerOpening?: number;
        CustomerOpeningDate?: string;
        CustomerTaxRegNo?: string;
    }
    namespace QuotationsRow {
        const idProperty = "Id";
        const nameProperty = "QuotNo";
        const localTextPrefix = "Transactions.Quotations";
        const deletePermission = "Transactions:Quotations";
        const insertPermission = "Transactions:Quotations";
        const readPermission = "Transactions:Quotations";
        const updatePermission = "Transactions:Quotations";
        const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            Date = "Date",
            QuotNo = "QuotNo",
            ContactPerson = "ContactPerson",
            Mobile = "Mobile",
            Email = "Email",
            Enquiryref = "Enquiryref",
            FaxNo = "FaxNo",
            TotalAmount = "TotalAmount",
            Note = "Note",
            VehicleType = "VehicleType",
            TermsAndConditions = "TermsAndConditions",
            QuotationType = "QuotationType",
            QuotationDetails = "QuotationDetails",
            CustomerCustomerCode = "CustomerCustomerCode",
            CustomerCustomerName = "CustomerCustomerName",
            CustomerAddress = "CustomerAddress",
            CustomerPlace = "CustomerPlace",
            CustomerTelephone = "CustomerTelephone",
            CustomerEmail = "CustomerEmail",
            CustomerContactPerson = "CustomerContactPerson",
            CustomerMobile = "CustomerMobile",
            CustomerCreationDate = "CustomerCreationDate",
            CustomerDescription = "CustomerDescription",
            CustomerDueDays = "CustomerDueDays",
            CustomerOpening = "CustomerOpening",
            CustomerOpeningDate = "CustomerOpeningDate",
            CustomerTaxRegNo = "CustomerTaxRegNo"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace QuotationsService {
        const baseUrl = "Transactions/Quotations";
        function Create(request: Serenity.SaveRequest<QuotationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<QuotationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<QuotationsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<QuotationsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<QuotationsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<QuotationsRow>>;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;
        const enum Methods {
            Create = "Transactions/Quotations/Create",
            Update = "Transactions/Quotations/Update",
            Delete = "Transactions/Quotations/Delete",
            Retrieve = "Transactions/Quotations/Retrieve",
            List = "Transactions/Quotations/List",
            GetNextNumber = "Transactions/Quotations/GetNextNumber"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    class SuppliersPaymentColumns {
        static readonly columnsKey = "Transactions.SuppliersPayment";
    }
}
declare namespace SerExtraCore.Transactions {
    interface SuppliersPaymentForm {
        Code: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        SupplierId: Serenity.LookupEditor;
        OldBalance: Serenity.DecimalEditor;
        InvoiceVehicleDetails: SupplierPaymentInvoiceVehicleDetailsEditor;
        InvoiceCharges: SupplierPaymentInvoiceChargesEditor;
        TotalAmount: Serenity.DecimalEditor;
        PaymentType: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
        PdcPaymentDetails: PDCPayments.PdcPaymentDetailsEditor;
        DocumentNO: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Status: Serenity.EnumEditor;
        StatusUser: Serenity.LookupEditor;
        Payments: ReceiptEditor;
    }
    class SuppliersPaymentForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.SuppliersPayment";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    class SuppliersPaymentInvoiceChargesColumns {
        static readonly columnsKey = "Transactions.SuppliersPaymentInvoiceCharges";
    }
}
declare namespace SerExtraCore.Transactions {
    interface SuppliersPaymentInvoiceChargesForm {
        InvoiceChargesId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
    }
    class SuppliersPaymentInvoiceChargesForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.SuppliersPaymentInvoiceCharges";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface SuppliersPaymentInvoiceChargesRow {
        Id?: number;
        SuppliersPaymentId?: number;
        InvoiceChargesId?: number;
        InvoiceChargeFullName?: string;
        Amount?: number;
        SuppliersPaymentCode?: string;
        SuppliersPaymentDate?: string;
        SuppliersPaymentSupplierId?: number;
        SuppliersPaymentTotalAmount?: number;
        SuppliersPaymentPaymentType?: number;
        SuppliersPaymentAccountId?: number;
        SuppliersPaymentStatus?: number;
        SuppliersPaymentStatusUser?: number;
        SuppliersPaymentOldBalance?: number;
        SuppliersPaymentDocumentNo?: string;
        SuppliersPaymentDescription?: string;
        InvoiceChargesInvoiceId?: number;
        InvoiceChargesChargeId?: number;
        InvoiceChargesDescription?: string;
        InvoiceChargesAmount?: number;
        InvoiceChargesQty?: number;
        InvoiceChargesTotalAmount?: number;
        InvoiceChargesCurrencyId?: number;
        InvoiceChargesExchangeRate?: number;
        InvoiceChargesTotalAmountInLocalCurrency?: number;
        InvoiceChargesDate?: string;
        InvoiceChargesInvoiceVehicleDetailId?: number;
    }
    namespace SuppliersPaymentInvoiceChargesRow {
        const idProperty = "Id";
        const localTextPrefix = "Transactions.SuppliersPaymentInvoiceCharges";
        const lookupKey = "Transactions.SuppliersPaymentInvoiceCharges";
        function getLookup(): Q.Lookup<SuppliersPaymentInvoiceChargesRow>;
        const deletePermission = "Transactions:SuppliersPayment";
        const insertPermission = "Transactions:SuppliersPayment";
        const readPermission = "Transactions:SuppliersPayment";
        const updatePermission = "Transactions:SuppliersPayment";
        const enum Fields {
            Id = "Id",
            SuppliersPaymentId = "SuppliersPaymentId",
            InvoiceChargesId = "InvoiceChargesId",
            InvoiceChargeFullName = "InvoiceChargeFullName",
            Amount = "Amount",
            SuppliersPaymentCode = "SuppliersPaymentCode",
            SuppliersPaymentDate = "SuppliersPaymentDate",
            SuppliersPaymentSupplierId = "SuppliersPaymentSupplierId",
            SuppliersPaymentTotalAmount = "SuppliersPaymentTotalAmount",
            SuppliersPaymentPaymentType = "SuppliersPaymentPaymentType",
            SuppliersPaymentAccountId = "SuppliersPaymentAccountId",
            SuppliersPaymentStatus = "SuppliersPaymentStatus",
            SuppliersPaymentStatusUser = "SuppliersPaymentStatusUser",
            SuppliersPaymentOldBalance = "SuppliersPaymentOldBalance",
            SuppliersPaymentDocumentNo = "SuppliersPaymentDocumentNo",
            SuppliersPaymentDescription = "SuppliersPaymentDescription",
            InvoiceChargesInvoiceId = "InvoiceChargesInvoiceId",
            InvoiceChargesChargeId = "InvoiceChargesChargeId",
            InvoiceChargesDescription = "InvoiceChargesDescription",
            InvoiceChargesAmount = "InvoiceChargesAmount",
            InvoiceChargesQty = "InvoiceChargesQty",
            InvoiceChargesTotalAmount = "InvoiceChargesTotalAmount",
            InvoiceChargesCurrencyId = "InvoiceChargesCurrencyId",
            InvoiceChargesExchangeRate = "InvoiceChargesExchangeRate",
            InvoiceChargesTotalAmountInLocalCurrency = "InvoiceChargesTotalAmountInLocalCurrency",
            InvoiceChargesDate = "InvoiceChargesDate",
            InvoiceChargesInvoiceVehicleDetailId = "InvoiceChargesInvoiceVehicleDetailId"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace SuppliersPaymentInvoiceChargesService {
        const baseUrl = "Transactions/SuppliersPaymentInvoiceCharges";
        function Create(request: Serenity.SaveRequest<SuppliersPaymentInvoiceChargesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<SuppliersPaymentInvoiceChargesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SuppliersPaymentInvoiceChargesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<SuppliersPaymentInvoiceChargesRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SuppliersPaymentInvoiceChargesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<SuppliersPaymentInvoiceChargesRow>>;
        const enum Methods {
            Create = "Transactions/SuppliersPaymentInvoiceCharges/Create",
            Update = "Transactions/SuppliersPaymentInvoiceCharges/Update",
            Delete = "Transactions/SuppliersPaymentInvoiceCharges/Delete",
            Retrieve = "Transactions/SuppliersPaymentInvoiceCharges/Retrieve",
            List = "Transactions/SuppliersPaymentInvoiceCharges/List"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    class SuppliersPaymentInvoiceVehicleDetailsColumns {
        static readonly columnsKey = "Transactions.SuppliersPaymentInvoiceVehicleDetails";
    }
}
declare namespace SerExtraCore.Transactions {
    interface SuppliersPaymentInvoiceVehicleDetailsForm {
        InvoiceVehicleDetailId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
    }
    class SuppliersPaymentInvoiceVehicleDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.SuppliersPaymentInvoiceVehicleDetails";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface SuppliersPaymentInvoiceVehicleDetailsRow {
        Id?: number;
        SuppliersPaymentId?: number;
        InvoiceVehicleDetailId?: number;
        Amount?: number;
        SuppliersPaymentCode?: string;
        SuppliersPaymentDate?: string;
        SuppliersPaymentSupplierId?: number;
        SuppliersPaymentTotalAmount?: number;
        SuppliersPaymentPaymentType?: number;
        SuppliersPaymentAccountId?: number;
        SuppliersPaymentStatus?: number;
        SuppliersPaymentStatusUser?: number;
        InvoiceVehicleDetailInvoiceId?: number;
        InvoiceVehicleDetailFullName?: string;
        InvoiceVehicleDetailVehicleId?: number;
        InvoiceVehicleDetailType?: string;
        InvoiceVehicleDetailVehicleNumber?: string;
        InvoiceVehicleDetailDriver?: number;
        InvoiceVehicleDetailShippingAreaFrom?: number;
        InvoiceVehicleDetailShippingAreaTo?: number;
        InvoiceVehicleDetailTypeOfVehicle?: number;
        InvoiceVehicleDetailStartDate?: string;
        InvoiceVehicleDetailEndDate?: string;
        InvoiceVehicleDetailDriverName?: string;
        InvoiceVehicleDetailNumber?: string;
        InvoiceVehicleDetailResidentId?: string;
        InvoiceVehicleDetailCountryId?: number;
        InvoiceVehicleDetailSupplierAmount?: number;
        InvoiceVehicleDetailSupplierId?: number;
        InvoiceVehicleDetailSupplierPaymentStatus?: number;
    }
    namespace SuppliersPaymentInvoiceVehicleDetailsRow {
        const idProperty = "Id";
        const localTextPrefix = "Transactions.SuppliersPaymentInvoiceVehicleDetails";
        const lookupKey = "Transactions.SuppliersPaymentInvoiceVehicleDetails";
        function getLookup(): Q.Lookup<SuppliersPaymentInvoiceVehicleDetailsRow>;
        const deletePermission = "Transactions:SuppliersPayment";
        const insertPermission = "Transactions:SuppliersPayment";
        const readPermission = "Transactions:SuppliersPayment";
        const updatePermission = "Transactions:SuppliersPayment";
        const enum Fields {
            Id = "Id",
            SuppliersPaymentId = "SuppliersPaymentId",
            InvoiceVehicleDetailId = "InvoiceVehicleDetailId",
            Amount = "Amount",
            SuppliersPaymentCode = "SuppliersPaymentCode",
            SuppliersPaymentDate = "SuppliersPaymentDate",
            SuppliersPaymentSupplierId = "SuppliersPaymentSupplierId",
            SuppliersPaymentTotalAmount = "SuppliersPaymentTotalAmount",
            SuppliersPaymentPaymentType = "SuppliersPaymentPaymentType",
            SuppliersPaymentAccountId = "SuppliersPaymentAccountId",
            SuppliersPaymentStatus = "SuppliersPaymentStatus",
            SuppliersPaymentStatusUser = "SuppliersPaymentStatusUser",
            InvoiceVehicleDetailInvoiceId = "InvoiceVehicleDetailInvoiceId",
            InvoiceVehicleDetailFullName = "InvoiceVehicleDetailFullName",
            InvoiceVehicleDetailVehicleId = "InvoiceVehicleDetailVehicleId",
            InvoiceVehicleDetailType = "InvoiceVehicleDetailType",
            InvoiceVehicleDetailVehicleNumber = "InvoiceVehicleDetailVehicleNumber",
            InvoiceVehicleDetailDriver = "InvoiceVehicleDetailDriver",
            InvoiceVehicleDetailShippingAreaFrom = "InvoiceVehicleDetailShippingAreaFrom",
            InvoiceVehicleDetailShippingAreaTo = "InvoiceVehicleDetailShippingAreaTo",
            InvoiceVehicleDetailTypeOfVehicle = "InvoiceVehicleDetailTypeOfVehicle",
            InvoiceVehicleDetailStartDate = "InvoiceVehicleDetailStartDate",
            InvoiceVehicleDetailEndDate = "InvoiceVehicleDetailEndDate",
            InvoiceVehicleDetailDriverName = "InvoiceVehicleDetailDriverName",
            InvoiceVehicleDetailNumber = "InvoiceVehicleDetailNumber",
            InvoiceVehicleDetailResidentId = "InvoiceVehicleDetailResidentId",
            InvoiceVehicleDetailCountryId = "InvoiceVehicleDetailCountryId",
            InvoiceVehicleDetailSupplierAmount = "InvoiceVehicleDetailSupplierAmount",
            InvoiceVehicleDetailSupplierId = "InvoiceVehicleDetailSupplierId",
            InvoiceVehicleDetailSupplierPaymentStatus = "InvoiceVehicleDetailSupplierPaymentStatus"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace SuppliersPaymentInvoiceVehicleDetailsService {
        const baseUrl = "Transactions/SuppliersPaymentInvoiceVehicleDetails";
        function Create(request: Serenity.SaveRequest<SuppliersPaymentInvoiceVehicleDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<SuppliersPaymentInvoiceVehicleDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SuppliersPaymentInvoiceVehicleDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<SuppliersPaymentInvoiceVehicleDetailsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SuppliersPaymentInvoiceVehicleDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<SuppliersPaymentInvoiceVehicleDetailsRow>>;
        const enum Methods {
            Create = "Transactions/SuppliersPaymentInvoiceVehicleDetails/Create",
            Update = "Transactions/SuppliersPaymentInvoiceVehicleDetails/Update",
            Delete = "Transactions/SuppliersPaymentInvoiceVehicleDetails/Delete",
            Retrieve = "Transactions/SuppliersPaymentInvoiceVehicleDetails/Retrieve",
            List = "Transactions/SuppliersPaymentInvoiceVehicleDetails/List"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    class SuppliersPaymentInvoicesColumns {
        static readonly columnsKey = "Transactions.SuppliersPaymentInvoices";
    }
}
declare namespace SerExtraCore.Transactions {
    interface SuppliersPaymentInvoicesForm {
        SuppliersPaymentId: Serenity.IntegerEditor;
        InvoiceId: Serenity.IntegerEditor;
    }
    class SuppliersPaymentInvoicesForm extends Serenity.PrefixedContext {
        static readonly formKey = "Transactions.SuppliersPaymentInvoices";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.Transactions {
    interface SuppliersPaymentInvoicesRow {
        Id?: number;
        SuppliersPaymentId?: number;
        InvoiceId?: number;
        SuppliersPaymentCode?: string;
        SuppliersPaymentDate?: string;
        SuppliersPaymentSupplierId?: number;
        SuppliersPaymentTotalAmount?: number;
        InvoiceInvoiceDate?: string;
        InvoiceInvoiceNo?: string;
        InvoiceConsignmentId?: number;
        InvoiceConsignmentDate?: string;
        InvoiceWayBillNo?: string;
        InvoiceJobNo?: string;
        InvoiceClientJobNo?: string;
        InvoiceShipperId?: number;
        InvoiceConsigneeId?: number;
        InvoiceVehicleId?: number;
        InvoiceType?: string;
        InvoiceVehicleNumber?: string;
        InvoiceDriver?: number;
        InvoicePayment?: number;
        InvoiceTypeOfPkg?: string;
        InvoiceTotalVolume?: string;
        InvoiceTotalWeight?: string;
        InvoiceTotalNoOfPkgs?: string;
        InvoiceShippingAreaFrom?: number;
        InvoiceShippingAreaTo?: number;
        InvoiceTotalAmount?: number;
        InvoiceDriverKmFrom?: number;
        InvoiceDriverKmTo?: number;
        InvoiceGpskmFrom?: number;
        InvoiceGpskmTo?: number;
        InvoiceStatus?: number;
        InvoiceStatusUser?: number;
        InvoicePaymentStatus?: number;
        InvoicePaymentMode?: number;
        InvoiceBilling?: number;
        InvoiceStartDate?: string;
        InvoiceEndDate?: string;
        InvoiceSupplierAmount?: number;
        InvoiceSupplierId?: number;
        InvoiceSupplierPaymentStatus?: number;
    }
    namespace SuppliersPaymentInvoicesRow {
        const idProperty = "Id";
        const localTextPrefix = "Transactions.SuppliersPaymentInvoices";
        const deletePermission = "Transactions:SuppliersPayment";
        const insertPermission = "Transactions:SuppliersPayment";
        const readPermission = "Transactions:SuppliersPayment";
        const updatePermission = "Transactions:SuppliersPayment";
        const enum Fields {
            Id = "Id",
            SuppliersPaymentId = "SuppliersPaymentId",
            InvoiceId = "InvoiceId",
            SuppliersPaymentCode = "SuppliersPaymentCode",
            SuppliersPaymentDate = "SuppliersPaymentDate",
            SuppliersPaymentSupplierId = "SuppliersPaymentSupplierId",
            SuppliersPaymentTotalAmount = "SuppliersPaymentTotalAmount",
            InvoiceInvoiceDate = "InvoiceInvoiceDate",
            InvoiceInvoiceNo = "InvoiceInvoiceNo",
            InvoiceConsignmentId = "InvoiceConsignmentId",
            InvoiceConsignmentDate = "InvoiceConsignmentDate",
            InvoiceWayBillNo = "InvoiceWayBillNo",
            InvoiceJobNo = "InvoiceJobNo",
            InvoiceClientJobNo = "InvoiceClientJobNo",
            InvoiceShipperId = "InvoiceShipperId",
            InvoiceConsigneeId = "InvoiceConsigneeId",
            InvoiceVehicleId = "InvoiceVehicleId",
            InvoiceType = "InvoiceType",
            InvoiceVehicleNumber = "InvoiceVehicleNumber",
            InvoiceDriver = "InvoiceDriver",
            InvoicePayment = "InvoicePayment",
            InvoiceTypeOfPkg = "InvoiceTypeOfPkg",
            InvoiceTotalVolume = "InvoiceTotalVolume",
            InvoiceTotalWeight = "InvoiceTotalWeight",
            InvoiceTotalNoOfPkgs = "InvoiceTotalNoOfPkgs",
            InvoiceShippingAreaFrom = "InvoiceShippingAreaFrom",
            InvoiceShippingAreaTo = "InvoiceShippingAreaTo",
            InvoiceTotalAmount = "InvoiceTotalAmount",
            InvoiceDriverKmFrom = "InvoiceDriverKmFrom",
            InvoiceDriverKmTo = "InvoiceDriverKmTo",
            InvoiceGpskmFrom = "InvoiceGpskmFrom",
            InvoiceGpskmTo = "InvoiceGpskmTo",
            InvoiceStatus = "InvoiceStatus",
            InvoiceStatusUser = "InvoiceStatusUser",
            InvoicePaymentStatus = "InvoicePaymentStatus",
            InvoicePaymentMode = "InvoicePaymentMode",
            InvoiceBilling = "InvoiceBilling",
            InvoiceStartDate = "InvoiceStartDate",
            InvoiceEndDate = "InvoiceEndDate",
            InvoiceSupplierAmount = "InvoiceSupplierAmount",
            InvoiceSupplierId = "InvoiceSupplierId",
            InvoiceSupplierPaymentStatus = "InvoiceSupplierPaymentStatus"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace SuppliersPaymentInvoicesService {
        const baseUrl = "Transactions/SuppliersPaymentInvoices";
        function Create(request: Serenity.SaveRequest<SuppliersPaymentInvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<SuppliersPaymentInvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SuppliersPaymentInvoicesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<SuppliersPaymentInvoicesRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SuppliersPaymentInvoicesRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<SuppliersPaymentInvoicesRow>>;
        const enum Methods {
            Create = "Transactions/SuppliersPaymentInvoices/Create",
            Update = "Transactions/SuppliersPaymentInvoices/Update",
            Delete = "Transactions/SuppliersPaymentInvoices/Delete",
            Retrieve = "Transactions/SuppliersPaymentInvoices/Retrieve",
            List = "Transactions/SuppliersPaymentInvoices/List"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    interface SuppliersPaymentRow {
        Id?: number;
        Code?: string;
        Date?: string;
        SupplierId?: number;
        TotalAmount?: number;
        OldBalance?: number;
        PaymentType?: PymentTypes;
        AccountId?: number;
        Status?: InvoiceStatus;
        StatusUser?: number;
        DocumentNO?: string;
        Description?: string;
        Slno?: number;
        Invoices?: number[];
        InvoiceVehicleDetails?: SuppliersPaymentInvoiceVehicleDetailsRow[];
        InvoiceCharges?: SuppliersPaymentInvoiceChargesRow[];
        Payments?: Accounts.PaymentRow[];
        SupplierSupplierCode?: string;
        SupplierSupplierName?: string;
        SupplierAddress?: string;
        SupplierPlace?: string;
        SupplierTelephone?: string;
        SupplierEmail?: string;
        SupplierContactPerson?: string;
        SupplierMobile?: string;
        SupplierCreationDate?: string;
        SupplierDescription?: string;
        PdcPaymentDetails?: PDCPayments.PdcPaymentDetailsRow[];
        AccountType?: number;
        AccountAccountName?: string;
        AccountAccountNo?: string;
        AccountBankName?: string;
        AccountBrachName?: string;
        AccountAccountHeadId?: number;
        StatusUserUsername?: string;
        StatusUserDisplayName?: string;
        StatusUserEmail?: string;
        StatusUserSource?: string;
        StatusUserPasswordHash?: string;
        StatusUserPasswordSalt?: string;
        StatusUserLastDirectoryUpdate?: string;
        StatusUserUserImage?: string;
        StatusUserInsertDate?: string;
        StatusUserInsertUserId?: number;
        StatusUserUpdateDate?: string;
        StatusUserUpdateUserId?: number;
        StatusUserIsActive?: number;
    }
    namespace SuppliersPaymentRow {
        const idProperty = "Id";
        const nameProperty = "Code";
        const localTextPrefix = "Transactions.SuppliersPayment";
        const deletePermission = "Transactions:SuppliersPayment";
        const insertPermission = "Transactions:SuppliersPayment";
        const readPermission = "Transactions:SuppliersPayment";
        const updatePermission = "Transactions:SuppliersPayment";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            Date = "Date",
            SupplierId = "SupplierId",
            TotalAmount = "TotalAmount",
            OldBalance = "OldBalance",
            PaymentType = "PaymentType",
            AccountId = "AccountId",
            Status = "Status",
            StatusUser = "StatusUser",
            DocumentNO = "DocumentNO",
            Description = "Description",
            Slno = "Slno",
            Invoices = "Invoices",
            InvoiceVehicleDetails = "InvoiceVehicleDetails",
            InvoiceCharges = "InvoiceCharges",
            Payments = "Payments",
            SupplierSupplierCode = "SupplierSupplierCode",
            SupplierSupplierName = "SupplierSupplierName",
            SupplierAddress = "SupplierAddress",
            SupplierPlace = "SupplierPlace",
            SupplierTelephone = "SupplierTelephone",
            SupplierEmail = "SupplierEmail",
            SupplierContactPerson = "SupplierContactPerson",
            SupplierMobile = "SupplierMobile",
            SupplierCreationDate = "SupplierCreationDate",
            SupplierDescription = "SupplierDescription",
            PdcPaymentDetails = "PdcPaymentDetails",
            AccountType = "AccountType",
            AccountAccountName = "AccountAccountName",
            AccountAccountNo = "AccountAccountNo",
            AccountBankName = "AccountBankName",
            AccountBrachName = "AccountBrachName",
            AccountAccountHeadId = "AccountAccountHeadId",
            StatusUserUsername = "StatusUserUsername",
            StatusUserDisplayName = "StatusUserDisplayName",
            StatusUserEmail = "StatusUserEmail",
            StatusUserSource = "StatusUserSource",
            StatusUserPasswordHash = "StatusUserPasswordHash",
            StatusUserPasswordSalt = "StatusUserPasswordSalt",
            StatusUserLastDirectoryUpdate = "StatusUserLastDirectoryUpdate",
            StatusUserUserImage = "StatusUserUserImage",
            StatusUserInsertDate = "StatusUserInsertDate",
            StatusUserInsertUserId = "StatusUserInsertUserId",
            StatusUserUpdateDate = "StatusUserUpdateDate",
            StatusUserUpdateUserId = "StatusUserUpdateUserId",
            StatusUserIsActive = "StatusUserIsActive"
        }
    }
}
declare namespace SerExtraCore.Transactions {
    namespace SuppliersPaymentService {
        const baseUrl = "Transactions/SuppliersPayment";
        function Create(request: Serenity.SaveRequest<SuppliersPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<SuppliersPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SuppliersPaymentRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<SuppliersPaymentRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SuppliersPaymentRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<SuppliersPaymentRow>>;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;
        const enum Methods {
            Create = "Transactions/SuppliersPayment/Create",
            Update = "Transactions/SuppliersPayment/Update",
            Delete = "Transactions/SuppliersPayment/Delete",
            Retrieve = "Transactions/SuppliersPayment/Retrieve",
            List = "Transactions/SuppliersPayment/List",
            GetNextNumber = "Transactions/SuppliersPayment/GetNextNumber"
        }
    }
}
declare namespace SerExtraCore.UOM {
    class UOMColumns {
        static readonly columnsKey = "UOM.UOM";
    }
}
declare namespace SerExtraCore.UOM {
    interface UOMForm {
        Unit: Serenity.StringEditor;
    }
    class UOMForm extends Serenity.PrefixedContext {
        static readonly formKey = "UOM.UOM";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.UOM {
    interface UOMRow {
        Id?: number;
        Unit?: string;
    }
    namespace UOMRow {
        const idProperty = "Id";
        const nameProperty = "Unit";
        const localTextPrefix = "UOM.UOM";
        const lookupKey = "UOM.UOM";
        function getLookup(): Q.Lookup<UOMRow>;
        const deletePermission = "Master:UOM";
        const insertPermission = "Master:UOM";
        const readPermission = "Master:UOM";
        const updatePermission = "Master:UOM";
        const enum Fields {
            Id = "Id",
            Unit = "Unit"
        }
    }
}
declare namespace SerExtraCore.UOM {
    namespace UOMService {
        const baseUrl = "UOM/UOM";
        function Create(request: Serenity.SaveRequest<UOMRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<UOMRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UOMRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<UOMRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UOMRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<UOMRow>>;
        const enum Methods {
            Create = "UOM/UOM/Create",
            Update = "UOM/UOM/Update",
            Delete = "UOM/UOM/Delete",
            Retrieve = "UOM/UOM/Retrieve",
            List = "UOM/UOM/List"
        }
    }
}
declare namespace SerExtraCore.UOMAmount {
    class UOMAmountColumns {
        static readonly columnsKey = "UOMAmount.UOMAmount";
    }
}
declare namespace SerExtraCore.UOMAmount {
    interface UOMAmountForm {
        UomId: Serenity.LookupEditor;
        Rate: Serenity.DecimalEditor;
    }
    class UOMAmountForm extends Serenity.PrefixedContext {
        static readonly formKey = "UOMAmount.UOMAmount";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.UOMAmount {
    interface UOMAmountRow {
        Id?: number;
        Rate?: number;
        MaterialsId?: number;
        UomId?: number;
        Materials?: string;
        UomUnit?: string;
    }
    namespace UOMAmountRow {
        const idProperty = "Id";
        const localTextPrefix = "UOMAmount.UOMAmount";
        const lookupKey = "UOMAmount.UOMAmount";
        function getLookup(): Q.Lookup<UOMAmountRow>;
        const deletePermission = "Master:UOMAmount";
        const insertPermission = "Master:UOMAmount";
        const readPermission = "Master:UOMAmount";
        const updatePermission = "Master:UOMAmount";
        const enum Fields {
            Id = "Id",
            Rate = "Rate",
            MaterialsId = "MaterialsId",
            UomId = "UomId",
            Materials = "Materials",
            UomUnit = "UomUnit"
        }
    }
}
declare namespace SerExtraCore.UOMAmount {
    namespace UOMAmountService {
        const baseUrl = "UOMAmount/UOMAmount";
        function Create(request: Serenity.SaveRequest<UOMAmountRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<UOMAmountRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UOMAmountRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<UOMAmountRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UOMAmountRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<UOMAmountRow>>;
        const enum Methods {
            Create = "UOMAmount/UOMAmount/Create",
            Update = "UOMAmount/UOMAmount/Update",
            Delete = "UOMAmount/UOMAmount/Delete",
            Retrieve = "UOMAmount/UOMAmount/Retrieve",
            List = "UOMAmount/UOMAmount/List"
        }
    }
}
declare namespace SerExtraCore.VehicleFreight {
    enum AmountType {
        Value1 = 1,
        Value2 = 2
    }
}
declare namespace SerExtraCore.VehicleFreight {
    class VehicleFreightColumns {
        static readonly columnsKey = "VehicleFreight.VehicleFreight";
    }
}
declare namespace SerExtraCore.VehicleFreight {
    interface VehicleFreightForm {
        Id: Serenity.IntegerEditor;
        TripDate: Serenity.DateEditor;
        MaterialId: Serenity.LookupEditor;
        UnitId: Serenity.LookupEditor;
        FromPlace: Serenity.LookupEditor;
        ToPlace: Serenity.LookupEditor;
        partys: Serenity.LookupEditor;
        CashCredit: Serenity.EnumEditor;
        PerTonRate: Serenity.DecimalEditor;
        TotalFreight: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        LoadingExpense: Serenity.DecimalEditor;
        UnloadingExpense: Serenity.DecimalEditor;
        TotalCommission: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        DebitAccountId: Serenity.LookupEditor;
    }
    class VehicleFreightForm extends Serenity.PrefixedContext {
        static readonly formKey = "VehicleFreight.VehicleFreight";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.VehicleFreight {
    interface VehicleFreightRow {
        Id?: number;
        TsId?: number;
        MaterialId?: number;
        UnitId?: number;
        FromPlace?: number;
        ToPlace?: number;
        TripDate?: string;
        PerTonRate?: number;
        TotalFreight?: number;
        LoadingExpense?: number;
        UnloadingExpense?: number;
        UnitPrice?: number;
        TotalCommission?: number;
        TsTsNo?: string;
        TsVehicleId?: number;
        TsAdvance?: number;
        TsStartKm?: number;
        TsEndKm?: number;
        TsTotalKm?: number;
        TsTotalLiter?: number;
        TsMileage?: number;
        TsStartdate?: string;
        TsEnddate?: string;
        TsTotaldays?: number;
        TsRto?: number;
        TsPc?: number;
        TsTotalDriverCommission?: number;
        TsTotalCommison?: number;
        TsTotalLoadingExpense?: number;
        TsTotalUnloadExpense?: number;
        TsTotalOtherExpense?: number;
        TsTotalFright?: number;
        TsProfit?: number;
        Materials?: string;
        Unit?: string;
        FromPlaceAreaName?: string;
        FromPlaceDescription?: string;
        ToPlaceAreaName?: string;
        ToPlaceDescription?: string;
        Party?: string;
        CashCredit?: AmountType;
        partys?: number;
        partyy?: string;
        PaymentMethod?: AccountTypes;
        DebitAccountId?: number;
        Receipts?: Accounts.ReceiptRow[];
    }
    namespace VehicleFreightRow {
        const idProperty = "Id";
        const localTextPrefix = "VehicleFreight.VehicleFreight";
        const lookupKey = "VehicleFreight.VehicleFreight";
        function getLookup(): Q.Lookup<VehicleFreightRow>;
        const deletePermission = "Master:VehicleFreight";
        const insertPermission = "Master:VehicleFreight";
        const readPermission = "Master:VehicleFreight";
        const updatePermission = "Master:VehicleFreight";
        const enum Fields {
            Id = "Id",
            TsId = "TsId",
            MaterialId = "MaterialId",
            UnitId = "UnitId",
            FromPlace = "FromPlace",
            ToPlace = "ToPlace",
            TripDate = "TripDate",
            PerTonRate = "PerTonRate",
            TotalFreight = "TotalFreight",
            LoadingExpense = "LoadingExpense",
            UnloadingExpense = "UnloadingExpense",
            UnitPrice = "UnitPrice",
            TotalCommission = "TotalCommission",
            TsTsNo = "TsTsNo",
            TsVehicleId = "TsVehicleId",
            TsAdvance = "TsAdvance",
            TsStartKm = "TsStartKm",
            TsEndKm = "TsEndKm",
            TsTotalKm = "TsTotalKm",
            TsTotalLiter = "TsTotalLiter",
            TsMileage = "TsMileage",
            TsStartdate = "TsStartdate",
            TsEnddate = "TsEnddate",
            TsTotaldays = "TsTotaldays",
            TsRto = "TsRto",
            TsPc = "TsPc",
            TsTotalDriverCommission = "TsTotalDriverCommission",
            TsTotalCommison = "TsTotalCommison",
            TsTotalLoadingExpense = "TsTotalLoadingExpense",
            TsTotalUnloadExpense = "TsTotalUnloadExpense",
            TsTotalOtherExpense = "TsTotalOtherExpense",
            TsTotalFright = "TsTotalFright",
            TsProfit = "TsProfit",
            Materials = "Materials",
            Unit = "Unit",
            FromPlaceAreaName = "FromPlaceAreaName",
            FromPlaceDescription = "FromPlaceDescription",
            ToPlaceAreaName = "ToPlaceAreaName",
            ToPlaceDescription = "ToPlaceDescription",
            Party = "Party",
            CashCredit = "CashCredit",
            partys = "partys",
            partyy = "partyy",
            PaymentMethod = "PaymentMethod",
            DebitAccountId = "DebitAccountId",
            Receipts = "Receipts"
        }
    }
}
declare namespace SerExtraCore.VehicleFreight {
    namespace VehicleFreightService {
        const baseUrl = "VehicleFreight/VehicleFreight";
        function Create(request: Serenity.SaveRequest<VehicleFreightRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<VehicleFreightRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VehicleFreightRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<VehicleFreightRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VehicleFreightRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<VehicleFreightRow>>;
        const enum Methods {
            Create = "VehicleFreight/VehicleFreight/Create",
            Update = "VehicleFreight/VehicleFreight/Update",
            Delete = "VehicleFreight/VehicleFreight/Delete",
            Retrieve = "VehicleFreight/VehicleFreight/Retrieve",
            List = "VehicleFreight/VehicleFreight/List"
        }
    }
}
declare namespace SerExtraCore.VehicleMovDetails {
    class VehicleMovDetailsColumns {
        static readonly columnsKey = "VehicleMovDetails.VehicleMovDetails";
    }
}
declare namespace SerExtraCore.VehicleMovDetails {
    interface VehicleMovDetailsForm {
        TsNo: Serenity.StringEditor;
        VehicleId: Serenity.LookupEditor;
        Advance: Serenity.DecimalEditor;
        StartKm: Serenity.DecimalEditor;
        EndKm: Serenity.DecimalEditor;
        TotalKm: Serenity.DecimalEditor;
        TotalLiter: Serenity.DecimalEditor;
        Mileage: Serenity.DecimalEditor;
        Startdate: Serenity.DateEditor;
        Enddate: Serenity.DateEditor;
        Totaldays: Serenity.IntegerEditor;
        Remarks: Serenity.TextAreaEditor;
        CommisionDetails: CommisionDetails.CommisionDetailsEditor;
        Rto: Serenity.DecimalEditor;
        Pc: Serenity.DecimalEditor;
        Toll: Serenity.DecimalEditor;
        ExtraBill: Serenity.DecimalEditor;
        TotalFuelAmount: Serenity.DecimalEditor;
        TotalDriverCommission: Serenity.DecimalEditor;
        DrivertwoBata: Serenity.DecimalEditor;
        TotalCommison: Serenity.DecimalEditor;
        TotalLoadingExpense: Serenity.DecimalEditor;
        TotalUnloadExpense: Serenity.DecimalEditor;
        TotalOtherExpense: Serenity.DecimalEditor;
        TotalFright: Serenity.DecimalEditor;
        TotalExpense: Serenity.DecimalEditor;
        Profit: Serenity.DecimalEditor;
        VehicleFreight: VehicleFreight.VehicleFreightEditor;
        FuelDetails: FuelDetails.FuelDetailsEditor;
        ServiceAmount: ServiceAmount.ServiceAmountEditor;
    }
    class VehicleMovDetailsForm extends Serenity.PrefixedContext {
        static readonly formKey = "VehicleMovDetails.VehicleMovDetails";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SerExtraCore.VehicleMovDetails {
    interface VehicleMovDetailsRow {
        Id?: number;
        TsNo?: string;
        VehicleId?: number;
        VehicleNumber?: string;
        Advance?: number;
        StartKm?: number;
        EndKm?: number;
        TotalKm?: number;
        TotalLiter?: number;
        Mileage?: number;
        Startdate?: string;
        Enddate?: string;
        Totaldays?: number;
        Rto?: number;
        Pc?: number;
        TotalFuelAmount?: number;
        TotalDriverCommission?: number;
        DrivertwoBata?: number;
        TotalCommison?: number;
        TotalLoadingExpense?: number;
        TotalUnloadExpense?: number;
        TotalOtherExpense?: number;
        TotalFright?: number;
        Profit?: number;
        VehicleTypeOfVehicle?: number;
        VehicleThrough?: number;
        VehicleVehicleNumber?: string;
        VehicleVehicleModel?: number;
        VehicleRegistraionNumber?: string;
        VehicleDescription?: string;
        VehicleRegistrationDate?: string;
        VehicleExpiryDate?: string;
        VehicleDriver?: number;
        VehiclePdoApproved?: boolean;
        VehiclePrimeMover?: string;
        VehicleSupplierId?: number;
        CommisionDetails?: CommisionDetails.CommisionDetailsRow[];
        ServiceAmount?: ServiceAmount.ServiceAmountRow[];
        FuelDetails?: FuelDetails.FuelDetailsRow[];
        VehicleFreight?: VehicleFreight.VehicleFreightRow[];
        Toll?: number;
        TotalExpense?: number;
        ExtraBill?: number;
        Remarks?: string;
        Receipts?: Accounts.ReceiptRow[];
        Payments?: Accounts.PaymentRow[];
        FuelId?: Accounts.MoneyOutRow[];
    }
    namespace VehicleMovDetailsRow {
        const idProperty = "Id";
        const nameProperty = "TsNo";
        const localTextPrefix = "VehicleMovDetails.VehicleMovDetails";
        const lookupKey = "VehicleMovDetails.VehicleMovDetails";
        function getLookup(): Q.Lookup<VehicleMovDetailsRow>;
        const deletePermission = "Master:VehicleMovDetails";
        const insertPermission = "Master:VehicleMovDetails";
        const readPermission = "Master:VehicleMovDetails";
        const updatePermission = "Master:VehicleMovDetails";
        const enum Fields {
            Id = "Id",
            TsNo = "TsNo",
            VehicleId = "VehicleId",
            VehicleNumber = "VehicleNumber",
            Advance = "Advance",
            StartKm = "StartKm",
            EndKm = "EndKm",
            TotalKm = "TotalKm",
            TotalLiter = "TotalLiter",
            Mileage = "Mileage",
            Startdate = "Startdate",
            Enddate = "Enddate",
            Totaldays = "Totaldays",
            Rto = "Rto",
            Pc = "Pc",
            TotalFuelAmount = "TotalFuelAmount",
            TotalDriverCommission = "TotalDriverCommission",
            DrivertwoBata = "DrivertwoBata",
            TotalCommison = "TotalCommison",
            TotalLoadingExpense = "TotalLoadingExpense",
            TotalUnloadExpense = "TotalUnloadExpense",
            TotalOtherExpense = "TotalOtherExpense",
            TotalFright = "TotalFright",
            Profit = "Profit",
            VehicleTypeOfVehicle = "VehicleTypeOfVehicle",
            VehicleThrough = "VehicleThrough",
            VehicleVehicleNumber = "VehicleVehicleNumber",
            VehicleVehicleModel = "VehicleVehicleModel",
            VehicleRegistraionNumber = "VehicleRegistraionNumber",
            VehicleDescription = "VehicleDescription",
            VehicleRegistrationDate = "VehicleRegistrationDate",
            VehicleExpiryDate = "VehicleExpiryDate",
            VehicleDriver = "VehicleDriver",
            VehiclePdoApproved = "VehiclePdoApproved",
            VehiclePrimeMover = "VehiclePrimeMover",
            VehicleSupplierId = "VehicleSupplierId",
            CommisionDetails = "CommisionDetails",
            ServiceAmount = "ServiceAmount",
            FuelDetails = "FuelDetails",
            VehicleFreight = "VehicleFreight",
            Toll = "Toll",
            TotalExpense = "TotalExpense",
            ExtraBill = "ExtraBill",
            Remarks = "Remarks",
            Receipts = "Receipts",
            Payments = "Payments",
            FuelId = "FuelId"
        }
    }
}
declare namespace SerExtraCore.VehicleMovDetails {
    namespace VehicleMovDetailsService {
        const baseUrl = "VehicleMovDetails/VehicleMovDetails";
        function Create(request: Serenity.SaveRequest<VehicleMovDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<VehicleMovDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VehicleMovDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<VehicleMovDetailsRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VehicleMovDetailsRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<VehicleMovDetailsRow>>;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<GetNextNumberResponse>;
        const enum Methods {
            Create = "VehicleMovDetails/VehicleMovDetails/Create",
            Update = "VehicleMovDetails/VehicleMovDetails/Update",
            Delete = "VehicleMovDetails/VehicleMovDetails/Delete",
            Retrieve = "VehicleMovDetails/VehicleMovDetails/Retrieve",
            List = "VehicleMovDetails/VehicleMovDetails/List",
            GetNextNumber = "VehicleMovDetails/VehicleMovDetails/GetNextNumber"
        }
    }
}
declare namespace SerExtraCore {
    enum VehicleTypes {
        Value1 = 1,
        Value2 = 2
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface AccountOpeningRequest extends Serenity.ServiceRequest {
        AccountId?: number;
        FromDate?: string;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface ConsignmentByVehicle extends Serenity.ServiceRequest {
        vehicleId?: number;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface CustomLookupRequest extends Serenity.ServiceRequest {
        CustomLookupId?: number;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface CustomLookupResponse extends Serenity.ServiceResponse {
        IdField?: number;
        NameField?: string;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface CustomerByIdRequest extends Serenity.ServiceRequest {
        CustomerId?: number;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface InvoiceBalanceRequest extends Serenity.ServiceRequest {
        invoiceid?: number;
        onlyapproved?: boolean;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface InvoiceBalanceResponse extends Serenity.ServiceResponse {
        Balance?: number;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface InvoicePrintRequest extends Serenity.ServiceRequest {
        invoiceid?: number;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface InvoiceVehicleChargesBalanceRequest extends Serenity.ServiceRequest {
        InvoiceVehicleChargesId?: number;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface InvoiceVehicleDetailBalanceRequest extends Serenity.ServiceRequest {
        InvoiceVehicleDetailid?: number;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface MonthDifferenceRequest {
        fromdatetime?: string;
        todatetime?: string;
        amount?: number;
        numberofmonths?: number;
        pdctype?: number;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface MonthDifferenceResponce {
        numberofmonths?: number;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface PendingCheque extends Serenity.ServiceRequest {
        asdate?: string;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface RefNoTrackRequest extends Serenity.ServiceRequest {
        RefNo?: string;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface RefNoTrackResponse extends Serenity.ServiceResponse {
        TrxId?: number;
        TypeOfTrx?: string;
        TrxDate?: string;
        TrxNo?: string;
        TotalAmount?: number;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface ReportRequest extends Serenity.ServiceRequest {
        ReportId?: number;
        DataFileName?: string;
        reportDesignsRow?: Reports.ReportDesignsRow;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface ReportsInCategory extends Serenity.ServiceResponse {
        Category?: string;
        reportDesignsRows?: Reports.ReportDesignsRow[];
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface SupplierBalance extends Serenity.ServiceRequest {
        SupplierId?: number;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface SupplierBalanceResponse {
        SupplierId?: number;
        SupplierName?: string;
        TotalAmount?: number;
        SupplierAdvanceAmount?: number;
        PaidAmount?: number;
        Balance?: number;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface UpdateBankStatus extends Serenity.ServiceRequest {
        TrxId?: number;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface UserHierarchyRequest extends Serenity.ServiceRequest {
        type?: string;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface VoucherNoRequest extends Serenity.ServiceRequest {
        vouchertype?: number;
    }
}
declare namespace SerExtraCore.Web.Modules {
    interface VoucherNoResponse extends Serenity.ServiceResponse {
        voucherno?: number;
    }
}
declare namespace _Ext {
    enum AuditActionType {
        Insert = 1,
        Update = 2,
        Delete = 3
    }
}
declare namespace _Ext {
    class AuditLogColumns {
        static readonly columnsKey = "_Ext.AuditLog";
    }
}
declare namespace _Ext {
    interface AuditLogForm {
        EntityTableName: Serenity.StringEditor;
        VersionNo: Serenity.IntegerEditor;
        UserId: Serenity.LookupEditor;
        ActionType: Serenity.EnumEditor;
        ActionDate: Serenity.DateTimeEditor;
        EntityId: Serenity.IntegerEditor;
        OldEntity: Serenity.StringEditor;
        NewEntity: Serenity.StringEditor;
        Differences: StaticTextBlock;
        IpAddress: Serenity.StringEditor;
        SessionId: Serenity.StringEditor;
    }
    class AuditLogForm extends Serenity.PrefixedContext {
        static readonly formKey = "_Ext.AuditLog";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace _Ext {
    interface AuditLogRow {
        Id?: number;
        VersionNo?: number;
        UserId?: number;
        ActionType?: AuditActionType;
        ActionDate?: string;
        EntityTableName?: string;
        EntityId?: number;
        OldEntity?: string;
        NewEntity?: string;
        IpAddress?: string;
        SessionId?: string;
    }
    namespace AuditLogRow {
        const idProperty = "Id";
        const nameProperty = "EntityTableName";
        const localTextPrefix = "_Ext.AuditLog";
        const deletePermission = "Administration:AuditLog";
        const insertPermission = "Administration:AuditLog";
        const readPermission = "Administration:AuditLog";
        const updatePermission = "Administration:AuditLog";
        const enum Fields {
            Id = "Id",
            VersionNo = "VersionNo",
            UserId = "UserId",
            ActionType = "ActionType",
            ActionDate = "ActionDate",
            EntityTableName = "EntityTableName",
            EntityId = "EntityId",
            OldEntity = "OldEntity",
            NewEntity = "NewEntity",
            IpAddress = "IpAddress",
            SessionId = "SessionId"
        }
    }
}
declare namespace _Ext {
    namespace AuditLogService {
        const baseUrl = "_Ext/AuditLog";
        function Create(request: Serenity.SaveRequest<AuditLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Update(request: Serenity.SaveRequest<AuditLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.SaveResponse>;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.DeleteResponse>;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AuditLogRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.RetrieveResponse<AuditLogRow>>;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AuditLogRow>) => void, opt?: Q.ServiceOptions<any>): PromiseLike<Serenity.ListResponse<AuditLogRow>>;
        const enum Methods {
            Create = "_Ext/AuditLog/Create",
            Update = "_Ext/AuditLog/Update",
            Delete = "_Ext/AuditLog/Delete",
            Retrieve = "_Ext/AuditLog/Retrieve",
            List = "_Ext/AuditLog/List"
        }
    }
}
declare namespace _Ext {
    interface AuditLogViewerRequest extends Serenity.ServiceRequest {
        FormKey?: string;
        EntityId?: number;
    }
}
declare namespace _Ext {
    interface AuditLogViewerResponse extends Serenity.ServiceResponse {
        EntityVersions?: AuditLogRow[];
    }
}
declare namespace _Ext {
    namespace AuditLogViewerService {
        const baseUrl = "AuditLogViewer";
        function List(request: AuditLogViewerRequest, onSuccess?: (response: AuditLogViewerResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<AuditLogViewerResponse>;
        const enum Methods {
            List = "AuditLogViewer/List"
        }
    }
}
declare namespace _Ext {
    interface EntityReportRequest extends Serenity.RetrieveRequest {
        ReportKey?: string;
        ReportServiceMethodName?: string;
        ReportDesignPath?: string;
    }
}
declare namespace _Ext {
    interface ListReportRequest extends Serenity.ListRequest {
        ReportKey?: string;
        ReportServiceMethodName?: string;
        ListExcelServiceMethodName?: string;
        ReportDesignPath?: string;
        EqualityFilterWithTextValue?: {
            [key: string]: string;
        };
        CustomParameters?: {
            [key: string]: any;
        };
    }
}
declare namespace _Ext {
    enum Months {
        January = 0,
        February = 1,
        March = 2,
        April = 3,
        May = 4,
        June = 5,
        July = 6,
        August = 7,
        September = 8,
        October = 9,
        November = 10,
        December = 11
    }
}
declare namespace _Ext {
    interface ReplaceRowForm {
        DeletedEntityName: Serenity.StringEditor;
        ReplaceWithEntityId: EmptyLookupEditor;
    }
    class ReplaceRowForm extends Serenity.PrefixedContext {
        static readonly formKey = "_Ext.ReplaceRow";
        private static init;
        constructor(prefix: string);
    }
}
declare namespace _Ext {
    interface ReplaceRowRequest extends Serenity.ServiceRequest {
        FormKey?: string;
        IdProperty?: string;
        NameProperty?: string;
        EntityTypeTitle?: string;
        DeletedEntityId?: number;
        DeletedEntityName?: string;
        ReplaceWithEntityId?: number;
    }
}
declare namespace _Ext {
    interface ReplaceRowResponse extends Serenity.ServiceResponse {
    }
}
declare namespace _Ext {
    namespace ReplaceRowService {
        const baseUrl = "ReplaceRow";
        function Replace(request: ReplaceRowRequest, onSuccess?: (response: ReplaceRowResponse) => void, opt?: Q.ServiceOptions<any>): PromiseLike<ReplaceRowResponse>;
        const enum Methods {
            Replace = "ReplaceRow/Replace"
        }
    }
}
declare namespace _Ext {
    enum TimeUoM {
        Hour = 1,
        Day = 2,
        Week = 3,
        Month = 4,
        CalenderMonth = 5,
        Year = 6
    }
}
declare namespace SerExtraCore.Accounts {
    class AccountHeadsDialog extends Serenity.EntityDialog<AccountHeadsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AccountHeadsForm;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace SerExtraCore.Accounts {
    class AccountHeadsGrid extends Serenity.EntityGrid<AccountHeadsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AccountHeadsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private treeMixin;
        constructor(container: JQuery);
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<AccountHeadsRow>): Serenity.ListResponse<AccountHeadsRow>;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SerExtraCore.Accounts {
    class AccountsDialog extends Serenity.EntityDialog<AccountsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AccountsForm;
    }
}
declare namespace SerExtraCore.Accounts {
    class AccountsGrid extends Serenity.EntityGrid<AccountsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AccountsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<AccountsRow>): Serenity.ListResponse<AccountsRow>;
    }
}
declare namespace SerExtraCore.Accounts {
    class BankReconciliationGrid extends Serenity.EntityGrid<Accounts.BankReconciliationRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        private startdate;
        constructor(container: JQuery);
        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<Accounts.JVAdjustmentsRow>): Serenity.ListResponse<JVAdjustmentsRow>;
        protected getButtons(): any[];
        protected createSlickGrid(): Slick.Grid;
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected viewDataChanged(): void;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getItemCssClass(item: Accounts.BankReconciliationRow, index: number): string;
    }
}
declare namespace SerExtraCore.Accounts {
    class ContraDialog extends Serenity.EntityDialog<ContraRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ContraForm;
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace SerExtraCore.Accounts {
    class ContraGrid extends Serenity.EntityGrid<ContraRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ContraDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<ContraRow>): Serenity.ListResponse<ContraRow>;
    }
}
declare namespace SerExtraCore.Accounts {
    class JVAdjustmentsDialog extends Serenity.EntityDialog<JVAdjustmentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: JVAdjustmentsForm;
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace SerExtraCore.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
        protected enableDeleteColumn(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace SerExtraCore.Accounts {
    class JVAdjustmentsEditor extends Common.GridEditorBase<JVAdjustmentsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof JVAdjustmentsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SerExtraCore.Accounts {
    class JVAdjustmentsGrid extends Serenity.EntityGrid<JVAdjustmentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof JVAdjustmentsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<ContraRow>): Serenity.ListResponse<ContraRow>;
    }
}
declare namespace SerExtraCore.Accounts {
    class MoneyInDialog extends Serenity.EntityDialog<MoneyInRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MoneyInForm;
        constructor();
        private getNextNumber;
        protected afterLoadEntity(): void;
        private CalculateTotal;
    }
}
declare namespace SerExtraCore.Accounts {
    class MoneyInGrid extends Serenity.EntityGrid<MoneyInRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MoneyInDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace SerExtraCore.Accounts {
    class MoneyOutDialog extends Serenity.EntityDialog<MoneyOutRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MoneyOutForm;
        constructor();
        private getNextNumber;
        protected afterLoadEntity(): void;
        private CalculateTotal;
    }
}
declare namespace SerExtraCore.Accounts {
    class MoneyOutEditor extends Common.GridEditorBase<MoneyOutRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MoneyOutDialog;
        protected getLocalTextPrefix(): string;
        private pendingChanges;
        hidesupppieradvance: boolean;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Accounts {
    class MoneyOutGrid extends Serenity.EntityGrid<MoneyOutRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MoneyOutDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace SerExtraCore.Accounts {
    class ConsignmentExpenseEditor extends Common.GridEditorBase<PaymentRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ConsignmentPaymentDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SerExtraCore.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace SerExtraCore.Accounts {
    class ConsignmentPaymentDialog extends Common.GridEditorDialog<PaymentRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: PaymentForm;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace SerExtraCore.Accounts {
    class PaymentDialog extends Serenity.EntityDialog<PaymentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PaymentForm;
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace SerExtraCore.Accounts {
    class PaymentGrid extends Serenity.EntityGrid<PaymentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PaymentDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<PaymentRow>): Serenity.ListResponse<PaymentRow>;
    }
}
declare namespace SerExtraCore.Accounts {
    class ReceiptDialog extends Serenity.EntityDialog<ReceiptRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ReceiptForm;
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace SerExtraCore.Transactions {
    class ReceiptEditor extends Common.GridEditorBase<Accounts.ReceiptRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof Accounts.ReceiptDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SerExtraCore.Accounts {
    class ReceiptGrid extends Serenity.EntityGrid<ReceiptRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReceiptDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<ReceiptRow>): Serenity.ListResponse<ReceiptRow>;
    }
}
declare var Morris: any;
declare namespace SerExtraCore.Administration {
    class AccountClosing extends Serenity.TemplatedDialog<any> {
        private areaChart;
        static initializePage(): void;
    }
}
declare namespace SerExtraCore.Administration {
    class ConfigurationDialog extends Serenity.EntityDialog<ConfigurationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ConfigurationForm;
        protected updateInterface(): void;
    }
}
declare namespace SerExtraCore.Administration {
    class ConfigurationGrid extends Serenity.EntityGrid<ConfigurationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ConfigurationDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Administration {
    class CustomLookupsDialog extends Serenity.EntityDialog<CustomLookupsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomLookupsForm;
    }
}
declare namespace SerExtraCore.Administration {
    class CustomLookupsGrid extends Serenity.EntityGrid<CustomLookupsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomLookupsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace SerExtraCore.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace SerExtraCore.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace SerExtraCore.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace SerExtraCore.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare var Vue: any;
declare namespace SerExtraCore.Administration {
    class SergenPanel extends Serenity.Widget<any> {
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace SerExtraCore.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace SerExtraCore.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace SerExtraCore.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace SerExtraCore.Administration {
    class UserHierarchyDialog extends Serenity.EntityDialog<UserHierarchyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UserHierarchyForm;
    }
}
declare namespace SerExtraCore.Administration {
    class UserHierarchyGrid extends Serenity.EntityGrid<UserHierarchyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserHierarchyDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace SerExtraCore.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace SerExtraCore.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace SerExtraCore.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace SerExtraCore.LanguageList {
    function getValue(): string[][];
}
declare namespace SerExtraCore.ScriptInitialization {
}
declare namespace SerExtraCore {
    class Dashboard extends Serenity.TemplatedDialog<any> {
        static opendocument(model: any): void;
        static oncequeclick(model: any, type: any): void;
    }
}
declare namespace SerExtraCore {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        get title(): string;
        set title(value: string);
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace SerExtraCore.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace SerExtraCore.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace SerExtraCore.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace SerExtraCore.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace SerExtraCore {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace SerExtraCore.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace SerExtraCore.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace SerExtraCore.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace SerExtraCore.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace SerExtraCore.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace SerExtraCore.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace SerExtraCore.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace SerExtraCore.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace SerExtraCore.Documents {
    class DocumentTypeDialog extends Serenity.EntityDialog<DocumentTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DocumentTypeForm;
    }
}
declare namespace SerExtraCore.Documents {
    class DocumentTypeGrid extends Serenity.EntityGrid<DocumentTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DocumentTypeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Documents {
    class DocumentsDialog extends Serenity.EntityDialog<DocumentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DocumentsForm;
        private getNextNumber;
        protected afterLoadEntity(): void;
    }
}
declare namespace SerExtraCore.Documents {
    class DocumentsGrid extends Serenity.EntityGrid<DocumentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DocumentsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SerExtraCore.HRM {
    class EmployeeLeavesDialog extends Serenity.EntityDialog<EmployeeLeavesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmployeeLeavesForm;
        protected afterLoadEntity(): void;
        private addDays;
        private subDays;
        private calculatediif;
    }
}
declare namespace SerExtraCore.HRM {
    class EmployeeLeavesGrid extends Serenity.EntityGrid<EmployeeLeavesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeLeavesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SerExtraCore.HRM {
    class PayrollPaymentDialog extends Common.GridEditorDialog<PayrollPaymentRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: PayrollPaymentForm;
        constructor();
        protected afterLoadEntity(): void;
        private CalculateTotal;
        payments: PayrollPaymentRow[];
    }
}
declare namespace SerExtraCore.HRM {
    class PayrollPaymentEditor extends Common.GridEditorBase<PayrollPaymentRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PayrollPaymentDialog;
        protected getLocalTextPrefix(): string;
        private pendingChanges;
        payments: PayrollPaymentRow[];
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace SerExtraCore.HRM {
    class PayrollPaymentGrid extends Serenity.EntityGrid<PayrollPaymentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PayrollPaymentDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.HRM {
    class PayrollStructuresDialog extends Serenity.EntityDialog<PayrollStructuresRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PayrollStructuresForm;
        protected afterLoadEntity(): void;
    }
}
declare namespace SerExtraCore.HRM {
    class PayrollStructuresGrid extends Serenity.EntityGrid<PayrollStructuresRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PayrollStructuresDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Master {
    class ChargesDialog extends Serenity.EntityDialog<ChargesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ChargesForm;
    }
}
declare namespace SerExtraCore.Master {
    class ChargesGrid extends Serenity.EntityGrid<ChargesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ChargesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<ChargesRow>): Serenity.ListResponse<ChargesRow>;
    }
}
declare namespace SerExtraCore.Master {
    class ClearanceStatusDialog extends Serenity.EntityDialog<ClearanceStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ClearanceStatusForm;
        protected afterLoadEntity(): void;
    }
}
declare namespace SerExtraCore.Master {
    class ClearanceStatusGrid extends Serenity.EntityGrid<ClearanceStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClearanceStatusDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.CommisionDetails {
    class CommisionDetailsDialog extends Common.GridEditorDialog<CommisionDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: CommisionDetailsForm;
        constructor();
        protected afterLoadEntity(): void;
        private updatephone;
    }
}
declare namespace SerExtraCore.CommisionDetails {
    class CommisionDetailsEditor extends Common.GridEditorBase<CommisionDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CommisionDetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SerExtraCore.CommisionDetails {
    class CommisionDetailsGrid extends Serenity.EntityGrid<CommisionDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CommisionDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.CommissionPercentage {
    class CommissionPercentageDialog extends Serenity.EntityDialog<CommissionPercentageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CommissionPercentageForm;
    }
}
declare namespace SerExtraCore.CommissionPercentage {
    class CommissionPercentageGrid extends Serenity.EntityGrid<CommissionPercentageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CommissionPercentageDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Companies {
    class CompaniesDialog extends Serenity.EntityDialog<CompaniesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CompaniesForm;
    }
}
declare namespace SerExtraCore.Companies {
    class CompaniesGrid extends Serenity.EntityGrid<CompaniesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CompaniesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Master {
    class CountriesDialog extends Serenity.EntityDialog<CountriesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CountriesForm;
    }
}
declare namespace SerExtraCore.Master {
    class CountriesGrid extends Serenity.EntityGrid<CountriesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CountriesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<CountriesRow>): Serenity.ListResponse<CountriesRow>;
    }
}
declare namespace SerExtraCore.Master {
    class CurrenciesDialog extends Serenity.EntityDialog<CurrenciesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CurrenciesForm;
    }
}
declare namespace SerExtraCore.Master {
    class CurrenciesGrid extends Serenity.EntityGrid<CurrenciesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CurrenciesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<CurrenciesRow>): Serenity.ListResponse<CurrenciesRow>;
    }
}
declare namespace SerExtraCore.Master {
    class CustomersDialog extends Serenity.EntityDialog<CustomersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomersForm;
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace SerExtraCore.Master {
    class CustomersGrid extends Serenity.EntityGrid<CustomersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<CustomersRow>): Serenity.ListResponse<CustomersRow>;
    }
}
declare namespace SerExtraCore.Master {
    class DesignationDialog extends Serenity.EntityDialog<DesignationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DesignationForm;
    }
}
declare namespace SerExtraCore.Master {
    class DesignationGrid extends Serenity.EntityGrid<DesignationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DesignationDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<DesignationRow>): Serenity.ListResponse<DesignationRow>;
    }
}
declare namespace SerExtraCore.Master {
    class EmployeeMasterDialog extends Serenity.EntityDialog<EmployeeMasterRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmployeeMasterForm;
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace SerExtraCore.Master {
    class EmployeeMasterGrid extends Serenity.EntityGrid<EmployeeMasterRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeMasterDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<EmployeeMasterRow>): Serenity.ListResponse<EmployeeMasterRow>;
    }
}
declare namespace SerExtraCore.Master {
    class EmployeeTypeDialog extends Serenity.EntityDialog<EmployeeTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmployeeTypeForm;
    }
}
declare namespace SerExtraCore.Master {
    class EmployeeTypeGrid extends Serenity.EntityGrid<EmployeeTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeTypeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<EmployeeTypeRow>): Serenity.ListResponse<EmployeeTypeRow>;
    }
}
declare namespace SerExtraCore.FuelDetails {
    class FuelDetailsDialog extends Common.GridEditorDialog<FuelDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: FuelDetailsForm;
        constructor();
        protected afterLoadEntity(): void;
        private updatepayment;
        private updateTotalAmt;
    }
}
declare namespace SerExtraCore.FuelDetails {
    class FuelDetailsEditor extends Common.GridEditorBase<FuelDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FuelDetailsDialog;
        protected getLocalTextPrefix(): string;
        private pendingChanges;
        hidesupppieradvance: boolean;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SerExtraCore.FuelDetails {
    class FuelDetailsGrid extends Serenity.EntityGrid<FuelDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FuelDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.MaterialsDetails {
    class MaterialsDetailsDialog extends Serenity.EntityDialog<MaterialsDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MaterialsDetailsForm;
    }
}
declare namespace SerExtraCore.MaterialsDetails {
    class MaterialsDetailsGrid extends Serenity.EntityGrid<MaterialsDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MaterialsDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Master {
    class OutsourceDialog extends Serenity.EntityDialog<OutsourceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: OutsourceForm;
    }
}
declare namespace SerExtraCore.Master {
    class OutsourceGrid extends Serenity.EntityGrid<OutsourceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OutsourceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<OutsourceRow>): Serenity.ListResponse<OutsourceRow>;
    }
}
declare namespace SerExtraCore.Master {
    class PortsDialog extends Serenity.EntityDialog<PortsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PortsForm;
        protected afterLoadEntity(): void;
    }
}
declare namespace SerExtraCore.Master {
    class PortsGrid extends Serenity.EntityGrid<PortsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PortsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Master {
    class ProductsDialog extends Serenity.EntityDialog<ProductsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProductsForm;
    }
}
declare namespace SerExtraCore.Master {
    class ProductsGrid extends Serenity.EntityGrid<ProductsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.PumpDetails {
    class PumpDetailsDialog extends Serenity.EntityDialog<PumpDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PumpDetailsForm;
    }
}
declare namespace SerExtraCore.PumpDetails {
    class PumpDetailsGrid extends Serenity.EntityGrid<PumpDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PumpDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.ServiceAmount {
    class ServiceAmountDialog extends Common.GridEditorDialog<ServiceAmountRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: typeof ServiceAmountForm;
    }
}
declare namespace SerExtraCore.ServiceAmount {
    class ServiceAmountEditor extends Common.GridEditorBase<ServiceAmountRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ServiceAmountDialog;
        protected getLocalTextPrefix(): string;
        private pendingChanges;
        hidesupppieradvance: boolean;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SerExtraCore.ServiceAmount {
    class ServiceAmountGrid extends Serenity.EntityGrid<ServiceAmountRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ServiceAmountDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Services {
    class ServicesDialog extends Serenity.EntityDialog<ServicesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ServicesForm;
    }
}
declare namespace SerExtraCore.Services {
    class ServicesGrid extends Serenity.EntityGrid<ServicesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ServicesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Master {
    class ShippingAreasDialog extends Serenity.EntityDialog<ShippingAreasRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ShippingAreasForm;
    }
}
declare namespace SerExtraCore.Master {
    class ShippingAreasGrid extends Serenity.EntityGrid<ShippingAreasRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ShippingAreasDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<ShippingAreasRow>): Serenity.ListResponse<ShippingAreasRow>;
    }
}
declare namespace SerExtraCore.Master {
    class SpecificationsDialog extends Serenity.EntityDialog<SpecificationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SpecificationsForm;
    }
}
declare namespace SerExtraCore.Master {
    class SpecificationsGrid extends Serenity.EntityGrid<SpecificationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SpecificationsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<SpecificationsRow>): Serenity.ListResponse<SpecificationsRow>;
    }
}
declare namespace SerExtraCore.States {
    class StatesDialog extends Serenity.EntityDialog<StatesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StatesForm;
    }
}
declare namespace SerExtraCore.States {
    class StatesGrid extends Serenity.EntityGrid<StatesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StatesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Master {
    class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SupplierForm;
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace SerExtraCore.Master {
    class SupplierGrid extends Serenity.EntityGrid<SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SupplierDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<SupplierRow>): Serenity.ListResponse<SupplierRow>;
    }
}
declare namespace SerExtraCore.Master {
    class TaxCodeDialog extends Serenity.EntityDialog<TaxCodeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TaxCodeForm;
    }
}
declare namespace SerExtraCore.Master {
    class TaxCodeGrid extends Serenity.EntityGrid<TaxCodeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TaxCodeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.UOM {
    class UOMDialog extends Serenity.EntityDialog<UOMRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UOMForm;
    }
}
declare namespace SerExtraCore.UOM {
    class UOMGrid extends Serenity.EntityGrid<UOMRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UOMDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.UOMAmount {
    class UOMAmountDialog extends Common.GridEditorDialog<UOMAmountRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: typeof UOMAmountForm;
    }
}
declare namespace SerExtraCore.UOMAmount {
    class UOMAmountEditor extends Common.GridEditorBase<UOMAmountRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UOMAmountDialog;
        protected getLocalTextPrefix(): string;
        private pendingChanges;
        hidesupppieradvance: boolean;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SerExtraCore.UOMAmount {
    class UOMAmountGrid extends Serenity.EntityGrid<UOMAmountRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UOMAmountDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.VehicleFreight {
    class VehicleFreightDialog extends Common.GridEditorDialog<VehicleFreightRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: VehicleFreightForm;
        constructor();
        protected afterLoadEntity(): void;
        private updateTotalFreight;
        private updateunitprice;
        private calculateCommission;
        protected categoryToggler(categoryTitle: string, value: boolean): void;
    }
}
declare namespace SerExtraCore.VehicleFreight {
    class VehicleFreightEditor extends Common.GridEditorBase<VehicleFreightRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VehicleFreightDialog;
        protected getLocalTextPrefix(): string;
        private pendingChanges;
        hidesupppieradvance: boolean;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SerExtraCore.VehicleFreight {
    class VehicleFreightGrid extends Serenity.EntityGrid<VehicleFreightRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VehicleFreightDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace SerExtraCore.Master {
    class VehicleModelsDialog extends Serenity.EntityDialog<VehicleModelsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VehicleModelsForm;
    }
}
declare namespace SerExtraCore.Master {
    class VehicleModelsGrid extends Serenity.EntityGrid<VehicleModelsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VehicleModelsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<VehicleModelsRow>): Serenity.ListResponse<VehicleModelsRow>;
    }
}
declare namespace SerExtraCore.VehicleMovDetails {
    class VehicleMovDetailsDialog extends Serenity.EntityDialog<VehicleMovDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VehicleMovDetailsForm;
        constructor();
        protected afterLoadEntity(): void;
        private updatestartkm;
        private updateTotalAmt;
        private updateMilage;
        private updateDate;
        private getNextNumber;
        private calculatefreight;
        private calculatefuel;
        private calculatetotal;
        private calculateCommission;
        private Totalexpense;
        private totalProfit;
        private totcom;
    }
}
declare namespace SerExtraCore.VehicleMovDetails {
    class VehicleMovDetailsEditor extends Common.GridEditorBase<VehicleMovDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VehicleMovDetailsDialog;
        protected getLocalTextPrefix(): string;
        private pendingChanges;
        hidesupppieradvance: boolean;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.VehicleMovDetails {
    class VehicleMovDetailsGrid extends Serenity.EntityGrid<VehicleMovDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VehicleMovDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace SerExtraCore.Master {
    class VehicleSpecificationsDialog extends Serenity.EntityDialog<VehicleSpecificationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VehicleSpecificationsForm;
    }
}
declare namespace SerExtraCore.Master {
    class VehicleSpecificationsGrid extends Serenity.EntityGrid<VehicleSpecificationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VehicleSpecificationsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<VehicleSpecificationsRow>): Serenity.ListResponse<VehicleSpecificationsRow>;
    }
}
declare namespace SerExtraCore.Master {
    class VehicleSpecificationsFormater implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace SerExtraCore.Master {
    class VehiclesDialog extends Serenity.EntityDialog<VehiclesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VehiclesForm;
        constructor();
    }
}
declare namespace SerExtraCore.Master {
    class VehiclesGrid extends Serenity.EntityGrid<VehiclesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VehiclesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<VehiclesRow>): Serenity.ListResponse<VehiclesRow>;
    }
}
declare namespace SerExtraCore.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace SerExtraCore.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore {
    class NoteDialog extends Serenity.TemplatedDialog<any> {
        private textEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        get text(): string;
        set text(value: string);
        okClick: () => void;
    }
}
declare namespace SerExtraCore.Administration {
    class NotesEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        constructor(div: JQuery);
        protected getTemplate(): string;
        protected updateContent(): void;
        protected addClick(): void;
        protected editClick(e: any): void;
        deleteClick(e: any): void;
        get value(): NoteRow[];
        set value(value: NoteRow[]);
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        get_isDirty(): boolean;
        set_isDirty(value: any): void;
        onChange: () => void;
    }
}
declare namespace SerExtraCore.PDCPayments {
    class PdcPaymentDetailsDialog extends Common.GridEditorDialog<PdcPaymentDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: PdcPaymentDetailsForm;
        constructor();
        protected afterLoadEntity(): void;
        private accountreq;
        type: number;
    }
}
declare namespace SerExtraCore.PDCPayments {
    class PdcPaymentDetailsEditor extends Common.GridEditorBase<PdcPaymentDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PdcPaymentDetailsDialog;
        protected getLocalTextPrefix(): string;
        type: number;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace SerExtraCore.PDCPayments {
    class PdcPaymentDetailsGrid extends Serenity.EntityGrid<PdcPaymentDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PdcPaymentDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.PDCPayments {
    class PdcPaymentsDialog extends Serenity.EntityDialog<PdcPaymentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PdcPaymentsForm;
        constructor();
        private getdatediff;
        private calculateamounts;
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace SerExtraCore.PDCPayments {
    class PdcPaymentsGrid extends Serenity.EntityGrid<PdcPaymentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PdcPaymentsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<PdcPaymentsRow>): Serenity.ListResponse<PdcPaymentsRow>;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare var Morris: any;
declare namespace SerExtraCore {
    class ReeportHead extends Serenity.TemplatedDialog<any> {
        private areaChart;
        static initializePage(): void;
    }
}
declare var Morris: any;
declare namespace SerExtraCore.Reports {
    class DynamicReport extends Serenity.TemplatedDialog<any> {
        private areaChart;
        private static reportmodel;
        static initializePage(reportID: any): void;
        static setreportmodel(model: any): void;
        static loadprojects(lookupid: any): void;
        static loadlocations(lookupid: any): void;
    }
}
declare var jsPDF: any;
declare namespace SerExtraCore.Common {
    class DynamicReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace SerExtraCore.Reports {
    class ReportDataSetsDialog extends Common.GridEditorDialog<ReportDataSetsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ReportDataSetsForm;
    }
}
declare namespace SerExtraCore.Reports {
    class ReportDataSetsEditor extends Common.GridEditorBase<ReportDataSetsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReportDataSetsDialog;
        protected getLocalTextPrefix(): string;
        fromlocationid: number;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace SerExtraCore.Reports {
    class ReportDataSetsGrid extends Serenity.EntityGrid<ReportDataSetsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReportDataSetsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Reports {
    class ReportDesignsDialog extends Serenity.EntityDialog<ReportDesignsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ReportDesignsForm;
        constructor();
        protected afterLoadEntity(): void;
    }
}
declare namespace SerExtraCore.Reports {
    class ReportDesignsGrid extends Serenity.EntityGrid<ReportDesignsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReportDesignsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Reports {
    class ReportParametersDialog extends Common.GridEditorDialog<ReportParametersRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ReportParametersForm;
        constructor();
        protected afterLoadEntity(): void;
        private HideLookupSection;
        private HideLookupTypes;
    }
}
declare namespace SerExtraCore.Reports {
    class ReportParametersEditor extends Common.GridEditorBase<ReportParametersRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReportParametersDialog;
        protected getLocalTextPrefix(): string;
        fromlocationid: number;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace SerExtraCore.Reports {
    class ReportParametersGrid extends Serenity.EntityGrid<ReportParametersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReportParametersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Transactions {
    class ClearanceDialog extends Serenity.EntityDialog<ClearanceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ClearanceForm;
    }
}
declare namespace SerExtraCore.Transactions {
    class ClearanceGrid extends Serenity.EntityGrid<ClearanceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClearanceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Transactions {
    class ConsignmentDialog extends Serenity.EntityDialog<ConsignmentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ConsignmentForm;
        constructor();
        protected afterLoadEntity(): void;
        private fualadvance;
        private setpaymenttype;
        private calculatetotal;
        private cgst;
        private sgst;
        private igst;
        private totaltax;
        private setadancerequied;
        private calculatebalance;
        private totconsignmentamount;
        private setsupp;
        protected categoryToggler(categoryTitle: string, value: boolean): void;
    }
}
declare namespace SerExtraCore.Transactions {
    class ConsignmentGrid extends Serenity.EntityGrid<ConsignmentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ConsignmentDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        protected onViewProcessData(response: Serenity.ListResponse<ConsignmentRow>): Serenity.ListResponse<ConsignmentRow>;
        protected createSlickGrid(): Slick.Grid;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace SerExtraCore.Transactions {
    class FromLocationFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace SerExtraCore.Transactions {
    class ToLocationFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace SerExtraCore.Transactions {
    class EmployeeListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace SerExtraCore.Transactions {
    class ConsignmentChargeEditor extends Common.GridEditorBase<ConsignmentChargesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ConsignmentChargesDialog;
        protected getLocalTextPrefix(): string;
        private pendingChanges;
        hidesupppieradvance: boolean;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace SerExtraCore.Transactions {
    class ConsignmentChargesDialog extends Common.GridEditorDialog<ConsignmentChargesRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ConsignmentChargesForm;
        constructor();
        protected afterLoadEntity(): void;
        private CalculateTotal;
        hidesupppieradvance: boolean;
    }
}
declare namespace SerExtraCore.Transactions {
    class ConsignmentChargesGrid extends Serenity.EntityGrid<ConsignmentChargesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ConsignmentChargesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Transactions {
    class ConsignmentTripDatesDialog extends Common.GridEditorDialog<ConsignmentTripDatesRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ConsignmentTripDatesForm;
    }
}
declare namespace SerExtraCore.Transactions {
    class ConsignmentTripDatesEditor extends Common.GridEditorBase<ConsignmentTripDatesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ConsignmentTripDatesDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SerExtraCore.Transactions {
    class ConsignmentTripDatesGrid extends Serenity.EntityGrid<ConsignmentTripDatesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ConsignmentTripDatesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Transactions {
    class ConsignmentVehicleDetailsDialog extends Common.GridEditorDialog<ConsignmentVehicleDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ConsignmentVehicleDetailsForm;
        constructor();
        protected afterLoadEntity(): void;
        private CalculateTotal;
        protected hidediv(): void;
        protected categoryToggler(categoryTitle: string, value: boolean): void;
        protected saveDialog(): void;
    }
}
declare namespace SerExtraCore.Transactions {
    class ConsignmentVehicleDetailsEditor extends Common.GridEditorBase<ConsignmentVehicleDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ConsignmentVehicleDetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SerExtraCore.Transactions {
    class ConsignmentVehicleDetailsGrid extends Serenity.EntityGrid<ConsignmentVehicleDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ConsignmentVehicleDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<ConsignmentVehicleDetailsRow>): Serenity.ListResponse<ConsignmentVehicleDetailsRow>;
    }
}
declare namespace SerExtraCore.Transactions {
    class ConsignmentVehicleSpecificationsDialog extends Serenity.EntityDialog<ConsignmentVehicleSpecificationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ConsignmentVehicleSpecificationsForm;
    }
}
declare namespace SerExtraCore.Transactions {
    class ConsignmentVehicleSpecificationsGrid extends Serenity.EntityGrid<ConsignmentVehicleSpecificationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ConsignmentVehicleSpecificationsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Crossing {
    class CrossingDialog extends Common.GridEditorDialog<CrossingRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: CrossingForm;
        constructor();
    }
}
declare namespace SerExtraCore.Crossing {
    class CrossingEditor extends Common.GridEditorBase<CrossingRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CrossingDialog;
        protected getLocalTextPrefix(): string;
        private pendingChanges;
        hidesupppieradvance: boolean;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Crossing {
    class CrossingGrid extends Serenity.EntityGrid<CrossingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CrossingDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Transactions {
    class DeliveryServiceDetailsDialog extends Common.GridEditorDialog<DeliveryServiceDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: DeliveryServiceDetailsForm;
        constructor();
        protected afterLoadEntity(): void;
        private totalamount;
    }
}
declare namespace SerExtraCore.Transactions {
    class DeliveryServiceDetailsEditor extends Common.GridEditorBase<DeliveryServiceDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DeliveryServiceDetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SerExtraCore.Transactions {
    class DeliveryServiceDetailsGrid extends Serenity.EntityGrid<DeliveryServiceDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DeliveryServiceDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Transactions {
    class DeliveryServicesDialog extends Serenity.EntityDialog<DeliveryServicesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DeliveryServicesForm;
        constructor();
        protected afterLoadEntity(): void;
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        private PaymentSectionVisibilty;
        private getNextNumber;
    }
}
declare namespace SerExtraCore.Transactions {
    class DeliveryServicesGrid extends Serenity.EntityGrid<DeliveryServicesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DeliveryServicesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Expenses {
    class ExpensesDialog extends Serenity.EntityDialog<ExpensesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: ExpensesForm;
        constructor();
        protected afterLoadEntity(): void;
        private updateTrip;
    }
}
declare namespace SerExtraCore.Expenses {
    class ExpensesGrid extends Serenity.EntityGrid<ExpensesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExpensesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Extr {
    class ExtrDialog extends Common.GridEditorDialog<ExtrRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ExtrForm;
        constructor();
    }
}
declare namespace SerExtraCore.Extr {
    class ExtrEditor extends Common.GridEditorBase<ExtrRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExtrDialog;
        protected getLocalTextPrefix(): string;
        private pendingChanges;
        hidesupppieradvance: boolean;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Extr {
    class ExtrGrid extends Serenity.EntityGrid<ExtrRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExtrDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Transactions {
    class FromLocationInvoiceFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace SerExtraCore {
    class Invoice extends Serenity.TemplatedDialog<any> {
        static initializePage(): void;
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceDialog extends Serenity.EntityDialog<InvoiceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InvoiceForm;
        constructor();
        private setpayment;
        protected afterLoadEntity(): void;
        private calculatetotal;
        private setsupp;
        private getNextNumber;
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        private calculatedues;
        private addDays;
        protected calculatedue: boolean;
        protected numberofdays: number;
        private processConsignmentResponse;
        private removeConsignmentData;
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceGrid extends Serenity.EntityGrid<InvoiceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        protected onViewProcessData(response: Serenity.ListResponse<InvoiceRow>): Serenity.ListResponse<InvoiceRow>;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace SerExtraCore.Transactions {
    class ToLocationInvoiceFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceChargeEditor extends Common.GridEditorBase<InvoiceChargesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceChargesDialog;
        protected getLocalTextPrefix(): string;
        hidesupppieradvance: boolean;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceChargesDialog extends Common.GridEditorDialog<InvoiceChargesRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: InvoiceChargesForm;
        protected afterLoadEntity(): void;
        constructor();
        private CalculateTotal;
        hidesupppieradvance: boolean;
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceChargesGrid extends Serenity.EntityGrid<InvoiceChargesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceChargesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceCollectionDialog extends Serenity.EntityDialog<InvoiceCollectionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InvoiceCollectionForm;
        constructor();
        protected afterLoadEntity(): void;
        private setvisible;
        private getNextNumber;
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceCollectionGrid extends Serenity.EntityGrid<InvoiceCollectionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceCollectionDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<InvoiceCollectionRow>): Serenity.ListResponse<InvoiceCollectionRow>;
        protected createSlickGrid(): Slick.Grid;
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace SerExtraCore.Transactions {
    class CustomerInvoiceLookupEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, any> {
        myId: number;
        isedit: boolean;
        constructor(container: JQuery, opt: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItems(lookup: Q.Lookup<any>): any;
        private buildLookupKey;
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceCollectionDetailsDialog extends Common.GridEditorDialog<InvoiceCollectionDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: InvoiceCollectionDetailsForm;
        constructor();
        protected afterLoadEntity(): void;
        set: boolean;
        customerid: number;
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceCollectionDetailsGrid extends Serenity.EntityGrid<InvoiceCollectionDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceCollectionDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceCollectonDetailsEditor extends Common.GridEditorBase<InvoiceCollectionDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceCollectionDetailsDialog;
        protected getLocalTextPrefix(): string;
        customerid: number;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceDueDetailsDialog extends Common.GridEditorDialog<InvoiceDueDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        constructor();
        protected afterLoadEntity(): void;
        private addDays;
        protected form: InvoiceDueDetailsForm;
        datetime: Date;
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceDueDetailsEditor extends Common.GridEditorBase<InvoiceDueDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceDueDetailsDialog;
        protected getLocalTextPrefix(): string;
        private pendingChanges;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        datetime: Date;
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceDueDetailsGrid extends Serenity.EntityGrid<InvoiceDueDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceDueDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceTripDatesDialog extends Common.GridEditorDialog<InvoiceTripDatesRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InvoiceTripDatesForm;
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceTripDatesEditor extends Common.GridEditorBase<InvoiceTripDatesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceTripDatesDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceTripDatesGrid extends Serenity.EntityGrid<InvoiceTripDatesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceTripDatesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceVehicleDetailsDialog extends Common.GridEditorDialog<InvoiceVehicleDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: InvoiceVehicleDetailsForm;
        constructor();
        protected afterLoadEntity(): void;
        private CalculateTotal;
        protected hidediv(): void;
        protected categoryToggler(categoryTitle: string, value: boolean): void;
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceVehicleDetailsEditor extends Common.GridEditorBase<InvoiceVehicleDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceVehicleDetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceVehicleDetailsGrid extends Serenity.EntityGrid<InvoiceVehicleDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceVehicleDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceVehicleSpecificationsDialog extends Serenity.EntityDialog<InvoiceVehicleSpecificationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InvoiceVehicleSpecificationsForm;
    }
}
declare namespace SerExtraCore.Transactions {
    class InvoiceVehicleSpecificationsGrid extends Serenity.EntityGrid<InvoiceVehicleSpecificationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceVehicleSpecificationsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Transactions {
    class PurchaseDialog extends Serenity.EntityDialog<PurchaseRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PurchaseForm;
        constructor();
        protected afterLoadEntity(): void;
        private setpaidamount;
        private setpaymentmode;
        private setvisible;
    }
}
declare namespace SerExtraCore.Transactions {
    class PurchaseGrid extends Serenity.EntityGrid<PurchaseRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Transactions {
    class PurchaseDetailsDialog extends Common.GridEditorDialog<PurchaseDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: PurchaseDetailsForm;
        constructor();
        protected afterLoadEntity(): void;
        private CalculateTotal;
    }
}
declare namespace SerExtraCore.Transactions {
    class PurchaseDetailsEditor extends Common.GridEditorBase<PurchaseDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseDetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace SerExtraCore.Transactions {
    class PurchaseDetailsGrid extends Serenity.EntityGrid<PurchaseDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Transactions {
    class QuotationDetailsDialog extends Common.GridEditorDialog<QuotationDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: QuotationDetailsForm;
        constructor();
        protected afterLoadEntity(): void;
        private CalculateTotal;
    }
}
declare namespace SerExtraCore.Transactions {
    class QuotationDetailsEditor extends Common.GridEditorBase<QuotationDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof QuotationDetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace SerExtraCore.Transactions {
    class QuotationDetailsGrid extends Serenity.EntityGrid<QuotationDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof QuotationDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Transactions {
    class QuotationsDialog extends Serenity.EntityDialog<QuotationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: QuotationsForm;
        constructor();
        protected afterLoadEntity(): void;
        private setbutton;
        private getNextNumber;
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        private calculatetotal;
    }
}
declare namespace SerExtraCore.Transactions {
    class QuotationsGrid extends Serenity.EntityGrid<QuotationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof QuotationsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.SettlementDetails {
    class SettlementDetailsDialog extends Serenity.EntityDialog<SettlementDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: SettlementDetailsForm;
        constructor();
        protected afterLoadEntity(): void;
        private updateTrip;
    }
}
declare namespace SerExtraCore.SettlementDetails {
    class SettlementDetailsGrid extends Serenity.EntityGrid<SettlementDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SettlementDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace SerExtraCore.Transactions {
    class SuppliersPaymentDialog extends Serenity.EntityDialog<SuppliersPaymentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SuppliersPaymentForm;
        constructor();
        protected afterLoadEntity(): void;
        private setvisible;
        private getNextNumber;
    }
}
declare namespace SerExtraCore.Transactions {
    class SuppliersPaymentGrid extends Serenity.EntityGrid<SuppliersPaymentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SuppliersPaymentDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        private nextId;
        protected onViewProcessData(response: Serenity.ListResponse<SuppliersPaymentRow>): Serenity.ListResponse<SuppliersPaymentRow>;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace SerExtraCore.Transactions {
    class SuppliersPaymentInvoiceChargesDialog extends Common.GridEditorDialog<SuppliersPaymentInvoiceChargesRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: SuppliersPaymentInvoiceChargesForm;
        constructor();
        protected afterLoadEntity(): void;
        supplierid: number;
    }
}
declare namespace SerExtraCore.Transactions {
    class SupplierPaymentInvoiceChargesEditor extends Common.GridEditorBase<SuppliersPaymentInvoiceChargesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SuppliersPaymentInvoiceChargesDialog;
        protected getLocalTextPrefix(): string;
        supplierid: number;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        protected validateEntity(row: SuppliersPaymentInvoiceChargesRow, id: number): boolean;
    }
}
declare namespace SerExtraCore.Transactions {
    class SuppliersPaymentInvoiceChargesGrid extends Serenity.EntityGrid<SuppliersPaymentInvoiceChargesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SuppliersPaymentInvoiceChargesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Transactions {
    class SuppliersPaymentInvoiceVehicleDetailsDialog extends Common.GridEditorDialog<SuppliersPaymentInvoiceVehicleDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: SuppliersPaymentInvoiceVehicleDetailsForm;
        constructor();
        protected afterLoadEntity(): void;
        supplierid: number;
    }
}
declare namespace SerExtraCore.Transactions {
    class SupplierPaymentInvoiceVehicleDetailsEditor extends Common.GridEditorBase<SuppliersPaymentInvoiceVehicleDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SuppliersPaymentInvoiceVehicleDetailsDialog;
        protected getLocalTextPrefix(): string;
        supplierid: number;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        protected validateEntity(row: SuppliersPaymentInvoiceVehicleDetailsRow, id: number): boolean;
    }
}
declare namespace SerExtraCore.Transactions {
    class SuppliersPaymentInvoiceVehicleDetailsGrid extends Serenity.EntityGrid<SuppliersPaymentInvoiceVehicleDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SuppliersPaymentInvoiceVehicleDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SerExtraCore.Transactions {
    class SuppliersPaymentInvoicesDialog extends Serenity.EntityDialog<SuppliersPaymentInvoicesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SuppliersPaymentInvoicesForm;
    }
}
declare namespace SerExtraCore.Transactions {
    class SuppliersPaymentInvoicesGrid extends Serenity.EntityGrid<SuppliersPaymentInvoicesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SuppliersPaymentInvoicesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace _Ext {
    class AuditLogActionTypeFormatter implements Slick.Formatter {
        static format(ctx: Slick.FormatterContext): string;
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace _Ext {
    class AuditLogDialog extends DialogBase<AuditLogRow, any> {
        protected getFormKey(): string;
        protected getRowType(): typeof AuditLogRow;
        protected getService(): string;
        protected form: AuditLogForm;
        protected afterLoadEntity(): void;
    }
}
declare namespace _Ext {
    class AuditLogGrid extends GridBase<AuditLogRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AuditLogDialog;
        protected getRowType(): typeof AuditLogRow;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare var jsondiffpatch: any;
declare namespace _Ext {
    class AuditLogViewer {
        el: string;
        data: {
            entityVersions: any[];
        };
        entity: any;
        entityId: any;
        constructor(el: string, entityVersions: AuditLogRow[]);
        mounted: () => void;
        computed: {
            test: () => string;
        };
        filters: {
            filterByYardId: () => any[];
        };
        methods: {
            showDiff: (versionInfo: AuditLogRow) => void;
            getDiff: (versionInfo: AuditLogRow) => any;
        };
        destroyed(): void;
    }
}
declare namespace _Ext {
    class AuditLogViewerDialog extends Serenity.TemplatedDialog<any> {
        request: AuditLogViewerRequest;
        constructor(request: AuditLogViewerRequest);
        protected getTemplateName(): string;
    }
}
declare namespace _Ext {
    class DialogSnippets extends DialogBase<AuditLogRow, any> {
        protected getFormKey(): string;
        protected getRowType(): typeof AuditLogRow;
        protected getService(): string;
        protected form: AuditLogForm;
        protected addCssClass(): void;
        protected getTemplate(): string;
        protected getTemplateName(): string;
        protected getFallbackTemplate(): string;
        protected initValidator(): void;
        protected getValidatorOptions(): JQueryValidation.ValidationOptions;
        protected initTabs(): void;
        protected initToolbar(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected initPropertyGrid(): void;
        protected getPropertyGridOptions(): Serenity.PropertyGridOptions;
        protected initLocalizationGrid(): void;
        protected initLocalizationGridCommon(pgOptions: Serenity.PropertyGridOptions): void;
        load(entityOrId: any, done: () => void, fail: (ex: Q.Exception) => void): void;
        loadResponse(data: any): void;
        protected onLoadingData(data: Serenity.RetrieveResponse<AuditLogRow>): void;
        protected beforeLoadEntity(entity: AuditLogRow): void;
        protected loadEntity(entity: AuditLogRow): void;
        protected set_entityId(value: any): void;
        protected set_entity(entity: any): void;
        protected isEditMode(): boolean;
        protected get_entityId(): any;
        protected get_entity(): AuditLogRow;
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected isDeleted(): boolean;
        protected isLocalizationMode(): boolean;
        protected isNew(): boolean;
        protected updateTitle(): void;
        protected getEntityTitle(): string;
        protected getEntitySingular(): string;
        protected getSaveEntity(): AuditLogRow;
        protected initDialog(): void;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getDialogTitle(): string;
        protected handleResponsive(): void;
        protected onDialogOpen(): void;
        protected arrange(): void;
        protected save(callback?: (response: Serenity.SaveResponse) => void): void | boolean;
        protected validateBeforeSave(): boolean;
        protected save_submitHandler(callback: (response: Serenity.SaveResponse) => void): void;
        protected getSaveOptions(callback: (response: Serenity.SaveResponse) => void): Serenity.ServiceOptions<Serenity.SaveResponse>;
        protected getSaveRequest(): Serenity.SaveRequest<AuditLogRow>;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected onSaveSuccess(response: Serenity.SaveResponse): void;
        loadById(id: any, callback?: (response: Serenity.RetrieveResponse<AuditLogRow>) => void, fail?: () => void): void;
        protected getLoadByIdRequest(id: any): Serenity.RetrieveRequest;
        protected getLoadByIdOptions(id: any, callback: (response: Serenity.RetrieveResponse<AuditLogRow>) => void): Serenity.ServiceOptions<Serenity.RetrieveResponse<AuditLogRow>>;
        protected loadByIdHandler(options: Serenity.ServiceOptions<Serenity.RetrieveResponse<AuditLogRow>>, callback: (response: Serenity.RetrieveResponse<AuditLogRow>) => void, fail: () => void): void;
        protected showSaveSuccessMessage(response: Serenity.SaveResponse): void;
        protected getEntityNameFieldValue(): any;
        protected isCloneMode(): boolean;
        protected isNewOrDeleted(): boolean;
        protected getDeleteOptions(callback: (response: Serenity.DeleteResponse) => void): Serenity.ServiceOptions<Serenity.DeleteResponse>;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
        protected doDelete(callback: (response: Serenity.DeleteResponse) => void): void;
        protected onDeleteSuccess(response: Serenity.DeleteResponse): void;
        protected getEntityType(): string;
        protected getLocalTextDbPrefix(): string;
        protected getIsActiveProperty(): string;
        protected getIsDeletedProperty(): string;
        loadNewAndOpenDialog(asPanel?: boolean): void;
        loadEntityAndOpenDialog(entity: AuditLogRow, asPanel?: boolean): void;
        loadByIdAndOpenDialog(entityId: any, asPanel?: boolean): void;
        protected reloadById(): void;
        protected isLocalizationModeAndChanged(): boolean;
        protected localizationButtonClick(): void;
        protected getLanguages(): any[];
        protected loadLocalization(): void;
        protected setLocalizationGridCurrentValues(): void;
        protected getLocalizationGridValue(): any;
        protected getPendingLocalizations(): any;
        protected getPropertyItems(): Serenity.PropertyItem[];
        protected getCloningEntity(): AuditLogRow;
        protected getUndeleteOptions(callback?: (response: Serenity.UndeleteResponse) => void): Serenity.ServiceOptions<Serenity.UndeleteResponse>;
        protected undeleteHandler(options: Serenity.ServiceOptions<Serenity.UndeleteResponse>, callback: (response: Serenity.UndeleteResponse) => void): void;
        protected undelete(callback?: (response: Serenity.UndeleteResponse) => void): void;
        protected resetValidation(): void;
        protected validateForm(): boolean;
        protected onDialogClose(): void;
        destroy(): void;
    }
}
declare namespace _Ext {
    class DialogWithAllOverridableMethods extends DialogBase<AuditLogRow, any> {
        protected getFormKey(): string;
        protected getRowType(): typeof AuditLogRow;
        protected getService(): string;
        protected form: AuditLogForm;
        protected addCssClass(): void;
        protected getTemplate(): string;
        protected getTemplateName(): string;
        protected getFallbackTemplate(): string;
        protected initValidator(): void;
        protected getValidatorOptions(): JQueryValidation.ValidationOptions;
        protected initTabs(): void;
        protected initToolbar(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected initPropertyGrid(): void;
        protected getPropertyGridOptions(): Serenity.PropertyGridOptions;
        protected initLocalizationGrid(): void;
        protected initLocalizationGridCommon(pgOptions: Serenity.PropertyGridOptions): void;
        load(entityOrId: any, done: () => void, fail: (ex: Q.Exception) => void): void;
        loadResponse(data: any): void;
        protected onLoadingData(data: Serenity.RetrieveResponse<AuditLogRow>): void;
        protected beforeLoadEntity(entity: AuditLogRow): void;
        protected loadEntity(entity: AuditLogRow): void;
        protected set_entityId(value: any): void;
        protected set_entity(entity: any): void;
        protected isEditMode(): boolean;
        protected get_entityId(): any;
        protected get_entity(): AuditLogRow;
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected isDeleted(): boolean;
        protected isLocalizationMode(): boolean;
        protected isNew(): boolean;
        protected updateTitle(): void;
        protected getEntityTitle(): string;
        protected getEntitySingular(): string;
        protected getSaveEntity(): AuditLogRow;
        protected initDialog(): void;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getDialogTitle(): string;
        protected handleResponsive(): void;
        protected onDialogOpen(): void;
        protected arrange(): void;
        protected save(callback?: (response: Serenity.SaveResponse) => void): void | boolean;
        protected validateBeforeSave(): boolean;
        protected save_submitHandler(callback: (response: Serenity.SaveResponse) => void): void;
        protected getSaveOptions(callback: (response: Serenity.SaveResponse) => void): Serenity.ServiceOptions<Serenity.SaveResponse>;
        protected getSaveRequest(): Serenity.SaveRequest<AuditLogRow>;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected onSaveSuccess(response: Serenity.SaveResponse): void;
        loadById(id: any, callback?: (response: Serenity.RetrieveResponse<AuditLogRow>) => void, fail?: () => void): void;
        protected getLoadByIdRequest(id: any): Serenity.RetrieveRequest;
        protected getLoadByIdOptions(id: any, callback: (response: Serenity.RetrieveResponse<AuditLogRow>) => void): Serenity.ServiceOptions<Serenity.RetrieveResponse<AuditLogRow>>;
        protected loadByIdHandler(options: Serenity.ServiceOptions<Serenity.RetrieveResponse<AuditLogRow>>, callback: (response: Serenity.RetrieveResponse<AuditLogRow>) => void, fail: () => void): void;
        protected showSaveSuccessMessage(response: Serenity.SaveResponse): void;
        protected getEntityNameFieldValue(): any;
        protected isCloneMode(): boolean;
        protected isNewOrDeleted(): boolean;
        protected getDeleteOptions(callback: (response: Serenity.DeleteResponse) => void): Serenity.ServiceOptions<Serenity.DeleteResponse>;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
        protected doDelete(callback: (response: Serenity.DeleteResponse) => void): void;
        protected onDeleteSuccess(response: Serenity.DeleteResponse): void;
        protected getEntityType(): string;
        protected getLocalTextDbPrefix(): string;
        protected getIsActiveProperty(): string;
        protected getIsDeletedProperty(): string;
        loadNewAndOpenDialog(asPanel?: boolean): void;
        loadEntityAndOpenDialog(entity: AuditLogRow, asPanel?: boolean): void;
        loadByIdAndOpenDialog(entityId: any, asPanel?: boolean): void;
        protected reloadById(): void;
        protected isLocalizationModeAndChanged(): boolean;
        protected localizationButtonClick(): void;
        protected getLanguages(): any[];
        protected loadLocalization(): void;
        protected setLocalizationGridCurrentValues(): void;
        protected getLocalizationGridValue(): any;
        protected getPendingLocalizations(): any;
        protected getPropertyItems(): Serenity.PropertyItem[];
        protected getCloningEntity(): AuditLogRow;
        protected getUndeleteOptions(callback?: (response: Serenity.UndeleteResponse) => void): Serenity.ServiceOptions<Serenity.UndeleteResponse>;
        protected undeleteHandler(options: Serenity.ServiceOptions<Serenity.UndeleteResponse>, callback: (response: Serenity.UndeleteResponse) => void): void;
        protected undelete(callback?: (response: Serenity.UndeleteResponse) => void): void;
        protected resetValidation(): void;
        protected validateForm(): boolean;
        protected onDialogClose(): void;
        destroy(): void;
    }
}
declare namespace _Ext {
    class GridSnippets extends _Ext.GridBase<AuditLogRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DialogSnippets;
        protected getRowType(): typeof AuditLogRow;
        protected getService(): string;
        protected get_ExtGridOptions(): ExtGridOptions;
        constructor(container: JQuery, options?: any);
        protected getInitialTitle(): string;
        protected getDisplayName(): string;
        setTitle(value: string): void;
        getTitle(): string;
        protected layout(): void;
        protected getButtons(): Serenity.ToolButton[];
        protected getAddButtonCaption(): string;
        protected getItemName(): string;
        protected newRefreshButton(noText?: boolean): Serenity.ToolButton;
        getView(): Slick.RemoteView<AuditLogRow>;
        protected createToolbar(buttons: Serenity.ToolButton[]): void;
        protected createSlickContainer(): JQuery;
        protected createView(): Slick.RemoteView<AuditLogRow>;
        protected getViewOptions(): Slick.RemoteViewOptions;
        protected getDefaultSortBy(): any[];
        protected usePager(): boolean;
        protected createSlickGrid(): Slick.Grid;
        protected getColumns(): Slick.Column[];
        protected getPropertyItems(): Serenity.PropertyItem[];
        protected propertyItemsToSlickColumns(propertyItems: Serenity.PropertyItem[]): Slick.Column[];
        protected itemLink(itemType?: string, idField?: string, text?: (ctx: Slick.FormatterContext) => string, cssClass?: (ctx: Slick.FormatterContext) => string, encode?: boolean): Slick.Format;
        protected getItemType(): string;
        protected getEntityType(): string;
        protected getSlickOptions(): Slick.GridOptions;
        protected postProcessColumns(columns: Slick.Column[]): Slick.Column[];
        protected setInitialSortOrder(): void;
        protected enableFiltering(): boolean;
        protected createFilterBar(): void;
        protected initializeFilterBar(): void;
        protected canFilterColumn(column: Slick.Column): boolean;
        protected createPager(): void;
        protected getPagerOptions(): Slick.PagerOptions;
        protected bindToSlickEvents(): void;
        protected bindToViewEvents(): void;
        protected createToolbarExtensions(): void;
        protected createIncludeDeletedButton(): void;
        protected createQuickSearchInput(): void;
        protected getQuickSearchFields(): Serenity.QuickSearchField[];
        protected createQuickFilters(): void;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected dateTimeRangeQuickFilter(field: string, title?: string): Serenity.QuickFilter<Serenity.DateTimeEditor, Serenity.DateTimeEditorOptions>;
        protected addQuickFilter<TWidget extends Serenity.Widget<any>, TOptions>(opt: Serenity.QuickFilter<TWidget, TOptions>): TWidget;
        protected updateDisabledState(): void;
        protected getCurrentSettings(flags?: Serenity.GridPersistanceFlags): Serenity.PersistedGridSettings;
        protected gridPersistanceFlags(): Serenity.GridPersistanceFlags;
        protected restoreSettings(settings?: Serenity.PersistedGridSettings, flags?: Serenity.GridPersistanceFlags): void;
        protected getPersistedSettings(): Serenity.PersistedGridSettings;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        getGrid(): Slick.Grid;
        protected initialPopulate(): void;
        protected populateWhenVisible(): boolean;
        protected onViewSubmit(): boolean;
        protected getGridCanLoad(): boolean;
        protected setCriteriaParameter(): void;
        protected setIncludeColumnsParameter(): void;
        protected getIncludeColumns(include: {
            [key: string]: boolean;
        }): void;
        protected invokeSubmitHandlers(): void;
        protected onViewProcessData(response: Serenity.ListResponse<AuditLogRow>): Serenity.ListResponse<AuditLogRow>;
        protected getItemMetadata(item: AuditLogRow, index: number): any;
        protected getItemCssClass(item: AuditLogRow, index: number): string;
        protected getIsActiveProperty(): string;
        protected getIsDeletedProperty(): string;
        protected onViewFilter(item: AuditLogRow): boolean;
        getElement(): JQuery;
        protected viewDataChanged(e: any, rows: AuditLogRow[]): void;
        protected markupReady(): void;
        getItems(): AuditLogRow[];
        setItems(value: AuditLogRow[]): void;
        protected addButtonClick(): void;
        protected editItem(entityOrId: any): void;
        protected editItemOfType(itemType: string, entityOrId: any): void;
        protected routeDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        protected createEntityDialog(itemType: string, callback?: (dlg: Serenity.Widget<any>) => void): Serenity.Widget<any>;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getDialogOptionsFor(itemType: string): JQueryUI.DialogOptions;
        destroy(): void;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected setEquality(field: string, value: any): void;
        protected populateLock(): void;
        protected populateUnlock(): void;
        refresh(): void;
        protected refreshIfNeeded(): void;
        protected internalRefresh(): void;
        setIsDisabled(value: boolean): void;
        protected resizeCanvas(): void;
        protected subDialogDataChange(): void;
        protected addFilterSeparator(): void;
        protected determineText(getKey: (prefix: string) => string): string;
        protected addDateRangeFilter(field: string, title?: string): Serenity.DateEditor;
        protected dateRangeQuickFilter(field: string, title?: string): Serenity.QuickFilter<Serenity.DateEditor, Serenity.DateTimeEditorOptions>;
        protected addDateTimeRangeFilter(field: string, title?: string): Serenity.DateTimeEditor;
        protected addBooleanFilter(field: string, title?: string, yes?: string, no?: string): Serenity.SelectEditor;
        protected booleanQuickFilter(field: string, title?: string, yes?: string, no?: string): Serenity.QuickFilter<Serenity.SelectEditor, Serenity.SelectEditorOptions>;
        protected quickFilterChange(e: JQueryEventObject): void;
        protected getPersistanceKey(): string;
        protected canShowColumn(column: Slick.Column): boolean;
        protected persistSettings(flags?: Serenity.GridPersistanceFlags): void;
        getFilterStore(): Serenity.FilterStore;
    }
}
declare namespace _Ext {
    class GridWithAllOverridableMethods extends _Ext.GridBase<AuditLogRow, any> {
        protected getDialogType(): typeof DialogWithAllOverridableMethods;
        constructor(container: JQuery, options?: any);
        protected getInitialTitle(): string;
        protected getDisplayName(): string;
        protected getLocalTextPrefix(): string;
        setTitle(value: string): void;
        getTitle(): string;
        protected layout(): void;
        protected getButtons(): Serenity.ToolButton[];
        protected getAddButtonCaption(): string;
        protected getItemName(): string;
        protected newRefreshButton(noText?: boolean): Serenity.ToolButton;
        getView(): Slick.RemoteView<AuditLogRow>;
        protected createToolbar(buttons: Serenity.ToolButton[]): void;
        protected createSlickContainer(): JQuery;
        protected createView(): Slick.RemoteView<AuditLogRow>;
        protected getViewOptions(): Slick.RemoteViewOptions;
        protected getIdProperty(): string;
        protected getDefaultSortBy(): any[];
        protected usePager(): boolean;
        protected getService(): string;
        protected createSlickGrid(): Slick.Grid;
        protected getColumns(): Slick.Column[];
        protected getPropertyItems(): Serenity.PropertyItem[];
        protected getColumnsKey(): string;
        protected propertyItemsToSlickColumns(propertyItems: Serenity.PropertyItem[]): Slick.Column[];
        protected itemLink(itemType?: string, idField?: string, text?: (ctx: Slick.FormatterContext) => string, cssClass?: (ctx: Slick.FormatterContext) => string, encode?: boolean): Slick.Format;
        protected getItemType(): string;
        protected getEntityType(): string;
        protected getSlickOptions(): Slick.GridOptions;
        protected get_ExtGridOptions(): ExtGridOptions;
        protected postProcessColumns(columns: Slick.Column[]): Slick.Column[];
        protected setInitialSortOrder(): void;
        protected enableFiltering(): boolean;
        protected createFilterBar(): void;
        protected initializeFilterBar(): void;
        protected canFilterColumn(column: Slick.Column): boolean;
        protected createPager(): void;
        protected getPagerOptions(): Slick.PagerOptions;
        protected bindToSlickEvents(): void;
        protected bindToViewEvents(): void;
        protected createToolbarExtensions(): void;
        protected createIncludeDeletedButton(): void;
        protected createQuickSearchInput(): void;
        protected getQuickSearchFields(): Serenity.QuickSearchField[];
        protected createQuickFilters(): void;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected dateTimeRangeQuickFilter(field: string, title?: string): Serenity.QuickFilter<Serenity.DateTimeEditor, Serenity.DateTimeEditorOptions>;
        protected addQuickFilter<TWidget extends Serenity.Widget<any>, TOptions>(opt: Serenity.QuickFilter<TWidget, TOptions>): TWidget;
        protected updateDisabledState(): void;
        protected getCurrentSettings(flags?: Serenity.GridPersistanceFlags): Serenity.PersistedGridSettings;
        protected gridPersistanceFlags(): Serenity.GridPersistanceFlags;
        protected restoreSettings(settings?: Serenity.PersistedGridSettings, flags?: Serenity.GridPersistanceFlags): void;
        protected getPersistedSettings(): Serenity.PersistedGridSettings;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        getGrid(): Slick.Grid;
        protected initialPopulate(): void;
        protected populateWhenVisible(): boolean;
        protected onViewSubmit(): boolean;
        protected getGridCanLoad(): boolean;
        protected setCriteriaParameter(): void;
        protected setIncludeColumnsParameter(): void;
        protected getIncludeColumns(include: {
            [key: string]: boolean;
        }): void;
        protected invokeSubmitHandlers(): void;
        protected onViewProcessData(response: Serenity.ListResponse<AuditLogRow>): Serenity.ListResponse<AuditLogRow>;
        protected getItemMetadata(item: AuditLogRow, index: number): any;
        protected getItemCssClass(item: AuditLogRow, index: number): string;
        protected getIsActiveProperty(): string;
        protected getIsDeletedProperty(): string;
        protected onViewFilter(item: AuditLogRow): boolean;
        getElement(): JQuery;
        protected viewDataChanged(e: any, rows: AuditLogRow[]): void;
        protected markupReady(): void;
        getItems(): AuditLogRow[];
        setItems(value: AuditLogRow[]): void;
        protected addButtonClick(): void;
        protected editItem(entityOrId: any): void;
        protected editItemOfType(itemType: string, entityOrId: any): void;
        protected routeDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        protected createEntityDialog(itemType: string, callback?: (dlg: Serenity.Widget<any>) => void): Serenity.Widget<any>;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getDialogOptionsFor(itemType: string): JQueryUI.DialogOptions;
        destroy(): void;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected setEquality(field: string, value: any): void;
        protected populateLock(): void;
        protected populateUnlock(): void;
        refresh(): void;
        protected refreshIfNeeded(): void;
        protected internalRefresh(): void;
        setIsDisabled(value: boolean): void;
        protected resizeCanvas(): void;
        protected subDialogDataChange(): void;
        protected addFilterSeparator(): void;
        protected determineText(getKey: (prefix: string) => string): string;
        protected addDateRangeFilter(field: string, title?: string): Serenity.DateEditor;
        protected dateRangeQuickFilter(field: string, title?: string): Serenity.QuickFilter<Serenity.DateEditor, Serenity.DateTimeEditorOptions>;
        protected addDateTimeRangeFilter(field: string, title?: string): Serenity.DateTimeEditor;
        protected addBooleanFilter(field: string, title?: string, yes?: string, no?: string): Serenity.SelectEditor;
        protected booleanQuickFilter(field: string, title?: string, yes?: string, no?: string): Serenity.QuickFilter<Serenity.SelectEditor, Serenity.SelectEditorOptions>;
        protected quickFilterChange(e: JQueryEventObject): void;
        protected getPersistanceKey(): string;
        protected canShowColumn(column: Slick.Column): boolean;
        protected persistSettings(flags?: Serenity.GridPersistanceFlags): void;
        getFilterStore(): Serenity.FilterStore;
    }
}
declare namespace _Ext {
    class ReplaceRowDialog extends _Ext.DialogBase<any, any> {
        request: ReplaceRowRequest;
        entityList: Array<any>;
        protected getFormKey(): string;
        protected form: ReplaceRowForm;
        constructor(request: ReplaceRowRequest, entityList: Array<any>);
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace _Ext {
    class AutoCompleteEditor extends Serenity.StringEditor {
        constructor(input: JQuery, options: AutoCompleteOptions);
        protected bindAutoComplete(input: any): void;
    }
    interface AutoCompleteOptions {
        lookupKey: string;
        sourceArray: string[];
        sourceCSV: string;
        minSearchLength: number;
    }
}
declare namespace _Ext {
    class ColorEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getTemplate(): string;
        constructor(container: JQuery);
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
    }
}
declare namespace _Ext {
    class DateTimePickerEditor extends Serenity.Widget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly {
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        constructor(container: JQuery);
        get value(): string;
        set value(val: string);
        get valueAsDate(): Date;
        set valueAsDate(val: Date);
        get_readOnly(): boolean;
        set_readOnly(value: boolean): void;
        set_minDate(date: Date): void;
        set_maxDate(date: Date): void;
        set_minDateTime(date: Date): void;
        set_maxDateTime(date: Date): void;
    }
}
declare namespace _Ext {
    class EmptyLookupEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, any> {
        setSelect2Items(items: Select2Item[]): void;
        setLookupItems(lookup: Q.Lookup<any>): void;
    }
}
declare namespace _Ext {
    class HardCodedLookupEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery, options: HardCodedLookupEditorOptions);
        protected getSelect2Options(): Select2Options;
    }
    interface HardCodedLookupEditorOptions {
        sourceArray: string[];
        sourceCSV: string;
        allowOtherValue: boolean;
    }
}
declare namespace _Ext {
    class HtmlTemplateEditor extends Serenity.HtmlContentEditor {
        constructor(textArea: JQuery, opt?: HtmlTemplateEditorOptions);
        protected getConfig(): Serenity.CKEditorConfig;
    }
    interface HtmlTemplateEditorOptions extends Serenity.HtmlContentEditorOptions {
        cols?: any;
        rows?: any;
        placeholders?: any;
    }
}
declare namespace _Ext {
    class JsonViewer extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        protected getTemplate(): string;
        private _value;
        set value(val: string);
        get value(): string;
    }
}
declare namespace _Ext {
    class MonthYearEditor extends Serenity.Widget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly {
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        constructor(container: JQuery);
        get value(): string;
        set value(val: string);
        get_readOnly(): boolean;
        set_readOnly(value: boolean): void;
    }
}
declare namespace _Ext {
    class PrefixedStringEditor extends Serenity.Widget<PrefixedStringEditorOptions> implements Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly {
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        private prefixInput;
        constructor(container: JQuery, options: PrefixedStringEditorOptions);
        get value(): string;
        set value(val: string);
        private _prefix;
        get prefix(): string;
        set prefix(val: string);
        get_readOnly(): boolean;
        set_readOnly(value: boolean): void;
    }
    interface PrefixedStringEditorOptions {
        prefixLength: number;
        inputMaxLength: number;
        prefixFormatterType?: string;
    }
}
declare namespace _Ext {
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private _value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
        get value(): string;
        set value(value: string);
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
        isDate: boolean;
        isDateTime: boolean;
    }
}
declare namespace _Ext {
    class YesNoEditor extends Serenity.Select2Editor<any, any> {
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        constructor(container: JQuery);
        get valueAsBoolean(): boolean;
        set valueAsBoolean(val: boolean);
    }
}
declare namespace _Ext {
    class GridItemPickerEditor extends Serenity.TemplatedWidget<GridItemPickerEditorOptions> implements Serenity.ISetEditValue, Serenity.IGetEditValue, Serenity.IStringValue, Serenity.IReadOnly, Serenity.IValidateRequired {
        options: GridItemPickerEditorOptions;
        protected getTemplate(): string;
        inplaceSearchButton: JQuery;
        inplaceViewButton: JQuery;
        clearSelectionButton: JQuery;
        constructor(container: JQuery, options: GridItemPickerEditorOptions);
        protected addInplaceButtons(): void;
        protected inplaceSearchClick(e: any): void;
        protected inplaceViewClick(e: any): void;
        private getDialogInstance;
        get value(): string;
        set value(val: string);
        get values(): string[];
        set values(val: string[]);
        get text(): string;
        set text(val: string);
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get_value(): string;
        set_value(value: string): void;
        get_readOnly(): boolean;
        set_readOnly(value: boolean): void;
        get_required(): boolean;
        set_required(value: boolean): void;
        private _selectedItem;
        selectedItemIncludeColumns: string[];
        get selectedItem(): any;
        selectedItems: any[];
        private _serviceUrl;
        get serviceUrl(): string;
        setValueAndText(value: any, text: any): void;
        protected getCascadeFromValue(parent: Serenity.Widget<any>): any;
        protected cascadeLink: Serenity.CascadedWidgetLink<Serenity.Widget<any>>;
        protected setCascadeFrom(value: string): void;
        protected get_cascadeFrom(): string;
        get cascadeFrom(): string;
        protected set_cascadeFrom(value: string): void;
        set cascadeFrom(value: string);
        protected get_cascadeField(): any;
        get cascadeField(): string;
        protected set_cascadeField(value: string): void;
        set cascadeField(value: string);
        protected get_cascadeValue(): any;
        get cascadeValue(): any;
        protected set_cascadeValue(value: any): void;
        set cascadeValue(value: any);
        protected get_filterField(): string;
        get filterField(): string;
        protected set_filterField(value: string): void;
        set filterField(value: string);
        protected get_filterValue(): any;
        get filterValue(): any;
        protected set_filterValue(value: any): void;
        set filterValue(value: any);
        protected updateItems(): void;
    }
    interface GridItemPickerEditorOptions extends Serenity.Select2FilterOptions {
        gridType: any;
        nameFieldInThisRow?: string;
        serviceUrl?: string;
        rowType?: string;
        idFieldInGridRow?: string;
        nameFieldInGridRow?: string;
        inplaceView?: boolean;
        multiple?: boolean;
        preSelectedKeys?: any[];
        filteringCriteria?: any;
        customPrams?: any;
        dialogType?: any;
        cascadeFrom?: string;
        cascadeField?: string;
        cascadeValue?: any;
        filterField?: string;
        filterValue?: any;
    }
}
declare namespace _Ext {
    class InlineImageFormatter implements Slick.Formatter, Serenity.IInitializeColumn {
        format(ctx: Slick.FormatterContext): string;
        initializeColumn(column: Slick.Column): void;
        fileProperty: string;
        thumb: boolean;
        defaultImage: string;
        maxHeight: string;
        maxWidth: string;
    }
}
declare namespace _Ext {
    class InlineMultipleImageFormatter implements Slick.Formatter, Serenity.IInitializeColumn {
        format(ctx: Slick.FormatterContext): string;
        initializeColumn(column: Slick.Column): void;
        fileProperty: string;
        thumb: boolean;
        inlineUpload: boolean;
        defaultImage: string;
        maxHeight: string;
        maxWidth: string;
    }
}
declare namespace _Ext {
    class MonthYearFormatter implements Slick.Formatter {
        static format(val: string): string;
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace _Ext {
    class YesNoColoredFormatter implements Slick.Formatter {
        static format(val: any): string;
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace _Ext {
    class YesNoFormatter implements Slick.Formatter {
        static format(val: any): string;
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace _Ext {
    class CardViewMixin<TItem> {
        private options;
        private dataGrid;
        private getId;
        private vm;
        private cardContainer;
        viewType: ('list' | 'card');
        constructor(options: CardViewMixinOptions<TItem>);
        switchView(viewType: ('grid' | 'card')): void;
        updateCardItems(): void;
        resizeCardView(): void;
    }
    interface CardViewMixinOptions<TItem> {
        grid: Serenity.DataGrid<TItem, any>;
        containerTemplate?: string;
        itemTemplate?: string;
        methods?: any;
        itemCssClass?: string;
        defaultViewType?: ('list' | 'card');
        itemsCssStyle?: string;
        itemCssStyle?: string;
    }
}
declare namespace _Ext {
    /**
     * A mixin that can be applied to a DataGrid for excel style filtering functionality
     */
    class HeaderFiltersMixin<TItem> {
        private options;
        private dataGrid;
        constructor(options: HeaderFiltersMixinOptions<TItem>);
    }
    interface HeaderFiltersMixinOptions<TItem> {
        grid: Serenity.DataGrid<TItem, any>;
    }
}
declare namespace _Ext {
    /**
     * A mixin that can be applied to a DataGrid for tree functionality
     */
    class TreeGridMixin<TItem> {
        private options;
        private dataGrid;
        private getId;
        constructor(options: TreeGridMixinOptions<TItem>);
        /**
         * Expands / collapses all rows in a grid automatically
         */
        toggleAll(): void;
        expandAll(): void;
        collapsedAll(): void;
        /**
         * Reorders a set of items so that parents comes before their children.
         * This method is required for proper tree ordering, as it is not so easy to perform with SQL.
         * @param items list of items to be ordered
         * @param getId a delegate to get ID of a record (must return same ID with grid identity field)
         * @param getParentId a delegate to get parent ID of a record
         */
        static applyTreeOrdering<TItem>(items: TItem[], getId: (item: TItem) => any, getParentId: (item: TItem) => any): TItem[];
        static filterById<TItem>(item: TItem, view: Slick.RemoteView<TItem>, idProperty: any, getParentId: (x: TItem) => any): boolean;
        static treeToggle<TItem>(getView: () => Slick.RemoteView<TItem>, getId: (x: TItem) => any, formatter: Slick.Format): Slick.Format;
        static toggleClick<TItem>(e: JQueryEventObject, row: number, cell: number, view: Slick.RemoteView<TItem>, getId: (x: TItem) => any): void;
    }
    interface TreeGridMixinOptions<TItem> {
        grid: Serenity.DataGrid<TItem, any>;
        idField?: string;
        getParentId: (item: TItem) => any;
        toggleField: string;
        initialCollapse?: () => boolean;
    }
}
declare namespace _Ext {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace _Ext {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare namespace Slick {
    interface RemoteView<TEntity> {
        getGroups(): Slick.Group<TEntity>[];
        getGrouping(): Slick.GroupInfo<TEntity>[];
    }
}
declare namespace _Ext {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare namespace _Ext.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare function loadScriptAsync(url: any, callback: any): void;
declare function loadScript(url: any): void;
declare function usingVuejs(): void;
declare function includeBootstrapColorPickerCss(): void;
declare function usingBootstrapColorPicker(): void;
declare function includeJqueryUITimepickerAddonCss(): void;
declare function usingJqueryUITimepickerAddon(): void;
declare function usingBabylonjs(): void;
declare function usingChartjs(): void;
declare function includeCustomMarkerCss(): void;
declare function usingCustomMarker(): void;
declare function includeGoogleMap(callback?: Function, callbackFullName?: string): void;
declare function includeMarkerWithLabel(): void;
declare function includeVisCss(): void;
declare function usingVisjs(): void;
declare function usingJsonDiffPatch(): void;
declare function usingSlickGridEditors(): void;
declare function usingSlickAutoColumnSize(): void;
declare function usingSlickHeaderFilters(): void;
declare namespace q {
    function sum(xs: any[], key: any): any;
    function groupBy(xs: any[], key: any): any;
    function sortBy<T>(xs: T[], key: any): T[];
    function sortByDesc<T>(xs: T[], key: any): T[];
}
declare namespace q {
    function nextTick(date: any): Date;
    function addMinutes(date: Date, minutes: number): Date;
    function addHours(date: Date, hours: number): Date;
    function getHours(fromDate: Date, toDate: Date): number;
    function getDays24HourPulse(fromDate: Date, toDate: Date): number;
    function getDays(pFromDate: Date, pToDate: Date): number;
    function getMonths(fromDate: Date, toDate: Date): number;
    function getCalenderMonths(fromDate: Date, toDate: Date): number;
    function getCalenderMonthsCeil(fromDate: Date, toDate: Date): number;
    function addDays(date: Date, days: number): Date;
    function addMonths(date: Date, months: number): Date;
    function addYear(date: Date, years: number): Date;
    function getPeriods(fromDate: Date, toDate: Date, periodUnit: _Ext.TimeUoM): number;
    function addPeriod(date: Date, period: number, periodUnit: _Ext.TimeUoM): Date;
    function formatISODate(date: Date): string;
    function bindDateTimeEditorChange(editor: any, handler: any): void;
    function setMinDate(editor: Serenity.DateEditor, value: Date): void;
    function setMaxDate(editor: Serenity.DateEditor, value: Date): void;
    function initDateRangeEditor(fromDateEditor: Serenity.DateEditor, toDateEditor: Serenity.DateEditor, onChangeHandler?: (e: JQueryEventObject) => void): void;
    function initDateTimeRangeEditor(fromDateTimeEditor: _Ext.DateTimePickerEditor, toDateTimeEditor: _Ext.DateTimePickerEditor, onChangeHandler?: (e: JQueryEventObject) => void): void;
    function formatDate(d: Date | string, format?: string): string;
}
declare namespace q {
    function initDetailEditor(dialog: _Ext.DialogBase<any, any>, editor: _Ext.GridEditorBase<any>, options?: ExtGridEditorOptions): void;
    function setGridEditorHeight(editor: JQuery, heightInPx: number): void;
    function addNotificationIcon(editor: Serenity.Widget<any>, isSuccess: boolean): void;
    function addPopoverIcon(editor: Serenity.Widget<any>, isSuccess: boolean, popoverOptions: any): void;
    function setEditorLabel(editor: Serenity.Widget<any>, value: string): void;
    function hideEditorLabel(editor: Serenity.Widget<any>): void;
    function setEditorCategoryLabel(editor: Serenity.Widget<any>, value: string): void;
    function hideEditorCategory(editor: Serenity.Widget<any>, value?: boolean): void;
    function hideCategories(containerElement: JQuery, value?: boolean): void;
    function hideFields(containerElement: JQuery, value?: boolean): void;
    function hideFieldsAndCategories(containerElement: JQuery, value?: boolean): void;
    function hideField(editor: Serenity.Widget<any>, value?: boolean): void;
    function showField(editor: Serenity.Widget<any>, value?: boolean): void;
    function showAndEnableField(editor: Serenity.Widget<any>): void;
    function showFieldAndCategory(editor: Serenity.Widget<any>, value?: boolean): void;
    function hideEditorTab(editor: Serenity.Widget<any>, value?: boolean): void;
    function disableEditorTab(editor: Serenity.Widget<any>, value?: boolean): void;
    function readOnlyEditorTab(editor: Serenity.Widget<any>, value?: boolean): void;
    function readOnlyEditorCategory(editor: Serenity.Widget<any>, value?: boolean): void;
    function readonlyEditorCategory($editor: JQuery, value?: boolean): void;
    function readOnlyEditorPropertyGrid(editor: Serenity.Widget<any>, value?: boolean): void;
    function readonlyEditorPropertyGrid($editor: JQuery, value?: boolean): void;
    function readOnlyEditor(editor: Serenity.Widget<any>, value?: boolean): void;
    function readonlyEditor($editor: JQuery, value?: boolean): void;
    function moveEditorFromTab(editor: Serenity.Widget<any>, toElement: JQuery, isPrepend?: boolean): void;
    function moveEditorCategoryFromTab(editor: Serenity.Widget<any>, toElement: JQuery, isPrepend?: boolean): void;
    function selectEditorTab(editor: Serenity.Widget<any>): void;
}
declare namespace q {
    function getEnumText(enumTypeOrKey: any, value: any): string;
    function isNumber(value: any): boolean;
    function getEnumValues(enumType: any): number[];
    function getEnumKeys(enumType: any): string[];
}
declare namespace q {
    function switchKeybordLayout($container: any, layout: any): void;
}
declare namespace q {
    function text(key: string, fallback: string): string;
    function isCosmicThemeApplied(): boolean;
    function getSelectedLanguage(): string;
    function isBanglaMode(): boolean;
    function formatDecimal(value: any): string;
    function formatInt(value: any): string;
    function ToNumber(value: any): number;
    function ToFixed(value: any, fractionDigits?: number): string;
    function ToBool(value: any): boolean;
    function getRandomColor(hexLetters: any): string;
}
