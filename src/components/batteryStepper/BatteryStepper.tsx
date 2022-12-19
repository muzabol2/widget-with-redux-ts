import { useSelector } from "react-redux";
import { WidgetState } from "../../widgetReducer";
import "./BatteryStepper.css";
export const BatteryStepper = () => {
   const count = useSelector<WidgetState, WidgetState["batteryLevel"]>(state => state.batteryLevel);

   return (
      <div className="stepper">
         <span
            data-testid="stepper-1"
            className={"bar bar--light"} />
         <span
            data-testid="stepper-2"
            className={`bar ${count >= 1 ? "bar--light" : ""}`} />
         <span
            data-testid="stepper-3"
            className={`bar ${count >= 2 ? "bar--light" : ""}`} />
         <span
            data-testid="stepper-4"
            className={`bar ${count >= 3 ? "bar--light" : ""}`} />
         <span
            data-testid="stepper-5"
            className={`bar ${count >= 4 ? "bar--light" : ""}`} />
      </div>
   )
}
