function showUp(id) {
    document.getElementById('cash-out-from').classList.add('hidden')
    document.getElementById('cash-in-from').classList.add('hidden')
    document.getElementById('transection-history').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}

function getInputValue(id) {
    const a = document.getElementById(id).value;
    const b = parseFloat(a)
    return b;
}

function getTextValue(id) {
    const a = document.getElementById(id).innerText;
    const b = parseFloat(a);
    []
}






















