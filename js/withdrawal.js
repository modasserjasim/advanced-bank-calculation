document.getElementById('withdraw-button').addEventListener('click', function(){
    const newWithdrawAmount = getInputValueById ('withdraw-field');
    
    const previousWithdrawAmount = getTextElementById ('withdraw-total');
    const previousBalanceAmount = getTextElementById ('balance-total');

    const withdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    const balanceTotal = previousBalanceAmount - newWithdrawAmount;

    if(newWithdrawAmount > previousBalanceAmount){
        alert("Sorry! you don't have sufficient balance!");
    } else if(newWithdrawAmount > 0){
        setTextElementById('withdraw-total', withdrawTotal);
        setTextElementById('balance-total', balanceTotal);
    } else(
        alert('Please enter a valid withdrawal amount')
    )
})