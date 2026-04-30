import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Preloader onFinish={() => setLoading(false)} />
      {!loading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      )}
    </>
  );
}

export default App;