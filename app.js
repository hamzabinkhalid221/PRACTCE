                  

// var table  = prompt("Enter the table");
// var length = prompt("Enter the length");
// for(var a=1; a<=length; a++){
//     document.write(table + " * " +a+ " = " +(a*table) +"<br>");
// }
 
                    // WHILE  
// var table  = prompt("Enter the table");
// var length = prompt("Enter the length");
// var a=1;
// while(a<=length)
// {
//   document.write(table + " * " +a +" = " +(a*table) +"<br>");
//  a++;
// }


//             //   DO WHILE
// var table  = prompt("Enter the table");
// var length = prompt("Enter the length");
// var a=1;
// do{
//     document.write(table + " * " +a+ " =" +(a*table) +"<br>");
//     a++;
// }while (a<=length);



    <input id="inp" type="text" placeholder="Enter the table"><br>
    <input id="is"type="text" placeholder="Enter length"><br>
    <button onclick="set()">set</button>


function set(){


var inp = document.getElementById("inp");
var is = document.getElementById("is");
var table = inp.value;
var length = is.value;
for(var a=1;a<=length;a++){
    document.write(table + " * " +a+ " = " +(a*table) +"<br>");

}
}







var headingElement = document.createElement("h1");

var headingText = document.createTextNode("Welcome");

headingElement.appendChild(headingText);

var div = document.getElementById("main");

div.appendChild(headingElement);

console.log(headingText);



function adtodo(){
    var input = document.getElementById("inputfield");

    var liElement = document.createElement("li");

    var litext = document.createTextNode(input.value);

    liElement.appendChild(litext);

    var list = document.getElementById("list");
    list.appendChild(liElement);

    input.value = "";
}

function deleteAll(){
    var input = document.getElementById("link");
    list.innerHTML = "";
}








<div style="text-align: center;">
<input id="inputfield" type="text" />
<button onclick="adtodo()">Add Items</button>
<button onclick="deleteAll()">Delete All</button>
</div>
<div style="text-align: center;">
<ul id="list">

</ul>
</div>







