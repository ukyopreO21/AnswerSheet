var sheet = "";
var i = 1;
var text = "S";
var count = 0;
for (i=1; i<121; i++){
    text = "S"+i;
    sheet += "<tr id="+text+">";
    sheet += "<td>"+i+"</td>";
    sheet += "<form>";
    sheet += "<td>"+"<input type=\"radio\" name="+i+">"+"</td>";
    sheet += "<td>"+"<input type=\"radio\" name="+i+">"+"</td>";
    sheet += "<td>"+"<input type=\"radio\" name="+i+">"+"</td>";
    sheet += "<td>"+"<input type=\"radio\" name="+i+">"+"</td>";
    sheet += "</form>";
    sheet += "<td>"+"<input type=\"checkbox\" onchange=\"Check(this)\" id="+i+">"+"</td>";
    sheet += "</tr>"
}

function Check(num){
    var index = "S"+num.id;
    if(document.getElementById(num.id).checked){
        count = count+1;
        document.getElementById("result").innerHTML = "Số câu trả lời đúng: "+count+"/120";
        document.getElementById(index).style.backgroundColor = "#B1FDBF";
    }
    else {
        count = count-1;
        document.getElementById("result").innerHTML = "Số câu trả lời đúng: "+count+"/120";
        document.getElementById(index).style.backgroundColor = "#FFFFFF";
    }
}

document.getElementById("table").innerHTML += sheet;