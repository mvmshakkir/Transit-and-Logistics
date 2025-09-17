declare var Morris: any;

namespace SerExtraCore.Reports {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.resizable()
    @Serenity.Decorators.maximizable()

    export class DynamicReport extends Serenity.TemplatedDialog<any> {

        private areaChart: any;
        private static reportmodel: SerExtraCore.Web.Modules.ReportRequest

        static initializePage(reportID) {

            var k = this;

            $(function () {

                Accounts.CommonService.GetReportRequest({
                    ReportId: reportID
                }, response => {
                    k.setreportmodel(response);
                    response.reportDesignsRow.ReportParameters.sort(i => i.Id).forEach(function (items) {

                        var alies = items.ParameterName.trim()

                        var strreq = "";
                        if ((items.IsRequired || false)) {
                            strreq = "required";
                        }

                        //date editor
                        var editor = ``;
                        if (items.EditorType == ParameterEditorTypes.Value2) {
                            var date = "";
                            if (items.DefaultValue == "today") {
                                var fdate = new Date();
                                date = fdate.toISOString().split('T')[0];
                            }

                            editor = `<input class="` + strreq + `" type="date" id="` + alies + `" name="trip-start" style="width:100%"
                                       value="`+ date + `">`;

                        }
                        if (items.EditorType == ParameterEditorTypes.Value3) {
                            var date = "";
                            if (items.DefaultValue == "today") {
                                var fdate = new Date();
                                var z = fdate.toTimeString();
                                z = z.substring(0, 5);
                                date = fdate.toISOString().split('T')[0] + 'T' + z;
                            }

                            editor = `<input class="` + strreq + ` editor" type="datetime-local" value="` + date + `" id="` + alies + `" style="width:100%">`;

                        }

                        //lookup editor

                        if (items.EditorType == ParameterEditorTypes.Value5) {
                            var itemsss = "";
                            if (items.LookupType == LookupType.Value1) {
                                var lookupitems = Q.getLookup(items.LookupName);
                                itemsss = `<option disabled selected value> -- select an option -- </option>`;
                                lookupitems.items.forEach(function (ff) {
                                    itemsss = itemsss + `<option value="` + ff[lookupitems.idField] + `">` + ff[lookupitems.textField] + `</option>`;
                                });
                            }
                            else {
                                if (items.LookupType == LookupType.Value2)
                                {
                                    Accounts.CommonService.GetCustomLookup({
                                        CustomLookupId: items.CustomLookupId,
                                       
                                    }, response => {
                                            itemsss = `<option disabled selected value> -- select an option -- </option>`;
                                            response.Entities.forEach(function (ff) {
                                                itemsss = itemsss + `<option value="` + ff.IdField + `">` + ff.NameField + `</option>`;
                                            });
                                            $('#' + alies + '').append(itemsss);
                                        //window.location.href = '/view/index?id=' + type + '&filename=' + response.DataFileName+'';
                                    })
                                }
                            }

                            editor = `<select class="myselect ` + strreq + `" id="` + alies + `" name="cars"  style="width:100%">
    `+ itemsss + `
  </select>`;


                        }
                        if (items.EditorType == ParameterEditorTypes.Value4) {
                            var date = "";
                            if (items.DefaultValue == "true") {
                                date = "checked";
                            }

                            editor = `<input type="checkbox" class="editor s-BooleanEditor ` + strreq + `" id="` + alies + `" name="ExcludeOrder" ` + date + `>`;

                        }
                        if (items.EditorType == ParameterEditorTypes.Value1) {
                            var date = items.DefaultValue;
                            if (items.DataType == ParameterDataTypes.Value2) {
                                editor = `<input type="text" class="editor s-StringEditor ` + strreq + `" style="width:100%" id="` + alies + `">`;
                            }
                            if (items.DataType == ParameterDataTypes.Value5) {
                                editor = `<input type="text" style="width:100%" class="editor s-DecimalEditor decimalQ ` + strreq + ` valid" id="` + alies + `" onkeyup="myFunc(this)" onchange="setTwoNumberDecimal(this)" name="Discount" aria-invalid="false">`;
                            }
                            if (items.DataType == ParameterDataTypes.Value1) {
                                editor = `<input type="text" style="width:100%" class="editor s-DecimalEditor decimalQ ` + strreq + ` valid" id="` + alies + `" onkeyup="myintFunc(this)" name="Discount" aria-invalid="false">`;
                            }
                        }

                        var widget = `<div class="field Discount col-sm-6 fielddiv" >
        <label class="caption" for="SerExtraCore_Transactions_SalesDialog20_Discount" title="Discount">
        <sup title="this field is required">*</sup> `+ items.ParameterName + `</label>
        `+ editor + `
        <div class="vx">
            <label id="SerExtraCore_Transactions_SalesDialog20_Discount-error" class="error checked" for="SerExtraCore_Transactions_SalesDialog20_Discount" title=""></label>
        </div>
        <div class="clear">
        </div>
    </div>`;

                        var cc = `<div class="field ToDate col-sm-6" style="padding:3px">
                        <div class="row">
                            <div class="col-sm-3">
                                <label class="caption" for="SerExtraCore_Common_ReportDialog6_ToDate" title="To Date">
                                    <sup title="this field is required">*</sup>
                                    `+ items.ParameterName + `
                                </label>
                            </div>
                            <div class="col-sm-9">
                            `+ editor + `
                            </div>
                        </div>
                    </div>`;

                        $('#parameters').append(widget);
                        $(".myselect").select2("destroy");
                        $(".myselect").select2({
                            allowClear: true,
                            placeHolder: "Select a value"
                        });
                    });

                });

            });
            $('#LaunchDialogButton').click(function (e) {
                var error = false;
                k.reportmodel.reportDesignsRow.ReportParameters.forEach(function (items) {

                    var alies = items.ParameterName.trim();
                    var element = document.getElementById(alies);
                    if (items.EditorType == ParameterEditorTypes.Value4) {
                        items.DefaultValue = element.checked.toString();
                    }
                    else {


                        items.DefaultValue = element.value;
                    }
                    if ((items.IsRequired || false)) {
                        if (items.DefaultValue == "" || items.DefaultValue == null) {
                            if (!error) {
                                Q.notifyError("Please fill in all the required fields.")
                            }
                            error = true;
                            e.stopImmediatePropagation();
                        }
                    }
                })
                if (!error) {
                    Accounts.CommonService.ShowReport({
                        ReportId: k.reportmodel.ReportId,
                        reportDesignsRow: k.reportmodel.reportDesignsRow
                    }, response => {

                        var type = response.reportDesignsRow.Name;
                        var newSrc = '/view/index?id=' + type + '&filename=' + response.DataFileName + '';
                        document.getElementById("MyFrame").src = newSrc;
                        //window.location.href = '/view/index?id=' + type + '&filename=' + response.DataFileName+'';
                    })
                }

            });
        }
        static setreportmodel(model) {
            this.reportmodel = model;
        }

        static loadprojects(lookupid) {
            var items = Projects.ProjectsRow.getLookup().items;
            var itemsss = `<option  selected value="0"> -- select an option -- </option>`;
            items.forEach(function (ff) {
                itemsss = itemsss + `<option value="` + ff.ServiceId + `">` + ff.ServiceName + `</option>`;
            });
            $('#' + lookupid + '').append(itemsss);
        }

        static loadlocations(lookupid) {
            var items = SystemParameters.LocationsRow.getLookup().items;
            var itemsss = `<option  selected value="0"> -- select an option -- </option>`;
            items.forEach(function (ff) {
                itemsss = itemsss + `<option value="` + ff.Id + `">` + ff.LocationName + `</option>`;
            });
            $('#' + lookupid + '').append(itemsss);
        }

      
    }
}