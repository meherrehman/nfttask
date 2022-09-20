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

const FeatureHome2 = () => {
    return (
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-6">
                <h4 style={{ color: "black", marginBottom: "20px" }}>FEATURED</h4>
                <div className='d-flex align-items-center'>
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
                <h2 style={{ color: "black" }}>COMING SOON</h2>
                <span onClick={() => window.open("/explore", "_self")} className="btn-main btn-main-custom1 lead" style={{ borderRadius: "6px", marginRight: "10px", backgroundColor: "black", color: "#FF343F" }}>See Project</span>
            </div>
            <div className="col-6">
                <p>Featured creators and investors coming in April.</p>
                <span onClick={() => window.open("/wallet", "_self")} className="btn-main btn-main-custom1 lead" style={{ borderRadius: "6px", marginRight: "10px", backgroundColor: "black", color: "#FF343F" }}>Connect Wallet</span>
            </div>
        </div>
    )
}

export default FeatureHome2;