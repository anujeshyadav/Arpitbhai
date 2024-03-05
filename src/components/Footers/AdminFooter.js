import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <Row>
      <Col lg="12" md="12" sm="12" xs="12">
        <div
          style={{ position: "fixed", bottom: 0, right: 10 }}
          className="footer"
        >
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="12">
              <div className="copyright d-flex justify-content-end">
                {/* <div className="copyright text-center text-xl-left text-muted"> */}
                © {new Date().getFullYear()}{" "}
                <a
                  className="font-weight-bold ml-1"
                  // href="https://www.creative-tim.com?ref=adr-admin-footer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  WebSite Namess
                </a>
              </div>
            </Col>

            {/* <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem>
              <NavLink
                href="https://www.creative-tim.com?ref=adr-admin-footer"
                rel="noopener noreferrer"
                target="_blank"
              >
                WebSite Name
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink
                href="https://www.creative-tim.com/presentation?ref=adr-admin-footer"
                rel="noopener noreferrer"
                target="_blank"
              >
                About Us
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="http://blog.creative-tim.com?ref=adr-admin-footer"
                rel="noopener noreferrer"
                target="_blank"
              >
                Blog
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=adr-admin-footer"
                rel="noopener noreferrer"
                target="_blank"
              >
                MIT License
              </NavLink>
            </NavItem>
          </Nav>
        </Col> */}
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
