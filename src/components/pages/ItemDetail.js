import React from "react";
import Clock from "../components/Clock";
import Select from 'react-select'
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #212428;
  }
`;


const customStyles = {
    option: (base, state) => ({
        ...base,
        background: "#fff",
        color: "#212428",
        borderRadius: state.isFocused ? "0" : 0,
        "&:hover": {
            background: "#FF343F",
        }
    }),
    menu: base => ({
        ...base,
        background: "#212428 !important",
        borderRadius: 0,
        marginTop: 0
    }),
    menuList: base => ({
        ...base,
        padding: 0
    }),
    control: (base, state) => ({
        ...base,
        padding: 2
    })
};


const options2 = [
    { value: 'All', label: 'All' },
    { value: 'Active', label: 'Active' },
    { value: 'Expired', label: 'Expired' }
]

const options1 = [
    { value: 'All', label: 'All' },
    { value: 'Sales', label: 'Sales' },
    { value: 'Mints', label: 'Mints' }
]



const Colection = function () {

    const [openMenu, setOpenMenu] = React.useState(true);
    const [openMenu1, setOpenMenu1] = React.useState(false);
    const [openMenu2, setOpenMenu2] = React.useState(false);
    const [openMenu3, setOpenMenu3] = React.useState(false);
    const [openMenu4, setOpenMenu4] = React.useState(false);
    const handleBtnClick = (): void => {
        setOpenMenu(!openMenu);
        setOpenMenu1(false);
        setOpenMenu2(false)
        setOpenMenu3(false)
        setOpenMenu4(false)
        document.getElementById("Mainbtn").classList.add("active");
        document.getElementById("Mainbtn1").classList.remove("active");
        document.getElementById("Mainbtn2").classList.remove("active");
        document.getElementById("Mainbtn3").classList.remove("active");
        document.getElementById("Mainbtn4").classList.remove("active");
    };
    const handleBtnClick1 = (): void => {
        setOpenMenu1(!openMenu1);
        setOpenMenu(false);
        setOpenMenu2(false)
        setOpenMenu3(false)
        setOpenMenu4(false)
        document.getElementById("Mainbtn1").classList.add("active");
        document.getElementById("Mainbtn").classList.remove("active");
        document.getElementById("Mainbtn2").classList.remove("active");
        document.getElementById("Mainbtn3").classList.remove("active");
        document.getElementById("Mainbtn4").classList.remove("active");
    };
    const handleBtnClick2 = (): void => {
        setOpenMenu2(!openMenu2);
        setOpenMenu(false);
        setOpenMenu1(false);
        setOpenMenu3(false)
        setOpenMenu4(false)
        document.getElementById("Mainbtn2").classList.add("active");
        document.getElementById("Mainbtn1").classList.remove("active");
        document.getElementById("Mainbtn").classList.remove("active");
        document.getElementById("Mainbtn3").classList.remove("active");
        document.getElementById("Mainbtn4").classList.remove("active");
    };
    const handleBtnClick3 = (): void => {
        setOpenMenu3(!openMenu3);
        setOpenMenu(false);
        setOpenMenu1(false);
        setOpenMenu2(false)
        setOpenMenu4(false)
        document.getElementById("Mainbtn3").classList.add("active");
        document.getElementById("Mainbtn1").classList.remove("active");
        document.getElementById("Mainbtn").classList.remove("active");
        document.getElementById("Mainbtn2").classList.remove("active");
        document.getElementById("Mainbtn4").classList.remove("active");
    };
    const handleBtnClick4 = (): void => {
        setOpenMenu4(!openMenu4);
        setOpenMenu(false);
        setOpenMenu1(false);
        setOpenMenu2(false)
        setOpenMenu3(false)
        document.getElementById("Mainbtn4").classList.add("active");
        document.getElementById("Mainbtn1").classList.remove("active");
        document.getElementById("Mainbtn").classList.remove("active");
        document.getElementById("Mainbtn2").classList.remove("active");
        document.getElementById("Mainbtn3").classList.remove("active");
    };
    return (
        <div>
            <GlobalStyles />

            <section className='container'>
                <div className='row mt-md-5 pt-md-4'>

                    <div className="col-md-6 text-center">
                        <img src="./img/items/big-1.jpg" className="img-fluid img-rounded mb-sm-30" alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="item_info">
                            <h2>Pinky Ocean</h2>
                            <p>0x6e000415ff40a8e0a1ddabe1f4ff6d54efff1ff0</p>
                            <div className="item_info_counts">
                                <div className="item_info_type"><i className="fa fa-image"></i>Art</div>
                                <div className="item_info_views"><i className="fa fa-eye"></i>250</div>
                                <div className="item_info_like"><i className="fa fa-heart"></i>18</div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                            <h6>Creator</h6>
                            <div className="item_author">
                                <div className="author_list_pp">
                                    <span>
                                        <img className="lazy" src="./img/author/author-1.jpg" alt="" />
                                    </span>
                                </div>
                                <div className="author_list_info">
                                    <span>Monica Lucas</span>
                                </div>
                            </div>

                            <div className="spacer-40"></div>
                            <p>Total : <span style={{ color: "white", fontWeight: "700" }}>1000</span> shares (Minted)</p>
                            <div className="de_tab">

                                <ul className="de_nav">
                                    <li id='Mainbtn' className="active"><span onClick={handleBtnClick}>Details</span></li>
                                    <li id='Mainbtn1' className=''><span onClick={handleBtnClick1}>Share Holders</span></li>
                                    <li id='Mainbtn2' className=''><span onClick={handleBtnClick2}>Sales (0)</span></li>
                                    <li id='Mainbtn3' className=''><span onClick={handleBtnClick3}>Offers (0)</span></li>
                                    <li id='Mainbtn4' className=''><span onClick={handleBtnClick4}>Activity</span></li>
                                </ul>

                                <div className="de_tab_content">
                                    {openMenu && (
                                        <div className="tab-1 onStep fadeIn">
                                            <p>Details</p>
                                            {/* <div className="p_list">
                                                <div className="p_list_pp">
                                                    <span>
                                                        <img className="lazy" src="./img/author/author-1.jpg" alt="" />
                                                        <i className="fa fa-check"></i>
                                                    </span>
                                                </div>
                                                <div className="p_list_info">
                                                    Bid accepted <b>0.005 ETH</b>
                                                    <span>by <b>Monica Lucas</b> at 6/15/2021, 3:20 AM</span>
                                                </div>
                                            </div>

                                            <div className="p_list">
                                                <div className="p_list_pp">
                                                    <span>
                                                        <img className="lazy" src="./img/author/author-2.jpg" alt="" />
                                                        <i className="fa fa-check"></i>
                                                    </span>
                                                </div>
                                                <div className="p_list_info">
                                                    Bid <b>0.005 ETH</b>
                                                    <span>by <b>Mamie Barnett</b> at 6/14/2021, 5:40 AM</span>
                                                </div>
                                            </div>

                                            <div className="p_list">
                                                <div className="p_list_pp">
                                                    <span>
                                                        <img className="lazy" src="./img/author/author-3.jpg" alt="" />
                                                        <i className="fa fa-check"></i>
                                                    </span>
                                                </div>
                                                <div className="p_list_info">
                                                    Bid <b>0.004 ETH</b>
                                                    <span>by <b>Nicholas Daniels</b> at 6/13/2021, 5:03 AM</span>
                                                </div>
                                            </div>

                                            <div className="p_list">
                                                <div className="p_list_pp">
                                                    <span>
                                                        <img className="lazy" src="./img/author/author-4.jpg" alt="" />
                                                        <i className="fa fa-check"></i>
                                                    </span>
                                                </div>
                                                <div className="p_list_info">
                                                    Bid <b>0.003 ETH</b>
                                                    <span>by <b>Lori Hart</b> at 6/12/2021, 12:57 AM</span>
                                                </div>
                                            </div> */}
                                        </div>
                                    )}

                                    {openMenu1 && (
                                        <div className="tab-2 onStep fadeIn">
                                            <div className="p_list">
                                                <div className="p_list_pp">
                                                    <span>
                                                        <img className="lazy" src="./img/author/author-5.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="p_list_info">
                                                    <b>0.005 ETH</b>
                                                    <span>by <b>Jimmy Wright</b> at 6/14/2021, 6:40 AM</span>
                                                    <span>Amount : <b style={{ color: "white", fontWeight: "700" }}>550 shares</b></span>
                                                    <span>Percentage : <b style={{ color: "white", fontWeight: "700" }}>55.00 %</b></span>
                                                </div>
                                            </div>

                                            <div className="p_list">
                                                <div className="p_list_pp">
                                                    <span>
                                                        <img className="lazy" src="./img/author/author-1.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="p_list_info">
                                                    <b>0.005 ETH</b>
                                                    <span>by <b>Jimmy Wright</b> at 6/14/2021, 6:40 AM</span>
                                                    <span>Amount : <b style={{ color: "white", fontWeight: "700" }}>550 shares</b></span>
                                                    <span>Percentage : <b style={{ color: "white", fontWeight: "700" }}>55.00 %</b></span>
                                                </div>
                                            </div>

                                            <div className="p_list">
                                                <div className="p_list_pp">
                                                    <span>
                                                        <img className="lazy" src="./img/author/author-2.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="p_list_info">
                                                    <b>0.005 ETH</b>
                                                    <span>by <b>Jimmy Wright</b> at 6/14/2021, 6:40 AM</span>
                                                    <span>Amount : <b style={{ color: "white", fontWeight: "700" }}>550 shares</b></span>
                                                    <span>Percentage : <b style={{ color: "white", fontWeight: "700" }}>55.00 %</b></span>
                                                </div>
                                            </div>
                                        </div>
                                    )}


                                    {openMenu2 && (
                                        <>
                                            <div className="tab-2 onStep fadeIn">
                                                <div className='dropdownSelect three' style={{ width: "300px", position: "relative", left: "25%" }}><Select className='select1' styles={customStyles} defaultValue={options2[0]} options={options2} /></div>
                                            </div>
                                            <p className="mt-2">No Sales</p>
                                        </>
                                    )}

                                    {openMenu3 && (
                                        <>
                                            <div className="tab-2 onStep fadeIn">
                                                <div className='dropdownSelect three' style={{ width: "300px", position: "relative", left: "25%" }}><Select className='select1' styles={customStyles} defaultValue={options2[0]} options={options2} /></div>
                                            </div>
                                            <p className="mt-2">No Offer</p>
                                        </>
                                    )}

                                    {openMenu4 && (
                                        <>
                                            <div className="tab-2 onStep fadeIn">
                                                <div className='dropdownSelect two' style={{ width: "300px", position: "relative", left: "25%" }}><Select className='select1' styles={customStyles} defaultValue={options1[0]} options={options1} /></div>
                                            </div>
                                            <div className="p_list mt-3">
                                                <div className="p_list_pp">
                                                    <span>
                                                        <img className="lazy" src="./img/author/author-5.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="p_list_info">
                                                    Sale of <b>0.005 ETH</b>
                                                    <span>by <b>Jimmy Wright</b> at 6/14/2021, 6:40 AM</span>
                                                    <span><b style={{ color: "white", fontWeight: "700" }}>550</b> shares</span>
                                                    <p>0x44044Ed21fE3e63F8B79e229F7fef2Ab3755Eb33 <br /> <b style={{ color: "white", fontWeight: "700" }}>To</b> <br /> 0x52FfC049b365AE3406Ecf3b0a7bbbBf05E84071a </p>
                                                </div>
                                            </div>
                                            <div className="p_list">
                                                <div className="p_list_pp">
                                                    <span>
                                                        <img className="lazy" src="./img/author/author-2.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="p_list_info">
                                                    Mint of <b style={{ color: "white", fontWeight: "700" }}>550 shares</b>
                                                    <span>by <b>Jimmy Wright</b> at 6/14/2021, 6:40 AM</span>
                                                    <p>0x44044Ed21fE3e63F8B79e229F7fef2Ab3755Eb33</p>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
}
export default Colection;