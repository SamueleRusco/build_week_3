import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyMainComponent from "./Components/MyMainComponent";
import MyNavBarComponents from "./Components/MyNavBarComponents";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyExperiencePageComponent from "./Components/MyNotFoundPageComponent";
import MyNewsSectionComponent from "./Components/MyNewsSectionComponent";
import UsersPage from "./Components/UsersPage";
import MyNetworkComponent from "./Components/MyNetworkComponent";
import JobPage from "./Components/JobPage";
import { useSelector } from "react-redux";

function App() {
  const peopleArray = useSelector((state) => state.allProfiles.result);

  const randomizeContacts = (arr) => {
    let randomizedArr = [];
    while (randomizedArr.length < 18) {
      let randomGuy = arr[Math.trunc(Math.random() * arr?.length)];
      randomizedArr.push(randomGuy);
    }
    return randomizedArr;
  };

  const randomized = randomizeContacts(peopleArray);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyMainComponent />} />
          <Route path="*" element={<MyExperiencePageComponent />} />
          <Route path="/news/" element={<MyNewsSectionComponent />} />
          <Route
            path="/profiles/:usersId"
            element={<UsersPage randomized={randomized} />}
          />
          <Route path="/jobs/" element={<JobPage />} />
          <Route
            path="/mynetwork"
            element={<MyNetworkComponent randomized={randomized} />}
          />
        </Routes>
        <MyNavBarComponents />
      </div>
    </BrowserRouter>
  );
}

export default App;
