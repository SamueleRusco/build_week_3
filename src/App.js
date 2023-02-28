import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyMainComponent from "./Components/MyMainComponent";
import MyNavBarComponents from "./Components/MyNavBarComponents";
import MyFooterPart from "./Components/MyFooterPart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyExperiencePageComponent from "./Components/MyNotFoundPageComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyMainComponent />} />
          <Route path="*" element={<MyExperiencePageComponent />} />
        </Routes>
        <MyNavBarComponents />
        <MyFooterPart />
      </div>
    </BrowserRouter>
  );
}

export default App;
