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
        fun1(){
             oModel = this.getView()
             var model=oModel.byId('vertically')
             model.destroyContent()
        },
      fun1()
    {
        oModel=this.getView()
        var va=gv.byId('vertically')
        console.log('d');
        model.addContent('<text text="this is added text"/>')
    }  
})
})
      
      
    
        

    
        


