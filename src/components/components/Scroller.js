import React from 'react'
import '../../assets/CSSfiles/Scroller.css'

const Scroller = () => {
    return (
        <div className='marquee_Outer_box' style={{ background: "black", display: "block" }}>
            <div >
                <marquee speed={50} loop="">
                    <div className="outer_box" >
                        <div className="inner_box" >
                            <div className="jss96 big" >
                                Bored Ape Laser Eyes Club
                            </div>
                            <div className="inner_box" >
                                <div className="jss98 jss11" >
                                    <img
                                        src="/img/ethers-logo.png"
                                        alt="#"
                                        style={{ height: 15, marginRight: 5 }}
                                    />
                                    0.002
                                </div>
                                <div className="jss99 jss11" >
                                    0%
                                </div>
                            </div>
                        </div>
                        <div className=" inner_box" >
                            <div className="big" >
                                African Statut
                            </div>
                            <div className="inner_box" >
                                <div className="  jss11" >
                                    <img
                                        src="/img/ethers-logo.png"
                                        alt="#"
                                        style={{ height: 15, marginRight: 5 }}
                                    />
                                    0.00075
                                </div>
                                <div className="space" >
                                    0%
                                </div>
                            </div>
                        </div>
                        <div className=" inner_box" >
                            <div className=" big" >
                                CyberGods 🔥
                            </div>
                            <div className=" inner_box" >
                                <div className=" space" >
                                    <img
                                        src="/img/ethers-logo.png"
                                        alt="#"
                                        style={{ height: 15, marginRight: 5 }}
                                    />
                                    0.0009
                                </div>
                                <div className=" space" >
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
