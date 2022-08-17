document.getElementById('deposit-button').addEventListener('click', function(){
    const newDepositAmount = getInputValueById('deposit-field')

    const previousDepositAmount = getTextElementById('deposit-total');
    const previousBalanceAmount = getTextElementById('balance-total');

    const depositTotal = previousDepositAmount + newDepositAmount;
    const balanceTotal = previousBalanceAmount + newDepositAmount;


    if(newDepositAmount > 0){
        setTextElementById('deposit-total', depositTotal);
        setTextElementById('balance-total', balanceTotal);
    } else{
        alert('Please enter a valid amount.')
    }

})