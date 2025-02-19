import "../styles/pages/Plans.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";

const PlansPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container mt-5 mb-5">
        <div className="row">
          <h1 className="fw-bold text-center">Elige el plan ideal</h1>
        </div>
        <div className="row mt-5" id="planes-cards">
          <div className="col-xl-4 col-lg-4 col-md-12" id="card-plan">
            <h4>Plan Básico</h4>
            <h1 className="mb-3">S/100</h1>
            <div className="mb-3">
              <FontAwesomeIcon className="d-inline mx-2" icon={faCheck} />
              <h5 className="d-inline">Acceso a ver 5 videos</h5>
            </div>
            <div className="mb-3">
              <FontAwesomeIcon className="d-inline mx-2" icon={faCheck} />
              <h5 className="d-inline">Certificado por cada video</h5>
            </div>
            <div className="mb-3">
              <FontAwesomeIcon className="d-inline mx-2" icon={faCheck} />
              <h5 className="d-inline">Soporte 24/7</h5>
            </div>
            <button className="btn btn-primary">Comprar Ahora</button>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12" id="card-plan">
            <h4>Plan Premium</h4>
            <h1 className="mb-3">S/100</h1>
            <div className="mb-3">
              <FontAwesomeIcon className="d-inline mx-2" icon={faCheck} />
              <h5 className="d-inline">Acceso a ver 5 videos</h5>
            </div>
            <div className="mb-3">
              <FontAwesomeIcon className="d-inline mx-2" icon={faCheck} />
              <h5 className="d-inline">Certificado por cada video</h5>
            </div>
            <div className="mb-3">
              <FontAwesomeIcon className="d-inline mx-2" icon={faCheck} />
              <h5 className="d-inline">Soporte 24/7</h5>
            </div>
            <button className="btn btn-primary">Comprar Ahora</button>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12" id="card-plan">
            <h4>Plan Pro</h4>
            <h1 className="mb-3">S/100</h1>
            <div className="mb-3">
              <FontAwesomeIcon className="d-inline mx-2" icon={faCheck} />
              <h5 className="d-inline">Acceso a ver 5 videos</h5>
            </div>
            <div className="mb-3">
              <FontAwesomeIcon className="d-inline mx-2" icon={faCheck} />
              <h5 className="d-inline">Certificado por cada video</h5>
            </div>
            <div className="mb-3">
              <FontAwesomeIcon className="d-inline mx-2" icon={faCheck} />
              <h5 className="d-inline">Soporte 24/7</h5>
            </div>
            <button className="btn btn-primary">Comprar Ahora</button>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default PlansPage;
