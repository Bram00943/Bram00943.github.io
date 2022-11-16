
let timesClicked1 = 0;
let timesClicked2 = 0;
let timesClicked3 = 0;
let timesClicked4 = 0;

let amount1 = 42750;
let amount2 = 51525;
let amount3 = 120690;
let amount4 = 23800.99;

let car1=3;
let car2=5;
let car3=2;
let car4=6;

var taxes;
var total1;
var total2;
var total3;
var total4;
var total;



function upOrDown() {
    timesClicked1 += 1;
    car1--;
    document.getElementById("amountTextID").innerText = "Quantity: " + car1;
    if (car1 == 0) {
        document.getElementById("amountTextID").innerText = "Out of stock";
        document.getElementById("btnID1").remove();
    }
}

function Checkout(){
    total1 = timesClicked1 * amount1;
    document.getElementById("total1ID").innerText = "Car 1 total of : $" + total1;

    total2 = timesClicked2 * amount2;
    document.getElementById("total2ID").innerText = "Car 2 total of : $" + total2;

    total3 = timesClicked3 * amount3;
    document.getElementById("total3ID").innerText = "Car 3 total of : $" + total3;

    total4 = timesClicked4 * amount4;
    document.getElementById("total4ID").innerText = "Car 4 total of : $" + total4;

    total = total1 + total2 + total3 + total4;
    document.getElementById("totalWithoutTaxesID").innerText = "Total without VAT : $" + total;
    taxes = total / 100 * 21;
    
    document.getElementById("taxesID").innerText = "VAT : $" + taxes.toFixed(2);
    total += taxes;

    document.getElementById("totalID").innerText = "Total: $" + total.toFixed(2);
}

function upOrDown2() {
    timesClicked2 += 1;
    car2--;
    document.getElementById("amountTextID2").innerText = "Quantity: " + car2;
    if (car2 == 0) {
        document.getElementById("amountTextID2").innerText = "Out of stock";
        document.getElementById("btnID2").remove();
    
    }
}
function upOrDown3() {
    timesClicked3 += 1;
    car3--;
    document.getElementById("amountTextID3").innerText = "Quantity: " + car3;
    if (car3 == 0) {
        document.getElementById("amountTextID3").innerText = "Out of stock";
        document.getElementById("btnID3").remove();
    
    }
}
function upOrDown4() {
    timesClicked4 += 1;
    car4--;
    document.getElementById("amountTextID4").innerText = "Quantity: " + car4;
    if (car4 == 0) {
        document.getElementById("amountTextID4").innerText = "Out of stock";
        document.getElementById("btnID4").remove();
    
    }
}