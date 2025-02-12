import '../styles/Main.css';
import ingeniero from '../images/ingeniero.png';
import administracion from '../images/administracion.png';
import arquitectura from '../images/arquitectura.png';
import carretera from '../images/carretera.png';
import civil from '../images/civil.png';
import construccion from '../images/construccion.png';
import contabilidad from '../images/contabilidad.png';
import derecho from '../images/derecho.png';
import electicidad from '../images/electricidad.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

const MainComponent = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row bg-secondary-subtle">
          <div className="col-xl-6 col-lg-6 col-md-12 d-flex justify-content-center align-items-end mt-5">
            <img className="w-50 h-100" src={ingeniero} />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 mt-5 d-flex flex-column justify-content-center">
            <div className="mt-5 me-5">
              <h1 className="lh-base fw-bold" id="txt-titulo">
                Capacítate y entrénate para las {""}
                <b className="bg-black text-white">CONVOCATORIAS de trabajo</b>
                {""} este 2025
              </h1>
            </div>
            <div className="mt-3">
              <div className="d-flex align-items-center mb-2">
                <FontAwesomeIcon icon={faSquareCheck} className="me-2" />
                <h4 className="mb-0">
                  Cursos 100% virtual con acceso las 24h del día.
                </h4>
              </div>
              <div className="d-flex align-items-center mb-2">
                <FontAwesomeIcon icon={faSquareCheck} className="me-2" />
                <h4 className="mb-0">
                  Obten tu CERTIFICADOS con códigos QR válido para convocatorias
                  de trabajo.
                </h4>
              </div>
              <div className="d-flex align-items-center mb-4">
                <FontAwesomeIcon icon={faSquareCheck} className="me-2" />
                <h4 className="mb-0">Consigue el trabajo soñado.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center text-center">
          <div className="col-auto mt-5">
            <h1 className="fw-bold">Categorías principales</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <a id="enlace-categorias" href="#">
              <div id="icons-categorias">
                <img
                  src={administracion}
                  alt="ADMINISTRACION"
                  id="img-categoria"
                />
              </div>
              <div>
                <h6 className="text-dark mb-0">ADMINISTRACIÓN</h6>
                <div className="text-muted">+49</div>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <a id="enlace-categorias" className="" href="#">
              <div id="icons-categorias">
                <img src={arquitectura} alt="Arquitectura" id="img-categoria" />
              </div>
              <div>
                <h6 className="text-dark mb-0">ARQUITECTURA</h6>
                <div className="text-muted">+49</div>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <a id="enlace-categorias" className="" href="#">
              <div id="icons-categorias">
                <img src={carretera} alt="CARRETERAS" id="img-categoria" />
              </div>
              <div>
                <h6 className="text-dark mb-0">CARRETERAS</h6>
                <div className="text-muted">+49</div>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <a id="enlace-categorias" className="" href="#">
              <div id="icons-categorias">
                <img src={civil} alt="CIVIL" id="img-categoria" />
              </div>
              <div>
                <h6 className="text-dark mb-0">CIVIL</h6>
                <div className="text-muted">+49</div>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mt-4">
            <a id="enlace-categorias" className="" href="#">
              <div id="icons-categorias">
                <img src={construccion} alt="CONSTRUCCION" id="img-categoria" />
              </div>
              <div>
                <h6 className="text-dark mb-0">CONSTRUCCION</h6>
                <div className="text-muted">+49</div>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mt-4">
            <a id="enlace-categorias" className="" href="#">
              <div id="icons-categorias">
                <img src={contabilidad} alt="CONTABILIDAD" id="img-categoria" />
              </div>
              <div>
                <h6 className="text-dark mb-0">CONTABILIDAD</h6>
                <div className="text-muted">+49</div>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mt-4">
            <a id="enlace-categorias" className="" href="#">
              <div id="icons-categorias">
                <img src={derecho} alt="DERECHO" id="img-categoria" />
              </div>
              <div>
                <h6 className="text-dark mb-0">DERECHO</h6>
                <div className="text-muted">+49</div>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mt-4">
            <a id="enlace-categorias" className="" href="#">
              <div id="icons-categorias">
                <img src={electicidad} alt="ELÉCTRICA" id="img-categoria" />
              </div>
              <div>
                <h6 className="text-dark mb-0">ELÉCTRICA</h6>
                <div className="text-muted">+49</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-secondary-subtle mt-5">
        <div className="row justify-content-center text-center">
          <div className="col-auto mt-5">
            <h1 className="fw-bold">
              ¡Llevamos más de 7 años capacitando y certificando!
            </h1>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-auto">
            <h2 style={{ color: "#4f547b" }}>
              Cursos especializados en áreas de alta demanda laboral.
            </h2>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row d-inline">
            <h2 className="d-inline">Algunos Cursos</h2>
            <a
              className="d-inline text-dark fs-6 text-decoration-underline"
              href="#"
            >
              Ver todos
            </a>
          </div>
          <div className="row mt-5">
            {/* <div className="card w-25 mb-5">
                <img src={electicidad} alt="ELÉCTRICA" id="img-categoria" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainComponent;
