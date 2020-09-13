import styled from 'styled-components/native';
import font from '../../constants/font';

export const BalanceContainer = styled.View`
  background: #5636d3;
  height: 160px;
`;

export const BalanceCard = styled.View`
  background: #fff;
  border-radius: 5px;
  height: 200px;
  justify-content: space-between;
  margin: 10px;
  padding: 20px;
  width: 300px;
`;

export const BalanceHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-family: ${font.regular};
  font-size: 14px;
`;

export const Value = styled.Text`
  font-family: ${font.medium};
  font-size: 30px;
`;
