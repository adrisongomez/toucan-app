import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 250px;
  background-color: darkgray;
  margin: 10px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Image = styled.ImageBackground`
  flex: 1;
  width: 100%;
  resize-mode: cover;
`;
