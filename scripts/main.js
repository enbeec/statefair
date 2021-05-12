// Import and invoke the ticket booth component function

import { FoodTicketHolders } from "./food/FoodTicketHolders.js";
import { GameTicketHolders } from "./games/GameTicketHolders.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { ShowTicketHolders } from "./sideshows/ShowTicketHolders.js";
import { TicketBooth } from "./TicketBooth.js";

const eventHub = document.querySelector("#state-fair");
eventHub.addEventListener("stateChanged", (event) => {
  render();
});

const render = () => {
  TicketBooth();
};

RideTicketHolders();
FoodTicketHolders();
GameTicketHolders();
ShowTicketHolders();
render();
