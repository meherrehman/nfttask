import React from 'react'

const TrustedPartners = ({ data }) => {
    return (
        <div >
            <img src={`https://codecanyon.kreativdev.com/plusagency/default/assets/front/img/partners/${data.image}`} alt="PartnersImg" width="180px" style={{ margin: "10px" }} />
        </div>
    )
}

export default TrustedPartners