function addExamTable(){
//	MID_PATH="/Online_part2/middle/";
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
	ajaxRequest.onreadystatechange = function(){
		var question_list=document.getElementById("question_list");
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('ajaxDiv');
			var res=ajaxRequest.responseText;
			alert(res);
		}
	}
	var id=document.getElementById("examTableID").value;
//	var descript=document.getElementById("qDescript").value='';
	var name=document.getElementById("eName").value;
	var questions=document.getElementById("questionNO").value;
	if(questions==''){
		alert("You must input at least a Question Number");
	}
	else{
		var myJSONObject={"id":id,"name":name,"questions":questions};
		ajaxRequest.open("POST", MID_PATH+"examTableadd_middle.php", true);
		ajaxRequest.send(JSON.stringify(myJSONObject));
	}
}