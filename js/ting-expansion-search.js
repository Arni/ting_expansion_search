(function($) {
    $(document).ready(function() {
            $.get(Drupal.settings.tingSearchExpansion.url, null, SearchExpansionResults);

      }); 
    
    var SearchExpansionResults= function(response) {

        $.each (response, function(key, value ) {
            var text = $( "#ting-search-expansion-link-" + key ).text().replace('...', value); 
            $( "#ting-search-expansion-link-" + key ).text(text);
        });
    }
        


})(jQuery);
