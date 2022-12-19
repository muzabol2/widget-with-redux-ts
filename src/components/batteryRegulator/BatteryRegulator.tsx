import { FaPlus, FaMinus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeBatteryLevel } from "../../actions";
import { WidgetState } from "../../widgetReducer";
import "./BatteryRegulator.css";

export const BatteryRegulator = () => {
   const dispatch = useDispatch();
   const percentArr = ["1%", "3%", "10%", "30%", "100%"];
   const count = useSelector<WidgetState, WidgetState["batteryLevel"]>(state => state.batteryLevel);

   const onChangeBatteryLevel = (batteryLevel: number) => {
      dispatch(changeBatteryLevel(batteryLevel));
   }

   return (
      <div className="plusminus-container">
         <button
            data-testid="plus-button"
            className="btn btn--blue"
            onClick={() => count < 4 && onChangeBatteryLevel(count + 1)}>
            <FaPlus />
         </button>
         <div className="percentbox">
            {percentArr[count]}
         </div>
         <button
            data-testid="minus-button"
            className="btn btn--gray"
            onClick={() => count > 0 && onChangeBatteryLevel(count - 1)}>
            <FaMinus />
         </button>
      </div>
   );
}
