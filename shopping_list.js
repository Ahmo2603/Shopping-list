var temporaryArrayPrice = [];
var temporaryArrayAmount = [];
var temporaryArrayTotal = [];
let nameField = document.getElementById("name");
let priceField = document.getElementById("price");
let amountField = document.getElementById("amount");
let receipt = document.getElementById("receipt");
var totalPrice = 0;

$("#receiptButton").on("click", function() {
    if (nameField.value == "" || priceField.value == "" || amountField.value == "") {
        alert("You did not fill out all the fields!");
    } else {
        let enteredName = nameField.value;
        let enteredPrice = priceField.value;
        let enteredAmount = amountField.value;
        let receiptItem = document.createElement("div");
        receiptItem.innerHTML = enteredName + " " + enteredPrice + "KM " + enteredAmount;
        receiptItem.style = "display: none";
        $("#receipt").append(receiptItem);
        $("div").fadeIn(5000);
        if (temporaryArrayPrice) {
            temporaryArrayPrice.push(enteredPrice);
            temporaryArrayAmount.push(enteredAmount);
        }
        document.getElementById("form").reset();
    }
});

$("#totalButton").on("click", function() {
    if (receipt.children.length === 0) {
        alert("No products have been added to the receipt!");
    } else {
        for (let i = 0; i < temporaryArrayPrice.length; i++) {
            temporaryArrayTotal[i] = temporaryArrayPrice[i] * temporaryArrayAmount[i];
            totalPrice = totalPrice + temporaryArrayTotal[i];
        }
        let totalText = document.createElement("p");
        totalText.innerHTML = "Total: " + totalPrice + "KM";
        totalText.style = "display: none";
        $("#secondContainer").append(totalText);
        $("p").fadeIn(5000);
    }
});