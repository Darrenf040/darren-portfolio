import { BrowserRouter, Route, Routes } from "react-router-dom";
import Credits from "./Pages/Credits";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter basename="/darren-portfolio/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/credit"} element={<Credits />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
