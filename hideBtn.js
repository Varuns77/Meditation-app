let app = document.querySelector(".app");
let timer;
function showBtn() {
    app.style.opacity = 1;
}
function hideBtn() {
    app.style.opacity = 0;
}

document.onmousemove = function () {
    showBtn();
    //    console.log(timer);
    clearTimeout(timer); // clears timer after every 10 seconds when mouse moves
    timer = setTimeout(function () {
        hideBtn();
    }, 10000)
}