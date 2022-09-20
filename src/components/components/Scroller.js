import React from 'react'
import '../../assets/CSSfiles/Scroller.css'

const Scroller = () => {
    return (
        <div style={{ background: "black", display: "block" }}>
            <div className="MuiBox-root jss93 ticker-banner" bis_skin_checked={1}>
                <marquee speed={50} loop="">
                <div className="MuiBox-root jss94 outer_box" bis_skin_checked={1}>
                    <div className="MuiBox-root jss95 inner_box" bis_skin_checked={1}>
                        <div className="MuiBox-root jss96 big" bis_skin_checked={1}>
                            Bored Ape Laser Eyes Club
                        </div>
                        <div className="MuiBox-root jss97 inner_box" bis_skin_checked={1}>
                            <div className="MuiBox-root jss98 jss11" bis_skin_checked={1}>
                                <img
                                    src="/img/ethers-logo.png"
                                    alt="#"
                                    style={{ height: 15, marginRight: 5 }}
                                />
                                0.002
                            </div>
                            <div className="MuiBox-root jss99 jss11" bis_skin_checked={1}>
                                0%
                            </div>
                        </div>
                    </div>
                    <div className="MuiBox-root jss100 inner_box" bis_skin_checked={1}>
                        <div className="MuiBox-root jss101 big" bis_skin_checked={1}>
                            African Statut
                        </div>
                        <div className="MuiBox-root jss102 inner_box" bis_skin_checked={1}>
                            <div className="MuiBox-root jss103 jss11" bis_skin_checked={1}>
                                <img
                                    src="/img/ethers-logo.png"
                                    alt="#"
                                    style={{ height: 15, marginRight: 5 }}
                                />
                                0.00075
                            </div>
                            <div className="MuiBox-root jss104 space" bis_skin_checked={1}>
                                0%
                            </div>
                        </div>
                    </div>
                    <div className="MuiBox-root jss105 inner_box" bis_skin_checked={1}>
                        <div className="MuiBox-root jss106 big" bis_skin_checked={1}>
                            CyberGods 🔥
                        </div>
                        <div className="MuiBox-root jss107 inner_box" bis_skin_checked={1}>
                            <div className="MuiBox-root jss108 space" bis_skin_checked={1}>
                                <img
                                    src="/img/ethers-logo.png"
                                    alt="#"
                                    style={{ height: 15, marginRight: 5 }}
                                />
                                0.0009
                            </div>
                            <div className="MuiBox-root jss109 space" bis_skin_checked={1}>
                                0%
                            </div>
                        </div>
                    </div>
                </div>
                </marquee>
            </div>

        </div>
    )
}

export default Scroller
