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
		//	alert("you are not a student");
		//	window.location.replace("login.php");
			document.write("This page is blocked for you.");
		}
		else{
			var data=JSON.parse(res);
			if(data.length==0){
				html='<div class="container"><pre><h4>Teacher has not yet released exam result';
				html+='</h4></pre></div>';
				ajaxDisplay.innerHTML=html;
			}
		/*	var user=document.getElementById("user");
			userH="<h3>Student-<em>"+data[0]['username']+"</em></h3>"
			user.innerHTML=userH;*/
			var html="<div class='row' style='margin-left:2px;'>";
			html+="<div class='col-mod-12'>";
			html+="<center><h2>The Result of ";
			html+=data[0]['exam']+"</h2></center>";
			html+="<table class='table table-striped'>";
			html+="<thead style='background:#42ABCA;'><tr>";
			html+="<th>Student</th>";
			var cnt=data[0]['count'];
			for(var i=0;i<cnt;i++){
				html+='<th>Problem'+(i+1)+'<br>Score/Weight'+'</th>';
			}
			html+='<th>Possible<br>Points</th>';
			html+='<th>Total</th>';
			html+='<th>FeedBack</th>';
			html+="</tr></thead>";
			var len=data.length;
			L=len;
			html+="<tbody>";
			var total;
			var i=Number(0);
			var point=Number(0);
			while(i<len){
				total=(0).valueOf();
				point=(0).valueOf();
				html+='<tr>';
			//	html+='<td>'+data[i]['stdId']+'</td>';
				html+='<td>'+data[i]['name']+'</td>';
				for(var j=0;j<cnt;j++){
					var s1=new String(data[i]['assest']);
					var s2=new String(data[i]['point']);
					if(s1.trim()==s2.trim()){
						html+='<td style="background:#5cb85c;">'+data[i]['assest']+'/'+data[i]['point']+'</td>';
					}
					else if(s1.trim()=='0'){
						html+='<td style="background:#d9534f;">'+data[i]['assest']+'/'+data[i]['point']+'</td>';
					}
					else{
						html+='<td style="background:#f0ad4e;">'+data[i]['assest']+'/'+data[i]['point']+'</td>';
					}
					total+=(Number(data[i]['assest'])).valueOf();
					point+=(Number(data[i]['point'])).valueOf();
					i++;
				}
				html+='<td>'+point+'</td>';
				html+='<td>'+total+'</td>';
				html+='<td>'+data[i-1]['feedback']+'</td>';
				html+='</tr>';
			}
			html+="</tbody></table>";
			html+="</div></div>";
			ajaxDisplay.innerHTML=html;
		}
		
	}
}
ajaxRequest.open("POST", MID_PATH+"scoreboard_middle.php", true);
ajaxRequest.send(null);

