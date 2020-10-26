import styled from 'styled-components/native';
import font from '../../../../constants/font';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.Text`
  font-family: ${font.medium};
  font-size: 20px;
  margin-bottom: 14px;
`;

export const Error = styled.Text`
  color: #e83f5b;
  font-family: ${font.regular};
  font-size: 12px;
  margin: -12px 0 12px 6px;
`;

export const Button = styled.TouchableOpacity`
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
