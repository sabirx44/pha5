const seats = document.getElementsByClassName('seat');
let count = 0;

for (const seat of seats) {
    seat.addEventListener('click', function (e) {
        count += 1;
        console.log(count);
        setInnerText('seat-selected', count)
        if (count >= 1 && count <= 4) {
            seat.classList.add('bg-[#1DD100]');
        }
        else {
            alert('চাইরটার বেশি সীট নিতে পারবেন না, বাইজান।')
        }

        const seatText = e.target.innerText;

        const seatRow1 = document.getElementById('seat-row-1');

        const seatPlace1 = document.createElement('td');
        seatPlace1.innerText = seatText;
        console.log(seatPlace1.innerText);

        const seatPlace2 = document.createElement('td');
        seatPlace2.innerText = 'Economy';

        const seatPlace3 = document.createElement('td');
        seatPlace3.innerText = 550;

        seatRow1.appendChild(seatPlace1);
        seatRow1.appendChild(seatPlace2);
        seatRow1.appendChild(seatPlace3);

        // const seatRow2 = document.getElementById('seat-row-2');

        // const seatPlace4 = document.createElement('td');
        // seatPlace4.innerText = seatText;
        // console.log(seatPlace4.innerText);

        // const seatPlace5 = document.createElement('td');
        // seatPlace5.innerText = 'Economy';

        // const seatPlace6 = document.createElement('td');
        // seatPlace6.innerText = 550;

        // seatRow2.appendChild(seatPlace4);
        // seatRow2.appendChild(seatPlace5);
        // seatRow2.appendChild(seatPlace6);

        //document.getElementById('total-price').innerText = parseFloat(count * 550);
        const totalPriceId = document.getElementById('total-price').innerText;
        const convertedTotalPrice = parseInt(totalPriceId);
        document.getElementById('total-price').innerText = convertedTotalPrice + parseFloat(count * 550);

        const grandTotalId = document.getElementById('grand-total');
        const convertedGrandTotal = parseInt(grandTotalId);
        document.getElementById('grand-total').innerText = convertedTotalPrice + parseFloat(count * 550);

    })
}

let left = 8;
for (const seat of seats) {
    seat.addEventListener('click', function () {
        left -= 1;
        setInnerText('seat-left', left);
    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

// function setBackgroundColorById(elementId) {
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-[#1DD100]');
// }