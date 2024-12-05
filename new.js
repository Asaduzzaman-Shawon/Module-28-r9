document.getElementById('cash-in')
    .addEventListener('click', function () {
        showUp('cash-in-from')
    })

document.getElementById('cash-out')
    .addEventListener('click', function () {
        showUp('cash-out-from')
    })

document.getElementById('history-all')
    .addEventListener('click', function () {
        showUp('transection-history')
    })

document.getElementById('cash-in-confirm-btn')
    .addEventListener('click', function (e) {
        e.preventDefault()
        const test = getTextValue('account-balance')
        const test2 = getInputValue('account-pin');
        const test3 = getInputValue('cash-in-ammount')
        if (test2 === 1234) {
            const test4 = test + test3
            document.getElementById('account-balance').innerText = test4;
            const history = document.createElement('p');
            history.innerText = `Added $${test3}. Total ammount ${test4}`
            const add = document.getElementById('transection-history');
            add.append(history)
        }
        else {
            alert('Wrong pin')
        }
    })

document.getElementById('cash-out-confirm')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const addedAmount = getInputValue("cash-out-ammount");
        const accountBalance = getTextValue('account-balance');
        const pin = getInputValue('pin');
        if (addedAmount > accountBalance) {
            alert("You do not have sufficeint")
            return;
        }
        if (pin === 1234) {
            const totalAmmount = accountBalance - addedAmount;
            document.getElementById('account-balance').innerText = totalAmmount;
            const history = document.createElement('p');
            history.innerText = `Out $ ${addedAmount}. Total ammount ${totalAmmount}`
            const out = document.getElementById('transection-history');
            out.append(history)
        }
        else {
            alert("Wrong crediantals")
        }
    })













