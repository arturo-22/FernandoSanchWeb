import logo from "../images/logo.jpg";

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
              <b className="d-block text-dark">RUC: 20563335950</b>
              <a className="d-block text-dark" href="">
                sanch@hotmail.com
              </a>
              <a className="d-block text-dark" href="">
                www.fernandosanch.pe
              </a>
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
            <div className="mb-3 text-dark">ATENCIÓN AL CLIENTE Y VENTAS</div>
            <div className="text-dark">Por Whatsapp, las 24 horas</div>
            <a className="mb-5 text-dark" href="">
              917 314 172
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
