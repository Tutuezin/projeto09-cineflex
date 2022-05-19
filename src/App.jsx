import GlobalStyle from "./assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Hours from "./pages/Hours";
import Seats from "./pages/Seats";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:idMovie" element={<Hours />} />
        <Route path="/section/:idSeat" element={<Seats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
