sap.ui.define(["sap/ui/core/mvc/Controller"],function(Controller)
{
    return Controller.extend ("com.ibm.simpleapp.controller.Main",{
        onInit :function() {},
        onBeforeRendering: function() {},
        onAfterRendering:function(){},
        onExit: function(){},
        onHtmlPress: function(){
            alert("this is a Html Button");
        },
        onPressJSON: function(){
            alert("this is a Json Button");
        },
        onPressJS: function(){
            alert("this is a Js button");
        },

    
        });
});

