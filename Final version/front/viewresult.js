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
			//window.location.replace("login.php");
			document.write("This page is blocked for you.");
		}
		else{
			var data=JSON.parse(res);
			if(data.length==0){
				var html='<div class="container">';
				html+='<pre><h3>Exam Result is not yet released.</h3></pre>';
				html+='</div>'
				ajaxDisplay.innerHTML=html;
			}
			else{
				var cnt=data[0]['count'];
				var html="<div>";
				var total=0;
				var point=0;
				for(var i=0;i<cnt;i++){
					html+='<div class="container">'
					point+=Number(data[i]['point']);
					html+='<h3>Probem'+(i+1)+'('+data[i]['point']+'<em> points)'+'</em></h3>';
					html+='<h4>'+'Question Description'+'</h4>';
					html+='<pre>'+data[i]['question']+'</pre>';
					html+='<h4>Code</h4>';
					html+='<pre>'+data[i]['code']+'</pre>';
					html+='<h4>Result</h4>';
					html+='<table class="table" style="width:50%;">';
					html+='<thead><tr>';
					html+='<th>Case#</th>';
					html+='<th>Debug</th>';
					html+='<th>Output</th>';
					html+='<th>CorrectOutput</th>';
					html+='</thead></tr>';
					html+='<tbody>';
					var s1=new String(data[i]['output1']);
					var s2=new String(data[i]['sample1']);
					if(s1.trim()==s2.trim()){
						html+='<tr style="background:#5cb85c;">';
						var hl='<td>Right</td>';
					}
					else if(s1.trim()==''){
						html+='<tr style="background:#d9534f;">';
						var hl='<td>Not Complied</td>';
					}
					else{
						html+='<tr style="background:#f0ad4e;">';
						var hl='<td>Wrong</td>';
					}
					html+='<td>Case1</td>';
					html+=hl;
					html+='<td>'+data[i]['output1']+'</td>';
					html+='<td>'+data[i]['sample1']+'</td>';
					html+='</tr>';
					var s1=new String(data[i]['output2']);
					var s2=new String(data[i]['sample2']);
					if(s1.trim()==s2.trim()){
						html+='<tr style="background:#5cb85c;">';
						var hl='<td>Right</td>';
					}
					else if(s1.trim()==''){
						html+='<tr style="background:#d9534f;">';
						var hl='<td>Not Complied</td>';
					}
					else{
						html+='<tr style="background:#f0ad4e;">';
						var hl='<td>Wrong</td>';
					}
					html+='<td>Case2</td>';
					html+=hl;
					html+='<td>'+data[i]['output2']+'</td>';
					html+='<td>'+data[i]['sample2']+'</td>';
					html+='</tr>';
					var s1=new String(data[i]['output3']);
					var s2=new String(data[i]['sample3']);
					if(s1.trim()==s2.trim()){
						html+='<tr style="background:#5cb85c;">';
						var hl='<td>Right</td>';
					}
					else if(s1.trim()==''){
						html+='<tr style="background:#d9534f;">';
						var hl='<td>Not Compiled</td>';
					}
					else{
						html+='<tr style="background:#f0ad4e;">';
						var hl='<td>Wrong</td>';
					}
					html+='<td>Case3</td>';
					html+=hl;
					html+='<td>'+data[i]['output3']+'</td>';
					html+='<td>'+data[i]['sample3']+'</td>';
					html+='</tr>';
					var s1=new String(data[i]['output4']);
					var s2=new String(data[i]['sample4']);
					if(s1.trim()==s2.trim()){
						html+='<tr style="background:#5cb85c;">';
						var hl='<td>Right</td>';
					}
					else if(s1.trim()==''){
						html+='<tr style="background:#d9534f;">';
						var hl='<td>Not Compiled</td>';
					}
					else{
						html+='<tr style="background:#f0ad4e;">';
						var hl='<td>Wrong</td>';
					}
					html+='<td>Case4</td>';
					html+=hl;
					html+='<td>'+data[i]['output4']+'</td>';
					html+='<td>'+data[i]['sample4']+'</td>';
					html+='</tr>';
					html+='</tbody>'
					html+='</table>';
					html+='<h4>My Score</h4>';
					html+=data[i]['assest']+'<em> points</em>';
					total+=Number(data[i]['assest']);
					html+='</div>'
					
				}
				html+='<div class="container">'
				html+='<h3>Total Score</h3>';
				html+=total+'(/'+point+')'+'<em> points</em>';
				html+='<h3>Feedback</h3>';
				html+='<pre>'+data[cnt-1]['feedback']+'</pre>';
				html+='</div>';
				html+="</div>";
				ajaxDisplay.innerHTML=html;
			}
		}
		
	}
}
ajaxRequest.open("POST", MID_PATH+"viewresult_middle.php", true);
ajaxRequest.send(null);

