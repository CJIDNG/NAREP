import React from 'react';
import LazyLoad from 'react-lazyload';
import {
  HomeBannerImage, HomeBannerContainer, HomeBannerText, HomeBannerTextContainer, Button
} from './home-banner.styles';

const HomeBanner = () => (
  <HomeBannerContainer>
    <HomeBannerTextContainer>
      <HomeBannerText>
        NAREP is the  Natural Resource Program of the Premium Times Centre for Investigative Journalism.
        It is designed to make data on the Natural Resource sector readily available for journalists,policy makers and
        the government for policy, journalistic and research purposes.

      </HomeBannerText>

      <Button to="/signup">
        Register with email
      </Button>
    </HomeBannerTextContainer>
    <LazyLoad>
      <HomeBannerImage
        src={`${process.env.PUBLIC_URL}/img/home-banner.jpg`}
        alt="Credit: Markus Spiske"
        title="Credit: Markus Spiske"
      />
    </LazyLoad>
  </HomeBannerContainer>
);
export default HomeBanner;
