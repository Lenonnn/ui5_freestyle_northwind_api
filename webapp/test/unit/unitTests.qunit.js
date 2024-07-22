/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"testenvlenon/app_products_northwind/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
