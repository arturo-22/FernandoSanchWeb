import "../styles/Footer.css";
import logo from "../images/logo.jpg";
import whatsapp from "../images/whatsapp.webp";
import visa from "../images/visa_logo.png";
import mastercard from "../images/mastercard.png";
import yape from "../images/yape.png";
import americanExpress from "../images/americanExpress.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const FooterComponent = () => {
  return (
    <footer className="py-4" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 mt-5">
            <div className="d-flex justify-content-center">
              <img
                src={logo}
                alt="Navbar Logo"
                className="navbar-logo"
                id="img-logo"
              />
            </div>
            <div className="mt-3 text-white" id="resumen">
              Somos una empresa que brindamos el servicio en la Gestión de Seguridad y Salud en el trabajo,
              así como certificación de competencias por el MTPE
            </div>
            <div className="mt-3 text-white">
              <span className="d-block">RUC: 20601892295</span>
              <a className="d-block" href="">
                Fsanchezmiranda@outlook.com
              </a>
              <a className="d-block" href="">
                www.fernandosanch.pe
              </a>
            </div>
            <div className="mt-3 d-flex justify-content-center w-100 text-white">
              <a className="mx-4" href="">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a className="mx-4" href="">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className="mx-4" href="">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a className="mx-4" href="">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mt-5 d-flex flex-column align-items-center">
            <div className="mb-3" id="subtitulos">
              MI CUENTA
            </div>
            <div className="d-flex flex-column align-items-center">
              <a href="">Registrate</a>
              <a href="">Iniciar Sesion</a>
            </div>
            <div className="mb-3 mt-3" id="subtitulos">
              FERNANDO SANCH
            </div>
            <div className="d-flex flex-column align-items-center">
              <a href="">¿Quién Soy?</a>
              <a href="">Términos y condiciones</a>
              <a href="">Políticas de privacidad</a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mt-5 d-flex flex-column align-items-center">
            <div id="subtitulos">
              ATENCIÓN AL CLIENTE Y VENTAS
              <div id="enlace-numero" className="ms-3">
                <a
                  id="enlace-whatsapp"
                  href="https://wa.me/+51917314172?text=Hola, estoy en la página web y deseo mas información sobre los cursos que brindas"
                >
                  <img src={whatsapp} id="img-whatsapp" />
                  <h3 id="numeroCelular" className="mb-0">
                    917314172
                  </h3>
                </a>
              </div>
            </div>
            <div className="mb-3" id="subtitulos">
              MÉTODOS DE PAGO
            </div>
            <div id="metodos_pago" className="d-flex justify-content-center">
              <img src={visa} className="me-2" id="img-visa" />
              <img src={mastercard} className="me-2" id="img-mastercard" />
              <img src={yape} className="me-2" id="img-yape" />
              <img
                src={americanExpress}
                className="me-2"
                id="img-americanExpress"
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-12 text-center">
            <p className="text-white mb-0">
              &copy; {new Date().getFullYear()} Fernando Sánchez. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
