import { Action } from "./actions";
import { LightState } from "./components/lightsRegulator/types";

export interface WidgetState {
   batteryLevel: number,
   selectedLight: string,
   connecting: boolean
}

const initialState = {
   batteryLevel: 0,
   selectedLight: LightState.none,
   connecting: false
}

export const widgetReducer = (
   state: WidgetState = initialState,
   action: Action
) => {
   switch (action.type) {
      case "CHANGE_BATTERY_LEVEL": {
         return { ...state, batteryLevel: action.payload };
      }
      case "CHANGE_LIGHT_TYPE": {
         return { ...state, selectedLight: action.payload };
      }
      case "CONNECT_WITH_BACKEND": {
         return { ...state, connecting: action.payload }
      }
      default:
         return state;
   }
}
