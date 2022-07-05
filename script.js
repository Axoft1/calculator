
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

// function alphabetPosition(text) {
//   return console.log( text
//   .toUpperCase()
//   .match(/[a-z]/gi)
//   .map((c) => c.charCodeAt()-64) //Метод charCodeAt() возвращает числовое значение Юникода для символа 
//   .join(' ')
//   )
// }
// alphabetPosition("tT A  bcdt")

