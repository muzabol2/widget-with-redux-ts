import { createStore, applyMiddleware } from 'redux';
import { widgetReducer } from "./widgetReducer";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
   widgetReducer,
   composeWithDevTools(applyMiddleware(logger))
);
