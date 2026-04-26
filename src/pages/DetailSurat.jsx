import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

const DetailSurat = () => {
  const { id } = useParams();
  const [surat, setSurat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://equran.id/api/v2/surat/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSurat(data.data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border text-success" role="status"></div>
    </div>
  );

  return (
    <div className="container-fluid p-4 bg-light min-vh-100">
      <div className="card shadow-sm border-0 mb-4 rounded-4 overflow-hidden">
        <div className="card-body p-5 bg-white text-center border-bottom border-5 border-success">
          <h1 className="fw-bold text-success mb-2">{surat.namaLatin}</h1>
          <h2 className="mb-3" style={{ fontFamily: 'serif' }}>{surat.nama}</h2>
          <div className="badge bg-success-subtle text-success px-3 py-2 rounded-pill">
            {surat.arti} • {surat.jumlahAyat} Ayat
          </div>
          <div className="mt-4 text-muted mx-auto" style={{ maxWidth: '800px' }}>
            {parse(surat.deskripsi)}
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          {surat.ayat.map((ayat) => (
            <div key={ayat.nomorAyat} className="card shadow-sm border-0 mb-3 rounded-3 hover-shadow transition">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <span className="badge bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px' }}>
                    {ayat.nomorAyat}
                  </span>
                  <h2 className="text-end mb-0 lh-lg" style={{ direction: 'rtl', fontFamily: 'serif', fontSize: '2.5rem' }}>
                    {ayat.teksArab}
                  </h2>
                </div>
                <p className="fw-bold text-success mb-1">{ayat.teksLatin}</p>
                <p className="text-secondary mb-0">{ayat.teksIndonesia}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailSurat;