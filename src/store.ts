import { createStore } from "redux";
import { widgetReducer } from "./widgetReducer";

export const store = () => createStore(widgetReducer); 
