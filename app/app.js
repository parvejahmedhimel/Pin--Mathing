
// length controlling 
function getPin() {
    const pin= gen();
    const stringPin=pin+"";
    if (stringPin.length===5) {
        return pin;
    } else {
        return getPin();
    }

}


// for creating random number 
function gen() {
    const genpin =Math.round(Math.random()*100000)
    return genpin;
}

document.getElementById("getpin-btn").addEventListener("click",function () {
    const pin = getPin();
    document.getElementById("showpin").value=pin;
})



//  for calculator 



document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typenumbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if (number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})







// 3rd area 

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('showpin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typenumbers');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if(typedNumber === currentPin){
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
   
})