var L;
var NAME=[];//ids of checkboxes
var NAME1=[];
var pt=[];//ids of points 
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
	if(ajaxRequest.readyState == 4){
		var ajaxDisplay = document.getElementById('questions');
		var testDisplay=document.getElementById('test');
		var res=ajaxRequest.responseText;
		if(res.trim()=="not".trim()){
		//	window.location.replace("login.php");
			document.write("This page is blocked for you.");
		}
		else{
			var data=JSON.parse(res);
		/*	var user=document.getElementById("user");
			var userH="<h3>"+"Instructor-"+"<em>"+data[0]['username']+"</em></h3>"
			user.innerHTML=userH;*/
			var html="<div>";
			html+="<div>";
			html+="<table class='table table-striped'>";
			html+="<thead style='background-color:#42ABCA;'><tr><th>Check</th>";
			html+="<th>Question</th>";
			html+="<th>Category</th>";
			html+="<th>Difficulty</th>";
			html+="<th>Description</th>";
			html+="</tr></thead>";
			html+="<tbody>";
			var testHtml="<div>";
			testHtml+="<div>";
			testHtml+="<table class='table table-striped'>";
			testHtml+="<thead style='background-color:#42ABCA;'><tr><th>Check</th>";
			testHtml+="<th>Description</th>";
			testHtml+="<th style='width:25%;'>Points</th></tr>"
			testHtml+='</thead><tbody>';
			var len=data.length;
			L=len;
			for(var i=0;i<len;i++){
				NAME.push(data[i]['id']);
				NAME1.push("test"+data[i]['id']);
				pt.push("point"+data[i]['id']);
				html+='<tr id="'+'trr'+data[i]['id']+'"><td>';
				html+='<input type="checkbox" id="'+data[i]['id'];
				html+='" value="'+data[i]['id']+'"'+'></td>';
				html+='<td><label>'+data[i]['name']+'</label></td>';
				html+='<td>'+data[i]['category']+'</td>';
				html+='<td>'+data[i]['level']+'</td>';
				html+='<td>'+data[i]['description']+'</td>';
				html+='</tr>';
				testHtml+="<tr hidden id='"+"tr"+data[i]['id']+"'><td>";
				testHtml+='<input type="checkbox" id="'+"test"+data[i]['id'];
				testHtml+='" value="'+data[i]['id']+'"'+'></td>';
				testHtml+='<td>'+data[i]['description']+'</td>';
				testHtml+='<td><input type="text"';
				testHtml+='id="'+pt[i]+'"';
				testHtml+='placeholder="Input Points" style="border:none;width:100%;"/></td>';
				testHtml+='</tr>';
			}
			html+="</tbody></table>";
			html+="</div></div>";
			testHtml+="</tbody></table>";
			testHtml+='</div></div>';
			ajaxDisplay.innerHTML=html;
			testDisplay.innerHTML=testHtml;
		}
	}
}
ajaxRequest.open("POST", MID_PATH+"question_middle.php", true);
ajaxRequest.send(null);

function cancel(){
	var questions="";
	var started=0;
	for(var i=0;i<L;i++){
		document.getElementById(pt[i]).value='';
		var chkbox=document.getElementById(NAME[i]);
		chkbox.checked=false;
		document.getElementById(NAME1[i]).checked=false;
		document.getElementById('tr'+NAME[i]).hidden=true;
		
	}
}
function examAdd(){
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
	//	var question_list=document.getElementById("question_list");
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('ajaxDiv');
			var res=ajaxRequest.responseText;
			var alt=document.getElementById('alert');
			var html='<center><h3>'+res+'</h3></center>';
			alt.innerHTML=html;
		}
	}
	var name=document.getElementById("eName").value;
	var questions="";
	var points="";
	var started=0;
	var po=false;
	for(var i=0;i<L;i++){
		var chkbox=document.getElementById(NAME[i]);
		var p=document.getElementById(pt[i]).value;
		if(chkbox.checked){
			if(p=='') po=true;
			else{
				if(!Number(p)) po=true;
			}
			if(started==0){
				questions+=NAME[i];
				points+=p;
			}
			else{
				questions+=" "+NAME[i];
				points+=" "+p;
			}
			started=1;
		}
	}
	if(name==''){
		var alt=document.getElementById('alert');
		var html='<center><h3>'+'You must input Exam Title'+'</h3></center>';
		alt.innerHTML=html;
	}
	else if(po==true){
		var alt=document.getElementById('alert');
		var html='<center><h3>'+'You must input Points(It should be number)'+'</h3></center>';
		alt.innerHTML=html;
	}
	else{
		var myJSONObject={"name":name,"questions":questions,"points":points};
		ajaxRequest.open("POST", MID_PATH+"examAdd_middle.php", true);
		ajaxRequest.send(JSON.stringify(myJSONObject));
	}
}
function addquestion(){
	for(var i=0;i<L;i++){
		var chkbox=document.getElementById(NAME[i]);
		if(chkbox.checked){
			document.getElementById('tr'+NAME[i]).hidden=false;
		}
	}
}
function removeq(){
	for(var i=0;i<L;i++){
		var chkbox=document.getElementById(NAME1[i]);
		if(chkbox.checked){
			document.getElementById('tr'+NAME[i]).hidden=true;
			document.getElementById(NAME[i]).checked=false;
			chkbox.checked=false;
		}
	}
}

function filterQuestion(){
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
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('ajaxDiv');
			var res=ajaxRequest.responseText;
			var data=JSON.parse(res);
			if(data.length==0){
				for(var i=0;i<L;i++){
					document.getElementById('trr'+NAME[i]).hidden=true;
					document.getElementById(NAME[i]).checked=false;
				}
			}
			else{
				for(var i=0;i<L;i++){
					var filter=0;
					for(var j=0;j<data.length;j++){
						if(NAME[i]==data[j]['id']){
							filter=1;
							break;
						}
					}
					if(filter==0){
						document.getElementById('trr'+NAME[i]).hidden=true;
						document.getElementById(NAME[i]).checked=false;
					}
					else{
						document.getElementById('trr'+NAME[i]).hidden=false;
						document.getElementById(NAME[i]).checked=false;
					}
				}
			} 
		}
	}
	var category=document.getElementById("qCategory").value;
	var level=document.getElementById("qLevel").value;
	var myJSON={"category":category,"level":level};
	ajaxRequest.open("POST", MID_PATH+"filterquestion_middle.php", true);
	ajaxRequest.send(JSON.stringify(myJSON));
}