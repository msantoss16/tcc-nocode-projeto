$(document).ready(function(){
    var zindex = 10;
  
    $("div.model").click(function(e){
      e.preventDefault();
  
      var isShowing = false;
  
      if ($(this).hasClass("show")) {
        isShowing = true
      }
  
      if ($("div.models-container").hasClass("showing")) {
        $("div.model.show")
          .removeClass("show");
  
        if (isShowing) {
          $("div.models-container")
            .removeClass("showing");
        } else {
          $(this)
            .css({zIndex: zindex})
            .addClass("show");
        }
  
        zindex++;
  
      } else {
        $("div.models-container")
          .addClass("showing");
        $(this)
          .css({zIndex:zindex})
          .addClass("show");
  
        zindex++;
      }
  
    });
});