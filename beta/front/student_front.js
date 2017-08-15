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
	var examTable=document.getElementById("examTable");
	if(ajaxRequest.readyState == 4){
		var ajaxDisplay = document.getElementById('ajaxDiv');
		var res=ajaxRequest.responseText;
		var data=JSON.parse(res);
		var len=data.length;
		for(var i=0;i<len;i++){
			var option=new Option(data[i]['name'],data[i]['name']);
			examTable.add(option,i+1);
		}
	}
}
ajaxRequest.open("POST", MID_PATH+"studentExam_middle.php", true);
ajaxRequest.send(null); 

function viewQuestion(){
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
			var data=JSON.parse(res);
			document.getElementById("qID").value=data[0]['id'];
			document.getElementById("qName").value=data[0]['name'];
			document.getElementById("qLevel").value=data[0]['level'];
		}
	}
	var name=document.getElementById("question_list").value;
	MID_PATH="/Online_part2/middle/";
	var myJSON={"name":name};
	ajaxRequest.open("POST", MID_PATH+"questionview_middle.php", true);
	ajaxRequest.send(JSON.stringify(myJSON));
}

function addQuestion(){
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
	var id=document.getElementById("qID").value;
//	var descript=document.getElementById("qDescript").value='';
	var name=document.getElementById("qName").value;
	var level=document.getElementById("qLevel").value;
	if(name=='' || level==''){
		alert("You must input Question name and difficulty level");
	}
	else{
		var myJSONObject={"id":id,"name":name,"level":level};
		ajaxRequest.open("POST", MID_PATH+"questionadd_middle.php", true);
		ajaxRequest.send(JSON.stringify(myJSONObject));
	}
}