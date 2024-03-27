const display = document.querySelector(".display");
function appendToDisplay(inp) {
    display.value += inp ;
}
function clearDisplay() {
    display.value = "" ;
}
function calculate() {
    try {
    display.value = eval(display.value);
    }
    catch(error) {
        display.value = "ERROR";
    }
}