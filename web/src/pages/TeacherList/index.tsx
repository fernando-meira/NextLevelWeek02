import React from 'react';

import { PageHeader, TeacherItem, Input, Select } from '../../components';

import { Container, Form, Main } from './styles';

const TeacherList = () => {
  return (
    <Container>
      <PageHeader title={'Que bom que você quer dar aulas.'}>
        <Form>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Português', label: 'Português' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'História', label: 'História' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Fisíca', label: 'Educação Fisíca' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Química', label: 'Química' },
              { value: 'Filosofia', label: 'Filosofia' },
            ]}
          />

          <Select
            name="weak_day"
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
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
