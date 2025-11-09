import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import Header from "../../components/layout/header/Header";
import CountryCard from "../../components/shared/cards/CountryCard";
import Slider from "../../components/shared/sliders/Slider";
import Footer from "../../components/layout/footer/Footer";
import { useCountries } from "../../hooks/useCountries";
import "./HomePage.css";
import "../../styles/base.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  const { filtered, region, setRegion, loading, error } = useCountries();
  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 12);
  const handleLoadLess = () => setVisibleCount(12);

  const visibleItems = filtered.slice(0, visibleCount);

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration (ms)
      once: true, // Animate only once per element
      offset: 100, // Trigger offset (px)
    });
  }, []);

  if (loading)
    return <div className="text-center mt-5 fw-semibold">Loading...</div>;
  if (error)
    return <div className="text-center mt-5 text-danger">Error: {error}</div>;

  return (
    <Container fluid className="home-container custom-container">
      <Header selectedRegion={region} onFilterChange={setRegion} />

      <div className="page-title">
        <div className="hr-line hr-line-left"></div>
        <h1 className="text-center dark-grey m-0">WELCOME</h1>
        <div className="hr-line hr-line-right"></div>
      </div>

      <section aria-label="Featured countries slider">
        <Slider />
      </section>

      <section aria-label="List of countries">
        <div className="country-cards">
          {visibleItems.map((country) => (
            <CountryCard
              key={country.name}
              name={country.name}
              region={country.region}
              flag={country.flag}
            />
          ))}
        </div>
      </section>

      <div className="text-center my-4 mb-0">
        {visibleCount < filtered.length && (
          <Button
            variant="primary"
            onClick={handleLoadMore}
            className="me-2 bg-grey border-grey rounded-0 btn-hover fw-semibold"
          >
            Load More
          </Button>
        )}
        {visibleCount > 12 && (
          <Button
            variant="secondary"
            className="bg-grey border-grey rounded-0 btn-hover fw-semibold"
            onClick={handleLoadLess}
          >
            Load Less
          </Button>
        )}
      </div>

      <Footer />
    </Container>
  );
};

export default HomePage;
