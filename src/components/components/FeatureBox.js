import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import axios from 'axios';
import "../../GlobalVariables"
import { useEffect } from 'react';
import { useState } from 'react';

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

<<<<<<< HEAD
const featurebox = () => (
  <div className='row'>
    <div className="col-lg-4 col-md-6 mb-3">
      <div className="feature-box f-boxed style-3 first-feature" style={{ height: "450px" }}>
        <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
          <div className='walletBoxes d-flex justify-content-center align-items-center flex-wrap'>
            <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
            <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
            <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
            <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
            <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
            <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
            <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
            <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
            <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
            <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
            <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
            <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
          </div>
        </Reveal>
        <div className="text mt-3">
          <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
            <h4 className="">Set up your wallet</h4>
          </Reveal>
          <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
            <p className="">
              Use your existing crypto wallets or setup here in two easy steps.</p>
          </Reveal>
        </div>
        <i className="wm icon_wallet"></i>
      </div>
    </div>
=======
const Featurebox = () => {
>>>>>>> 7777451205bf60c637a30a69b157227be71eaffb

  useEffect(() => {
    axios.get(`${global.BackendUrl}/getPoints`).then((response) => {
      setFeatureData(response.data)
    })
  }, [])

  const [FeatureData, setFeatureData] = useState([]);


  return (
    FeatureData.length > 0 ?
      <div className='row'>
        <div className="col-lg-4 col-md-6 mb-3">
          <div className="feature-box f-boxed style-3" style={{ height: "450px" }}>
            <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
              <div className='walletBoxes d-flex justify-content-center align-items-center flex-wrap'>
                <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
                <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
                <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
                <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
                <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
                <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
                <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
                <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
                <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
                <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
                <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
                <div style={{ width: "40px", height: "40px", margin: "5px", opacity: "1", borderRadius: "10px", backgroundColor: "#171719" }}></div>
              </div>
            </Reveal>
            <div className="text mt-3">
              <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                <h4 className="">{FeatureData[0].title}</h4>
              </Reveal>
              <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                <p className="">
                  {FeatureData[0].short_text}</p>
              </Reveal>
            </div>
            <i className="wm icon_wallet"></i>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-3">
          <div className="feature-box f-boxed style-3" style={{ height: "450px" }}>
            <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
              <div className='d-flex justify-content-center align-items-center'>
                <div className="imageBorder" style={{ border: "1px solid white", display: "inline-block", padding: "7px", borderRadius: "18px" }}>
                  <img src="./img/avatar-3.png" alt="avaterImage" style={{ borderRadius: "18px" }} width="80px" />
                </div>
                <div className="imageBorder mx-2" style={{ border: "1px solid white", display: "inline-block", padding: "7px", borderRadius: "18px" }}>
                  <img src="./img/avatar-2.jpg" alt="avaterImage" style={{ borderRadius: "18px" }} width="80px" />
                </div>
                <div className="imageBorder" style={{ border: "1px solid white", display: "inline-block", padding: "7px", borderRadius: "18px" }}>
                  <img src="./img/avatar-4.png" alt="avaterImage" style={{ borderRadius: "18px" }} width="80px" />
                </div>
              </div>
            </Reveal>
            <div className="text mt-3">
              <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                <h4 className="">{FeatureData[1].title}
                </h4>
              </Reveal>
              <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                <p className="">
                  {FeatureData[1].short_text}</p>
              </Reveal>
            </div>
            <i className="wm icon_cloud-upload_alt"></i>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-3">
          <div className="feature-box f-boxed style-3" style={{ height: "450px" }}>
            <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
              <div className="imageBorder">
                <img src="./img/avatar-1.png" alt="avatarImage" width="100%" style={{ borderRadius: "15px 15px 0px 0px" }} />
              </div>
            </Reveal>
            <div className="text mt-3">
              <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                <h4 className="">{FeatureData[2].title}
                </h4>
              </Reveal>
              <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                <p className="">
                  {FeatureData[2].short_text}</p>
              </Reveal>
            </div>
            <i className="wm icon_tags_alt"></i>
          </div>
        </div>
      </div>
      : ""
  )
};
export default Featurebox;