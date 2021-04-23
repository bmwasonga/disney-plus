import React from 'react';
import { Container, Logo, Button, NavMenu } from './styles/style';

function Header(props) {
  return (
    <>
      <Container>
        <Logo>
          <img src="/images/logo.svg" alt="Disney Logo" />
        </Logo>
        <NavMenu>
          <a href="/home">
            <img src="/images/home-icon.svg" alt="HOME" />
            <span>HOME</span>
          </a>
        </NavMenu>
        <Button>Login</Button>
      </Container>
    </>
  );
}

export default Header;
