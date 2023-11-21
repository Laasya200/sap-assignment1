sap.ui.define(["sap/ui/core/mvc/Controller"],function(Controller)
{
    return Controller.extend ("com.ibm.simpleapp.controller.Main",{
        onInit :function() {},
        onBeforeRendering: function() {},
        onAfterRendering:function(){},
        onExit: function(){},
       
        fun1:function(){
             oModel = this.getView()
             var model=oModel.byId('vertically')
             model.destroyContent()
        },
      fun2:function()
    {
        oModel=this.getView()
        var model=gv.byId('vertically')
        console.log('d');
        model.addContent('<text text="this is added text"/>')
    }  
})
})
      
      
    
        

    
        


