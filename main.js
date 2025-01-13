const display = document.getElementById("screen-display");
const num = document.querySelectorAll('.number');


num.forEach(item => {
    item.addEventListener('click', () => {
        let newVal = "";
        const value = item.innerHTML;
        newVal = newVal.concat(value);
        console.log(newVal);

        display.innerHTML = value;
    });

    
});

