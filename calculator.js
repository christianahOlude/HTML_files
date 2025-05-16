let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let expression = display.value;
        if (/[^0-9+\-*/(). ]/.test(expression)) {
            throw new Error("Invalid characters in expression.");
        }
        let result = eval(expression);  // You can replace this with a custom parser if avoiding eval
        display.value = result;
    } catch (e) {
        alert("Invalid expression");
    }
}
