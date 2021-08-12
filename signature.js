var data;
$.getScript('https://cdnjs.cloudflare.com/ajax/libs/jSignature/2.1.3/jSignature.min.js')
.done(function(){
    $(document).ready(function() {
        // Initialize jSignature
        var $sigdiv = $("#signature").jSignature({'UndoButton':true});
        
        $('#click').click(function(){
         // Get response of type image
         data = $sigdiv.jSignature('getData', 'image');
         //console.log(data)
        
         // Storing in textarea
         $('#output').val(data);
        
         // Alter image source 
         $('#sign_prev').attr('src',"data:"+data);
         //$('#sign_prev').show();
        });
    });
});

frappe.web_form.after_save = () => {
    var img = "data:"+data;
    //frappe.web_form.set_value("digital_sign", img)
    //console.log(img)
    //frappe.web_form.doc['digital_sign'] = img
    frappe.call({
        "method": "frappe.client.set_value",
        "args": {
            "doctype": "Supplier",
            "name": frappe.web_form.get_value('supplier_name'),
            "fieldname": "digital_sign",
            "value": img  
        },

        async: false,
        callback: function(res) {
            //alert(res)
        }
    });
    //frappe.web_form.set_value("digital_sign", img)
    return true;
};


