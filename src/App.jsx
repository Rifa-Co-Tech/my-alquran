import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Dashboard from "./pages/Dashboard";
import DetailSurat from "./pages/DetailSurat";

function App() {
  return (
    <div className="d-flex min-vh-100">
      <BrowserRouter>
        <Navbar />
        {/* Tambahkan div ini agar konten bisa di-scroll secara independen */}
        <div className="flex-grow-1 vh-100 overflow-auto">
          <Content>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/surat/:id" element={<DetailSurat />} />
            </Routes>
          </Content>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;