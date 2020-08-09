import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import api from '../../services/api';
import { Container, Footer } from './styles';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}
interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  async function handleAddConnections() {
    try {
      const { data } = await api.post('connections', {
        user_id: teacher.id,
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />

        <div>
          <strong>{teacher.name}</strong>

          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <Footer>
        <p>
          Preço/Hora
          <strong>{`R$${teacher.cost}`}</strong>
        </p>

        <a
          href={`https://wa.me/${teacher.whatsapp}?text=Olá!%20Tudo%20bem?`}
          target="blank"
          onClick={handleAddConnections}
        >
          <FaWhatsapp />
          Entrar em contato
        </a>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
