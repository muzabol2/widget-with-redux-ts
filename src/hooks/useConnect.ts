import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from 'react';
import { WidgetState } from "../widgetReducer";
import { connectWithBackend } from "../actions";

export function useConnect() {
   const dispatch = useDispatch();
   const optionLight = useSelector<WidgetState, WidgetState["selectedLight"]>(state => state.selectedLight);
   const refTimer = useRef<number | null | undefined>(null);
   const [isError, setIsError] = useState(false);

   useEffect(() => {
      if (refTimer.current !== null) {
         window.clearTimeout(refTimer.current);
         refTimer.current = null;
         setIsError(false);
         dispatch(connectWithBackend(false));
      }
      if (optionLight !== "none") {
         refTimer.current = window.setTimeout(() => {
            setIsError(true);
            dispatch(connectWithBackend(true));
         }, 5000);
      }

      return () => {
         if (refTimer.current !== null) {
            window.clearTimeout(refTimer.current);
         }
      };
   }, [optionLight]);

   return { isError };
}
