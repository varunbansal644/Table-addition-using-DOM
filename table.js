
    document.getElementById("button").addEventListener("click",f1);
    function f1()
    {
   var n=document.getElementById('name').value;
   var e=document.getElementById("email").value;
   var p=document.getElementById("phone").value;
   var a=document.getElementById("address").value;

  var tr = document.createElement("tr");

  var td = document.createElement("td");
  var node = document.createTextNode(n);
  td.appendChild(node);
  tr.appendChild(td);

  var td = document.createElement("td");
  var node = document.createTextNode(e);
  td.appendChild(node);
  tr.appendChild(td);

  var td = document.createElement("td");
  var node = document.createTextNode(p);
  td.appendChild(node);
  tr.appendChild(td);

  var td = document.createElement("td");
  var node = document.createTextNode(a);
  td.appendChild(node);
  tr.appendChild(td);
  
document.getElementById('table').appendChild(tr);
    }
