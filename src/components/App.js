import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import Detail from "../routes/Detail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
