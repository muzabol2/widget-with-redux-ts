import { useSelector } from "react-redux";
import { WidgetState } from "../../widgetReducer";
import "./BatteryStepper.css";
export const BatteryStepper = () => {
   const count = useSelector<WidgetState, WidgetState["batteryLevel"]>(state => state.batteryLevel);
   
   return (
      <div className="stepper">
         <span className={`bar ${count >= 0 ? "bar--light" : ""}`} />
         <span className={`bar ${count >= 1 ? "bar--light" : ""}`} />
         <span className={`bar ${count >= 2 ? "bar--light" : ""}`} />
         <span className={`bar ${count >= 3 ? "bar--light" : ""}`} />
         <span className={`bar ${count >= 4 ? "bar--light" : ""}`} />
      </div>
   )
}
