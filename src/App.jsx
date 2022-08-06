
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./views/Home";
import './App.css';
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="character" element={<CharacterList />} />
      <Route path='character/:name' element={<CharacterDetail/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
