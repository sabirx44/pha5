document.addEventListener("DOMContentLoaded", function () {
    const seats = document.getElementsByClassName("seat");
    let count = 0;
    let left = 8;

    const applyButton = document.getElementById("coupon-apply");
    const continueButton = document.getElementById("continue");
    const couponInput = document.getElementById("coupon-input");

    for (const seat of seats) {
        seat.addEventListener("click", function () {
            if (!seat.classList.contains("clicked")) {
                if (count < 4) {
                    count++;
                    left--;
                    setInnerText("seat-selected", count);
                    setInnerText("seat-left", left);

                    seat.classList.add("bg-[#1DD100]");
                    seat.classList.add("clicked");

                    const seatText = seat.innerText.trim();
                    const seatRow = document.getElementById("seat-row-" + count);
                    addSeatToRow(seatText, "Economy", 550, seatRow);

                    updatePriceAndTotal("total-price", 550, 1);
                    updatePriceAndTotal("grand-total", 550, 1);

                    if (count >= 4) {
                        applyButton.disabled = false;
                    }
                } else {
                    alert("You can only select up to 4 seats.");
                }
            } else {
                alert("This seat has already been selected.");
            }
        });
    }

    function setInnerText(id, value) {
        document.getElementById(id).innerText = value;
    }

    function addSeatToRow(seatText, seatType, seatPrice, seatRow) {
        const seatPlace1 = document.createElement("td");
        seatPlace1.innerText = seatText;

        const seatPlace2 = document.createElement("td");
        seatPlace2.innerText = seatType;

        const seatPlace3 = document.createElement("td");
        seatPlace3.innerText = seatPrice;

        seatRow.appendChild(seatPlace1);
        seatRow.appendChild(seatPlace2);
        seatRow.appendChild(seatPlace3);
    }

    function updatePriceAndTotal(elementId, pricePerItem, count) {
        const element = document.getElementById(elementId);
        let currentPrice = parseFloat(element.innerText);
        let newPrice = currentPrice + pricePerItem * count;
        element.innerText = newPrice;
    }

    applyButton.addEventListener("click", applyCoupon);

    const couponDiscounts = {
        "NEW15": 0.15,
        "Couple 20": 0.2
    };

    function applyCoupon() {
        const couponCode = couponInput.querySelector("input").value;
        const totalPrice = parseFloat(document.getElementById("total-price").innerText);

        if (couponDiscounts.hasOwnProperty(couponCode)) {
            const discount = totalPrice * couponDiscounts[couponCode];
            const newGrandTotal = totalPrice - discount;

            document.getElementById("discount").innerText = discount.toFixed(2);
            document.getElementById("grand-total").innerText = newGrandTotal.toFixed(2);

            couponInput.style.display = "none";
            applyButton.style.display = "none";
        } else {
            alert("Invalid coupon code.");
        }
    }

    continueButton.addEventListener("click", function () {
        location.reload();
    });
});