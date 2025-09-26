export default function Contact() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          {/* Header Halaman */}
          <div className="text-center mb-5">
            <h2>Hubungi Kami</h2>
            <p className="lead text-body-secondary">
              Silakan isi formulir di bawah ini untuk menghubungi kami.
            </p>
          </div>

          {/* Form dengan struktur HTML biasa + className */}
          <form className="row g-3">
            <div className="col-12">
              <label htmlFor="inputName" className="form-label">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Jhon Doe"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="email@example.com"
              />
            </div>
            <div className="col-12">
              <label for="floatingTextarea2">Pesan Anda</label>
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: "100px" }}
              ></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
