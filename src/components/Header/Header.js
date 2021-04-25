import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth, provider } from '../Firebase/Firebase';
import { Container, Logo, Button, NavMenu, UserImage } from './styles/style';
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
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
        setUser(res.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  }
  //useEffect

  //function to set user
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <>
      <Container>
        <Logo>
          <img src="/images/logo.svg" alt="Disney Logo" />
        </Logo>

        {!userName ? (
          <Button onClick={handleAuth}>Login</Button>
        ) : (
          <>
            <NavMenu>
              <a href="/home">
                <img src="/images/home-icon.svg" alt="home" />
                <span>HOME</span>
              </a>
              <a href="/search">
                <img src="/images/search-icon.svg" alt="search" />
                <span>SEARCH</span>
              </a>
              <a href="/watchlist">
                <img src="/images/watchlist-icon.svg" alt="watchlist" />
                <span>WATCHLIST</span>
              </a>
              <a href="/originals">
                <img src="/images/original-icon.svg" alt="originals" />
                <span>ORIGINALS</span>
              </a>
              <a href="/movies">
                <img src="/images/movie-icon.svg" alt="movies" />
                <span>MOVIES</span>
              </a>
              <a href="/series">
                <img src="/images/series-icon.svg" alt="series" />
                <span>SERIES</span>
              </a>
            </NavMenu>
            <UserImage src={userPhoto} alt={userName} />
          </>
        )}
      </Container>
    </>
  );
}

// ensure youinclude the pages for the navigation items

export default Header;
