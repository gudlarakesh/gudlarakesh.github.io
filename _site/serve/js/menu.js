// navigation start
$(document).ready(function() {

  $('#overlay nav a').click(function(event) {
    $("#overlay").toggleClass("open");
    $("#toggle").find(".top").removeClass("active");
    $("#toggle").find(".middle").removeClass("active");
    $("#toggle").find(".bottom").removeClass("active");
    return true;
  });
  $("#toggle").click(function(event){
    event.preventDefault();
    $(this).find(".top").toggleClass("active");
    $(this).find(".middle").toggleClass("active");
    $(this).find(".bottom").toggleClass("active");
    $("#overlay").toggleClass("open");
  });
});
 
 //navigation end

