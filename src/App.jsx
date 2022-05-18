import GlobalStyle from "./assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Hours from "./pages/Hours";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Hours />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
