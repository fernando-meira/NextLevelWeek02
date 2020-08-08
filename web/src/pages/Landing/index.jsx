import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { logo, landing } from '../../themes/assets/images';

import {
  study,
  giveClasses,
  purpleHeartIcon,
} from '../../themes/assets/images/icons';

import { Container, PageLanding, PageLandingContent, Link } from './styles';

const Landing = () => {
  const [totalConnections, setTotalConnections] = useState({ total: 0 });

  useEffect(() => {
    async function fetchTotalConnections() {
      try {
        const { data } = await api.get('/connections');

        setTotalConnections(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTotalConnections();
  }, []);

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
            <Link to="/study" className="study">
              <img src={study} alt="Estudar" />
              Estudar
            </Link>

            <Link to="/give-classes" className="give-classes">
              <img src={giveClasses} alt="Dar aulas" />
              Dar aulas
            </Link>
          </div>

          <span className="total-connections">
            Total de {totalConnections.total} conexões realizadas
            <img src={purpleHeartIcon} alt="Coração roxo" />
          </span>
        </PageLandingContent>
      </PageLanding>
    </Container>
  );
};

export default Landing;
