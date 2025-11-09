// header navbar
import React, { useState, useEffect } from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import "./Header.css";

const Header = ({ selectedRegion, onFilterChange }) => {
  const regions = ["All", "Asia", "Europe"];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false); // close when switching to desktop
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header-fixed">
      <Container className="p-0 w-100 max-w-100">
        <Row className="align-items-center justify-content-between bg-white">
          <Col>
            <h2 className="fw-bold secondary-clr mb-0 header-title">Countries</h2>
          </Col>

          <Col xs="auto">
            {isMobile ? (
              <>
                {/* Hamburger Toggle */}
                <div
                  className={`hamburger ${menuOpen ? "open" : ""}`}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                  <div className="mobile-menu mt-2">
                    {regions.map((region) => (
                      <Button
                        key={region}
                        variant="link"
                        className={`text-decoration-none tab-btn d-block w-100 text-start secondary-clr ${
                          selectedRegion === region ? "active" : ""
                        }`}
                        onClick={() => {
                          onFilterChange(region);
                          setMenuOpen(false);
                        }}
                      >
                        {region}
                      </Button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              // Desktop View
              <ButtonGroup>
                {regions.map((region) => (
                  <Button
                    key={region}
                    variant="link"
                    className={`text-decoration-none tab-btn rounded-0 grey-3 ${
                      selectedRegion === region ? "active" : ""
                    }`}
                    onClick={() => onFilterChange(region)}
                  >
                    {region}
                  </Button>
                ))}
              </ButtonGroup>
            )}
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
