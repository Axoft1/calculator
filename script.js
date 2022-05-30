// var text = document.getElementsByClassName('text');
var textid = document.getElementById('textid')
var expreshion = '';

function input (num) {
    expreshion += num;
    textid.value = expreshion;
}

function ac() {
    expreshion = '';
    textid.value = expreshion;
}

function equal () {
    textid.value = eval (expreshion);
    expreshion = '';
}