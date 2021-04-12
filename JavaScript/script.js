function mouse_down() {
    console.log("Mouse Down");

}

function mouse_up() {
    console.log("Mouse Up");
}

function mouse_click() {
    console.log("Mouse Click");
}

function mouse_dblclick() {
    console.log("Mouse Double Click");
}

function mouse_move() {
    console.log("Mouse Move");
}

function mouse_over() {
    console.log("Mouse Over");
}

function mouse_out() {
    console.log("Mouse Out");
}

function key_down() {
    console.log("Key Down");
}

function key_up() {
    console.log("Key Up");
}

function key_press() {
    console.log("Key Press");
}

function key_press() {
    var x = event.keyCode;
    if(x == 13) {
        alert ("You pressed the escape key");
    }
}

function mouse_down_js() {
    console.log("M Down JS");
}
  
    var elemento = document.getElementById("r3c2");
    elemento.addEventListener("mousedown", mouse_down_js);

function mouse_click_js() {
    console.log("M Click JS");
}

    var cel = document.getElementById("r3c3");
    cel.addEventListener("click",mouse_click_js);

function funcao_unica() {
    alert("Parabéns!");
}
    var celulas = document.getElementsByTagName("td");
    for(let cel of celulas) {
        cel.addEventListener("click",funcao_unica);
    }

    console.log(cel.id);

    if(contador>1) {
        cel.innerText="OK";
        celulas.addEventListener("Click",funcao_unica);
    }

    else {
        cel.innerText="ERRO"
    }

    contador +=1

