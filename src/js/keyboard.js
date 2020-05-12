function addKeyboard() {
  const keyboardArrCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', '', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ContextMenu', 'ControlRight'];
  const keyboardArrEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '/', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Ctrl', 'sw', 'Win', 'Alt', 'Space', 'Alt', 'Menu', 'Ctrl'];
  const keyboardArrRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', 'Ctrl', 'sw', 'Win', 'Alt', 'Space', 'Alt', 'Menu', 'Ctrl'];
  const keyboardArrRuShift = ['Ё', '!', "''", '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'Shift', 'Ctrl', 'sw', 'Win', 'Alt', 'Space', 'Alt', 'Menu', 'Ctrl'];
  const keyboardArrEngShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', "''", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift', 'Ctrl', 'sw', 'Win', 'Alt', 'Space', 'Alt', 'Menu', 'Ctrl'];
  let inputValue = '';
  let isEng = false;
  let isCaps = false;
  let isShift = false;


  const searchMovie = document.querySelector('.search__input');

  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';

  document.querySelector('.main').appendChild(keyboard);

  let template = '';

  function generateKey(arr) {
    const arrKey = arr;
    for (let i = 0; i < keyboardArrCode.length; i += 1) {
      if (i === 54) {
        template += '<div class="clearfix"></div>';
      }

      switch (arrKey[i]) {
        case 'Del':
          template += `<div class="key" id=Delete>${arrKey[i]}</div>`;
          break;
        case 'Ctrl':
          template += `<div class="key" id=ControlLeft>${arrKey[i]}</div>`;
          break;
        case 'Alt':
          template += `<div class="key" id=AltLeft>${arrKey[i]}</div>`;
          break;
        case 'Win':
          template += '<div class="key key--win" id=Meta></div>';
          break;
        case 'Menu':
          template += '<div class="key key--menu" id=ContextMenu></div>';
          break;
        case 'Backspace':
          template += `<div class="key key--big" id=Backspace>${arrKey[i]}</div>`;
          break;
        case 'Tab':
          template += `<div class="key key--big" id=Tab>${arrKey[i]}</div>`;
          break;
        case 'CapsLock':
          template += `<div class="key key--big" id=CapsLock>${arrKey[i]}</div>`;
          break;
        case 'sw':
          template += '<div class="key key--sw " id=sw></div>';
          break;
        case 'Enter':
          template += `<div class="key key--big" id=Enter>${arrKey[i]}</div>`;
          break;
        case 'Shift':
          template += `<div class="key key--big" id=ShiftLeft>${arrKey[i]}</div>`;
          break;
        case 'Space':
          template += `<div class="key key--space" id=Space>${arrKey[i]}</div>`;
          break;

        default:
          template += `<div  class="key" id=${keyboardArrCode[i]}>${arrKey[i]}</div>`;
          break;
      }
    }
  }

  generateKey(keyboardArrRu);
  keyboard.innerHTML = template;

  keyboard.addEventListener('mousedown', (e) => {
    searchMovie.focus();
    document.querySelectorAll('.key').forEach((el) => {
      if (e.target.getAttribute('id') === el.getAttribute('id')) {
        el.classList.add('key--active');
        if (el.textContent.length < 2) {
          inputValue += el.textContent;
          searchMovie.value = inputValue;
        }
        if (el.getAttribute('id') === 'Backspace') {
          inputValue = inputValue.slice(0, -1);
          searchMovie.value = inputValue;
        }
      }
    });
    if (e.target.getAttribute('id') === 'Space') {
      e.target.classList.add('key--active');
      inputValue += ' ';
    } if (!isEng) {
      if (!isCaps) {
        if (e.code === 'CapsLock') {
          template = '';
          const capsRu = keyboardArrRu.map((el) => {
            if (el.length < 2) {
              return el.toUpperCase();
            }
            return el;
          });
          generateKey(capsRu);
          keyboard.innerHTML = template;
          isCaps = true;
        }
      } else if (e.code === 'CapsLock') {
        template = '';
        generateKey(keyboardArrRu);
        keyboard.innerHTML = template;
        isCaps = false;
      }
      if (e.target.getAttribute('id') === 'sw') {
        template = '';
        generateKey(keyboardArrEng);
        document.querySelectorAll('.key').forEach((el) => {
          keyboard.removeChild(el);
        });
        keyboard.innerHTML = template;
        isEng = true;
      }
      if (!isShift) {
        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
          template = '';
          generateKey(keyboardArrRuShift);
          keyboard.innerHTML = template;
          isShift = true;
        }
      }
    } else {
      if (!isCaps) {
        if (e.code === 'CapsLock') {
          template = '';
          const capsEng = keyboardArrEng.map((el) => {
            if (el.length < 2) {
              return el.toUpperCase();
            }
            return el;
          });
          generateKey(capsEng);
          keyboard.innerHTML = template;
          isCaps = true;
        }
      } else if (e.code === 'CapsLock') {
        template = '';
        generateKey(keyboardArrEng);
        keyboard.innerHTML = template;
        isCaps = false;
      }

      if (e.target.getAttribute('id') === 'sw') {
        template = '';
        generateKey(keyboardArrRu);
        document.querySelectorAll('.key').forEach((el) => {
          keyboard.removeChild(el);
        });
        keyboard.innerHTML = template;
        isEng = false;
      }

      if (!isShift) {
        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
          template = '';
          generateKey(keyboardArrEngShift);
          keyboard.innerHTML = template;
          isShift = true;
        }
      }
    }
  });

  keyboard.addEventListener('mouseup', (e) => {
    document.querySelectorAll('.key').forEach((el) => {
      if (e.target.getAttribute('id') === el.getAttribute('id')) {
        el.classList.remove('key--active');
      }
    });
  });
}


export default addKeyboard;
