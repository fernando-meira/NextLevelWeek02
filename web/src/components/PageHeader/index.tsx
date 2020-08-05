import React from 'react';
import { Link } from 'react-router-dom';

import { logo } from '../../themes/assets/images';
import { back } from '../../themes/assets/images/icons';

import { Container } from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <Container>
      <div className="top-bar-container">
        <Link to="/">
          <img src={back} alt="Voltar" />
        </Link>

        <img src={logo} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>

        {children}
      </div>
    </Container>
  );
};

export default PageHeader;
