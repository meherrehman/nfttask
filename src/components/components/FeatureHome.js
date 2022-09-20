import React from 'react'
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

const FeatureHome = () => {
    return (
        <div className='row d-flex justify-content-center align-items-center'>
            <div className="col-6">
                <h6 style={{ color: "black", fontWeight: "900" }}>FEATURED</h6>
                <h4 style={{ color: "black", fontWeight: "900", fontSize: "3em", margin: "40px 0px" }}>(IDX)</h4>
                <h4 style={{ color: "black", fontWeight: "900", fontSize: "2em" }}>A BEGINNERS GUIDE TO THE IDX</h4>
                <p style={{ margin: "20px 0px" }}>As part of an ongoing artist series for Genesis, I reimagined their newly redesigned G70 sedan as reflective sculptural artworks in a rustic neoclassical setting.</p>
                <span onClick={() => window.open("/wallet", "_self")} className="btn-main btn-main-custom1 lead" style={{ borderRadius: "6px", marginRight: "10px", backgroundColor: "black", color: "#FF343F" }}>Join Now</span>
            </div>
            <div className="col-6">
                <video src="./img/side_video.mp4" typeof='video/mp4' autoPlay width="100%" controls></video>
            </div>
        </div>
    )
}

export default FeatureHome;