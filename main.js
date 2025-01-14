const display = document.getElementById("screen-display");
const num = document.querySelectorAll('.number');

let newVal = "";
num.forEach(item => {
    item.addEventListener('click', () => {
        let value = item.innerHTML;
        newVal += value;
        console.log(newVal);
        display.innerHTML = newVal;
    });
});

