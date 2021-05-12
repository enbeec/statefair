const contentTarget = document.querySelector(".sideshow");
const eventHub = document.querySelector("#state-fair");

export const ShowTicketHolders = () => {
  eventHub.addEventListener("showTicketPurchased", (event) => {
    contentTarget.innerHTML += /*html*/ `<div class="person gawker"></div>`;
  });
};
