let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");
let errorMessage = "Please Enter a Valid Input.";

function calculateTip() {
    let billAmountValue = billAmountElement.value;
    let percentageTipValue = percentageTipElement.value;

    if (billAmountValue === "") {
        errorMessageElement.textContent = errorMessage;
    } else if (percentageTipValue === "") {
        errorMessageElement.textContent = errorMessage;
    } else {
        errorMessageElement.textContent = "";
        let billAmount = parseInt(billAmountValue);
        let percentageTip = parseInt(percentageTipValue);
        let calculateTip = (percentageTip / 100) * billAmount;
        let calculteTotal = billAmount + calculateTip;

        tipAmountElement.value = calculateTip;
        totalAmountElement.value = calculteTotal;
    }
}