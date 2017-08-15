var L;
var NAME=[];
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
		if(res.trim()=="not".trim()){
		//	window.location.replace("login.php");
			document.write("This page is blocked for you.");
		}
		else{
		//	alert(res);
			var data=JSON.parse(res);
			if(data.length==0){
				html='<div class="container"><pre><h3>Nobody submitted';
				html+='</h3></pre></div>';
				ajaxDisplay.innerHTML=html;
			}
			else{
			/*	var user=document.getElementById("user");
				var userH="<h3>Instructor-<em>"+data[0]['username']+"</em></h3>"
				user.innerHTML=userH;*/
				var count=Number(data[0]['count']).valueOf();
				var html="<div class='row'>";
				html+="<div class='col-md-12'>";
				html+="<table class='table table-striped' style='margin:2px;'>";
				html+="<thead  style='background-color:#42ABCA;'><tr><td>Student</td>";
				html+="<td>Problem</td>";
				html+="<td style='width:40%;'>Code</td>";
				html+="<td>Yours1/<br>";
				html+="Correct1</td>";
				html+="<td>Yours2/<br>";
				html+="Correct2</td>";
				html+="<td>Yours3/<br>";
				html+="Correct3</td>";
				html+="<td>Yours4/<br>";
				html+="Correct4</td>";
				html+="<td>Problem<br>Weight</td>";
				html+="<td>Assess</td>";
				html+="<td>FeedBack</td>";
				html+="</thead></tr>";
				html+="<tbody>";
				var len=data.length;
				L=len;
				var right=0;
				for(var i=0;i<len;i++){
					right=0;
					NAME.push(data[i]['id']);
				//	html+='<tr><td>'+data[i]['stdId']+'</td>';
					html+='<tr><td>'+data[i]['name']+'</td>';
				//	html+='<td>'+data[i]['quesId']+'</td>';
					
					html+='<td>'+((i%count)+1)+'</td>';
				//	html+='<td><textarea style="width:100%;height:120px;" disabled>'+data[i]['code']+'</textarea></td>';
					html+='<td><a href="showcode.php?id='+data[i]['id']+'">Show code</a></td>';
					var s1=new String(data[i]['output1']);
					var s2=new String(data[i]['sample1']);
					if(s1.trim()==s2.trim()){
						html+='<td style="background:#5cb85c;">'+data[i]['output1']+'/'+data[i]['sample1']+'</td>';
						right++;
					}
					else if(s1.trim()==''){
						html+='<td style="background:#d9534f;">'+data[i]['output1']+'/'+data[i]['sample1']+'</td>';
					}
					else{
						html+='<td style="background:#f0ad4e;">'+data[i]['output1']+'/'+data[i]['sample1']+'</td>';
					}
					var s1=new String(data[i]['output2']);
					var s2=new String(data[i]['sample2']);
					if(s1.trim()==s2.trim()){
						right++;
						html+='<td style="background:#5cb85c;">'+data[i]['output2']+'/'+data[i]['sample2']+'</td>';
					}
					else if(s1.trim()==''){
						html+='<td style="background:#d9534f;">'+data[i]['output2']+'/'+data[i]['sample2']+'</td>';
					}
					else{
						html+='<td style="background:#f0ad4e;">'+data[i]['output2']+'/'+data[i]['sample2']+'</td>';
					}
					var s1=new String(data[i]['output3']);
					var s2=new String(data[i]['sample3']);
					if(s1.trim()==s2.trim()){
						right++;
						html+='<td style="background:#5cb85c;">'+data[i]['output3']+'/'+data[i]['sample3']+'</td>';
					}
					else if(s1.trim()==''){
						html+='<td style="background:#d9534f;">'+data[i]['output3']+'/'+data[i]['sample3']+'</td>';
					}
					else{
						html+='<td style="background:#f0ad4e;">'+data[i]['output3']+'/'+data[i]['sample3']+'</td>';
					}
					var s1=new String(data[i]['output4']);
					var s2=new String(data[i]['sample4']);
					if(s1.trim()==s2.trim()){
						right++;
						html+='<td style="background:#5cb85c;">'+data[i]['output4']+'/'+data[i]['sample4']+'</td>';
					}
					else if(s1.trim()==''){
						html+='<td style="background:#d9534f;">'+data[i]['output4']+'/'+data[i]['sample4']+'</td>';
					}
					else{
						html+='<td style="background:#f0ad4e;">'+data[i]['output4']+'/'+data[i]['sample4']+'</td>';
					}
					html+='<td>'+data[i]['point']+'</td>';
					data[i]['assest']=parseInt(right*Number(data[i]['point']).valueOf()/4);
					html+='<td><input type="text" value="'+data[i]['assest']+'"'+'id="'+data[i]['id']+'" placeholder="score">'+'</input></td>';
					if(i==(len-1)){
						html+='<td><textarea id="'+'feed'+data[i]['id']+'" placeholder="FeedBack">'+data[i]['feedback']+'</textarea>';
					}
					else{
						if(data[i]['name']==data[i+1]['name']){
							html+='<td><textarea id="'+'feed'+data[i]['id']+'" placeholder="FeedBack" hidden>'+data[i]['feedback']+'</textarea>';
						}
						else{
							html+='<td><textarea id="'+'feed'+data[i]['id']+'" placeholder="FeedBack">'+data[i]['feedback']+'</textarea>';
						}
					}
					html+='</tr>';
				}
				html+="</tbody></table>";
				html+='</div></div>';
				ajaxDisplay.innerHTML=html;
			}
		}
	}
}
ajaxRequest.open("POST", MID_PATH+"assestInst_middle.php", true);
ajaxRequest.send(null);

function release(){
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
			var alt = document.getElementById('alert');
			var res=ajaxRequest.responseText;
			html='<center><pre><h2>Exam Result is released.</h2></pre></center>';
			alt.innerHTML=html;
		}
	}
	var assest=[];
	for(var i=0;i<L;i++){
		var id=NAME[i];
		var ass=document.getElementById(id).value;
		var feedback=document.getElementById("feed"+id).value;
		var a={'id':id,'assest':ass,'feedback':feedback};
		assest.push(a);
	}
	ajaxRequest.open("POST", MID_PATH+"release_middle.php", true);
	ajaxRequest.send(JSON.stringify(assest));
}
