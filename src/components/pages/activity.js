import React from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import FeatureBox from '../components/FeatureBox';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import FeatureHome from '../components/FeatureHome';
import TrustedPartners from '../components/TrustedPartners';
import '../../assets/CSSfiles/Activity.css'




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

const Activity = function () {

  const [openMenu, setOpenMenu] = React.useState(true);
  const [openMenu1, setOpenMenu1] = React.useState(false);
  const [openMenu2, setOpenMenu2] = React.useState(false);
  const [openMenu3, setOpenMenu3] = React.useState(false);
  const [openMenu4, setOpenMenu4] = React.useState(false);
  const handleBtnClick = (): void => {
    setOpenMenu(!openMenu);
    setOpenMenu1(false);
    setOpenMenu2(false);
    setOpenMenu3(false);
    setOpenMenu4(false);
    document.getElementById("follow").classList.remove("active");
    document.getElementById("sale").classList.remove("active");
    document.getElementById("offer").classList.remove("active");
    document.getElementById("like").classList.remove("active");
  };
  const handleBtnClick1 = (): void => {
    setOpenMenu1(!openMenu1);
    setOpenMenu2(false);
    setOpenMenu(false);
    setOpenMenu3(false);
    setOpenMenu4(false);
    document.getElementById("follow").classList.add("active");
    document.getElementById("sale").classList.remove("active");
    document.getElementById("offer").classList.remove("active");
    document.getElementById("like").classList.remove("active");
  };
  const handleBtnClick2 = (): void => {
    setOpenMenu2(!openMenu2);
    setOpenMenu(false);
    setOpenMenu1(false);
    setOpenMenu3(false);
    setOpenMenu4(false);
    document.getElementById("follow").classList.remove("active");
    document.getElementById("sale").classList.add("active");
    document.getElementById("offer").classList.remove("active");
    document.getElementById("like").classList.remove("active");
  };
  const handleBtnClick3 = (): void => {
    setOpenMenu3(!openMenu3);
    setOpenMenu(false);
    setOpenMenu1(false);
    setOpenMenu2(false);
    setOpenMenu4(false);
    document.getElementById("follow").classList.remove("active");
    document.getElementById("sale").classList.remove("active");
    document.getElementById("offer").classList.remove("active");
    document.getElementById("like").classList.add("active");
  };
  const handleBtnClick4 = (): void => {
    setOpenMenu4(!openMenu4);
    setOpenMenu(false);
    setOpenMenu1(false);
    setOpenMenu3(false);
    setOpenMenu2(false);
    document.getElementById("follow").classList.remove("active");
    document.getElementById("sale").classList.remove("active");
    document.getElementById("offer").classList.add("active");
    document.getElementById("like").classList.remove("active");
  };


  return (
    <div>
      <GlobalStyles />
      <section className="jumbotron no-bg" style={{ background: `url(${'./img/Activity_bg.png'}) center/ 100% 100% no-repeat, 0% 0% / cover rgb(0, 0, 0)` }}>
        <div className='container ' style={{ margin: "2rem 5rem" }}>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className="spacer-single"></div>
              {/* <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
              <h6 className=""><span className="text-uppercase color">Gigaland Market</span></h6>
            </Reveal> */}
              <div className="spacer-10"></div>
              <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
                <h1 style={{ maxWidth: "300px", fontSize: "50px", fontFamily: "Rubik,sans-serif" }}>ORIGINS CLUB</h1>
              </Reveal>
              <Reveal style={{ maxWidth: "350px", fontFamily: "Rubik,sans-serif" }} className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce>
                <p className=" lead col-white">
                  Don't just support the next big franchise, own a part of it.Sell, invest, and trade the hottest creative works of today and the future.
                </p>
                {/* <p className=" lead col-white">Sell, invest, and trade the hottest creative works of today and the future.</p> */}
              </Reveal>
              <div className="spacer-10"></div>
              <Reveal className='onStep' keyframes={fadeInUp} delay={800} duration={900} triggerOnce>
                <div className='heroSecBtn d-flex'>
                  <span onClick={() => window.open("/#", "_self")} className="btn-main btn-main-white lead" style={{ borderRadius: "6px", display: "block", width: "10rem", marginRight: "10px", backgroundColor: "#3bffae" }}>Create</span>
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

  
        <section  style={{ display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <div style={{ maxWidth: "50%",letterSpacing:"5px", display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center", textAlign: "center", marginTop: "20px" }} class="MuiBox-root jss17 jss63" bis_skin_checked="1">DREAM   ALWAYS
            <div style={{ color:"rgb(59, 255, 174)" }} class="ms-5 me-5" bis_skin_checked="1">|</div>
            IDEAL  EXCHANGE
          </div>
          <h2 style={{ marginTop: "50px" }}>Origins Club</h2>
          <h6 style={{ color: "rgb(59, 255, 174)", textTransform: "uppercase", letterSpacing: "1px" }}>FEATURED DAO’S</h6>
          <p style={{ maxWidth: "50%", textAlign: "center", marginTop: "20px" }}>In just a few clicks, you’ll be able to see all the traits of a collection and which NFTs are rare - all before anyone else can.</p>
          <img style={{ marginTop: "30px" }} src="/img/favicon.png" class="logo-brand-full" alt="#" ></img>
        </section>
        <section className="how_it_works_container dark" style={{ paddingTop: 70 }}>
  <div className="container" bis_skin_checked={1}>
    <h6
      style={{
        color: "rgb(59, 255, 174)",
        textTransform: "uppercase",
        letterSpacing: 1,
        marginBottom: 20
      }}
    >
      FEATURED IDEAS
    </h6>
    <div className="row" bis_skin_checked={1}>
      <div
        className="col-lg-4 col-md-6"
        style={{ marginBottom: 50 }}
        bis_skin_checked={1}
      >
        <div className="feature-box f-boxed style-3 idea" bis_skin_checked={1}>
          <div className="onStep css-1ae53wo" bis_skin_checked={1}>
            <div className="jss65" bis_skin_checked={1}>
              <div className="image_border" bis_skin_checked={1}>
                <img
                  src="/img/avatar-5.jpg"
                  className="jss"
                  alt="#"
                />
              </div>
              <img
                src="/img/favicon.png"
                className="logo-brand-full"
                alt="#"
              />
            </div>
          </div>
          <div className="text" bis_skin_checked={1}>
            <div className="onStep css-izqbpf" bis_skin_checked={1}>
              <div className="jss65" bis_skin_checked={1}>
                <h4 style={{ letterSpacing: 1 }}>BILLIE ILISH X UNIQLO</h4>
                <div className="jss67" bis_skin_checked={1}>
                  BILSH
                </div>
              </div>
            </div>
            <div className="onStep css-3hramb" bis_skin_checked={1}>
              <p className="">
                Welcome to The Creature World. You have arrived in a nearby
                magical dimension of love, divine intervention.
              </p>
            </div>
            <div className="onStep css-3hramb" bis_skin_checked={1}>
              <div className="jss65" bis_skin_checked={1}>
                <h6
                  style={{
                    color: "rgb(128, 128, 128)",
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}
                >
                  # IDEA
                </h6>
                <h6
                  style={{
                    color: "rgb(128, 128, 128)",
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}
                >
                  # NFT
                </h6>
                <h6
                  style={{
                    color: "rgb(128, 128, 128)",
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}
                >
                  # MEMBERS
                </h6>
              </div>
            </div>
            <div className="onStep css-3hramb" bis_skin_checked={1}>
              <div className="jss65" bis_skin_checked={1}>
                <div className="jss68" bis_skin_checked={1}>
                  12
                </div>
                <div className="jss68" bis_skin_checked={1}>
                  215
                </div>
                <div className="jss68" bis_skin_checked={1}>
                  120.426
                </div>
              </div>
            </div>
          </div>
          <i className="wm icon_tags_alt" />
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6"
        style={{ marginBottom: 50 }}
        bis_skin_checked={1}
      >
        <div className="feature-box f-boxed style-3 idea" bis_skin_checked={1}>
          <div className="onStep css-1ae53wo" bis_skin_checked={1}>
            <div className="jss65" bis_skin_checked={1}>
              <div className="image_border" bis_skin_checked={1}>
                <img
                  src="/img/avatar-6.jpg"
                  className="jss"
                  alt="#"
                />
              </div>
              <img
                src="/img/favicon.png"
                className="logo-brand-full"
                alt="#"
              />
            </div>
          </div>
          <div className="text" bis_skin_checked={1}>
            <div className="onStep css-izqbpf" bis_skin_checked={1}>
              <div className="jss65" bis_skin_checked={1}>
                <h4 style={{ letterSpacing: 1 }}>M.BAY X oPTIMUS</h4>
                <div className="jss71" bis_skin_checked={1}>
                  BAYOPT
                </div>
              </div>
            </div>
            <div className="onStep css-3hramb" bis_skin_checked={1}>
              <p className="">
                Welcome to The Creature World. You have arrived in a nearby
                magical dimension of love, divine intervention.
              </p>
            </div>
            <div className="onStep css-3hramb" bis_skin_checked={1}>
              <div className="jss69" bis_skin_checked={1}>
                <h6
                  style={{
                    color: "rgb(128, 128, 128)",
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}
                >
                  # IDEA
                </h6>
                <h6
                  style={{
                    color: "rgb(128, 128, 128)",
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}
                >
                  # NFT
                </h6>
                <h6
                  style={{
                    color: "rgb(128, 128, 128)",
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}
                >
                  # MEMBERS
                </h6>
              </div>
            </div>
            <div className="onStep css-3hramb" bis_skin_checked={1}>
              <div className="jss69" bis_skin_checked={1}>
                <div className="jss72" bis_skin_checked={1}>
                  12
                </div>
                <div className="jss72" bis_skin_checked={1}>
                  215
                </div>
                <div className="jss72" bis_skin_checked={1}>
                  120.426
                </div>
              </div>
            </div>
          </div>
          <i className="wm icon_tags_alt" />
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6"
        style={{ marginBottom: 50 }}
        bis_skin_checked={1}
      >
        <div className="feature-box f-boxed style-3 idea" bis_skin_checked={1}>
          <div className="onStep css-1ae53wo" bis_skin_checked={1}>
            <div className="jss65" bis_skin_checked={1}>
              <div className="image_border" bis_skin_checked={1}>
                <img
                  src="/img/avatar-7.png"
                  className="jss"
                  alt="#"
                />
              </div>
              <img
                src="/img/favicon.png"
                className="logo-brand-full"
                alt="#"
              />
            </div>
          </div>
          <div className="text" bis_skin_checked={1}>
            <div className="onStep css-izqbpf" bis_skin_checked={1}>
              <div className="jss65" bis_skin_checked={1}>
                <h4 style={{ letterSpacing: 1 }}>THE BPATIST</h4>
                <div className="jss75" bis_skin_checked={1}>
                  BAPTS
                </div>
              </div>
            </div>
            <div className="onStep css-3hramb" bis_skin_checked={1}>
              <p className="">
                Welcome to The Creature World. You have arrived in a nearby
                magical dimension of love, divine intervention.
              </p>
            </div>
            <div className="onStep css-3hramb" bis_skin_checked={1}>
              <div className="jss73" bis_skin_checked={1}>
                <h6
                  style={{
                    color: "rgb(128, 128, 128)",
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}
                >
                  # IDEA
                </h6>
                <h6
                  style={{
                    color: "rgb(128, 128, 128)",
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}
                >
                  # NFT
                </h6>
                <h6
                  style={{
                    color: "rgb(128, 128, 128)",
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}
                >
                  # MEMBERS
                </h6>
              </div>
            </div>
            <div className="onStep css-3hramb" bis_skin_checked={1}>
              <div className="jss73" bis_skin_checked={1}>
                <div className="jss76" bis_skin_checked={1}>
                  12
                </div>
                <div className="jss76" bis_skin_checked={1}>
                  215
                </div>
                <div className="jss76" bis_skin_checked={1}>
                  120.426
                </div>
              </div>
            </div>
          </div>
          <i className="wm icon_tags_alt" />
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6"
        style={{ marginBottom: 50 }}
        bis_skin_checked={1}
      >
        <div className="feature-box f-boxed style-3 idea" bis_skin_checked={1}>
          <div className="onStep css-1ae53wo" bis_skin_checked={1}>
            <div className="jss65" bis_skin_checked={1}>
              <div className="image_border" bis_skin_checked={1}>
                <img
                  src="/img/avatar-8.png"
                  className="jss"
                  alt="#"
                />
              </div>
              <img
                src="/img/favicon.png"
                className="logo-brand-full"
                alt="#"
              />
            </div>
          </div>
          <div className="text" bis_skin_checked={1}>
            <div className="onStep css-izqbpf" bis_skin_checked={1}>
              <div className="jss65" bis_skin_checked={1}>
                <h4 style={{ letterSpacing: 1 }}>PEGBOARD NERDS</h4>
                <div className="jss79" bis_skin_checked={1}>
                  BILSH
                </div>
              </div>
            </div>
            <div className="onStep css-3hramb" bis_skin_checked={1}>
              <p className="">
                Welcome to The Creature World. You have arrived in a nearby
                magical dimension of love, divine intervention.
              </p>
            </div>
            <div className="onStep css-3hramb" bis_skin_checked={1}>
              <div className="jss77" bis_skin_checked={1}>
                <h6
                  style={{
                    color: "rgb(128, 128, 128)",
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}
                >
                  # IDEA
                </h6>
                <h6
                  style={{
                    color: "rgb(128, 128, 128)",
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}
                >
                  # NFT
                </h6>
                <h6
                  style={{
                    color: "rgb(128, 128, 128)",
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}
                >
                  # MEMBERS
                </h6>
              </div>
            </div>
            <div className="onStep css-3hramb" bis_skin_checked={1}>
              <div className="jss77" bis_skin_checked={1}>
                <div className="jss80" bis_skin_checked={1}>
                  12
                </div>
                <div className="jss80" bis_skin_checked={1}>
                  215
                </div>
                <div className="jss80" bis_skin_checked={1}>
                  120.426
                </div>
              </div>
            </div>
          </div>
          <i className="wm icon_tags_alt" />
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6"
        style={{ marginBottom: 50 }}
        bis_skin_checked={1}
      >
        <div className="feature-box f-boxed style-3 idea" bis_skin_checked={1}>
          <div className="onStep css-1ae53wo" bis_skin_checked={1}>
            <div className="jss65" bis_skin_checked={1}>
              <div className="image_border" bis_skin_checked={1}>
                <img
                  src="/img/avatar-9.jpg"
                  className="jss"
                  alt="#"
                />
              </div>
              <img
                src="/img/favicon.png"
                className="logo-brand-full"
                alt="#"
              />
            </div>
          </div>
          <div className="text" bis_skin_checked={1}>
            <div className="onStep css-izqbpf" bis_skin_checked={1}>
              <div className="jss65" bis_skin_checked={1}>
                <h4 style={{ letterSpacing: 1 }}>GEOGO</h4>
                <div className="jss83" bis_skin_checked={1}>
                  BAYOPT
                </div>
              </div>
            </div>
            <div className="onStep css-3hramb" bis_skin_checked={1}>
              <p className="">
                Welcome to The Creature World. You have arrived in a nearby
                magical dimension of love, divine intervention.
              </p>
            </div>
            <div className="onStep css-3hramb" bis_skin_checked={1}>
              <div className="jss81" bis_skin_checked={1}>
                <h6
                  style={{
                    color: "rgb(128, 128, 128)",
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}
                >
                  # IDEA
                </h6>
                <h6
                  style={{
                    color: "rgb(128, 128, 128)",
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}
                >
                  # NFT
                </h6>
                <h6
                  style={{
                    color: "rgb(128, 128, 128)",
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}
                >
                  # MEMBERS
                </h6>
              </div>
            </div>
            <div className="onStep css-3hramb" bis_skin_checked={1}>
              <div className="jss81" bis_skin_checked={1}>
                <div className="jss84" bis_skin_checked={1}>
                  12
                </div>
                <div className="jss84" bis_skin_checked={1}>
                  215
                </div>
                <div className="jss84" bis_skin_checked={1}>
                  120.426
                </div>
              </div>
            </div>
          </div>
          <i className="wm icon_tags_alt" />
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6"
        style={{ marginBottom: 50 }}
        bis_skin_checked={1}
      >
        <div className="feature-box f-boxed style-3 idea" bis_skin_checked={1}>
          <div className="onStep css-1ae53wo" bis_skin_checked={1}>
            <div className="jss65" bis_skin_checked={1}>
              <div className="image_border" bis_skin_checked={1}>
                <img
                  src="/img/avatar-10.png"
                  className="jss"
                  alt="#"
                />
              </div>
              <img
                src="/img/favicon.png"
                className="logo-brand-full"
                alt="#"
              />
            </div>
          </div>
          <div className="text" bis_skin_checked={1}>
            <div className="onStep css-izqbpf" bis_skin_checked={1}>
              <div className="jss65" bis_skin_checked={1}>
                <h4 style={{ letterSpacing: 1 }}>RAREST EXP.</h4>
                <div className="jss87" bis_skin_checked={1}>
                  RSTS
                </div>
              </div>
            </div>
            <div className="onStep css-3hramb" bis_skin_checked={1}>
              <p className="">
                Welcome to The Creature World. You have arrived in a nearby
                magical dimension of love, divine intervention.
              </p>
            </div>
            <div className="onStep css-3hramb" bis_skin_checked={1}>
              <div className="jss85" bis_skin_checked={1}>
                <h6
                  style={{
                    color: "rgb(128, 128, 128)",
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}
                >
                  # IDEA
                </h6>
                <h6
                  style={{
                    color: "rgb(128, 128, 128)",
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}
                >
                  # NFT
                </h6>
                <h6
                  style={{
                    color: "rgb(128, 128, 128)",
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}
                >
                  # MEMBERS
                </h6>
              </div>
            </div>
            <div className="onStep css-3hramb" bis_skin_checked={1}>
              <div className="jss85" bis_skin_checked={1}>
                <div className="jss88" bis_skin_checked={1}>
                  12
                </div>
                <div className="jss88" bis_skin_checked={1}>
                  215
                </div>
                <div className="jss88" bis_skin_checked={1}>
                  120.426
                </div>
              </div>
            </div>
          </div>
          <i className="wm icon_tags_alt" />
        </div>
      </div>
    </div>
  </div>
  <input
    type="button"
    className="btn-main"
    defaultValue="More IDEAs"
    style={{ marginTop: 70, marginBottom: 70 }}
  />
</section>

   

      <Footer />
    </div>

  );
}

export default Activity;