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
	var question_list=document.getElementById("question_list");
	if(ajaxRequest.readyState == 4){
		var ajaxDisplay = document.getElementById('ajaxDiv');
		var res=ajaxRequest.responseText;
		if(res.trim()=="not".trim()){
		//	alert("you are not an Instructor");
		//	window.location.replace("login.php");
			document.write("This page is blocked for you.");
		}
		else{
			var data=JSON.parse(res);
			var len=data.length;
			for(var i=0;i<len;i++){
				var option=new Option(data[i]['name'],data[i]['id']);
				question_list.add(option,i+1);
			}
		}
	}
}
ajaxRequest.open("POST", MID_PATH+"question_middle.php", true);
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
			document.getElementById("qDescript").value=data[0]['description'];
			document.getElementById("qCode").value=data[0]['code'];
			document.getElementById("template").value=data[0]['template'];
			document.getElementById("input1").value=data[0]['input1'];
			document.getElementById("output1").value=data[0]['output1'];
			document.getElementById("input2").value=data[0]['input2'];
			document.getElementById("output2").value=data[0]['output2'];
			document.getElementById("input3").value=data[0]['input3'];
			document.getElementById("output3").value=data[0]['output3'];
			document.getElementById("input4").value=data[0]['input4'];
			document.getElementById("output4").value=data[0]['output4'];
			document.getElementById("qName").value=data[0]['name'];
			document.getElementById("qCategory").value=data[0]['category'];
			document.getElementById("qLevel").value=data[0]['level'];
		}
	}
	var id=document.getElementById("question_list").value;
	var myJSON={"id":id};
	ajaxRequest.open("POST", MID_PATH+"questionview_middle.php", true);
	ajaxRequest.send(JSON.stringify(myJSON));
}
function newQuestion(){
	document.getElementById("question_list").value='';
	document.getElementById("qID").value='';
	document.getElementById("qDescript").value='';
	document.getElementById("qCode").value='';
	document.getElementById("template").value='';
	document.getElementById("input1").value='';
	document.getElementById("output1").value='';
	document.getElementById("input2").value='';
	document.getElementById("output2").value='';
	document.getElementById("input3").value='';
	document.getElementById("output3").value='';
	document.getElementById("input4").value=''
	document.getElementById("output4").value='';
	document.getElementById("qName").value='';
	document.getElementById("qCategory").value='';
	document.getElementById("qLevel").value='';
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
			var alt = document.getElementById('alert');
			var res=ajaxRequest.responseText;
			html='<center><h3>'+res+'</h3></center>';
			alt.innerHTML=html;
		}
	}
	var id=document.getElementById("qID").value;
	var description=document.getElementById("qDescript").value;
	var name=document.getElementById("qName").value;
	var level=document.getElementById("qLevel").value;
	var category=document.getElementById("qCategory").value;
	var code=document.getElementById("qCode").value;
	var template=document.getElementById("template").value;
	var input1=document.getElementById("input1").value;
	var output1=document.getElementById("output1").value;
	var input2=document.getElementById("input2").value;
	var output2=document.getElementById("output2").value;
	var input3=document.getElementById("input3").value;
	var output3=document.getElementById("output3").value;
	var input4=document.getElementById("input4").value;
	var output4=document.getElementById("output4").value;
//	alert(input);
	if(name=='' || level==''){
		var alt = document.getElementById('alert');
		html='<center><h3>'+''+'</h3></center>';
		alt.innerHTML=html;
	}
	else{
		var myJSONObject={"id":id,"name":name,"description":description,"level":level,"category":category,"code":code,"template":template,"input1":input1,"output1":output1,"input2":input2,"output2":output2,"input3":input3,"output3":output3,"input4":input4,"output4":output4};
		ajaxRequest.open("POST", MID_PATH+"questionadd_middle.php", true);
		ajaxRequest.send(JSON.stringify(myJSONObject));
	}
}