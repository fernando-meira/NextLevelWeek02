import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";

import api from "../../services/api";
import { Teacher } from "../../components/TeacherItem";

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

  const [favorites, setFavorites] = useState<number[]>([]);

  const [time, setTime] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [subject, setSubject] = useState("");
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => {
            return teacher.id;
          }
        );

        setFavorites(favoritedTeachersIds);
      }
    });
  }, []);

  const handleToggleFiltersVisibility = () => {
    setIsFilteresVisible(!isFilteresVisible);
  };

  const handleFiltersSubmit = async () => {
    const paramsToFetch = { time, week_day: weekDay, subject };

    const { data } = await api.get("classes", {
      params: paramsToFetch,
    });

    setTeachers(data);
    setIsFilteresVisible(false);
  };

  return (
    <Container>
      <PageHeader
        title="Proffs disponíveis"
        headerRight={
          <BorderlessButton
            style={{
              padding: 20,
            }}
            onPress={handleToggleFiltersVisibility}
          >
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFilteresVisible && (
          <SearchForm>
            <Label>Matéria</Label>

            <Input
              placeholder="Qual a matéria?"
              value={subject}
              onChangeText={(text) => setSubject(text)}
            />

            <InputGroup>
              <InputBlock>
                <Label>Dia da Semana</Label>

                <Input
                  placeholder="Qual o dia?"
                  value={weekDay}
                  onChangeText={(text) => setWeekDay(text)}
                />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>

                <Input
                  placeholder="Qual o horário?"
                  value={time}
                  onChangeText={(text) => setTime(text)}
                />
              </InputBlock>
            </InputGroup>

            <SubmitButton onPress={handleFiltersSubmit}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

      <TeacherListContainer>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </TeacherListContainer>
    </Container>
  );
};

export default TeacherList;
