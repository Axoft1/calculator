
var textid = document.getElementById('textid')
let expreshion = '';

function input (num) { // отображает в строке ввода нажимаемые цифры
    expreshion += num;
    textid.value = expreshion;
}

function ac() { // обнуляет строку ввода
    expreshion = '';
    textid.value = expreshion;
}

function equal () { // выводит результат выражения
    if(textid.value !== ''){
        textid.value = eval (textid.value);
    }  
}
function beckspace() { // удаляет последний символ
    let value = document.getElementById("textid").value;
    textid.value = value.substr(0, value.length - 1);
    expreshion = textid.value
}

