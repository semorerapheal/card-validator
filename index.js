    
    const inputElement = document.getElementById('box');
    const resultElement = document.getElementById('result');
    const validateButton = document.getElementById('validateBtn');

    // Add the 1st event listener to the input for so it can check if is a number
    inputElement.addEventListener('input' , function () {
        // Get the entered value
        const inputValue = inputElement.value.replace(/\s/g, '');

        // Check if the value entered is a number
        if (isNaN(inputValue)) {
            // return message if it is not a number that is entered and disable button
            validateButton.disabled = true
            resultElement.textContent = 'card ID must be a number';
            resultElement.style.color = 'red'
        } else {
            // Clear message if it is a number  that is entered and able button
            resultElement.textContent = '';
            validateButton.disabled = false
        }
    });

          // Add the 2nd event listener to the validate button so it can check if the number is a valid card id

    validateButton.addEventListener('click', function () {

        const inputValue = inputElement.value
        // the luhn algorithm 
        function validator(inputValue) {
            const num = inputValue.toString().split('').map(Number);
        
            // loop through and multiply every second num from right to left
            for (let i = num.length - 2; i >= 0; i -= 2) {
                num[i] *= 2;
        
                // If the doubled value is greater than 9, sum its digits
                if (num[i] > 9) {
                    const arr = String(num[i]).split("").map(Number);
                    num[i] = arr[0] + arr[1];
                }
            }
        
            // the sum up of all the numbers
            const sum = num.reduce((acc, curr) => acc + curr, 0);
        
            // Check if the sum can be divided by 10
            const isValid = sum % 10 === 0;
        
            return isValid;
        }
        

        if (validator(inputValue)) {
            // return  message that card is valid 

            resultElement.textContent = 'Card is valid';
            resultElement.style.color = 'green';
        } else {
            // return error message that card is invalid

            resultElement.textContent = 'Card is not valid';
            resultElement.style.color = 'red';
        }
    
    });

















// function validator(cardNum) {
//     // const replace = cardNum.replace(/\s/, '')
//     const num = cardNum.toString().split('').map(Number);

//     // loop through and multiply every second num from right to left
//     for (let i = num.length - 2; i >= 0; i -= 2) {
//         num[i] *= 2;

//         // If the doubled value is greater than 9, sum its digits
//         if (num[i] > 9) {
//             const arr = String(num[i]).split("").map(Number);
//             num[i] = arr[0] + arr[1];
//         }
//     }

//     // the sum up of all the numbers
//     const sum = num.reduce((acc, curr) => acc + curr, 0);

//     // Check if the sum can be divided by 10
//     const isValid = sum % 10 === 0;

//     return isValid;
// }

// console.log(validator(121 345678 45678));