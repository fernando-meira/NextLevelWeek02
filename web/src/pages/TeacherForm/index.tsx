import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { PageHeader, Input } from '../../components';

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
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Input name="subject" label="Matéria" />
          <Input name="cost" label="Custo da sua hora por aula" />
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
