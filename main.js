alert('Made By Wamique mirza')
function display(num){
    var screen = document.getElementById("screen");
    screen.value += num;
}
function insertsym (sym){
    var screen = document.getElementById("screen");
    screen.value += sym;
}
function calculate()
{
    var screen = document.getElementById("screen");
    var result = eval(screen.value);
    screen.value= result;
}
function clr(){
    var screen = document.getElementById("screen");
    screen.value= "";
}
function del(){
    var screen = document.getElementById("screen");
    var exp = screen.value;
    var led = exp.substring(0, exp.length-1);
    screen.value= led;

}