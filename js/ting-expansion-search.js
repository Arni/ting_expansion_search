(function($) {
    $(document).ready(function() {
//    Drupal.behaviors.tingSearchExpansion = {
//        'attach': function(context) {
            
//          var request = $.ajax({
//          url: Drupal.settings.tingSearchExpansion.url,
////          type: 'POST',
////          data: {
////            coverData: cover_data
////          },
//          dataType: 'json',
//          success: function(counts) {
//              alert("1");
//          }
//          
//          // Update processing state.
////          complete: function(request, status) {
////
////          }
//        }).once('tingSearchExpansion');

            $.get(Drupal.settings.tingSearchExpansion.url, null, SearchExpansionResults);
             //$( "#ting-search-expansion-link-ebog").spinner();
//            $('a.photo_button:not(.mymodule-processed)', context)
//                    .addClass('mymodule-processed')
//                    .bind('click', function() {
//                $.get('/photos/get/photos/' + parseInt(this.id, 10), null, imageDetails);
//                return false;
//            });
//        }
//    }
//
//    }
      }); 
    
    var SearchExpansionResults= function(response) {
        //console.log(response);
        //alert("1");
        $.each (response, function(key, value ) {
            var text = $( "#ting-search-expansion-link-" + key ).text().replace('...', value); 
            $( "#ting-search-expansion-link-" + key ).text(text);
            //console.log(text);
            //text = text.replace('...', value);
            //console.log(text);
        });
    }
        
        //$('div.field-type-image div.field-item').html(response.data);


})(jQuery);
