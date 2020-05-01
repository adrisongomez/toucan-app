import React from 'react';
import {Container, Title, Carousel} from './location-carousel.styles';
import LocationItem from '../location-item/location-item.component';
import faker from 'faker';
import {v5} from 'uuid';

export default ({}) => {
  return (
    <Container>
      <Title>My locations </Title>
      <Carousel
        data={Array.from(Array(10), () => ({
          id: v5('asd', v5.DNS),
          location: 'location',
          img: faker.image.city(),
        }))}
        renderItem={({item}) => <LocationItem key={item.id} {...item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};
