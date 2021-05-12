const contentTarget = document.querySelector(".entry");
const customers = document.querySelector(".customers");
const eventHub = document.querySelector("#state-fair");
const rideEvent = new CustomEvent("rideTicketPurchased");
const foodEvent = new CustomEvent("foodTicketPurchased");
const gameEvent = new CustomEvent("gameTicketPurchased");
const showEvent = new CustomEvent("showTicketPurchased");

let totalTickets = 0;

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "rideTicket") {
    eventHub.dispatchEvent(rideEvent);
    totalTickets += 1;
    eventHub.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "foodTicket") {
    eventHub.dispatchEvent(foodEvent);
    totalTickets += 1;
    eventHub.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "gameTicket") {
    eventHub.dispatchEvent(gameEvent);
    totalTickets += 1;
    eventHub.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "showTicket") {
    eventHub.dispatchEvent(showEvent);
    totalTickets += 1;
    eventHub.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "fullPackage") {
    totalTickets += 4;
    eventHub.dispatchEvent(rideEvent);
    eventHub.dispatchEvent(foodEvent);
    eventHub.dispatchEvent(gameEvent);
    eventHub.dispatchEvent(showEvent);
    eventHub.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

export const TicketBooth = () => {
  customers.innerHTML = `Total tickets purchased: ${totalTickets}`;
  contentTarget.innerHTML = /*html*/ `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="showTicket">Show Ticket</button>
            <button id="fullPackage">Full Package Ticket</button>
        </div>
    `;
};
