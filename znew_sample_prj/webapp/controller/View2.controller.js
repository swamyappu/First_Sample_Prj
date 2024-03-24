sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.practice.znewsampleprj.controller.View2", {
            onInit: function () {

            },
            
            onSave: function(){
               var View = this.getView();
               var fname = View.byId("input1"); 
               var lname = View.byId("input2"); 
               var age = View.byId("input3"); 
               var course = View.byId("input4"); 
               var course_dur = View.byId("input5"); 
               var status = View.byId("input6"); 
               var gender = View.byId("input7"); 
               var dob = View.byId("input8"); 

               if( fname.getRequired() == true ){
                fname.setValueState( "Error" );
                fname.setValueText( "Mandatory" );
               };
               
               if( fname.getRequired() == true ){
                fname.setValueState( "Error" );
                fname.setValueText( "Mandatory" );
               };


            }
        });
    });
