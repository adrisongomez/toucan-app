import React from 'react';
import {Container} from './explore.styles';

import Header from '../../components/header/header.component';
import StoryCarousel from '../../components/story-carousel/story-corousel.component';
import LocationCarousel from '../../components/location-carousel/location-carousel.component';

export default () => {
  return (
    <Container>
      <Header title="Explore" />
      <StoryCarousel />
      <LocationCarousel />
    </Container>
  );
};
