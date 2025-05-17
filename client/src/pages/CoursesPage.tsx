import FooterComponent from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const CoursesPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container mt-5 mb-5">
        <div className="mb-5">
          <h1>Lista de cursos</h1>
          <h5 style={{ color: "#4f547b" }}>
            Nuestros cursos se emiten con CERTIFICADO QR, válido para
            convocatorias del sector público y privado.
          </h5>
        </div>
        <div className="d-flex justify-content-center gap-3 mb-5">
          <div className="col-xl-4 col-lg-4 col-md-4">
            <Sidebar />
          </div>
          <div className="col-xl-8 col-lg-8 col-md-8">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Card image"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default CoursesPage;
