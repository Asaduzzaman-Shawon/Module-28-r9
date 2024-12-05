document.getElementById('cash-in')
.addEventListener('click', function(){
    const test = showUp('cash-in-from')
    const test2 = hideUp('cash-out-from')
})

document.getElementById('cash-out')
.addEventListener('click', function(){
    const test = showUp('cash-out-from');
    const test2 = hideUp('cash-in-from')
})

document.getElementById('cash-in-confirm-btn')
.addEventListener('click', function(e){
    e.preventDefault()
    const test = getTextValue('account-balance')
    const test2 = getInputValue('account-pin');
    const test3 = getInputValue('cash-in-ammount')
    if(test2 === 1234){
        const test4 = test + test3
        document.getElementById('account-balance').innerText = test4
    }
    else{
        alert('Wrong pin')
    }
})

document.getElementById('cash-out-confirm')
.addEventListener('click', function(e){
    e.preventDefault();
    const addedAmount = getInputValue("cash-out-ammount");
    const accountBalance = getTextValue('account-balance');
    const pin = getInputValue('pin');
    if(pin === 1234){
        const totalAmmount = accountBalance + addedAmount;
        document.getElementById('account-balance').innerText = totalAmmount;
    }
    else{
        alert("Wrong crediantals")
    }
})













