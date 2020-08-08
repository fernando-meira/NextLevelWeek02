import React from 'react';
import { FiAlertCircle, FiPlus } from 'react-icons/fi';

import { PageHeader, Input, TextArea, Select } from '../../components';

import { Container, Main } from './styles';

const TeacherForm = () => {
  return (
    <Container>
      <PageHeader
        title="Estes são os proffys disponíveis"
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <Main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="whatsapp" />
          <TextArea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

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
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button>
              <FiPlus /> Novo horário
            </button>
          </legend>

          <div className="schedule-item">
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

            <Input name="from" label="Das" type="time" />
            <Input name="to" label="Até" type="time" />
          </div>
        </fieldset>

        <footer>
          <p>
            <FiAlertCircle />
            Importante!
            <br />
            Preencha todos os dados
          </p>

          <button type="button">Salvar cadastro</button>
        </footer>
      </Main>
    </Container>
  );
};
export default TeacherForm;
