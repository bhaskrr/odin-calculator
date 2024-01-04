const resultDisplay = document.querySelector('.result');

const btns = document.querySelectorAll('.btn-row button, .operator-btn-div button');

btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        resultDisplay.innerText += e.target.id;
    })
})



const acBtn = document.querySelector('#AC');
acBtn.addEventListener('click', ()=>{
    resultDisplay.innerText = '';
});

const deleteBtn = document.querySelector('#DELETE');
deleteBtn.addEventListener('click', ()=>{
    resultDisplay.innerText = resultDisplay.innerText.slice(0, -1);
})