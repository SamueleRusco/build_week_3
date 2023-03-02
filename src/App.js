import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyMainComponent from "./Components/MyMainComponent";
import MyNavBarComponents from "./Components/MyNavBarComponents";
import MyFooterPart from "./Components/MyFooterPart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyExperiencePageComponent from "./Components/MyNotFoundPageComponent";
import MyNewsSectionComponent from "./Components/MyNewsSectionComponent";
import Leftside from "./Components/Leftside";
import Rightside from "./Components/Rightside";
import Main from "./Components/Main";
import styled from "styled-components";

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
        <div className="body">
          <Leftside />
          <Main />

          <Rightside />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
