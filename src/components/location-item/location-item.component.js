import React from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, Image} from './location-item.styles';

export default ({location, img}) => {
  const navigation = useNavigation();
  const sourceImg = {uri: 'https://picsum.photos/200'};
  return (
    <Container>
      <Image source={sourceImg}>
        <Text>{location}</Text>
      </Image>
    </Container>
  );
};
