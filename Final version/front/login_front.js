function ajaxLoginFunction(){
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
				return false;
			}
		}
	}
        // Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('ajaxDiv');
			var res=ajaxRequest.responseText;
			var stu_page="student_front.php";
			var inst_page="instructor_front.php";
			var data=JSON.parse(res);
			document.getElementById('login:userid').value=data['userid'];
			if (data['authority']=="student") window.location.replace(stu_page);
			else if(data['authority']=="instructor") window.location.replace(inst_page);
			else ajaxDisplay.innerHTML = "<h3><center>Login Failed</center></h3>";
		}
	}
	var name = document.getElementById('login:username').value;
	var pass = document.getElementById('login:password').value;
	var myJSONObject = {"name": name,"pass":pass};
	ajaxRequest.open("POST", MID_PATH+"login.php", true);
	ajaxRequest.send(JSON.stringify(myJSONObject));
}