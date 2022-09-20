import React from 'react';
import SliderCarousel from '../components/SliderCarouselsingle';
import FeatureBox from '../components/FeatureBox';
import CarouselCollection from '../components/CarouselCollection';
import ColumnNew from '../components/ColumnNew';
import AuthorList from '../components/authorList';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import FeatureHome from '../components/FeatureHome';
import TrustedPartners from '../components/TrustedPartners';
import CreatorsHome from '../components/CreatorsHome';
import FeatureHome2 from '../components/FeatureHome2';
import PopoularIdeasHome from '../components/PopoularIdeasHome';
import { Link } from '@reach/router';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? 'active' : 'non-active',
      };
    }}
  />
);

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #212428;
    border-bottom: 0;
    box-shadow: 0 4px 20px 0 rgba(10,10,10, .8);
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: #fff;
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: none !important;
  }
  header#myHeader .logo .d-3{
    display: block !important;
  }
  .jumbotron.no-bg{
    background: center bottom;
    background-size: cover;
    height: 100vh;
  }
  footer.footer-light .subfooter span img.d-1{
    display: none !important;
  }
  footer.footer-light .subfooter span img.d-3{
    display: inline-block !important;
  }
  .de_countdown{
    right: 10px;
    color: #fff;
  }
  .author_list_pp{
    margin-left:0;
  }
  footer.footer-light .subfooter{
    border-top: 1px solid rgba(255,255,255,.1);
  }
`;

const homethree = () => (
  <div>
    <GlobalStyles />
    <section className="jumbotron no-bg" style={{ background: `url(${'./img/bg.png'})right center/ 75% 100% no-repeat, 0% 0% / cover rgb(0, 0, 0)` }}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className="spacer-single"></div>
            {/* <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
              <h6 className=""><span className="text-uppercase color">Gigaland Market</span></h6>
            </Reveal> */}
            <div className="spacer-10"></div>
            <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
              <h1 >IDEAL EXCHANGE</h1>
              <h1>The World's Stock Market for Creative Ideas and Works.</h1>
            </Reveal>
            <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce>
              <p className=" lead col-white">
                Don't just support the next big franchise, own a part of it.
              </p>
              <p className=" lead col-white">Sell, invest, and trade the hottest creative works of today and the future.</p>
            </Reveal>
            <div className="spacer-10"></div>
            <Reveal className='onStep' keyframes={fadeInUp} delay={800} duration={900} triggerOnce>
              <div className='heroSecBtn d-flex'>
                <span onClick={() => window.open("/wallet", "_self")} className="btn-main btn-main-white lead" style={{ borderRadius: "6px", marginRight: "10px", backgroundColor: "white" }}>Create</span>
                <span onClick={() => window.open("/wallet", "_self")} className="btn-main lead" style={{ borderRadius: "6px" }}>Invest</span>
              </div>
              <div className="mb-sm-30"></div>
            </Reveal>
            <div className="spacer-double"></div>
          </div>
          {/* <div className='col-lg-6 px-0'>
            <SliderCarousel />
          </div> */}
        </div>
      </div>
    </section>

    <section className='container-fluid' style={{ backgroundColor: "#d9d9d9" }}>
      <div className='container'>
        <FeatureHome />
      </div>
    </section>

    {/* <section className='container no-top'>
      <div className='row'>
        <div className='col-lg-12'>
          <h2 className='style-2'>Hot Collections</h2>
        </div>
      </div>
      <div className='container no-top'>
        <div className='row'>
          <div className='col-lg-12 px-0'>
            <CarouselCollection />
          </div>
        </div>
      </div>
    </section>

    <section className='container no-top'>
      <div className='row'>
        <div className='col-lg-12'>
          <h2 className='style-2'>Top Seller</h2>
        </div>
        <div className='col-lg-12'>
          <AuthorList />
        </div>
      </div>
    </section> */}

    <section className='container'>
      <div className='row' style={{ marginBottom: "3%" }}>
        <div className='col-lg-12 text-center'>
          <h2 className='style-2' style={{ fontSize: "50px" }}>Ideal Exchange (IDX)</h2>
          <p style={{ fontWeight: "700", color: "white" }}>HOW IT WORKS</p>
          <p>Sell, Invest, and Trade the hottest creative works of today and the future.</p>
          <img src="./img/favicon.png" alt="faviconImage" width="auto" height="36px" />
        </div>
      </div>
      <div className='container px-0'>
        <FeatureBox />
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <button className='mt-lg-5 mt-md-3 mt-2'>Get Started Now</button>
          <p className='mt-lg-5 mt-md-3 mt-2'>DREAM ALWAY
            |
            IDEAL EXCHANGE</p>
        </div>
      </div>
    </section>


    <section className='container-fuild' style={{ backgroundColor: "white" }}>
      <div className="container">
        <div className='row'>
          <div className='col-lg-12'>
            <h2 className='style-2 text-center' style={{ fontSize: "1.2em", color: "black" }}>TRUSTED PARTNERS</h2>
          </div>
          <div className='col-lg-12'>
            <TrustedPartners />
          </div>
        </div>
      </div>
    </section>

    <section className='container-fuild' style={{ backgroundColor: "#d9d9d9" }}>
      <div className="container">
        <div className='row'>
          <div className='col-lg-12'>
            <CreatorsHome />
          </div>
        </div>
      </div>
    </section>

    <section className='container-fuild' style={{ backgroundColor: "white" }}>
      <div className="container">
        <div className='row'>
          <div className='col-lg-12'>
            <FeatureHome2 />
          </div>
        </div>
      </div>
    </section>

    <section className='container-fuild' style={{ backgroundColor: "#212428" }}>
      <div className="container">
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <h2 className='style-2' style={{ fontSize: "3.2em", color: "white" }}>(IDX)</h2>
            <h3 style={{ color: "white", fontWeight: "700" }}>POPULAR IDEAS</h3>
          </div>
          <div className='col-lg-12'>
            <PopoularIdeasHome />
          </div>
        </div>
      </div>
    </section>

    <Footer />

  </div>
);
export default homethree;