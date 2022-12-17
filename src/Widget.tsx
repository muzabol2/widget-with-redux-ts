import { useState } from "react";

export const Widget = () => {
   const percentArr = ["1%", "3%", "10%", "30%", "100%"];
   const [count, setCount] = useState(0);

   return (
      <div className="widget">
         <div className="container">
            <div className="widget-name">
               {/* <WidgetName /> */}
               THR 08
            </div>
            <div className="stepper">
               {/* <Stepper /> */}
               --- --- --- --- ---
            </div>
            <div className="plusminus-container">
               {/* <PlusMinusButtons /> */}
               <button onClick={() => count < 4 && setCount(count + 1)}>+</button>
               <div>
                  {percentArr[count]}
               </div>
               <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
            </div>
            <div className="main-container">
               {/* <RightSide /> */}
               <div>Time left</div>
               <div>Night Vision</div>
               <div>Dusk Till Dawn</div>
               <div>Flashing</div>
            </div>
         </div>
      </div>
   )
}
