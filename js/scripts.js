
 //Twitter button in footer
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
 
 //clicked when you hit the button
 $("#button").on("click", function() {
      // now we're going to work in here
      // all the rest of our code
      console.log("clicked");
      return false;
      // no code here!
});



$(document).ready(function(){
  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });
  });


  //message box red border
   $(".message-box").css
    ("border", "2px solid red");


  // Stellar
  $.stellar();
  

  // tooltip for buttons
   $(function () {
    $('[data-toggle="tooltip"]').tooltip();
    });
   
   
  // about page tooltip
   $(function () {
    $('#[item1]').tooltip();
    });
    
    




  

 
  

