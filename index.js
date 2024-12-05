document.getElementById('log-in-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const pin = getInputValue('log-in-pin')
    if (pin === 1234) {
        window.location.href = 'index.html'
    }
    else {
        alert('Wrong num or pin')
    }
})