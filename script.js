const nme =document.getElementById('Name');
const Year=document.getElementById('number');
const btn = document.getElementById('btn');

var row=1;

function fun2(){
    
    const abc =document.getElementById('Name');
    const Year=document.getElementById('number');
    const msg = document.getElementById('msg');

    var table = document.getElementById('table');
    var row = table.insertRow(row);
    var cell1= row.insertCell(0);
    var cell2= row.insertCell(1);
    var cell3= row.insertCell(2);
    cell1.innerHTML=abc.value;
    cell2.innerHTML=Year.value;
    cell3.innerHTML=msg.value;
    row++;

}







btn.addEventListener('click',fun2);
function nostyle(){
    document.styleSheets[0].disabled=true;
    document.styleSheets[1].disabled=true;
}

function changestyle(n){
    nostyle();
    document.styleSheets[n].disabled=false;

}

