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

    // ToDo: Call calculation logic. For now, we just assume the universal answer to everything ;-)
    let result = 42;

    resultSpan.innerText = result.toString();
    resultArea.hidden = false;
}
