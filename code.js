var sheet = "";
var i = 1;
var j = 1;
var text = "S";
var count = 0;
var arr = Array(120);
var saveRb;
var check = 0;
var check1;
var back;

if (sessionStorage.count == undefined){
    document.getElementById("result").innerHTML = "Số câu trả lời đúng: "+0+"/120";
    sessionStorage.count = 0;
    check = 1;
}
else document.getElementById("result").innerHTML = "Số câu trả lời đúng: "+sessionStorage.count+"/120";
for (i=1; i<121; i++){
    text = "S"+i;
    sheet += "<tr id="+text+">";
    sheet += "<td>"+i+"</td>";
    sheet += "<form>";
    sheet += "<td>"+"<input type=\"radio\" name="+i+" onclick=\"storeRadioButton(this)\" class=\"A\" value=\"A\">"+"</td>";
    sheet += "<td>"+"<input type=\"radio\" name="+i+" onclick=\"storeRadioButton(this)\" class=\"B\" value=\"B\">"+"</td>";
    sheet += "<td>"+"<input type=\"radio\" name="+i+" onclick=\"storeRadioButton(this)\" class=\"C\" value=\"C\">"+"</td>";
    sheet += "<td>"+"<input type=\"radio\" name="+i+" onclick=\"storeRadioButton(this)\" class=\"D\" value=\"D\">"+"</td>";
    sheet += "</form>";
    sheet += "<td>"+"<input type=\"checkbox\" unchecked onchange=\"Check(this)\" id="+i+">"+"</td>";
    sheet += "</tr>"
}
document.getElementById("table").innerHTML += sheet;

window.onload = function(){
    if (check !== 1 && sessionStorage.getItem("rb") !== null){
        var ofPrint = JSON.parse(sessionStorage.getItem("rb"));
        for (j=1; j<121; j++){
            if (ofPrint[j-1] == null){
            }
            else {
                document.querySelector('input[name="'+j+'"].'+ofPrint[j-1]+'').checked = "true";
            }
        }
    }
    if (sessionStorage.count !== "0"){
        for (i=1; i<121; i++){
            var index = "S"+i;
            if (sessionStorage.getItem(index) == "true"){
                document.getElementById(i).checked = "true";
                document.getElementById(index).style.backgroundColor = "#B1FDBF";
            }
        }
    }
}
window.onload;

function Check(num){
    var index = "S"+num.id;
    if  (document.getElementById(num.id).checked){
        sessionStorage.count = Number(sessionStorage.count) + 1;
        document.getElementById("result").innerHTML = "Số câu trả lời đúng: "+sessionStorage.count+"/120";
        document.getElementById(index).style.backgroundColor = "#B1FDBF";
        sessionStorage.setItem(index, true);
    }
    else {
        sessionStorage.count = Number(sessionStorage.count) - 1;
        document.getElementById("result").innerHTML = "Số câu trả lời đúng: "+sessionStorage.count+"/120";
        document.getElementById(index).style.backgroundColor = "#FFFFFF";
        sessionStorage.setItem(index, false);
    }
}

function storeRadioButton(temp){
    if (check == 1){ // vòng 1
        arr[temp.name-1] = temp.value;
        sessionStorage.setItem("rb", JSON.stringify(arr));
    }
    else { // vòng 2 trở đi
        if (sessionStorage.getItem("rb") == undefined){
            arr[temp.name-1] = temp.value;
            sessionStorage.setItem("rb", JSON.stringify(arr));
        }
        else {
            back = JSON.parse(sessionStorage.getItem("rb"));
            back[temp.name-1] = temp.value;
            sessionStorage.setItem("rb",JSON.stringify(back));
        }
    }
}   