import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyMainComponent from "./Components/MyMainComponent";
import MyNavBarComponents from "./Components/MyNavBarComponents";
import MyFooterPart from "./Components/MyFooterPart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyExperiencePageComponent from "./Components/MyNotFoundPageComponent";
import MyNewsSectionComponent from "./Components/MyNewsSectionComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyMainComponent />} />
          <Route path="*" element={<MyExperiencePageComponent />} />
          <Route path="/news/" element={<MyNewsSectionComponent />} />
        </Routes>
        <MyNavBarComponents />
        <MyFooterPart />
      </div>
    </BrowserRouter>
  );
}

export default App;
