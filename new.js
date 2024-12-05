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
    const test = getTextValue('cash-in-ammount')
    const test2 = getInputValue('account-pin');
    if(test2 === '1234'){
        const test3 = getTextValue('account-balance');
        const test4 = test3 + test;
        console.log(test4);
        document.getElementById('account-balance').innerText = test4
    }
    else{
        alert('Wrong pin')
    }
    
})















