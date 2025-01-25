import "./styles.css";
import { eventListeners } from "./eventListeners";
import { assignDay } from "./assignDay";
import { hourlyGraph } from "./hourlyGraph";

// Initialize event listeners
const listeners = eventListeners();
listeners.setupEventListeners();
assignDay();

//-----------------------------------------------------------------------
//-----------------------------Bugs-------------------------------------
//-----------------------------------------------------------------------
//If there is a space in the first item in the location array, it is removed.
// spaces and white space should not be removed from first item.

//-----------------------------------------------------------------------
//-----------------------------TO DO-------------------------------------
//-----------------------------------------------------------------------
//Change icon next to location depending on weather
//change day and time to reflect current time and day in main card
//send current data to chart
