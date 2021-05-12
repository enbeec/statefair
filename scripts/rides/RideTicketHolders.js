const contentTarget = document.querySelector(".rides");
const eventHub = document.querySelector("#state-fair");

export const RideTicketHolders = () => {
  eventHub.addEventListener("rideTicketPurchased", (event) => {
    contentTarget.innerHTML += /*html*/ `<div class="person rider"></div>`;
  });
};
