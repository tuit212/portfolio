import { Routes , Route } from "react-router-dom";
import Left from "./components/Left/Left";
import Right from "./components/Right/Right";
import Center from "./components/Center/Center";
import './App.css'


function App() {
  return (
    <div className="App">
      {/* left */}
      <Left/>
      {/* center */}
      <Routes>
        <Route path="/" element={<Center/>} />
      </Routes>
      {/* Right */}
      <Right/>
    </div>
  );
}

export default App;
