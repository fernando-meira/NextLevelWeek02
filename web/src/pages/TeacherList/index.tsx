import React from 'react';

import { PageHeader, TeacherItem, Input } from '../../components';

import { Container, Form, Main } from './styles';

const TeacherList = () => {
  return (
    <Container>
      <PageHeader title={'Que bom que você quer dar aulas.'}>
        <Form>
          <Input label="Matéria" name="subject" />
          <Input label="Dia da semana" name="wekk_day" />
          <Input type="time" label="Hora" name="time" />
        </Form>
      </PageHeader>

      <Main>
        <TeacherItem />
      </Main>
    </Container>
  );
};

export default TeacherList;
