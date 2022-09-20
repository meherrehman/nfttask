import React from 'react'

const CreatorsHome = () => {
    return (
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-6">
                <h1 style={{ color: "black" }}>Creators &
                    Collaborators</h1>
                <p>CR8 : The creative share of the future. CR8 tokens gain value as the IP itself grows and enters new mediums. As the IP expands and becomes more popular, other CR8 tokens related to the original IP can help each other gain value faster.</p>
                <span onClick={() => window.open("/home1", "_self")} className="btn-main btn-main-custom1 lead" style={{ borderRadius: "6px", marginRight: "10px", backgroundColor: "black", color: "#FF343F" }}>Learn More</span>
            </div>
            <div className="col-6">
                <img src="./img/creators1.png" alt="creatorsImg" className='img-fluid' style={{ borderRadius: "15px 15px 0px 0px" }} />
                <img src="./img/creators2.png" alt="creatorsImg" className='img-fluid' style={{ borderRadius: "0px 0px 15px 15px" }} />
            </div>
        </div>
    )
}

export default CreatorsHome;