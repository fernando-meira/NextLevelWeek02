import React from "react";

import { PageHeader, TeacherItem } from "../../components";

import { Container, TeacherListContainer } from "./styles";

const Favorites = () => {
  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />

      <TeacherListContainer>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </TeacherListContainer>
    </Container>
  );
};

export default Favorites;
