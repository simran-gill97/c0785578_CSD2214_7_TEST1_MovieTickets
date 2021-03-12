
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


function seatIsSelected(){
    var seats = document.getElementsByClassName("seats");
    // console.log(seats);
    var seatsSeltc = 0;
   for(let i = 0;i < seats.length;i++){
       if(seats[i].checked){
           seatsSeltc++;
       }
   }
    console.log(seatsSeltc);
    console.log("hio "+seatsSeltc)
    document.getElementById("numberOfSeats").innerHTML = "Number of seats selected : " + seatsSeltc;
    var cost = 0;
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
    document.getElementById("totalPrice").innerHTML = "Total Price : $ "+(seatsSeltc*cost);
}