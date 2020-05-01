import React from 'react';
// import {FlatList} from 'react-native';
import {StoryCarouselContainer} from './story-corousel.styles';
import StoryCarouselItem from '../story-item/story-item.component';

export default ({}) => {
  // renderItem
  return (
    <StoryCarouselContainer
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      renderItem={({item}) => <StoryCarouselItem key={item} />}
      data={Array.from(Array(10), () => ({
        text: 'hola',
      }))}
    />
  );
};
