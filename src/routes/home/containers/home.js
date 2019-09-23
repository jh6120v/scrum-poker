import React from 'react';
import {
    Container, Logo, LogoLink, Title
} from '../styles';
import logoReact from '../../../assets/images/react.png';
import logoRedux from '../../../assets/images/redux.png';

const Home = () => (
    <Container>
        <Logo img={logoReact} />
        <LogoLink />
        <Logo img={logoRedux} />
        <Title data-testid="display_title">Welcome to React-Redux-App!</Title>
    </Container>
);

export default Home;
