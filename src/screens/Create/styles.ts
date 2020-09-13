import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import font from '../../constants/font';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.Text`
  font-family: ${font.medium};
  font-size: 20px;
  margin-bottom: 14px;
`;

export const Button = styled(RectButton)`
  align-items: center;
  background: #ff872c;
  border-radius: 5px;
  padding: 15px;
`;

export const Text = styled.Text`
  color: #fff;
  font-family: ${font.medium};
  font-size: 14px;
`;
