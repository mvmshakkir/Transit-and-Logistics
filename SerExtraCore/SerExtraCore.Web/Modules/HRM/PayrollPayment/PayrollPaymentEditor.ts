/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SerExtraCore.HRM {
    import fld = PayrollPaymentRow.Fields;
    @Serenity.Decorators.registerClass()
    export class PayrollPaymentEditor extends Common.GridEditorBase<PayrollPaymentRow> {
        protected getColumnsKey() { return "HRM.PayrollPayment"; }
        protected getDialogType() { return PayrollPaymentDialog; }
        protected getLocalTextPrefix() { return PayrollPaymentRow.localTextPrefix; }

        private pendingChanges: Q.Dictionary<any> = {};
        public payments: PayrollPaymentRow[]; 
        constructor(container: JQuery) {
            super(container);

            //this.slickContainer.on('change', '.edit:input', (e) => this.inputsChange(e));
            //this.element.find('.s-Toolbar').toggle(false);
        }
        //private selectFormatter(ctx: Slick.FormatterContext, idField: string, lookup: Q.Lookup<any>) {
        //    var klass = 'edit';
        //    var item = ctx.item as ConsignmentChargesRow;
        //    var pending = this.pendingChanges[item.Id];
        //    var column = ctx.column as Slick.Column;

        //    if (pending && pending[idField] !== undefined) {
        //        klass += ' dirty';
        //    }

        //    var value = this.getEffectiveValue(item, idField);
        //    var markup = "<select class='" + klass +
        //        "' data-field='" + idField +
        //        "' style='width: 100%; max-width: 100%'>";
        //    for (var c of lookup.items) {
        //        let id = c[lookup.idField];
        //        markup += "<option value='" + Q.attrEncode(id) + "'"
        //        if (id == value) {
        //            markup += " selected";
        //        }
        //        markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
        //    }
        //    return markup + "</select>";
        //}
        //protected getColumns() {
        //    var columns = super.getColumns();
        //    var num = ctx => this.numericInputFormatter(ctx);
        //    var int = ctx => this.integerInputFormatter(ctx);
        //    var str = ctx => this.stringInputFormatter(ctx);

        //    //Q.first(columns, x => x.field === fld.Id).format = int;
        //    Q.first(columns, x => x.field === fld.Amount).format = num;
        //    Q.first(columns, x => x.field === fld.Qty).format = int;
        //    Q.first(columns, x => x.field === fld.ExchangeRate).format = int;

        //    var category = Q.first(columns, x => x.field === fld.ChargeChargeName);
        //    category.referencedFields = [fld.ChargeId];
        //    category.format = ctx => this.selectFormatter(ctx, fld.ChargeId, Master.ChargesRow.getLookup());

        //    var category = Q.first(columns, x => x.field === fld.CurrencyCurrencyCode);
        //    category.referencedFields = [fld.CurrencyId];
        //    category.format = ctx => this.selectFormatter(ctx, fld.CurrencyId, Master.CurrenciesRow.getLookup());

        //    columns.splice(0, 0, {
        //        field: '#',
        //        name: '#',
        //        width: 28,
        //        minWidth: 28,
        //        maxWidth: 28,
        //        format: ctx => '<div style="padding:0 3px">' + (ctx.row + 1).toString() + '</div>',
        //        sortable: false,
        //        headerCssClass: 'align-center',
        //        cssClass: 'align-right'
        //    });

        //    columns.splice(columns.length, 0, {
        //        field: 'Add',
        //        name: '',
        //        format: ctx => '<a class="inline-action add-row" title="Add"><i class="fa fa-fw fa-plus text-success"></i></a>',
        //        width: 28,
        //        minWidth: 28,
        //        maxWidth: 28
        //    });

        //    columns.splice(columns.length, 0, {
        //        field: 'Delete',
        //        name: '',
        //        format: ctx => '<a class="inline-action delete-row" title="Delete"><i class="fa fa-fw fa-minus text-danger"></i></a>',
        //        width: 28,
        //        minWidth: 28,
        //        maxWidth: 28
        //    });

        //    return columns;
        //}

        //private inputsChange(e: JQueryEventObject) {
        //    var cell = this.slickGrid.getCellFromEvent(e);
        //    var item = this.itemAt(cell.row);
        //    var input = $(e.target);
        //    var field = input.data('field');
        //    var text = Q.coalesce(Q.trimToNull(input.val()), '0');
        //    var pending = this.pendingChanges[item.Id];

        //    var effective = this.getEffectiveValue(item, field);
        //    var oldText: string = input.hasClass('numeric')
        //        ? Q.formatNumber(effective, '0.000')
        //        ? Q.formatNumber(effective, '0.000')
        //        : effective as string;

        //    var value;
        //    if (field === fld.Qty || field === fld.Amount) {
        //        value = Q.parseDecimal(text);
        //        if (value == null || isNaN(value)) {
        //            Q.notifyError(Q.text('Validation.Decimal'), '', null);
        //            input.val(oldText);
        //            input.focus();
        //            return;
        //        }
        //    }
        //    if (field === fld.ChargeId) {
        //        value = Q.parseDecimal(text);
        //        if (value == null || isNaN(value)) {

        //            input.val(oldText);
        //            input.focus();
        //            return;
        //        }
               
        //    }
        //    else if (input.hasClass('numeric')) {
        //        var i = Q.parseInteger(text);
        //        if (isNaN(i) || i > 32767 || i < 0) {
        //            Q.notifyError(Q.text('Validation.Integer'), '', null);
        //            input.val(oldText);
        //            input.focus();
        //            return;
        //        }
        //        value = i;
        //    }
        //    else {
        //        value = text;
        //    }

        //    if (!pending) {
        //        this.pendingChanges[item.Id] = pending = {};
        //    }

        //    pending[field] = value;
        //    item[field] = value;
        //    if (field === fld.ChargeId) {
        //            var x = Master.ChargesRow.getLookup().itemById[value];
        //            //pending[fld.Description] = x.Description;
        //        item[fld.Description] = x.Description;
        //        item[fld.Amount] = 50;
                
        //    }
        //    this.view.refresh();

        //    if (input.hasClass('numeric'))
        //        value = Q.formatNumber(value, '0.000');

        //    if (input.hasClass('integer'))
        //        value = Q.formatNumber(value, '0');

        //    input.val(value).addClass('dirty');
        //}

        //private getEffectiveValue(item, field: any): any {
        //    var pending = this.pendingChanges[item.__id];
        //    if (pending && pending[field] !== undefined) {
        //        return pending[field];
        //    }

        //    return item[field];
        //}

        //protected onClick(e: JQueryEventObject, row: number, cell: number) {
        //    super.onClick(e, row, cell);

        //    if (e.isDefaultPrevented())
        //        return;

        //    var item = this.itemAt(row);
        //    var target = $(e.target);

        //    // if user clicks "i" element, e.g. icon
        //    if (target.parent().hasClass('inline-action'))
        //        target = target.parent();

        //    if (target.hasClass('inline-action')) {
        //        e.preventDefault();

        //        if (target.hasClass('add-row')) {
        //            let newEntity = this.getNewEntity();
        //            let newRequest: Serenity.SaveRequest<ConsignmentChargesRow> = {
        //                Entity: newEntity
        //            };
        //            this.save({ request: newRequest }, () => {
        //            });
        //        }
        //        else if (target.hasClass('delete-row')) {
        //            if (this.element.find('a.delete-row').length === 1) {
        //                return;
        //            }
        //            this.deleteEntity(item.Id);
        //        }
        //    }
        //}

        //protected onViewProcessData(response) {
        //    this.pendingChanges = {};
        //    return super.onViewProcessData(response);
        //}

        //public setEditValue(source: ConsignmentRow, property) {
        //    if (source.ChargeDetailList === undefined) {
        //        source.ChargeDetailList = [{}];
        //    }

        //    super.setEditValue(source, property);
        //}

        //private numericInputFormatter(ctx) {
        //    var klass = 'edit numeric';
        //    var item = ctx.item;
        //    var pending = this.pendingChanges[item.__id];

        //    if (pending && pending[ctx.column.field] !== undefined) {
        //        klass += ' dirty';
        //    }
        //    var value = this.getEffectiveValue(item, ctx.column.field) as number;
        //    return value === undefined
        //        ? "<input type='text' class='" + klass +
        //        "' data-field='" + ctx.column.field +
        //        "' value='' />"
        //        : "<input type='text' class='" + klass +
        //        "' data-field='" + ctx.column.field +
        //        "' value='" + Q.formatNumber(value, '0.00') + "' />";
        //}

        //private integerInputFormatter(ctx) {
        //    var klass = 'edit numeric integer';
        //    var item = ctx.item;
        //    var pending = this.pendingChanges[item.__id];

        //    if (pending && pending[ctx.column.field] !== undefined) {
        //        klass += ' dirty';
        //    }
        //    var value = this.getEffectiveValue(item, ctx.column.field) as number;
        //    return value === undefined
        //        ? "<input type='text' class='" + klass +
        //        "' data-field='" + ctx.column.field +
        //        "' value='' />"
        //        : "<input type='text' class='" + klass +
        //        "' data-field='" + ctx.column.field +
        //        "' value='" + Q.formatNumber(value, '0') + "' />";
        //}

        //private stringInputFormatter(ctx) {
        //    var klass = 'edit string';
        //    var item = ctx.item;
        //    var pending = this.pendingChanges[item.__id];
        //    var column = ctx.column as Slick.Column;

        //    if (pending && pending[column.field] !== undefined) {
        //        klass += ' dirty';
        //    }
        //    var value = this.getEffectiveValue(item, column.field) as string;
        //    return "<input type='text' required class='" + klass +
        //        "' data-field='" + column.field +
        //        "' value='" + Q.attrEncode(value) +
        //        "' maxlength='" + column.sourceItem.maxLength + "' />";
        //}
        validateEntity(row, id) {
            //row.ProductID = Q.toId(row.ProductID);

            //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
            //if (sameProduct && this.id(sameProduct) !== id) {
            //    Q.alert('This product is already in order details!');
            //    return false;
            //}

            row.EmployeeEmployeeName = Master.EmployeeMasterRow.getLookup().itemById[row.EmployeeId].EmployeeName;
            //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
            return true;
        }
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);

            // passing category ID from grid editor to detail dialog
            (dialog as PayrollPaymentDialog).payments = this.payments;
        }
    }
}