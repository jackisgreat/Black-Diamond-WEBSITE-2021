// JavaScript Document 


//on page ready

$( document ).ready(function() {
    console.log( "ready!" );
    
    $(".blue").hover(function(){
  $(this).css("background-color", "black");
  }, function(){
  $(this).css("background-color", "blue");
});








});