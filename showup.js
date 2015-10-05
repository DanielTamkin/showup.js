/*showup.js - by Danieltamkin*/
/*sytanx compiler for alt data.*/
(function( $ ) {
	$.fn.showup = function() {
	    return this.each(function() {
        var tagStart  = "!showup//",
            tagEnd    = "//!";
        console.log("--------");
        console.log("Showup Running.");
        $target = $(this);// load up the element to parse.
        if($target.length > 0) {
          $images = $target.find("img");/*.attr("alt");*/
          if($images !== undefined || $images !== -1){
            $.each($images,function(index,value) {
              var alt     = $(this).attr("alt"),
                  altReal = alt,
                  Index   = alt.length,
                  IndexStart  = alt.toLowerCase().indexOf(tagStart),
                  IndexEnd    = alt.toLowerCase().indexOf(tagEnd);
              if(Index > 0 && IndexStart !== -1){
                if(IndexEnd !== undefined || IndexEnd !== undefined){
                  var IndexText  = alt.substr(IndexStart,IndexEnd);
                      IndexText  = IndexText.substr(tagStart.length,IndexText.length),
                      remove = alt.substr(IndexStart,IndexEnd+tagEnd.length);
                  alt    = alt.replace(remove,'');
                  /*compile IndexText to img*/
                  $(this).wrap("<div class='showup'></div>");
                  $(this).after("<p>"+IndexText+"</p>");
                  console.log(" - Successfully Compiled showup code.");
									/*update alt data*/
			            $(this).prop("alt", alt);
                }
                else{
                  if(IndexStart !== undefined){
                    console.log(" - Error: syntax fail, no start tag. Recovering what I can of the alt data.");
                    remove = alt.substr(IndexStart,IndexEnd+tagEnd.length);
                    alt    = alt.replace(remove,'');
                    console.log("alt: "+alt);
                  }
                  else if(IndexEnd !== undefined){
                    console.log(" - Error: syntax fail, no end tag. Recovering what I can of the alt data.");
                  }
                  else{
                    // do nothing, no syntax to compile
                  }
                }
              }
              });
            }
            console.log("--------");
          }
          else{
            console.log(" - no images detected, or no alt data to process.");
            console.log("--------");
          }
      });
	 };
}( jQuery ));
