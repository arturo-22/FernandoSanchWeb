import { Button, Card } from "react-bootstrap";
import FooterComponent from "./Footer";
import NavbarComponent from "./Navbar";

export function Index() {
  return (
    <>
      <NavbarComponent />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <h3>
                Capacítate y prepárate para las <b>CONVOCATORIAS</b> de trabajo
                este 2025
              </h3>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    Lorem ipsum dolor, sit amet consectetur ad
                    ipisicing elit. Modi voluptas atque quasi sint officia blanditiis perspiciatis 
                    voluptate impedit, perferendis, eligendi ut culpa totam repudiandae magni! Blanditiis 
                    illum unde aspernatur repellendus.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
}
