// script.js

document.addEventListener('DOMContentLoaded', function() {
    const screen = document.getElementById('screen');
    let currentInput = '';
    let operator = null;
    let previousInput = '';
    
    document.querySelectorAll('.key').forEach(button => {
      button.addEventListener('click', () => {
        const action = button.getAttribute('data-action');
        const value = button.getAttribute('data-value');
  
        switch(action) {
          case 'number':
            currentInput += value;
            screen.textContent = currentInput;
            break;
          case 'decimal':
            if (!currentInput.includes('.')) {
              currentInput += value;
              screen.textContent = currentInput;
            }
            break;
          case 'operation':
            operator = value;
            previousInput = currentInput;
            currentInput = '';
            break;
          case 'calculate':
            if (operator && previousInput) {
              currentInput = eval(`${previousInput}${operator}${currentInput}`);
              screen.textContent = currentInput;
              previousInput = '';
              operator = null;
            }
            break;
          case 'clear':
            currentInput = '';
            previousInput = '';
            operator = null;
            screen.textContent = '';
            break;
          case 'delete':
            currentInput = currentInput.slice(0, -1);
            screen.textContent = currentInput;
            break;
        }
      });
    });
  });
  