
var textid = document.getElementById('textid')
let expression = '';

function input (num) { // отображает в строке ввода нажимаемые цифры
    expression += num;
    textid.value = expression;
}

function brace() {
    const braces = textid.value.split("");
    const left_brace = braces.filter(el => el=== "(").length;
    const right_brace = braces.filter(el => el === ")").length;
    
    if (left_brace > right_brace) {
      input(")");
    } else {
      input("(");
    }
  }
  
function ac() { // обнуляет строку ввода
    expression = '';
    textid.value = expression;
}

function equal () { // выводит результат выражения
    if(textid.value !== ''){
        textid.value = eval (textid.value);
    }  
    expression = '';
}

function backspace() { // удаляет последний символ
    let value = document.getElementById("textid").value;
    textid.value = value.substr(0, value.length - 1);
    expression = textid.value
}

