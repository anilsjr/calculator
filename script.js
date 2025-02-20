let expressionInput = document.getElementById('expression');
let keysContainer = document.querySelector('.keys-container');
let keys = keysContainer.querySelectorAll('.keys');

expressionInput.style.fontSize = "12px";
keys.forEach(key => {
    key.classList.add('my-1');
    key.addEventListener('click', function () {
        if(expressionInput.textContent === 'Error pls provide valid expression'){ 
            expressionInput.textContent = '';
        }
        let keyValue = key.textContent.trim();
        
        if (keyValue === '=') {
            try {
                expressionInput.textContent = eval(expressionInput.textContent);
            } catch (e) {
                expressionInput.textContent = 'Error pls provide valid expression';
            }
        } else if (keyValue === 'C') {
            expressionInput.textContent = '';
        } else {
            expressionInput.textContent += keyValue;
        }
    });
});

window.addEventListener('keydown', function (event) {    
    
    if(expressionInput.textContent === 'Error pls provide valid expression'){ 
        expressionInput.textContent = '';
    }

    let keyValue = event.key;
    


    if (keyValue === 'Enter') {
        try {
            expressionInput.textContent = eval(expressionInput.textContent);
        } catch (error) {   
            expressionInput.textContent = 'Error pls provide valid expression';
        }
    }else if(keyValue === 'Backspace') {
            expressionInput.textContent = expressionInput.textContent.slice(0, -1);
    }else if (keyValue === 'c' || keyValue === 'C') {
        expressionInput.textContent = '';
    } else if (/[\d+\-*/.]/.test(keyValue)) {
        expressionInput.textContent += keyValue;
    }
});