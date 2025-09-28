export default function Contact() {
  return (
    <div className="container my-5">
      <div className="card border-0 shadow-sm">
        <div className="row g-0">
          {/* Bagian Kiri: Formulir Kontak */}
          <div className="col-md-6 p-4 p-md-5">
            <div className="text-center text-md-start">
              <h2 className="fw-bold">Hubungi Kami</h2>
              <p className="text-body-secondary">
                Isi form di bawah dan tim kami akan segera membalas pesan Anda.
              </p>
            </div>

            <form className="mt-4">
              {/* Label untuk Nama */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingName"
                  placeholder="Nama Anda"
                />
                <label htmlFor="floatingName">Nama Lengkap</label>
              </div>

              {/* Label untuk Email */}
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="nama@contoh.com"
                />
                <label htmlFor="floatingEmail">Alamat Email</label>
              </div>

              {/* Label untuk Pesan */}
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  style={{ height: "150px" }}
                ></textarea>
                <label htmlFor="floatingTextarea">Pesan Anda</label>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>

          {/* Bagian Kanan: Info & Ilustrasi */}
          <div className="col-md-6 bg-body-tertiary d-none d-md-flex align-items-center justify-content-center p-4 p-md-5">
            <div className="text-center">
              <h4 className="mt-4">Informasi Kontak</h4>
              <ul className="list-unstyled mt-3">
                <li className="d-flex justify-content-center align-items-center mb-2">
                  <i className="fa-solid fa-map-marker-alt me-2"></i>
                  <span>Jakarta, Indonesia</span>
                </li>
                <li className="d-flex justify-content-center align-items-center mb-2">
                  <i className="fa-solid fa-phone me-2"></i>
                  <span>+62 123 4567 890</span>
                </li>
                <li className="d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-envelope me-2"></i>
                  <span>kontak@bookstore.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
