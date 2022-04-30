// JavaScript source code

var json=[];
var div;
var count=0;
function add()
 {
 var name=document.getElementById("task").value;  
if(name!=""){ 
document.getElementById("task").value="";

//create a div dynamically
 div= document.createElement("div");
 var text1=document.createTextNode(name);

json[count]=name;

//set the attribute of div
div.setAttribute("id",count);

//set style
div.setAttribute("style","border:2px solid green; margin: 1rem; padding: 2.5rem; font-size: 22px;justify-content: center;display: grid;text-align: center;");

div.appendChild(text1);

//delete button

var butt1=document.createElement("button");

butt1.setAttribute("value","delete1");
butt1.setAttribute("type","submit");
butt1.setAttribute("onclick","delete1()");

var text2=document.createTextNode("delete");
butt1.appendChild(text2);

div.appendChild(butt1);

//edit button
var butt2=document.createElement("button");

butt2.setAttribute("value","edit");
butt2.setAttribute("type","submit");
butt2.setAttribute("onclick","edit()");

var text3=document.createTextNode("edit");
butt2.appendChild(text3);

div.appendChild(butt2);

document.getElementById("addtask").appendChild(div);

count++;
}
 }


function delete1(){

console.log(event.target.parentElement);
//element.removechild(event.target.parentElement);
document.getElementById("addtask").removeChild(event.target.parentElement);
}



function edit(){

//console.log(event.target.parentElement.firstChild);

var div=document.createElement("div");
div.innerHTML="<input type=text name=name id=update placeholder='update the task'>";
//var text=document.createTextNode("<input type=text name=name>");

var butt=document.createElement("button");

butt.setAttribute("onclick","update()");

butt.setAttribute("type","button");

var text=document.createTextNode("update");

butt.appendChild(text);

//div.appendChild(text);

event.target.parentElement.appendChild(div);
event.target.parentElement.appendChild(butt);

}


function update(){

console.log(event.target.parentElement);
console.log(document.getElementById("update").value);
event.target.parentElement.innerText=document.getElementById("update").value;

//event.target.parentElement.

//delete button
var butt1=document.createElement("button");

butt1.setAttribute("value","delete1");
butt1.setAttribute("type","submit");
butt1.setAttribute("onclick","delete1()");

var text2=document.createTextNode("delete");
butt1.appendChild(text2);

div.appendChild(butt1);

//edit button

var butt2=document.createElement("button");

butt2.setAttribute("value","edit");
butt2.setAttribute("type","submit");
butt2.setAttribute("onclick","edit()");

var text3=document.createTextNode("edit");
butt2.appendChild(text3);

div.appendChild(butt2);


}
