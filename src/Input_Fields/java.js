function ChangeTextFunc() {
  change = document.getElementById("changerID").value;
  document.getElementById("changeText").innerText = change;
}

function DoubleNumberFunc() {
  num = document.getElementById("nummer").value;
  document.getElementById("doubledNumber").innerHTML = num * 2;
}

function eurotoUSDfunc() {
  num2 = document.getElementById("eurUSD").value;
  document.getElementById("eurUSDtext").innerHTML = num2 * 1.1;
}

function multiFunc() {
  nummer1 = document.getElementById("multiID1").value;
  nummer2 = document.getElementById("multiID2").value;

  document.getElementById("multiText").innerHTML = nummer1 * nummer2;
}

function CelciusFunc() {
  celcius = document.getElementById("celciusID").value;
  document.getElementById("CelciusText").innerHTML = celcius * 1.8 + 32;
}

function CalcCircle() {
  x = document.getElementById("CircleID").value;
  document.getElementById("calcText").innerHTML = Math.PI * x * x;
}

function AvgFunc() {
  nummer3 = document.getElementById("Avg1").value;
  nummer4 = document.getElementById("Avg2").value;

  document.getElementById("AvgText").innerHTML =
    (nummer3 * 1.0 + nummer4 * 1.0) / 2;
}
let fibonacci = function (n) {
  if (n == 1) {
    let loop = [0, 1];
    document.getElementById("output").innerHTML = loop;
    return loop;
  } else {
    let s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    document.getElementById("output").innerHTML = s;
    return s;
  }
};
