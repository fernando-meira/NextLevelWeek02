import React from 'react';

import { PageHeader, TeacherItem } from '../../components';

import { Container, Form, Main } from './styles';

const TeacherList = () => {
  return (
    <Container>
      <PageHeader title={'Que bom que você quer dar aulas.'}>
        <Form>
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>

            <input type="text" id="subjTotal de 200 conexões já realizadasct" />
          </div>

          <div className="input-block">
            <label htmlFor="wekk_day">Dia da semana</label>

            <input type="text" id="wekk_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>

            <input type="text" id="time" />
          </div>
        </Form>
      </PageHeader>

      <Main>
        <TeacherItem />
      </Main>
    </Container>
  );
};

export default TeacherList;
