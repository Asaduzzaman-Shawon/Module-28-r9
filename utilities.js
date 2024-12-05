function showUp(id){
    const show = document.getElementById(id).classList.remove('hidden')
    return show;
}

function hideUp(id){
    const hide = document.getElementById(id).classList.add('hidden');
    return hide;
}

function getInputValue(id){
    const a = document.getElementById(id).value;
    const b = parseFloat(a)
    return b;
}

function getTextValue(id){
    const a = document.getElementById(id).innerText;
    const b = parseFloat(a);
    return b;
}






















