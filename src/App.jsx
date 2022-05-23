import GlobalStyle from "./assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Hours from "./pages/Hours";
import Seats from "./pages/Seats";
import Success from "./pages/Success";

function App() {
  const [session, setSession] = useState([]);
  const [purchasedSeats, setPurchasedSeats] = useState([]);
  const [purchaserName, setPurchaserName] = useState("");
  const [purchaserCpf, setPurchaserCpf] = useState("");

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessions/:idMovie" element={<Hours />} />
        <Route
          path="/seats/:idSeat"
          element={
            <Seats
              session={session}
              setSession={setSession}
              purchasedSeats={purchasedSeats}
              setPurchasedSeats={setPurchasedSeats}
              setPurchaserName={setPurchaserName}
              setPurchaserCpf={setPurchaserCpf}
            />
          }
        />
        <Route
          path="/success"
          element={
            <Success
              session={session}
              purchasedSeats={purchasedSeats}
              purchaserName={purchaserName}
              purchaserCpf={purchaserCpf}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
