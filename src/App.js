import { Route, Routes } from "react-router-dom";
import RobotsPage from "./pages/RobotsPage/RobotsPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<RobotsPage />}></Route>
      </Routes>
    </main>
  );
}

export default App;
