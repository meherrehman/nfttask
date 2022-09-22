import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import "../../GlobalVariables"

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

const Homethree = () => {

  useEffect(() => {
    axios.get(`${global.BackendUrl}/BasicInfo`).then((response) => {
      setheroSectionData(response.data)
    }).catch((err) => {
      console.log(err)
    })

    axios.get(`${global.BackendUrl}/getPartners`).then((response) => {
      setpartnersData(response.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const [heroSectionData, setheroSectionData] = useState([])
  const [partnersData, setpartnersData] = useState([])

  return (
    <div>
      <GlobalStyles />
      {heroSectionData.map((data) => {
        return (
          <>
            <section className="jumbotron no-bg" style={{ background: `url(https://codecanyon.kreativdev.com/plusagency/default/assets/front/img/${data.hero_bg})right center/ 75% 100% no-repeat, 0% 0% / cover rgb(0, 0, 0)` }}>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-lg-6'>
                    <div className="spacer-single"></div>
                    <div className="spacer-10"></div>
                    <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
                      <h1 >IDEAL EXCHANGE</h1>
                      <h1>{data.hero_section_text}</h1>
                    </Reveal>
                    <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce>
                      <p className=" lead col-white">
                        {data.hero_section_title}
                      </p>
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
                </div>
              </div>
            </section>


            <section className='container-fluid' style={{ backgroundColor: "#d9d9d9" }}>
              <div className='container'>
                <FeatureHome data={data} />
              </div>
            </section>
          </>
        )
      })}

      <section className='container'>
        {heroSectionData.map((data) => {
          return (
            <div className='row' style={{ marginBottom: "3%" }}>
              <div className='col-lg-12 text-center'>
                <h2 className='style-2' style={{ fontSize: "50px" }}>Ideal Exchange (IDX)</h2>
                <p style={{ fontWeight: "700", color: "white" }}>{data.approach_title}</p>
                <p>{data.approach_subtitle}</p>
                <img src="./img/favicon.png" alt="faviconImage" width="auto" height="36px" />
              </div>
            </div>
          )
        })}
        <div className='container px-0'>
          <FeatureBox />
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <span onClick={() => window.open("/wallet", "_self")} className="btn-main btn-main-custom2 lead" style={{ borderRadius: "6px", marginRight: "10px", backgroundColor: "#3bffae" }}>Get Started Now</span>
            <div style={{ letterSpacing: "5px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "20px" }} class="MuiBox-root jss17 jss63" bis_skin_checked="1">DREAM   ALWAYS
              <div style={{ color: "rgb(59, 255, 174)" }} className="ms-2 me-2" bis_skin_checked="1">|</div>
              IDEAL  EXCHANGE
            </div>
          </div>
        </div>
      </section>


      <section className='container-fuild' style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className='style-2 text-center' style={{ fontSize: "1.2em", color: "black" }}>TRUSTED PARTNERS</h2>
            </div>
            <div className='col-lg-12 d-flex justify-content-center align-items-center flex-wrap'>
              {partnersData.map((data) => {
                return <TrustedPartners data={data} key={data.id} />
              })}
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
  )
};
export default Homethree;