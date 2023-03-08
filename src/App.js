import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyMainComponent from "./Components/MyMainComponent";
import MyNavBarComponents from "./Components/MyNavBarComponents";
import MyFooterPart from "./Components/MyFooterPart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyExperiencePageComponent from "./Components/MyNotFoundPageComponent";
import MyNewsSectionComponent from "./Components/MyNewsSectionComponent";
import UsersPage from "./Components/UsersPage";
import MyNetworkComponent from "./Components/MyNetworkComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyMainComponent />} />
          <Route path="*" element={<MyExperiencePageComponent />} />
          <Route path="/news/" element={<MyNewsSectionComponent />} />
          <Route path="/profiles/:usersId" element={<UsersPage />} />
          <Route path="/mynetwork" element={<MyNetworkComponent />} />
        </Routes>
        <MyNavBarComponents />
      </div>
    </BrowserRouter>
  );
}

export default App;
