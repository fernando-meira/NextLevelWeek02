import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { PageHeader, TeacherItem } from "../../components";

import {
  Input,
  Label,
  Container,
  SearchForm,
  InputBlock,
  InputGroup,
  SubmitButton,
  SubmitButtonText,
  TeacherListContainer,
} from "./styles";

const TeacherList = () => {
  const [isFilteresVisible, setIsFilteresVisible] = useState(false);

  const handleToggleFiltersVisibility = () => {
    setIsFilteresVisible(!isFilteresVisible);
  };

  return (
    <Container>
      <PageHeader
        title="Proffs disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisibility}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFilteresVisible && (
          <SearchForm>
            <Label>Matéria</Label>

            <Input placeholder="Qual a matéria?" />

            <InputGroup>
              <InputBlock>
                <Label>Dia da Semana</Label>

                <Input placeholder="Qual o dia?" />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>

                <Input placeholder="Qual o horário?" />
              </InputBlock>
            </InputGroup>

            <SubmitButton>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

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
