"use strict";

function htmlOption(){
    let departure = document.querySelector('#departure');
    let arrival = document.querySelector('#arrival');

airports.forEach((ap) => {
    let option = document.createElement("option");
    option.value = ap.iata;
    option.textContent = `${ap.name} (${ap.iata})`;
    departure.appendChild(option);
    arrival.appendChild(option.cloneNode(true));
});

// airports.forEach((ap) => {
//     let optionAp = `<option value="${ap.iata}" > ${ap.name} (${ap.iata})></option>`;
//     departure.insertAdjacentElement("beforeend", optionAp);
//     arrival.insertAdjacentElement("beforeend", optionAp);
// })

}

function checkFlight(){
    
    let departureIATA = document.querySelector("#departure").value;
    let arrivalIATA = document.querySelector("#arrival").value;
    let showResult = document.querySelector("#result");

    if(!departureIATA || !arrivalIATA){
        console.log("error");
        showResult.textContent = `Select both departure and arrival airport!`;
        return;
    }

    let flight = flights.find(
        (f) => f.departureIATA === departureIATA && f.arrivalIATA === arrivalIATA
    );

    let departureAp = airports.find((a) => a.iata === departureIATA);
    let arrivalAp = airports.find((a) => a.iata === arrivalIATA);

    
    if(flight && departureAp && arrivalAp){
        showResult.innerHTML = `
        <h2 class="resulth2">🛬 Flight Status 🛬</h2>
        <p class="subTitle">Departure Airport: <span class="details">${departureAp.name} (${departureAp.iata})</span></p>
        <p class="subTitle">Arrival Airport: <span class="details">${arrivalAp.name} (${arrivalAp.iata})</span></p>
        <p class="subTitle">Departure Time: <span class="details">${flight.departureTime}</span></p>
        <p class="subTitle">Arrival Time: <span class="details">${flight.arrivalTime}</span></p>
        <p class="subTitle">Departure Date: <span class="details">${flight.departureDate}</span></p>
        <p class="subTitle">Arrival Date: <span class="details">${flight.arrivalDate}</span></p>
        <p class="subTitle">Status: <span class="details">${flight.status}</span></p>
        <p class="subTitle">Duration: <span class="details">${flight.duration}</span></p>
        `;
    } else{
        showResult.innerHTML = "Flight details NOT found!";

    }
}



document.addEventListener("DOMContentLoaded", ()=> {
    htmlOption();
    checkFlight();
    document.querySelector("#checkstatus").addEventListener("click", checkFlight);

});
