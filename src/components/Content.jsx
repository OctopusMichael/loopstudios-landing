import React from "react";
import vrMobile from "../images/mobile/image-interactive.jpg";
import vrDesktop from "../images/desktop/image-interactive.jpg";

const Content = () => {
  return (
    <>
      <section className="section-content">
        <div className="">
          <picture>
            <source srcSet={vrDesktop} media="(min-width: 1200px)" />
            <source srcSet={vrMobile} media="(min-width: 340px)" />
            <img className="content-img" src={vrMobile} alt="imagen principal" />
          </picture>
        </div>
        <div className="content-text">
          <h1>The leader in interactive VR</h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
        
      </section>
    </>
  );
};

export default Content;
