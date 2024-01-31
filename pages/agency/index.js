import React from "react";
import Head from "next/head";
import Header from "components/agency/header.component";
import Footer from "components/agency/footer.component";

import StarIcon from "components/agency/star-icon";

// import Header from '../../components/agency/header.component'

function AgencyLandingPage() {
  return (
    <div className="agency-page-wrapper">
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <div className="agency-page">
        
        <Header />
        <StarIcon/>
        <div className="hero-section-wrapper">
        {/* <HeroSection /> */}

        </div>
        <Footer/>
      
      </div>
    </div>
  );
}



export default AgencyLandingPage;




