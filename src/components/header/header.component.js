import React from 'react';
import {HeaderContainer, Title} from './header.styles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default ({route}) => {
  return (
    <HeaderContainer>
      <Icon name="search" size={18} />
      <Title>{route.name}</Title>
      <Icon name="bell" size={18} />
    </HeaderContainer>
  );
};
