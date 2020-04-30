import React from 'react';
import Header from '@Components/UI/organisms/header/header.component';
import HomeBanner from '@Molecules/home-banner/home-banner.component';
import HomePageSector from '@Molecules/homepage-sectors/homepage-sectors.component';
import Footer from '@Organisms/footer/footer.component';

const Home = () => (
  <>
    <Header />
    <HomeBanner />
    <HomePageSector />
    <Footer />
  </>
);

export default Home;
