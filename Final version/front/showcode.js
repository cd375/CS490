try{
	// Opera 8.0+, Firefox, Safari
	ajaxRequest = new XMLHttpRequest();
} catch (e){
	// Internet Explorer Browsers
	try{
		ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try{
			ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e){
			// Something went wrong
			alert("Your browser broke!");
		}
	}
}
ajaxRequest.onreadystatechange = function(){
	if(ajaxRequest.readyState == 4){
		var showcode = document.getElementById('showcode');
		var res=ajaxRequest.responseText;
		if(res.trim()=="not".trim()){
		//	alert("you are not an instructor");
		//	window.location.replace("login.php");
			document.write("This page is blocked for you.");
		}
		else{
			var data=JSON.parse(res);
			var html='<pre><h4>'+data['code']+'</pre></h4>';	
			showcode.innerHTML=html;
		}
	}
}
myJSON={'id':ID};
ajaxRequest.open("POST", MID_PATH+"showcode_middle.php", true);
ajaxRequest.send(JSON.stringify(myJSON));
