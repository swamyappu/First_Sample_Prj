sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.practice.znewsampleprj.controller.View1", {
            onInit: function () {

            },
            
            toView2: function(){
                var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteView2");
            }

        });
    });
