const display = document.getElementById("screen-display"); //Display for user
const num = document.querySelectorAll('.number'); //Number given by user 

let newVal = "";
let arr = [];
let symb = [];
let res = Number(0);
let flag = false;

num.forEach(item => {
    item.addEventListener('click', () => {
        let value = item.innerHTML;

        if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (newVal != "")
                arr.push(newVal);
            newVal = "";
            symb.push(value);
            flag = false;
            display.innerHTML = value;
        }

        else if (value === '=') {
            arr.push(newVal);
            newVal = "";

            while (arr.length != 0) {
                const first_num = Number(arr.shift());
                let sec_num;
                if (arr.length === 0) {
                    sec_num = res;
                }
                else {
                    sec_num = Number(arr.shift());
                }

                const op = symb.shift();

                switch (op) {
                    case '+':
                        res = first_num + sec_num;
                        break;

                    case '-':
                        res = first_num - sec_num;
                        break;

                    case '*':
                        res = first_num * sec_num;
                        break;

                    case '/':
                        res = first_num / sec_num;
                        break;
                }

            }
            arr.push(res);
            display.innerHTML = res;
            console.log(res);
        }
        else if (value === '-/+') {
            value = Number(newVal) * (-1);
            newVal = value;
            display.innerHTML = newVal;
        }

        else if (value === '%') {
            newVal = Number(newVal) / 100;
            display.innerHTML = newVal;
            arr.push(newVal);
        }

        else if (value === 'C') {
            newVal = newVal.substring(0, newVal.length - 1);
            display.innerHTML = newVal;
            if (newVal === "") {
                display.innerHTML = 0
            }
        }
        else if (value === 'AC') {
            display.innerHTML = 0;
            arr.length = 0;
            symb.length = 0;
            newVal = "";
            value = "";
        }

        else if (value === '.') {
            if (flag === false) {
                newVal += value;
                display.innerHTML = newVal;
                flag = true;
            }
            else {
                value = "";
            }
        }

        else {
            console.log(newVal);

            newVal += value;
            display.innerHTML = newVal;
        }
    });
});