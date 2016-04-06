
 function webToast(str){
	$("#webtoast").remove();
	$("body").append('<div id="webtoast">'+str+'</div>');
 	$("#webtoast").css("margin-left",'-'+$("#webtoast").width()/2+"px");
 	setTimeout(function(){
 		$("#webtoast").fadeOut(200);
 	},1000);
 }
 function hideWebAlert(){
 	$("#webAlert").fadeOut(200);
 	$(".webalert-in").fadeOut(200);
 }
 function showWebAlert(){
 	$("#webAlert").fadeIn(200);
 	$(".webalert-in").fadeIn(100);
 }