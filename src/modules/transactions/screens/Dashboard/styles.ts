import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import font from '../../../../constants/font';

export const Container = styled.View`
  height: 53%;
`;

export const Content = styled.View`
  padding: 20px;
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${font.medium};
  font-size: 20px;
  margin-bottom: 14px;
`;

export const List = styled(FlatList as new () => FlatList)``;
