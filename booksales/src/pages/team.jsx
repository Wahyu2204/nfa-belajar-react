export default function Team() {
  return (
    <div className="container">
      <section className="py-2 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Team</h1>
          </div>
        </div>
      </section>
      <div className="row text-center m-auto">
        <div className="col-lg-4">
          <img
            className="rounded-circle"
            src="https://picsum.photos/200/200"
            alt=""
          />
          <h2 className="fw-normal">Wahyu 1</h2>
          <p>Manager</p>
        </div>
        <div className="col-lg-4">
          <img
            className="rounded-circle"
            src="https://picsum.photos/200/200"
            alt=""
          />
          <h2 className="fw-normal">Wahyu 2</h2>
          <p>Desain</p>
        </div>

        <div className="col-lg-4">
          <img
            className="rounded-circle"
            src="https://picsum.photos/200/200"
            alt=""
          />
          <h2 className="fw-normal">Wahyu 3</h2>
          <p>Dev</p>
        </div>
      </div>
    </div>
  );
}
