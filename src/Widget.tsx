import { BatteryStepper } from "./components/batteryStepper/BatteryStepper";
import { BatteryRegulator } from "./components/batteryRegulator/BatteryRegulator";
import { TimeLeftArea } from "./components/timeLeftArea/TimeLeftArea";
import { LightRegulator } from "./components/lightsRegulator/LightsRegulator";
import { useConnect } from "./hooks/useConnect";

export const Widget = ({ name }: { name: string }) => {
   const { isError } = useConnect();

   return (
      <div className={`widget ${isError ? "blink" : ""}`}>
         <div className="container">
            <div className="widget-name">
               {name}
            </div>
            <BatteryStepper />
            <BatteryRegulator />
            <div className="main-container">
               <TimeLeftArea />
               <LightRegulator />
            </div>
         </div>
      </div>
   )
}
