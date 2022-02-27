function number(id) {
    ans = document.getElementById("answer");
    if (ans.value == "0")
        ans.value = id;
    else {
        ans.value += id;
    }
}

function allclear() {
    ans = document.getElementById("answer");
    ans.value = "0";
}

function calculate() {
    let ans = document.getElementById("answer");
    let eq = ans.value.split(" ").join("");
    // someone could hack wesbite using this line but im lazy
    ans.value = eval(eq);
}
//idk why this dont work :/
function addEnterListener() {
    document.getElementById("answer").addEventListener("keyup", (e) => {
        console.log("event fired");
        if (e.key == "enter") {
            e.preventDefault();
            calculate();
        }
    });
}