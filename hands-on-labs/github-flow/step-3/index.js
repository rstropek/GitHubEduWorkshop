const parameter1Input = document.getElementById('parameter1');
const parameter2Input = document.getElementById('parameter2');
const operationSelect = document.getElementById('operation');
const resultSpan = document.getElementById('result');
const resultArea = document.getElementById('result-area');
const errorArea = document.getElementById('error-area');

function calculate() {
    const p1 = parseInt(parameter1Input.value);
    const p2 = parseInt(parameter2Input.value);

    if (isNaN(p1) || isNaN(p2)) {
        errorArea.hidden = false;
        resultArea.hidden = true;
        return;
    } else {
        errorArea.hidden = true;
    }

    let result;
    switch (operationSelect.value) {
        case 'add':
            result = add(parseInt(parameter1Input.value), parseInt(parameter2.value));
            break;
        case 'div':
            result = div(parseInt(parameter1Input.value), parseInt(parameter2.value));
            break;
        default:
            console.error('Invalid operation.');
            return;
    }

    resultSpan.innerText = result.toString();
    resultArea.hidden = false;
}

function add(x, y) {
    return x + y;
}

function div(x, y) {
    return x / y;
}