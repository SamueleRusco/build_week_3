import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyNavBarComponents from "./Components/MyNavBarComponents";
import MyFooterPart from "./Components/MyFooterPart";


function App() {
  return (
    <div className="App">
      <MyNavBarComponents/>
      <MyFooterPart/>
    </div>
  );
}

export default App;
