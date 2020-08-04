import React from 'react';

import { logo, landing } from '../../themes/assets/images';

import {
  study,
  giveClasses,
  purpleHeartIcon,
} from '../../themes/assets/images/icons';

import { Container, PageLanding, PageLandingContent, Link } from './styles';

const Landing = () => {
  return (
    <Container>
      <PageLanding>
        <PageLandingContent>
          <div className="logo-container">
            <img src={logo} alt="Proffy" />

            <h2>Sua plataforma de estudos online.</h2>
          </div>

          <img
            src={landing}
            alt="Plataforma de estudos"
            className="hero-image"
          />

          <div className="buttons-container">
            <Link to="/" className="study">
              <img src={study} alt="Estudar" />
              Estudar
            </Link>

            <Link to="/" className="give-classes">
              <img src={giveClasses} alt="Dar aulas" />
              Dar aulas
            </Link>
          </div>

          <span className="total-connections">
            Total de 200 conexões já realizadas
            <img src={purpleHeartIcon} alt="Coração roxo" />
          </span>
        </PageLandingContent>
      </PageLanding>
    </Container>
  );
};

export default Landing;
