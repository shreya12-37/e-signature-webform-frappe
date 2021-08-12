$.getScript(“https://cdnjs.cloudflare.com/ajax/libs/jSignature/2.1.3/jSignature.min.js”)
    .done(function(){
        $("#signature").jSignature({'UndoButton':true});
        $(document).ready(function() {

            // Initialize jSignature
            var $sigdiv = $("#signature").jSignature({'UndoButton':true});

            $('#click').click(function(){
             // Get response of type image
             var data = $sigdiv.jSignature('getData', 'image');

             // Storing in textarea
             $('#output').val(data);

             // Alter image source 
             $('#sign_prev').attr('src',"data:"+data);
             $('#sign_prev').show();
        });
    });
});

