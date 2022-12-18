import { OptionLights } from "../../Widget";
import "./ToggleSwitch.css";

interface props {
   label: string, 
   name: OptionLights, 
   optionLight: OptionLights,
   setOptionLight: (option: OptionLights) => void
}

const ToggleSwitch = ({ label, name, optionLight, setOptionLight }: props) => {
   const none: OptionLights = "none";

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
               onChange={(e) => setOptionLight(e.target.checked ? name : none)}
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
