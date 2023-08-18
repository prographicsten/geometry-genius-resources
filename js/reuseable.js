function inputTextValueById(id) {
    const inputField = document.getElementById(id);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function setValueById(id, value) {
    // can you try step 1
    // const convertedValue = document.getElementById(id).innerText = value;

    // can you try step 2
    const convertedValue = document.getElementById(id);
    convertedValue.innerText = value;
}