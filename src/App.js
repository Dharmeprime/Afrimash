import { BrowserRouter, Routes,  Route} from "react-router-dom";
import './Style.css';
import Home from "./components/inc/Home";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />  
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
