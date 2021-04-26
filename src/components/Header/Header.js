import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth, provider } from '../Firebase/Firebase';
import {
  Container,
  Logo,
  Button,
  NavMenu,
  UserImage,
  SignOut,
  Dropdown,
} from './styles/style';
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
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
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((res) => {
          setUser(res.user);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push('/');
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }
  //useEffect that will change to the home page when the user signs in
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push('/home');
      }
    });
  }, [userName]);

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
            <SignOut>
              <UserImage src={userPhoto} alt={userName} />
              <Dropdown>
                <span onClick={handleAuth}>SignOut</span>
              </Dropdown>
            </SignOut>
          </>
        )}
      </Container>
    </>
  );
}

// ensure youinclude the pages for the navigation items

export default Header;
