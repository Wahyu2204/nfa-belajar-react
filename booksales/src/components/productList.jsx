export default function ProductList() {
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
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {/* --- Kartu Produk 1 --- */}
            <div className="col">
              <div className="card h-100 shadow-sm border-0">
                {/* 1. Menggunakan Bootstrap Ratio Helper untuk gambar */}
                <div className="ratio ratio-1x1">
                  <img
                    src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/products/95ob5m98ur.jpg"
                    className="card-img-top"
                    alt="Seporsi Mie Ayam Sebelum Mati"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <p className="card-text fw-bold">
                    Seporsi Mie Ayam Sebelum Mati
                  </p>
                  {/* 2. Deskripsi dipersingkat secara manual */}
                  <p className="card-text">
                    Ale, seorang pria berusia 37 tahun yang memiliki masalah bau
                    badan. Sejak kecil, ia hidup di lingkungan yang tidak
                    mendukungnya.
                  </p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="fw-bold fs-5 text-primary">Rp 80.000</span>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Beli
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Kartu Produk 2 --- */}
            <div className="col">
              <div className="card h-100 shadow-sm border-0">
                <div className="ratio ratio-1x1">
                  <img
                    src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/coee2x-4-4.jpg"
                    className="card-img-top"
                    alt="The Psychology of Money"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <p className="card-text fw-bold">The Psychology of Money</p>
                  <p className="card-text">
                    Pengambilan keputusan tentang uang biasanya diajarkan
                    sebagai bidang berbasis matematika, di mana data dan rumus
                    memberi tahu kita...
                  </p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="fw-bold fs-5 text-primary">
                      Rp 100.000
                    </span>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Beli
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Kartu Produk 3 --- */}
            <div className="col">
              <div className="card h-100 shadow-sm border-0">
                <div className="ratio ratio-1x1">
                  <img
                    src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/a-sx19d07r.jpg"
                    className="card-img-top"
                    alt="Dasar-dasar Logika Pemrograman"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <p className="card-text fw-bold">
                    Dasar-dasar Logika Pemrograman
                  </p>
                  <p className="card-text">
                    Seiring perkembangan teknologi, pemrograman menjadi
                    keterampilan yang sangat penting. Buku ini dirancang untuk
                    memberi pemahaman...
                  </p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="fw-bold fs-5 text-primary">Rp 70.000</span>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Beli
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
