import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [surat, setSurat] = useState([]);

  useEffect(() => {
    fetch("https://equran.id/api/v2/surat")
      .then((res) => res.json())
      .then((data) => setSurat(data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-success text-white vh-100 p-0 shadow-lg d-flex flex-column" style={{ width: "300px", backgroundColor: "#064e3b !important" }}>
      <div className="p-4 border-bottom border-white border-opacity-25">
        <h5 className="text-center fw-bold mb-0">
          <i className="bi bi-book-half me-2"></i>Qur'an Web
        </h5>
      </div>
      
      <div className="overflow-auto flex-grow-1 custom-scrollbar p-3">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item mb-2">
            <Link to="/" className="nav-link text-white hover-zoom shadow-sm mb-3" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
              <i className="bi bi-grid-1x2-fill me-2"></i> Dashboard
            </Link>
          </li>
          
          <li className="nav-item">
            <span className="text-white-50 small fw-bold text-uppercase px-3">Daftar Surat</span>
            <ul className="nav flex-column mt-2">
              {surat.map((s) => (
                <li key={s.nomor} className="nav-item">
                  <Link to={`/surat/${s.nomor}`} className="nav-link text-white py-2 px-3 mb-1 rounded surah-link">
                    <span className="badge bg-white text-success me-2">{s.nomor}</span>
                    {s.namaLatin}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;