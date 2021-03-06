import styled from 'styled-components/native';
import font from '../../constants/font';

interface ValueProps {
  type: 'income' | 'outcome';
}

export const Card = styled.View`
  background: #fff;
  border-radius: 5px;
  height: 128px;
  margin-bottom: 16px;
  padding: 10px 20px;
`;

export const CardTitle = styled.Text`
  font-family: ${font.medium};
  font-size: 14px;
`;

export const Value = styled.Text<ValueProps>`
  color: ${props => (props.type === 'income' ? '#12a454' : '#E83F5B')};
  font-family: ${font.medium};
  font-size: 20px;
`;

export const Description = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: auto;
`;

export const Category = styled.Text`
  color: #969cb3;
  font-family: ${font.regular};
  font-size: 14px;
`;
export const Date = styled.Text`
  color: #969cb3;
  font-family: ${font.regular};
  font-size: 14px;
`;
