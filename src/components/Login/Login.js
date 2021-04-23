import React from 'react';
import {
  Container,
  Content,
  BgImage,
  CTA,
  CTAlogoOne,
  Signup,
  Description,
  CTAlogotwo,
} from './styles/styles';

function Login(props) {
  return (
    <Container>
      <Content>
        <CTA>
          <CTAlogoOne src="/images/cta-logo-one.svg" alt="logo one" />
          <Signup> GET ALL THERE</Signup>
          <Description>
            Get Premier access to Raya and the last Dragon for an additional fee
            with a Disney+ subscription. As of 3/26/2021, the price of Disney+
            and The Disney Bundle will increase by 1$.
          </Description>
          <CTAlogotwo src="/images/cta-logo-two.png" alt="logo two" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

export default Login;
