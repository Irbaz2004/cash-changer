const bill = document.getElementById("Bill");
const cash = document.getElementById("cash");
const data = document.getElementsByClassName("notes")
const NON = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

function check() {
    if (bill.value > 0) {

        if (cash.value == bill.value) {
            document.getElementById("return").innerHTML = "THERE IS NO RETURN AMOUNT TO THE CUSTOMER"
        }


        else if (cash.value > bill.value) {
            let amountRturn = cash.value - bill.value;
            document.getElementById("return").innerHTML = `RETURN AMOUNT=${amountRturn}`
            calculate(amountRturn);
        }

        else {
            alert(" You want to pay More!")
        }

    }
    else {
        alert("Invalid bill amount!")
    }

}


function calculate(amountRturn) {


    for (let i = 0; i < NON.length; i++) {
        const Nonotes = Math.trunc(amountRturn / NON[i]);
        amountRturn = amountRturn % NON[i];
        data[i].innerHTML = Nonotes;



    }

}




