let randomNambers = [];
let left = document.getElementsByClassName("left")[0];
let win = document.getElementsByClassName("win")[0];
let fail = document.getElementsByClassName("fail")[0];
let inputs = document.querySelectorAll("input");


for (let i = 0; i < 5; i++) {
    randomNambers[i] = Math.floor(Math.random() * 1000)
    let p = document.createElement("p");
    p.innerText = randomNambers[i]
    left.appendChild(p)
}
console.log(randomNambers);
function reload() {
    window.location.reload();
}
function check() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    let input4 = document.getElementById("input4").value;
    let input5 = document.getElementById("input5").value;


    if (input1 == randomNambers[0] &&
        input2 == randomNambers[1] &&
        input3 == randomNambers[2] &&
        input4 == randomNambers[3] &&
        input5 == randomNambers[4]) {
        console.log("ok");
        win.style.display = "block";
        fail.style.display = "none";
    } else {
        console.log("error");
        fail.style.display = "block";
        win.style.display = "none";
    }
    inputs.forEach(input => {
        input.removeAttribute("disabled")
    });
}
setTimeout(() => {
    left.style.filter = "blur(5px)";
    inputs.forEach(input => {
        input.setAttribute("disabled", true)
    });
    minusTime();

}, 7000);
function minusTime() {
    setInterval(() => {
        let number = +time.textContent;
        number > 0 && number--;
        time.innerText = number;
        if (number == 0) {
            check()
        }
    }, 1000);
}