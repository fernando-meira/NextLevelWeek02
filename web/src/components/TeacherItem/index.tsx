import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import { Container, Footer } from './styles';

const TeacherItem = () => {
  return (
    <Container>
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/52580705?s=460&u=507ae3538daf3d5968d1fdbfe811350338acbb41&v=4"
          alt="Fernando Meira"
        />

        <div>
          <strong>Fernando Meira</strong>

          <span>Cálculo</span>
        </div>
      </header>

      <p>
        Mussum Ipsum, cacilds vidis litro abertis.
        <br /> <br />
        Manduma pindureta quium dia nois paga. Posuere libero varius. Nullam a
        nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola
        pa arma uma pindureta. Copo furadis é disculpa de bebadis, arcu quam
        euismod magna.
      </p>

      <Footer>
        <p>
          Preço/Hora
          <strong>RS 80,00</strong>
        </p>

        <button type="button">
          <FaWhatsapp />
          Entrar em contato
        </button>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
