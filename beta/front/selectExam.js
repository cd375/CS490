//MID_PATH="/Online_part2/middle/";
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
	var exam_list=document.getElementById("examList");
	if(ajaxRequest.readyState == 4){
		var ajaxDisplay = document.getElementById('ajaxDiv');
		var res=ajaxRequest.responseText;
		var data=JSON.parse(res);
		var len=data.length;
		for(var i=0;i<len;i++){
			var option=new Option(data[i]['name'],data[i]['name']);
			exam_list.add(option,i+1);
		}
	}
}
ajaxRequest.open("POST", MID_PATH+"exam_middle.php", true);
ajaxRequest.send(null); 

function viewExamTable(){
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
		var exam_list=document.getElementById("examList");
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('ajaxDiv');
			var res=ajaxRequest.responseText;
			var data=JSON.parse(res);
			document.getElementById("examID").value=data[0]['examId'];
			document.getElementById("examName").value=data[0]['examName'];
			document.getElementById("examQuestions").value=data[0]['questions']
			var len=data.length;
			var html="";
			for(var i=0;i<len;i++){
				html+='<div><label>Problem'+(i+1)+'</label><br>';
				html+='<label>QuestionId:'+data[i]['qId']+'</label><br>';
				html+='<label>Question Description:<br>'+data[i]['qDescription']+'<label><br>';
				html+='<label>Difficulty Level:'+data[i]['qLevel']+'</label></div>';
			}
			ajaxDisplay.innerHTML=html;
		}
	}
	var name=document.getElementById("examList").value;
	MID_PATH="/Online_part2/middle/";
	var myJSON={"name":name};
	ajaxRequest.open("POST", MID_PATH+"examTableview_middle.php", true);
	ajaxRequest.send(JSON.stringify(myJSON));
//	ajaxRequest.send(null); 
}
function selectExamTable(){
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
	var name=document.getElementById("examName").value;
	var id=document.getElementById("examID").value;
	var questions=document.getElementById("examQuestions").value;
	if(name==''){
		alert("You must select Exam Table in Exam Table list.");
	}
	else{
		var myJSONObject={"id":id,"name":name,"questions":questions};
		ajaxRequest.open("POST", MID_PATH+"examSelect_middle.php", true);
		ajaxRequest.send(JSON.stringify(myJSONObject));
	}
}
function startExam(){
	alert("Now Exam has started");
}