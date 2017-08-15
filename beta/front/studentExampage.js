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
			var data=JSON.parse(res);
			var html='<div><h3>Good Luck</h3></div>';
			var len=data.length;
			for(var i=0;i<len;i++){
				html+='<div><label>Question'+(i+1)+'</label><br>';
				html+='<p>Qestion Name:'+data[i]['name']+'</p>';
				html+='<label>Question Description</label><br>';
				html+='<textarea>'+data[i]['description']+'</textarea><br>';
				html+='<label>Your answer</label><br>';
				html+='<textarea id="'+data[i]['id']+'"></textarea><br><br>';
				html+='</div>';
			}
			ajaxDisplay.innerHTML=html;
		}
	}
	var exam=EX;//you must change it
	var myJSONObject={'name':exam};
	ajaxRequest.open("POST", MID_PATH+"studentExampage_middle.php", true);
	ajaxRequest.send(JSON.stringify(myJSONObject));


function ajaxSubmitAnswer(){

var ajaxRequest1;

try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest1 = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest1 = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest1 = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
			}
		}
	}

	var exam=EX;
	var ajaxDisplay = document.getElementById('ajaxDiv');
			var res=ajaxRequest.responseText;
			var data=JSON.parse(res);
			var len=data.length;
var myJSONObject1 = [];	
		for(var i=0;i<len;i++){
			var answer = document.getElementById(data[i]['id']).value;
			var description = data[i]['description'];
			var questionname = data[i]['name'];
			var questionid = data[i]['id'];
 
	myJSONObject1[i] = {"questionid": questionid,"questionname":questionname, "description":description, "answer":answer};
}
	ajaxRequest1.open("POST", MID_PATH+"studentExamsubmit_middle.php", true);
	
	//ajaxRequest.send(null); 
	ajaxRequest1.send(JSON.stringify(myJSONObject1));	

console.log(data);
	
}
