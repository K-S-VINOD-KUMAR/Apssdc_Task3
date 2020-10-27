function loadjson(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	};
	xhr.send(null);
}
loadjson("data.json",function(text)
{
	let data=JSON.parse(text);
	console.log(data);
	tite(data.title);
	basic(data.details);
	careerinfo(data.careerobjective);
	education(data.educationalqualification);
	skills(data.technicalskills);
	declare(data.declaration);

});

var child=document.querySelector(".child");
function tite(title){
	var heading = document.createElement("h1");
	heading.textContent=title.info;
	child.appendChild(heading);

}
var child1=document.querySelector(".child1");
function basic(det){

	var img = document.createElement("img");
	img.src=det.image;
	child1.appendChild(img)

	// var heading1=document.createElement("h4");
	// heading1.textContent="Name: ";
	// child1.appendChild(heading1)

	var name=document.createElement("h4");
	name.textContent="Name : "+det.name;
	child1.appendChild(name)

	child1.appendChild(document.createElement("hr"));

	var rollno=document.createElement("h4");
	rollno.textContent="Roll NO : "+det.rollno;
	child1.appendChild(rollno)

	child1.appendChild(document.createElement("hr"));

	var email=document.createElement("a");
	email.href="mailto:ksvinod@gmail.com";
	email.textContent="Email : "+det.email;
	child1.appendChild(email);

	child1.appendChild(document.createElement("hr"));

	var mobile= document.createElement("h4");
	//retriving data name from det
	mobile.textContent = "Mobile : "+det.mobile;
	child1.appendChild(mobile);

	/*var add= document.createElement("h4");
	//retriving data name from det
	add.textContent = "Address"
	child1.appendChild(add);*/

	child1.appendChild(document.createElement("hr"));

	var add1 = document.createElement("h4");
	add1.textContent="Address : "+det.address;
	child1.appendChild(add1)
}
var child2 = document.querySelector(".child2");
function careerinfo(info1){


	var heading1 = document.createElement("h3");
	heading1.textContent = "Careerobjective: ";
	child2.appendChild(heading1);

	var heading2 = document.createElement("p");
	heading2.textContent = info1.info;
	child2.appendChild(heading2);
	child2.appendChild(document.createElement("hr"));
}
function education(edu){
	var heading3 = document.createElement("h3");
	heading3.textContent = "Educational Qualification";
	child2.appendChild(heading3);

	var table1 = document.createElement("table");
	table1.border="1";
	child2.appendChild(table1);

	tabledata= "";
	for(i=0;i<edu.length;i++){
		tabledata+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passoutyear+"</td><td>"+edu[i].percentage+"</td></tr>";
	}
	table1.innerHTML=tabledata;
	child2.appendChild(document.createElement("hr"));
}
function skills(skillsinfo){
	var heading4 = document.createElement("h3");
	heading4.textContent = "Technical Skills";
	child2.appendChild(heading4);

	for(i=0;i<skillsinfo.length;i++){
		var title = document.createElement("h4");
		title.textContent=skillsinfo[i].title;
		child2.appendChild(title);

		var skillul = document.createElement("ul");
		var skillli = document.createElement("li");
		skillli.textContent = skillsinfo[i].info;
		skillul.appendChild(skillli);
		child2.appendChild(skillul);

	}
	child2.appendChild(document.createElement("hr"));

}
function declare(declar){
	var heading5 = document.createElement("h3");
	heading5.textContent="Declaration";
	child2.appendChild(heading5);

	var heading6 = document.createElement("p");
	heading6.textContent=declar.info;
	child2.appendChild(heading6);
}