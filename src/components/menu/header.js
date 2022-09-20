import React, { useEffect, useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import { header } from 'react-bootstrap';
import { Link } from '@reach/router';
import Scroller from '../components/Scroller'
import useOnclickOutside from "react-cool-onclickoutside";
// import { NavLink } from "react-router-dom"


setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);

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



const Header = function () {

  const [openMenu, setOpenMenu] = React.useState(false);
  const [openMenu1, setOpenMenu1] = React.useState(false);
  const [openMenu2, setOpenMenu2] = React.useState(false);
  const [openMenu3, setOpenMenu3] = React.useState(false);
  const handleBtnClick = (): void => {
    setOpenMenu(!openMenu);
  };
  const handleBtnClick1 = (): void => {
    setOpenMenu1(!openMenu1);
  };
  const handleBtnClick2 = (): void => {
    setOpenMenu2(!openMenu2);
  };
  const handleBtnClick3 = (): void => {
    setOpenMenu3(!openMenu3);
  };
  const closeMenu = (): void => {
    setOpenMenu(false);
  };
  const closeMenu1 = (): void => {
    setOpenMenu1(false);
  };
  const closeMenu2 = (): void => {
    setOpenMenu2(false);
  };
  const closeMenu3 = (): void => {
    setOpenMenu3(false);
  };
  const ref = useOnclickOutside(() => {
    closeMenu();
  });
  const ref1 = useOnclickOutside(() => {
    closeMenu1();
  });
  const ref2 = useOnclickOutside(() => {
    closeMenu2();
  });
  const ref3 = useOnclickOutside(() => {
    closeMenu3();
  });

  const [showmenu, btn_icon] = useState(false);
  useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      btn_icon(false);
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        totop.classList.add("show");

      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      } if (window.pageYOffset > sticky) {
        closeMenu();
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return (
    <div>
    <header id="myHeader" className='navbar white' style={{ backgroundColor: "#212428" }}>
      <div className='container'>
        <div className='row w-100-nav'>
          <div className='logo px-0'>
            <div className='navbar-title navbar-item'>
              <NavLink to="/home1">
                <img
                  src="./img/logo.png"
                  className=" d-block"
                  alt="#"
                  style={{ width: "170px" }}
                />
                <img
                  src="./img/logo.png"
                  className=" d-3"
                  alt="#"
                  style={{ width: "170px" }}
                />
                <img
                  src="./img/logo.png"
                  className=" d-none"
                  alt="#"
                  style={{ width: "170px" }}
                />
              </NavLink>
            </div>
          </div>

          <div className='search'>
            <input id="quick_search" className="xs-hide" name="quick_search" placeholder="Search artworks,creators and collectors ..." type="text" />
          </div>

          <BreakpointProvider>
            <Breakpoint l down>
              {showmenu &&
                <div className='menu'>
                  <div className='navbar-item'>
                    <div ref={ref}>
                      <NavLink to="/home1" className="dropdown-custom dropdown-toggle btn"
                        onClick={handleBtnClick}
                      >
                        IDEAL EXCHANGE
                      </NavLink>
                      {/* {openMenu && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu}>
                            <NavLink to="/" onClick={() => btn_icon(!showmenu)}>Homepage</NavLink>
                             <NavLink to="/home1" onClick={() => btn_icon(!showmenu)}>Homepage 1</NavLink>
                            <NavLink to="/home2" onClick={() => btn_icon(!showmenu)}>Homepage 1</NavLink>
                          </div>
                        </div>
                      )} */}
                    </div>
                  </div>
                  <div className='navbar-item'>
                    <div ref={ref1}>
                      <NavLink to="/activity" className="dropdown-custom dropdown-toggle btn"
                        onClick={handleBtnClick1}
                      >
                        ORIGINS CLUB
                      </NavLink>
                      {/* {openMenu1 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu1}>
                            <NavLink to="/explore" onClick={() => btn_icon(!showmenu)}>Explore</NavLink>
                            <NavLink to="/explore2" onClick={() => btn_icon(!showmenu)}>Explore 2</NavLink>
                            <NavLink to="/rangking" onClick={() => btn_icon(!showmenu)}>Rangking</NavLink>
                            <NavLink to="/colection" onClick={() => btn_icon(!showmenu)}>Collection</NavLink>
                            <NavLink to="/ItemDetail" onClick={() => btn_icon(!showmenu)}>Items Details</NavLink>
                            <NavLink to="/Auction" onClick={() => btn_icon(!showmenu)}>Live Auction</NavLink>
                            <NavLink to="/helpcenter" onClick={() => btn_icon(!showmenu)}>Help Center</NavLink>
                          </div>
                        </div>
                      )} */}
                    </div>
                  </div>
                  <div className='navbar-item'>
                    <div ref={ref2}>
                      <div className="dropdown-custom dropdown-toggle btn"
                        onClick={handleBtnClick2}
                      >
                        CATALOG
                      </div>
                      {openMenu2 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu2}>
                            <NavLink to="/Author" onClick={() => btn_icon(!showmenu)}>Author</NavLink>
                            <NavLink to="/wallet" onClick={() => btn_icon(!showmenu)}>Wallet</NavLink>
                            <NavLink to="/create" onClick={() => btn_icon(!showmenu)}>Create</NavLink>
                            <NavLink to="/news" onClick={() => btn_icon(!showmenu)}>News</NavLink>
                            <NavLink to="/works" onClick={() => btn_icon(!showmenu)}>Gallery</NavLink>
                            <NavLink to="/login" onClick={() => btn_icon(!showmenu)}>login</NavLink>
                            <NavLink to="/loginTwo" onClick={() => btn_icon(!showmenu)}>login 2</NavLink>
                            <NavLink to="/register" onClick={() => btn_icon(!showmenu)}>Register</NavLink>
                            <NavLink to="/contact" onClick={() => btn_icon(!showmenu)}>Contact Us</NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className='navbar-item'>
                    <NavLink to="/activity" onClick={() => btn_icon(!showmenu)}>
                      MY PORTFOLIO
                    </NavLink>
                  </div>
                  <div className='navbar-item'>
                    <div ref={ref3}>
                      <div className="dropdown-custom dropdown-toggle btn"
                        onClick={handleBtnClick3}
                      >
                        COMMUNITY
                      </div>
                      {openMenu3 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu3}>
                            <NavLink to="/elegantIcons" onClick={() => btn_icon(!showmenu)}>Elegant Icon</NavLink>
                            <NavLink to="/etlineIcons" onClick={() => btn_icon(!showmenu)}>Etline Icon</NavLink>
                            <NavLink to="/fontAwesomeIcons" onClick={() => btn_icon(!showmenu)}>Font Awesome Icon</NavLink>
                            <NavLink to="/accordion" onClick={() => btn_icon(!showmenu)}>Accordion</NavLink>
                            <NavLink to="/alerts" onClick={() => btn_icon(!showmenu)}>Alerts</NavLink>
                            <NavLink to="/price" onClick={() => btn_icon(!showmenu)}>Pricing Table</NavLink>
                            <NavLink to="/progressbar" onClick={() => btn_icon(!showmenu)}>Progress bar</NavLink>
                            <NavLink to="/tabs" onClick={() => btn_icon(!showmenu)}>Tabs</NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              }
            </Breakpoint>

            <Breakpoint xl>
              <div className='menu'>
                <div className='navbar-item d-flex' style={{ cursor: "pointer" }}>
                  <img src="./img/favicon.png" alt="faviconImg" style={{ width: "20px", marginRight: "5px" }} />
                  <div ref={ref} style={{ cursor: "pointer" }}>
                    <NavLink to="/home1" className="dropdown-custom dropdown-toggle btn"
                      onMouseEnter={handleBtnClick} onMouseLeave={closeMenu}>
                      IDEAL EXCHANGE
                      <span className='lines'></span>
                      {/* {openMenu && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu}>
                            <NavLink to="/">Homepage</NavLink>
                            <NavLink to="/home1">Homepage 1</NavLink>
                            <NavLink to="/home2">Homepage 2</NavLink>
                          </div>
                        </div>
                      )} */}
                    </NavLink>

                  </div>
                </div>
                <div className='navbar-item'>
                  <NavLink to="/activity">
                    ORIGINS CLUB
                    <span className='lines'></span>
                  </NavLink>
                </div>
                <div className='navbar-item'>
                  <div ref={ref2}>
                    <div className="dropdown-custom dropdown-toggle btn"
                      onMouseEnter={handleBtnClick2} onMouseLeave={closeMenu2}>
                      CATALOG
                      <span className='lines'></span>
                      {openMenu2 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu2}>
                            <NavLink to="/explore">Invest</NavLink>
                            <NavLink to="/home1">Popular Ideas</NavLink>
                            <NavLink to="/home1">Top Projects</NavLink>
                            <NavLink to="/headerActivity">Activity</NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className='navbar-item'>
                  <div ref={ref1}>
                    <div className="dropdown-custom dropdown-toggle btn"
                      onMouseEnter={handleBtnClick1} onMouseLeave={closeMenu1}>
                      MY PORTFOLIO
                      <span className='lines'></span>
                      {openMenu1 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu1}>
                            <NavLink to="/create">Create</NavLink>
                            <NavLink to="/home1">IP</NavLink>
                            <NavLink to="/home1">Dream Investments</NavLink>
                            <NavLink to="/home1">My Shared Dreams</NavLink>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
                <div className='navbar-item'>
                  <div ref={ref3}>
                    <div className="dropdown-custom dropdown-toggle btn"
                      onMouseEnter={handleBtnClick3} onMouseLeave={closeMenu3}>
                      COMMUNITY
                      <span className='lines'></span>
                      {openMenu3 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu3}>
                            <NavLink to="/blogs">Blogs</NavLink>
                            <NavLink to="/helpcenter">Help Center</NavLink>
                            <NavLink to="/register">Newsletter</NavLink>
                            <NavLink to="/ItemDetail">Pro: Tier A</NavLink>
                            <NavLink to="/home1">Blogs</NavLink>
                            <NavLink to="/register">Help Center</NavLink>
                            <NavLink to="/NewsLetter">Newsletter</NavLink>
                            <NavLink to="/home1">Pro: Tier A</NavLink>
                            <NavLink to="/home1">Advanced: Tier B</NavLink>
                            <NavLink to="/home1">Beginner: Tier C</NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Breakpoint>
          </BreakpointProvider>

          <div className='mainside'>
            <NavLink to="/wallet" className="btn-main">Connect Wallet</NavLink>
          </div>

    
        </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>

      </div>

      
    </header>
    </div>
  );
}
export default Header;