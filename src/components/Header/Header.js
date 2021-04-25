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
          <a href="/home">
            <img src="/images/search-icon.svg" alt="HOME" />
            <span>SEARCH</span>
          </a>
          <a href="/home">
            <img src="/images/watchlist-icon.svg" alt="HOME" />
            <span>WATCHLIST</span>
          </a>
          <a href="/home">
            <img src="/images/original-icon.svg" alt="HOME" />
            <span>ORIGINALS</span>
          </a>
          <a href="/home">
            <img src="/images/movie-icon.svg" alt="HOME" />
            <span>MOVIES</span>
          </a>
          <a href="/home">
            <img src="/images/series-icon.svg" alt="HOME" />
            <span>SERIES</span>
          </a>
        </NavMenu>
        <Button>Login</Button>
      </Container>
    </>
  );
}

export default Header;
