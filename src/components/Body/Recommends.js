import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Wrap } from './styles/styles';

function Recommends() {
  return (
    <Container>
      <h2>Recommended for you</h2>
      <Content>
        <Wrap>
          <Link to="/">
            <img
              src="https://images.unsplash.com/photo-1616097970275-1e187b4ce59f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG95JTIwc3Rvcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt=""
            />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="/">
            <img
              src="https://images.unsplash.com/photo-1616097970275-1e187b4ce59f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG95JTIwc3Rvcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt=""
            />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="/">
            <img
              src="https://images.unsplash.com/photo-1616097970275-1e187b4ce59f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG95JTIwc3Rvcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt=""
            />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="/">
            <img
              src="https://images.unsplash.com/photo-1616097970275-1e187b4ce59f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG95JTIwc3Rvcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt=""
            />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
}

export default Recommends;
