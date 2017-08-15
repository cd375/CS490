	var ajaxRequest;  // The variable that makes Ajax possible!
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
        // Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('ajaxDiv');
			var res=ajaxRequest.responseText;
			if(res.trim()=="not".trim()){
			//	alert("You are not a Student");
			//	window.location.replace("login.php");
				document.write("This page is blocked for you.");
			}
			else{
			/*	var user=document.getElementById("user");
				var data=JSON.parse(res);
				var userH="<h3>Student-<em>"+data['username']+"</em></h3>";
				user.innerHTML=userH;*/
			}
		}
	}
	ajaxRequest.open("POST", MID_PATH+"std_middle.php", true);
	ajaxRequest.send(null);

