import React from 'react';

import { PageHeader } from '../../components';

import { Container, Form } from './styles';

const TeacherForm = () => {
  return (
    <Container>
      <PageHeader title={'Que bom que você quer dar aulas.'}>
        <Form>
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>

            <input type="text" id="subject" />
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
    </Container>
  );
};

export default TeacherForm;
