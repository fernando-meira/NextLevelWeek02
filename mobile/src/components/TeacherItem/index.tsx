import React, { useState } from "react";
import { Image, Linking } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import api from "../../services/api";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import {
  Bio,
  Name,
  Price,
  Avatar,
  Footer,
  Profile,
  Subject,
  Favorited,
  Container,
  PriceValue,
  ProfileInfo,
  ContactButton,
  FavoriteButton,
  ButtonContainer,
  ContactButtonText,
} from "./styles";

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  user_id: number;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);
  const { name, avatar, subject, bio, cost, whatsapp, id } = teacher;

  const handleLinkToWhatsApp = async () => {
    Linking.openURL(`whatsapp://send?text=${whatsapp}`);

    try {
      const { data } = await api.post("connections", { user_id: id });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleFavorite = async () => {
    const favorites = await AsyncStorage.getItem("favorites");

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex(
        (teacherItem: Teacher) => teacherItem.id === teacher.id
      );

      favoritesArray.splice(favoriteIndex, 1);

      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);

      setIsFavorited(true);
    }

    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
  };

  return (
    <Container>
      <Profile>
        <Avatar
          source={{
            uri: avatar,
          }}
        />

        <ProfileInfo>
          <Name>{name}</Name>

          <Subject>{subject}</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>{bio}</Bio>

      <Footer>
        <Price>
          Proço/hora: <PriceValue>R${cost} </PriceValue>{" "}
        </Price>

        <ButtonContainer>
          {isFavorited ? (
            <Favorited onPress={handleToggleFavorite}>
              <Image source={unfavoriteIcon} />
            </Favorited>
          ) : (
            <FavoriteButton onPress={handleToggleFavorite}>
              <Image source={heartOutlineIcon} />
            </FavoriteButton>
          )}

          <ContactButton onPress={handleLinkToWhatsApp}>
            <Image source={whatsappIcon} />

            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
