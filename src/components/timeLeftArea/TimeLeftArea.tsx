import { FaBatteryEmpty } from "react-icons/fa";
import "./TimeLeftArea.css";

export const TimeLeftArea = () => {
   return (
      <div className="timeleft">
         <p><FaBatteryEmpty /> Time left</p>
      </div>
   );
}
