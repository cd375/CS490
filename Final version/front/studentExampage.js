var LN;
var DATA=[];
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
			document.write("This page is blocked for you.");
		}
		if(res.trim()=="end".trim()){
			var ajaxDisplay = document.getElementById('alert');
			var res=ajaxRequest.responseText;
			html="<h3><center>You have already submitted current exam.";
			html+="</center></h3>";
			ajaxDisplay.innerHTML=html;
		}
		else{
			var data=JSON.parse(res);
		/*	var user=document.getElementById("user");
			var userH='<h3>Student-<em>'+data[0]['username']+'</em></h3>'
			user.innerHTML=userH;*/
			var html='<div class="container">';
			var len=data.length;
			LN=len;
			for(var i=0;i<len;i++){
				DATA.push(data[i]['id']);
				html+='<div><p><em>Problem'+(i+1)+':</em>';
				html+=data[i]['name']+'</p>';
				html+='<p>Points:'+data[i]['point']+'</p>';
				html+='<label>Question Description:</label><br>';
				html+='<pre>'+data[i]['description']+'</pre>';
				html+='<label>Your answer</label><br>';
				html+='<textarea style="width:100%" id="'+data[i]['id']+'">'+data[i]['template']+'</textarea><br><br>';
				html+='</div>';
			}
			html+='</div>';
			ajaxDisplay.innerHTML=html;
		}
	}
}
ajaxRequest.open("POST", MID_PATH+"studentExampage_middle.php", true);
ajaxRequest.send(null);
//submit exam
function assest(){
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
			var ajaxDisplay=document.getElementById('ajaxDiv');
			ajaxDisplay.innerHTML=' ';
			var alt = document.getElementById('alert');
			var res=ajaxRequest.responseText;
			html="<h3><center>Submit is done";
			html+="<br>Please see score board to see your socre.<center><h3>";
			alt.innerHTML=html;
		}
	}
	answers=[];
	for(var i=0;i<LN;i++){
		var ans=document.getElementById(DATA[i]).value;
		var ans={"id":DATA[i],"ans":ans};
		answers.push(ans);
	}
	ajaxRequest.open("POST", MID_PATH+"assest_middle.php", true);
	ajaxRequest.send(JSON.stringify(answers));
}
