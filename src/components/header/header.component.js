import React from 'react';
import {HeaderContainer, Title} from './header.styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default ({title = ''}) => {
  const navigation = useNavigation();
  return (
    <HeaderContainer>
      <Icon name="search" size={18} color="grey" />
      <Title>{title}</Title>
      <Icon name="bell" size={18} color="grey" />
    </HeaderContainer>
  );
};
