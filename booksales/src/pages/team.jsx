export default function Team() {
  return (
    <div className="container py-5">
      {/* Judul Halaman */}
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-8">
          <h1 className="fw-light">Meet Our Team</h1>
          <p className="lead text-body-secondary">
            Tim kami terdiri dari para profesional yang berdedikasi dan penuh
            semangat, siap untuk berinovasi dan memberikan yang terbaik.
          </p>
        </div>
      </div>

      {/* Daftar Anggota Tim */}
      <div className="row">
        {/* Anggota Tim 1 */}
        <div className="col-lg-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <img
                className="rounded-circle mb-3"
                src="https://picsum.photos/seed/wahyu1/150/150"
                alt="Foto Wahyu 1"
                width="140"
                height="140"
              />
              <h5 className="card-title mb-1">Wahyu 1</h5>
              <p className="card-text text-body-secondary mb-3">
                Project Manager
              </p>
              <div>
                <a href="#" className="text-body-secondary mx-2">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-body-secondary mx-2">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="text-body-secondary mx-2">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Anggota Tim 2 */}
        <div className="col-lg-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <img
                className="rounded-circle mb-3"
                src="https://picsum.photos/seed/wahyu2/150/150"
                alt="Foto Wahyu 2"
                width="140"
                height="140"
              />
              <h5 className="card-title mb-1">Wahyu 2</h5>
              <p className="card-text text-body-secondary mb-3">
                UI/UX Designer
              </p>
              <div>
                <a href="#" className="text-body-secondary mx-2">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-body-secondary mx-2">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
                <a href="#" className="text-body-secondary mx-2">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Anggota Tim 3 */}
        <div className="col-lg-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <img
                className="rounded-circle mb-3"
                src="https://picsum.photos/seed/wahyu3/150/150"
                alt="Foto Wahyu 3"
                width="140"
                height="140"
              />
              <h5 className="card-title mb-1">Wahyu 3</h5>
              <p className="card-text text-body-secondary mb-3">
                Frontend Developer
              </p>
              <div>
                <a href="#" className="text-body-secondary mx-2">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-body-secondary mx-2">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="text-body-secondary mx-2">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
