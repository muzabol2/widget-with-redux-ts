import { LightState } from "./types";
import ToggleSwitch from "./toggleSwitch/ToggleSwitch";

export const LightRegulator = () => {

   return (
      <>
         <ToggleSwitch
            name={LightState.NV}
            label="Night Vision" />
         <ToggleSwitch
            name={LightState.DtD}
            label="Dusk Till Dawn" />
         <ToggleSwitch
            name={LightState.Flashing}
            label="Flashing" />
      </>
   );
}
