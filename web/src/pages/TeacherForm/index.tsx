import React, { useState, FormEvent } from 'react';
import { FiAlertCircle, FiPlus } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { PageHeader, Input, TextArea, Select } from '../../components';

import { Container, Main } from './styles';

const TeacherForm = () => {
  const history = useHistory();

  const [bio, setBio] = useState('');
  const [cost, setCost] = useState('');
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [subject, setSubjct] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  const addNewScheduleItem = () => {
    const newItem = {
      week_day: 0,
      from: '',
      to: '',
    };

    setScheduleItems([...scheduleItems, newItem]);
  };

  const handleCreateClass = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    };

    async function insertScheduleItems() {
      try {
        const { data } = await api.post('classes', params);

        alert('Cadastro realizado com sucesso!');

        history.push('/');
      } catch (error) {
        console.log(error);

        alert('Algo deu errado, tente novamente!');
      }
    }

    insertScheduleItems();
  };

  const setScheduleItemValue = (
    position: number,
    field: string,
    value: string,
  ) => {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  };

  return (
    <Container>
      <PageHeader
        title="Estes são os proffys disponíveis"
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <Main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name"
              label="Nome Completo"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={e => {
                setAvatar(e.target.value);
              }}
            />
            <Input
              name="whatsapp"
              label="whatsapp"
              value={whatsapp}
              onChange={e => {
                setWhatsapp(e.target.value);
              }}
            />
            <TextArea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={e => {
                setBio(e.target.value);
              }}
            />
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
              value={subject}
              onChange={e => {
                setSubjct(e.target.value);
              }}
            />
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={e => {
                setCost(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                <FiPlus /> Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  name="weak_day"
                  label="Dia da semana"
                  value={scheduleItem.week_day}
                  onChange={e =>
                    setScheduleItemValue(index, 'week_day', e.target.value)
                  }
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
                  name="from"
                  label="Das"
                  type="time"
                  value={scheduleItem.from}
                  onChange={e =>
                    setScheduleItemValue(index, 'from', e.target.value)
                  }
                />
                <Input
                  name="to"
                  label="Até"
                  type="time"
                  onChange={e =>
                    setScheduleItemValue(index, 'to', e.target.value)
                  }
                />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <FiAlertCircle />
              Importante!
              <br />
              Preencha todos os dados
            </p>

            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </Main>
    </Container>
  );
};
export default TeacherForm;
