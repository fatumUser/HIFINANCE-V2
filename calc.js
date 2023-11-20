let inputRange1 = document.getElementById("input-range-1");
let inputRange2 = document.getElementById("input-range-2");
let inputRange3 = document.getElementById("input-range-3");
let inputRangeValueSumma = document.getElementById('value-1');
let inputRangeValuePrecent = document.getElementById('value-2');
let inputRangeValueTime = document.getElementById('value-3');
let inputRangeValue2_1 = document.getElementById('value2-1');
let inputRangeValue2_2 = document.getElementById('value2-2');
let inputRangeValue2_3 = document.getElementById('value2-3');
let inputRangeValueStatic1 = document.getElementById('value-static-1');
let inputRangeValueStatic2 = document.getElementById('value-static-2');
let inputRangeValueStatic3 = document.getElementById('value-static-3');

let resultCalc = document.getElementById("result-calc");

let summa = 50000;
let precent = 1;
let time = 2;
let result = 0;

result = summa*(precent/1200*(1 + parseInt(precent)/1200)**time/((1 + parseInt(precent)/1200)**time-1));
    resultCalc.innerHTML = result.toFixed(0) + " ₽";

  /*  if (this.value <= 1000000) {
        inputRangeValueSumma.innerHTML = value/1000 + " тыс.руб";
        }
        else {
            inputRangeValueSumma.innerHTML = value/1000000 + " млн.руб";
        }
        inputRangeValue2_1.innerHTML = value + " руб.";
        inputRangeValueStatic3.innerHTML = value + " руб."; 
      
    inputRangeValuePrecent.innerHTML = value + "%";
    inputRangeValue2_2.innerHTML = value + "%";
    inputRangeValueStatic2.innerHTML = value + "%";
    

    inputRangeValueTime.innerHTML = value + " мес.";
    inputRangeValue2_3.innerHTML = value + " мес.";
    inputRangeValueStatic1.innerHTML = value + " мес.";*/

inputRange1.oninput = function() {
   // inputRangeValue1.style.left = this.value/19000 + "px";
    if (this.value <= 1000000) {
    inputRangeValueSumma.innerHTML = this.value/1000 + " тыс.руб";
    }
    else {
        inputRangeValueSumma.innerHTML = this.value/1000000 + " млн.руб";
    }
    inputRangeValue2_1.innerHTML = this.value + " руб.";
    inputRangeValueStatic3.innerHTML = this.value + " руб.";
    summa = this.value;
    result = summa*(precent/1200*(1 + parseInt(precent)/1200)**time/((1 + parseInt(precent)/1200)**time-1));
    resultCalc.innerHTML = result.toFixed(0) + " ₽";
}

inputRange2.oninput = function() {
    //inputRangeValue2.style.left = this.value * 10 + "px";
    inputRangeValuePrecent.innerHTML = this.value + "%";
    inputRangeValue2_2.innerHTML = this.value + "%";
    inputRangeValueStatic2.innerHTML = this.value + "%";
    precent = this.value;
    result = summa*(precent/1200*(1 + parseInt(precent)/1200)**time/((1 + parseInt(precent)/1200)**time-1));
    resultCalc.innerHTML = result.toFixed(0) + " ₽";
}

inputRange3.oninput = function() {
   // inputRangeValue3.style.left = this.value * 2.2 + "px";
    inputRangeValueTime.innerHTML = this.value + " мес.";
    inputRangeValue2_3.innerHTML = this.value + " мес.";
    inputRangeValueStatic1.innerHTML = this.value + " мес.";
    time = this.value;
    result = summa*(precent/1200*(1 + parseInt(precent)/1200)**time/((1 + parseInt(precent)/1200)**time-1));
    resultCalc.innerHTML = result.toFixed(0) + " ₽";
}

function calc(summa, prcent) {
   console.log(summa * prcent);
}