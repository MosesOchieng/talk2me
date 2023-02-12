$(document).ready(function(){

    $("#onoff").click(function()
     {
     	if($("#lights").hasClass("light"))
     	{
	         $("#onoff").removeClass("onoff").addClass("onoffs");
	         $("#lights").removeClass("light").addClass("lights"); 
	         $(".circle").fadeOut();     
        }
     	else
     	{
	     	 $("#onoff").removeClass("onoffs").addClass("onoff");
	         $("#lights").removeClass("lights").addClass("light");
	         $(".circle").fadeIn(); 

     	}
     });
    $("#back").click(function()
    {
         $(".mouse").hide();
         $(".mouses").show();
         $(".button li").removeClass("selected");
         $(this).addClass("selected");
    });
    $("#front").click(function()
    {
    	 $(".mouse").show();
         $(".mouses").hide();
         $(".button li").removeClass("selected");
         $(this).addClass("selected");
    });
   
});