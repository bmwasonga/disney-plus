import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../Firebase/Firebase';
import { setMovies } from '../../Features/movies/MovieSlce';
import { selectUserName } from '../../Features/Users/UserSlice';
import NewDisney from '../Body/NewDisney';
import Originals from '../Body/Originals';
import Recommends from '../Body/Recommends';
import Trending from '../Body/Trending';
import ImgSlider from '../ImgSlider/ImgSlider';
import Viewers from '../Viewers/Viewers';
import { Container } from './styles/styles';

function Home(props) {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  //to hold the data from firebase
  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

  //react hook

  useEffect(() => {
    console.log('hello');
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommends);
        switch (doc.data().type) {
          case 'recommend':
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case 'new':
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;

          case 'original':
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case 'trending':
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisney,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <Trending />
      <NewDisney />
      <Originals />
    </Container>
  );
}

export default Home;
