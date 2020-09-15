import styled from 'styled-components/native';
import font from '../../constants/font';

interface InputProps {
  errored: boolean;
}

export const TextInput = styled.TextInput<InputProps>`
  background: #fff;
  border-color: ${props => (props.errored ? '#E83F5B' : '#fff')};
  border-radius: 5px;
  margin-bottom: 16px;
  padding: 0 16px;
  height: 50px;
  color: #969cb3;
  font-family: ${font.regular};
  font-size: 14px;
`;

export const Error = styled.Text`
  color: #e83f5b;
  font-family: ${font.regular};
  font-size: 12px;
  margin: -12px 0 12px 6px;
`;
