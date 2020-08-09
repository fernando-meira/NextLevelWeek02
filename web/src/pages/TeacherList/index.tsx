import React, { useState, FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi';

import api from '../../services/api';
import { PageHeader, TeacherItem, Input, Select } from '../../components';
import { Teacher } from '../../components/TeacherItem';

import { Container, Form, Main } from './styles';

const TeacherList = () => {
  const [time, setTime] = useState('');
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [teachers, setTeachers] = useState([]);

  async function searchTeachers(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const dataSearch = { subject, week_day: weekDay, time };

    try {
      const { data } = await api.get('classes', {
        params: dataSearch,
      });

      setTeachers(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <PageHeader title={'Que bom que você quer dar aulas.'}>
        <Form onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => setSubject(e.target.value)}
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
            value={weekDay}
            onChange={e => setWeekDay(e.target.value)}
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
          <Input
            type="time"
            label="Hora"
            name="time"
            value={time}
            onChange={e => setTime(e.target.value)}
          />

          <button type="submit">
            Buscar
            <FiSearch />
          </button>
        </Form>
      </PageHeader>

      <Main>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </Main>
    </Container>
  );
};

export default TeacherList;
