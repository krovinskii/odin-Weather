import "./styles.css";
import { eventListeners } from "./eventListeners";

// Initialize event listeners
const listeners = eventListeners();
listeners.setupEventListeners();

//Bug - if there is a space in the first item in the location array, it is removed. spaces and white space should not be removed from first item.
