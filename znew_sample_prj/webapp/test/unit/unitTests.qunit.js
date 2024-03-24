/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"compractice/znew_sample_prj/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
