



function movieIsSelected() {
    var selectedMovie = document.getElementById("movieSelector").value;
    document.getElementById("movieSelect").innerHTML = "Movie Selected : " + selectedMovie;
    if (selectedMovie == "Titanic") {
        document.getElementById("ticketPrice").innerHTML = "Ticket Price :  $ 13.00"
    } else if (selectedMovie == "Pirates of Carribean") {
        document.getElementById("ticketPrice").innerHTML = "Ticket Price :  $ 15.00"
    } else if (selectedMovie == "Eat Pray Love") {
        document.getElementById("ticketPrice").innerHTML = "Ticket Price :  $ 10.00"
    } else {
        document.getElementById("ticketPrice").innerHTML = "Ticket Price :  $ 0.00"
    }
}

var cost = 0;
function seatIsSelected() {
    var seats = document.getElementsByClassName("seats");
    var seatsSeltc = 0;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i].checked) {
            seatsSeltc++;
        }
    }

    document.getElementById("numberOfSeats").innerHTML = "Number of seats selected : " + seatsSeltc;
    var selectedMovie = document.getElementById("movieSelector").value;
    if (selectedMovie == "Titanic") {
        cost = 13.00;
    } else if (selectedMovie == "Pirates of Carribean") {
        cost = 15.00
    } else if (selectedMovie == "Eat Pray Love") {
        cost = 10.00
    } else {
        cost = 0.00
    }
    cost = seatsSeltc * cost;
    document.getElementById("totalPrice").innerHTML = "Total Price : $ " + cost;
}
var flag = false;
document.getElementById("button").onclick = function () {
    // var seats = document.getElementsByClassName("seats");
    // document.querySelector('input[type=checkbox]:checked').before.backgroundColor = "red";
    // console.log(s);
    // for (let i = 0; i < seats.length; i++) {
    //     if (seats[i].checked) {
    //         console.log(seats[i])
    //         seats[i].checked.style = "background-color:red;";
    //     }
    // }
    if(!flag){
        var al = confirm("your total payment is : $ " + cost + " press OK to continue")
        if(confirm){
            alert("press buy seats again to go to payments page.")
            flag = true;
            
        }else{
            flag = false;
        }
        
    }
    else{
        
        url = 'paymentDetails.html?cost=' + encodeURIComponent(cost);
    
        document.location.href = url;
    }
        


}

