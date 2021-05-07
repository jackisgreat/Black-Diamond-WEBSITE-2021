// JavaScript Document 


//on page ready

$( document ).ready(function() {
    console.log( "ready!" );
    
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
          $(".navbar-top").css("background-color", "#C9C9C9"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
          $(".navbar-top").css("background-color", "#1A1A1A"); // if not, change it back to transparent
        }
      });
    $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
          $(".nav-link").css("color", "#1A1A1A"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
          $(".nav-link").css("color", "#C9C9C9"); // if not, change it back to transparent
        }
      });
    $("#hover-test").hover(function(){
  $(this).addClass("nav-hover");
  }, function(){
  $(this).removeClass("nav-hover");
});




});