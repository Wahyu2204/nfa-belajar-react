function ProductList() {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
              Temukan buku-buku terbaik pilihan kami yang akan menginspirasi dan
              menambah wawasanmu.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2 me-2">
                Lihat Semua
              </a>
              <a href="#" className="btn btn-secondary my-2">
                Buku Lainnya
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {/* --- Kartu Produk 1 --- */}
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/products/95ob5m98ur.jpg"
                  className="card-img-top w-100"
                  alt="Book Cover 1"
                />
                <div className="card-body">
                  <p className="card-text fw-bold">
                    Seporsi Mie Ayam Sebelum Mati
                  </p>
                  <p className="card-text">
                    Ale, seorang pria berusia 37 tahun memiliki tinggi badan 189
                    cm dan berat 138 kg. Badannya bongsor, berkulit hitam, dan
                    memiliki masalah dengan bau badan. Sejak kecil, Ale hidup di
                    lingkungan keluarga yang tidak mendukungnya. Ia tak memiliki
                    teman dekat dan menjadi korban perundungan di sekolahnya.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                    </div>
                    <small className="text-body-secondary">Rp 80.000</small>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Kartu Produk 2 --- */}
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/coee2x-4-4.jpg"
                  className="card-img-top w-100"
                  alt="Book Cover 2"
                />
                <div className="card-body">
                  <p className="card-text fw-bold">The Psychology of Money</p>
                  <p className="card-text">
                    Money―investing, personal finance, and business decisions―is
                    typically taught as a math-based field, where data and
                    formulas tell us exactly what to do. But in the real world
                    people don’t make financial decisions on a spreadsheet.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                    </div>
                    <small className="text-body-secondary">Rp 100.000</small>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Kartu Produk 3 --- */}
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/a-sx19d07r.jpg"
                  className="card-img-top"
                  alt="Book Cover 3"
                />
                <div className="card-body">
                  <p className="card-text fw-bold">
                    Dasar-dasar Logika Pemrograman Komputer
                  </p>
                  <p className="card-text">
                    Seiring dengan perkembangan teknologi yang semakin pesat,
                    pemrograman komputer menjadi keterampilan yang sangat
                    penting. Pemahaman logika pemrograman yang baik merupakan
                    fondasi utama dalam menulis kode yang efisien, terstruktur,
                    dan mudah dipahami. Oleh karena itu, buku ini dirancang
                    untuk memberikan pemahaman dasar...
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                    </div>
                    <small className="text-body-secondary">Rp 70.000</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Kamu bisa copy-paste blok <div className="col"> di atas untuk menambah produk */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
