import React from 'react';
import { Container, Content } from './styles';
import Logo from '../../assets/svg/logo';
// import Menu from '../Menu';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo />
      </Content>
      {/* <Menu /> */}
    </Container>
  );
};

export default Header;
