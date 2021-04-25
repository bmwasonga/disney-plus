import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth, provider } from '../Firebase/Firebase';
import { Container, Logo, Button, NavMenu } from './styles/style';
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
} from '../../Features/Users/UserSlice';
function Header(props) {
  //necessry to have
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);

  // including a function to handle authentication with a pop up
  function handleAuth() {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

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
          <a href="/search">
            <img src="/images/search-icon.svg" alt="HOME" />
            <span>SEARCH</span>
          </a>
          <a href="/watchlist">
            <img src="/images/watchlist-icon.svg" alt="HOME" />
            <span>WATCHLIST</span>
          </a>
          <a href="/originals">
            <img src="/images/original-icon.svg" alt="HOME" />
            <span>ORIGINALS</span>
          </a>
          <a href="/movies">
            <img src="/images/movie-icon.svg" alt="HOME" />
            <span>MOVIES</span>
          </a>
          <a href="/series">
            <img src="/images/series-icon.svg" alt="HOME" />
            <span>SERIES</span>
          </a>
        </NavMenu>
        <Button onClick={handleAuth}>Login</Button>
      </Container>
    </>
  );
}

// ensure youinclude the pages for the navigation items

export default Header;
