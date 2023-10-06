                  

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

