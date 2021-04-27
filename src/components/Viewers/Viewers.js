import React from 'react';
import { Container, Wrap } from './styles/styles';

function Viewers(props) {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
        <video autoplay={true} loop={true} playsinline={true}>
          <source src="/videos/1564674844-disney.mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
        <video autoplay={true} loop={true} playsinline={true}>
          <source src="/videos/1564676115-marvel.mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
        <video autoplay={true} loop={true} playsinline={true}>
          <source src="/videos/1564676296-national-geographic.mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
        <video autoplay={true} loop={true} playsinline={true}>
          <source src="/videos/1564676714-pixar.mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
        <video autoplay={true} loop={true} playsinline={true}>
          <source src="/videos/1608229455-star-wars.mp4" />
        </video>
      </Wrap>
    </Container>
  );
}

export default Viewers;
//  look at the autoplay for the videos
