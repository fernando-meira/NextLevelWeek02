import React, { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { Teacher } from "../../components/TeacherItem";
import { PageHeader, TeacherItem } from "../../components";

import { Container, TeacherListContainer } from "./styles";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = () => {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />

      <TeacherListContainer>
        {favorites.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </TeacherListContainer>
    </Container>
  );
};

export default Favorites;
