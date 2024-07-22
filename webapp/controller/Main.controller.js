sap.ui.define([
    "./BaseController",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "../model/formatter",
    "sap/m/MessageBox",
    "sap/m/Label",
    "sap/m/Text",
    "sap/m/PDFViewer"
],
function (BaseController,
    Sorter,
    Filter,
    FilterOperator,
    JSONModel,
    Fragment,
    Formatter,
    MessageBox,
    Label,
    Text,
    PDFViewer) {
    "use strict";

    return BaseController.extend("test.env.lenon.appproductsnorthwind.controller.Main", {
        formatter: Formatter,
        onInit: function () {

        }
    });
});
