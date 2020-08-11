import React from "react";

import { PageHeader, TeacherItem } from "../../components";

import { Container, TeacherListContainer } from "./styles";

const TeacherList = () => {
  return (
    <Container>
      <PageHeader title="Proffs disponíveis" />

      <TeacherListContainer>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </TeacherListContainer>
    </Container>
  );
};

export default TeacherList;
