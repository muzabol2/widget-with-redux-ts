import { useSelector } from 'react-redux';
import { WidgetState } from './widgetReducer';
import { Widget } from './Widget';
import './App.css';

function App() {
   const widgetState = useSelector<WidgetState>(state => state);
   console.log(widgetState);
   return (
      <div className="App">
         <Widget name="THR 08" />
      </div>
   );
}

export default App;
