import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyMainComponent from "./Components/MyMainComponent";
import MyNavBarComponents from "./Components/MyNavBarComponents";
import MyFooterPart from "./Components/MyFooterPart";


function App() {
  return (
    <div className="App">
      <MyMainComponent />
      <MyNavBarComponents/>
      <MyFooterPart/>
    </div>
  );
}

export default App;
