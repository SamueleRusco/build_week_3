import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBarComponents from "./Components/MyNavBarComponents";
import Rightside from "./Components/Rightside";
import Main from "./Components/Main";
import Leftside from "./Components/Leftside";

function App() {
  return (
    <div className="App">
      <MyNavBarComponents />
      <div className="body">
        <Leftside />
        <Main />

        <Rightside />
      </div>
    </div>
  );
}

export default App;
