import "./styles.css";
import { eventListeners } from "./eventListeners";
import { assignDay } from "./assignDay";
import { hourlyGraph } from "./hourlyGraph";

// Initialize event listeners
const listeners = eventListeners();
listeners.setupEventListeners();
assignDay();

//Bug - if there is a space in the first item in the location array, it is removed. spaces and white space should not be removed from first item.
//Implement chart.js for my chart to show hourly data day by day
//actual temp not being retrieved
