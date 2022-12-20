import { useSelector, useDispatch } from "react-redux";
import { changeLightType } from "../../../actions";
import { WidgetState } from "../../../widgetReducer";
import { LightState, OptionLights } from "../types";
import "./ToggleSwitch.css";

interface props {
   label: string,
   name: OptionLights,
}

const ToggleSwitch = ({ label, name }: props) => {
   const dispatch = useDispatch();
   const optionLight = useSelector<WidgetState, WidgetState["selectedLight"]>(state => state.selectedLight);

   const onChangeLightType = (light: string) => {
      dispatch(changeLightType(light));
   }

   return (
      <div className="toggle-container">
         {label}
         <div className="toggle-switch">
            <input
               type="checkbox"
               className="checkbox"
               name={label}
               id={label}
               checked={name === optionLight}
               onChange={(e) => onChangeLightType(e.target.checked ? name : LightState.none)}
            />
            <label className="label" htmlFor={label}>
               <span className="inner" />
               <span className="switch" />
            </label>
         </div>
      </div>
   );
};

export default ToggleSwitch;
