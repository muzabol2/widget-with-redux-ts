import { useState } from "react";
import ToggleSwitch from "./components/toggleSwitch/ToggleSwitch";
import { FaPlus, FaMinus, FaBatteryEmpty } from "react-icons/fa";

export type OptionLights = "none" | "NV" | "DtD" | "Flashing";

export const Widget = () => {
   const opArr: OptionLights[] = ["none", "NV", "DtD", "Flashing"]
   const percentArr = ["1%", "3%", "10%", "30%", "100%"];
   const [count, setCount] = useState(0);
   const [optionLight, setOptionLight] = useState<OptionLights>("none");

   return (
      <div className="widget">
         <div className="container">
            <div className="widget-name">
               {/* <WidgetName /> */}
               THR 08
            </div>
            <div className="stepper">
               {/* <Stepper /> */}
               <span className={`bar ${count >= 0 ? "bar--light" : ""}`} />
               <span className={`bar ${count >= 1 ? "bar--light" : ""}`} />
               <span className={`bar ${count >= 2 ? "bar--light" : ""}`} />
               <span className={`bar ${count >= 3 ? "bar--light" : ""}`} />
               <span className={`bar ${count >= 4 ? "bar--light" : ""}`} />
            </div>
            <div className="plusminus-container">
               {/* <PlusMinusButtons /> */}
               <button
                  className="btn btn--blue"
                  onClick={() => count < 4 && setCount(count + 1)}>
                  <FaPlus />
               </button>
               <div className="percentbox">
                  {percentArr[count]}
               </div>
               <button
                  className="btn btn--gray"
                  onClick={() => count > 0 && setCount(count - 1)}>
                  <FaMinus />
               </button>
            </div>
            <div className="main-container">
               <div className="timeleft">
                  <p><FaBatteryEmpty /> Time left</p>
               </div>
               <ToggleSwitch
                  name={opArr[1]}
                  optionLight={optionLight}
                  setOptionLight={setOptionLight}
                  label="Night Vision" />
               <ToggleSwitch
                  name={opArr[2]}
                  optionLight={optionLight}
                  setOptionLight={setOptionLight}
                  label="Dusk Till Dawn" />
               <ToggleSwitch
                  name={opArr[3]}
                  optionLight={optionLight}
                  setOptionLight={setOptionLight}
                  label="Flashing" />
            </div>
         </div>
      </div>
   )
}
