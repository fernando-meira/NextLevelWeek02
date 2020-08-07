import React from 'react';
import { Link } from 'react-router-dom';

import { logo } from '../../themes/assets/images';
import { back } from '../../themes/assets/images/icons';

import { Container } from './styles';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  children,
}) => {
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

        {description && <p>{description}</p>}

        {children}
      </div>
    </Container>
  );
};

export default PageHeader;
