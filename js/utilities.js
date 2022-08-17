function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldAmount;
}

function getTextElementById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementString = textElement.innerText;
    const textElementAmount = parseFloat(textElementString);
    return textElementAmount;
}

function setTextElementById(elementId, value){
    const textElement = document.getElementById(elementId);
    textElement.innerText = value;
}
