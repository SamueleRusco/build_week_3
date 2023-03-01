import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyNavBarComponents from "./components/MyNavBarComponents";
import Rightside from "./components/Rightside";
import Main from "./components/Main";
import Leftside from "./components/Leftside";


function App() {
  return (
    <div className="App">
      <MyNavBarComponents/>
      <div className="body">
  
      <Leftside/>
      <Main/>
      
      <Rightside/>
      
      </div>
    </div>
  );
}

export default App;
