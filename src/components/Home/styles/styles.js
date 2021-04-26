import styled from 'styled-components/macro';

export const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    content: '';
    background: url('/images/home-background.png') center center / cover
      no-repeat fixed;
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
