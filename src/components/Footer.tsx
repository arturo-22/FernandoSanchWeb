import "../styles/Footer.css";
import logo from "../images/logo.jpg";
import whatsapp from "../images/whatsapp.webp";
import visa from "../images/Visa_Logo.png";
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
    <footer className="py-4 bg-white" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 ">
            <div className="d-flex justify-content-center">
              <img
                src={logo}
                alt="Navbar Logo"
                className="navbar-logo"
                id="img-logo"
              />
            </div>
            <div className="mt-3 text-dark">
              Ingenierio que crear cursos de capacitación, brindo cursos de
              actualización para público en general y profesionales para las
              convocatorias de trabajo
            </div>
            <div className="mt-3">
              <b className="d-block text-dark">RUC: 20601892295</b>
              <a className="d-block text-dark" href="">
                Fsanchezmiranda@outlook.com
              </a>
              <a className="d-block text-dark" href="">
                www.fernandosanch.pe
              </a>
            </div>
            <div className="mt-3 d-flex justify-content-between w-50">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTiktok} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="mb-3 text-dark">MI CUENTA</div>
            <div className="d-flex flex-column">
              <a className="text-dark" href="">
                Registrate
              </a>
              <a className="text-dark" href="">
                Iniciar Sesion
              </a>
            </div>
            <div className="mb-3 mt-3 text-dark">FERNANDO SANCH</div>
            <div className="d-flex flex-column">
              <a className="text-dark" href="">
                ¿Quién Soy?
              </a>
              <a className="text-dark" href="">
                Terminos y condiciones
              </a>
              <a className="text-dark" href="">
                Políticas de privacidad
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="mb-3 text-dark">
              ATENCIÓN AL CLIENTE Y VENTAS
              <a
                id="enlace-whatsapp"
                className="mb-5 text-dark "
                href="https://wa.me/+51917314172?text=Hola, estoy en la página web y deseo mas información sobre los cursos que brindas"
              >
                <img src={whatsapp} id="img-whatsapp" />
                <h3>917314172</h3>
              </a>
            </div>
            <div className="mb-3 text-dark" id="metodos_pago">
              MÉTODOS DE PAGO
            </div>
            <div id="metodos_pago">
              <img src={visa} id="img-whatsapp" />
              <img src={mastercard} id="img-whatsapp" />
              <img src={yape} id="img-whatsapp" />
              <img src={americanExpress} id="img-whatsapp" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
