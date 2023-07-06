import "./App.css";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Movies />
    </div>
  );
}

export default App;
