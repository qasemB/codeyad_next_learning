'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { useRouter } from 'next/router';
import React from 'react';

const Navbar = () => {
  const pathName = usePathname()
  // const router = useRouter()
  // const handleClick = ()=>{
  //   router.forward()
  // }
  return (
    <div className="top-area">
      <div className="header-area">
        <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

          <div className="container">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="index.html">carvilla<span></span></a>

            </div>
            <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
              <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                <li className="scroll"><Link style={{ color: pathName == "/" && "blue" }} href="/">home</Link></li>
                <li className="scroll"><Link style={{ color: pathName == "/services" && "blue" }} href="/services">service</Link></li>
                {/* <li className="scroll"><a href="#featured-cars">featured cars</a></li> */}
                <li className="scroll"><Link style={{ color: pathName.startsWith("/cars")  && "blue" }} href="/cars">new cars</Link></li>
                <li className="scroll"><Link style={{ color: pathName == "/login" && "blue" }} href="/login">login</Link></li>
                {/* <li className="scroll"><a href="#brand">brands</a></li> */}
                {/* <li className="scroll"><a href="#contact">contact</a></li> */}
              </ul>
            </div>
          </div>
        </nav>
        <div className="clearfix"></div>

      </div>
    </div>
  );
}

export default Navbar;
