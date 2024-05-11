let val = '';

function addValue(value) {
    val += value;
    document.getElementById('display').value = val;
}

function clearDisplay() {
    val = '';
    document.getElementById('display').value = val;
}

function calculate() {
    let res=eval(val);
    val=res;
    document.getElementById('display').value = val;
 
}
