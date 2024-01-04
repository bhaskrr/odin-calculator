const resultDisplay = document.querySelector('.result');
let currentExp = (resultDisplay.innerText);
currentExp = Array.from(currentExp);

const expressionDisplay = document.querySelector('.expression');

const btns = document.querySelectorAll('.ip');

btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        resultDisplay.innerText += e.target.id;
    })
})
const add = (arr) => {
    let index = arr.indexOf('+'); //gets the index of + operator
    // console.log(index);
    let num1 = parseFloat(arr.slice(0, index).join('')); //gets the array from beginning upto but not including the operator,joins it and makes it a anumber
    let num2 = parseFloat(arr.slice(index+1, arr.length).join('')); //gets the array from one position ahead the operator upto the last and rest is same
    // console.log(num1, num2);
    expressionDisplay.innerText = `${num1} + ${num2}`; //displays the current expression
    resultDisplay.innerText = num1 + num2;             //displays the current result
}

const subtract = (arr) => {
    let index = arr.indexOf('-');
    let num1 = parseInt(arr.slice(0, index).join(''));
    let num2 = parseInt(arr.slice(index+1, arr.length).join(''));
    expressionDisplay.innerText = `${num1} - ${num2}`;
    resultDisplay.innerText = num1 - num2;
}

const multiply = (arr) => {
    let index = arr.indexOf('x');
    let num1 = parseInt(arr.slice(0, index).join(''));
    let num2 = parseInt(arr.slice(index+1, arr.length).join(''));
    expressionDisplay.innerText = `${num1} x ${num2}`;
    resultDisplay.innerText = num1 * num2;
}

const divide = (arr) => {
    let index = arr.indexOf('/');
    let num1 = parseInt(arr.slice(0, index).join(''));
    let num2 = parseInt(arr.slice(index+1, arr.length).join(''));

    //handling division by zero
    if(num2 == 0){
        expressionDisplay.innerText = 'Can not divide by 0';
        resultDisplay.innerText = '';
        return;
    }

    expressionDisplay.innerText = `${num1} / ${num2}`;
    resultDisplay.innerText = (num1 / num2).toFixed(2); //toFixed function rounds the result upto specified precision
}

const operation = () =>{
    currentExp = resultDisplay.innerText;
    currentExp = Array.from(currentExp); //creates an array
    // console.log(typeof(currentExp)); //string
    // currentExp = Array.from(currentExp);
    // console.log(typeof(currentExp)); //object
    //console.log(currentExp); //prints the array

    if(currentExp.includes('+')){
        add(currentExp);
    }
    else if(currentExp.includes('-')){
        subtract(currentExp);
    }
    else if(currentExp.includes('x')){
        multiply(currentExp);
    }
    else if(currentExp.includes('/')){
        divide(currentExp);
    }
}

const clearBtn = document.querySelector('#CLEAR');
clearBtn.addEventListener('click', ()=>{
    resultDisplay.innerText = '';
    expressionDisplay.innerText = '';
});

const deleteBtn = document.querySelector('#DELETE');
deleteBtn.addEventListener('click', ()=>{
    resultDisplay.innerText = resultDisplay.innerText.slice(0, -1);
})

const equalBtn = document.querySelector('#equal');
equalBtn.addEventListener('click', operation);