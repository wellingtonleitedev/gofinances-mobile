import styled, { css } from 'styled-components/native';
import font from '../../constants/font';
import { TypeEnum } from '.';

interface OptionProps {
  selected: boolean;
  type: string;
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Option = styled.TouchableOpacity<OptionProps>`
  align-items: center;
  border: 1px solid #969cb3;
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  padding: 5px 20px;
  width: 49%;

  ${props =>
    props.selected &&
    props.type === TypeEnum.income &&
    css`
      background: rgba(18, 164, 84, 0.1);
      border: 1px solid rgba(18, 164, 84, 0.1);
    `};

  ${props =>
    props.selected &&
    props.type === TypeEnum.outcome &&
    css`
      background: rgba(232, 63, 91, 0.1);
      border: 1px solid rgba(232, 63, 91, 0.1);
    `};
`;

export const Text = styled.Text`
  font-family: ${font.medium};
  font-size: 14px;
  margin-left: 10px;
  opacity: 1;
`;
