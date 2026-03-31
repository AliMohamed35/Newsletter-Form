import MainCard from "./components/MainCard";
import SuccessPage from "./pages/SuccessPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainCard />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
