function send(){
	if(!document.getElementById('url').value){
		alert("You need to provide a webhook!")
	}else{
	var hookurl = document.getElementById('url').value + "/slack"
	var msgJson
	if((document.getElementById('field_toggle').checked) === true){
		msgJson = {
		 "username": document.getElementById('name').value,
		 "icon_url": document.getElementById('avatar').value,
		 "text": document.getElementById('content').value,
		 "attachments":[{
		   "author_icon": document.getElementById('author_icon').value,
		   "author_name": document.getElementById('author_name').value,
		   "color": document.getElementById('color').value,
			"image_url": document.getElementById('image').value,
            "thumb_url": document.getElementById('thumb').value,
            "footer": document.getElementById('footer').value,
            "footer_icon": document.getElementById('footer_icon').value,
		   "fields": [{
		    "title": document.getElementById('embed_title1').value,
		    "value": document.getElementById('embed_content1').value,
		    "short": document.getElementById('field1').checked
			},{
			"title": document.getElementById('embed_title2').value,
		    "value": document.getElementById('embed_content2').value,
		    "short": document.getElementById('field2').checked
			},{
			"title": document.getElementById('embed_title3').value,
		    "value": document.getElementById('embed_content3').value,
		    "short": document.getElementById('field3').checked
			},{
			"title": document.getElementById('embed_title4').value,
		    "value": document.getElementById('embed_content4').value,
		    "short": document.getElementById('field4').checked
			}
			]
		 }]
		}
	}
  post(hookurl, msgJson);
}
}
function post(url, jsonmsg){
	xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json");
	var data = JSON.stringify(jsonmsg);
	xhr.send(data);
	xhr.onreadystatechange = function() {
		if(this.status != 200){
			alert(this.responseText);
		}
	}
}