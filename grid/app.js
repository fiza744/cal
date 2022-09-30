let inputvalue ="";
function btnClick(val){
let input = document.getElementById("inp");
inputvalue += val;
input.value + inputvalue; 
}
function submit(){
    let calculatedvalue = eval(inputvalue);
    document.getElementById("inp").value = calculatedvalue;
}
function ClearInput(){
    inputvalue= "";
    document.getElementById("inp").value ="";
}