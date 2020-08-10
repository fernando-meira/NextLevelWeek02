import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Title,
  Button,
  OkText,
  Container,
  TitleDescription,
  ImageBackgroundContent,
} from "./styles";
import giveClassesBgImage from "../../assets/images/give-classes-background.png";

const GiveClasses = () => {
  const { goBack } = useNavigation();

  const handleNavigateToLanding = () => {
    goBack();
  };

  return (
    <Container>
      <ImageBackgroundContent source={giveClassesBgImage}>
        <Title>Quer ser um Proffy?</Title>

        <TitleDescription>
          Para começar você precisa se cadastrar como professor na nossa
          plataforma Web.
        </TitleDescription>
      </ImageBackgroundContent>

      <Button>
        <OkText onPress={handleNavigateToLanding}>Tudo bem</OkText>
      </Button>
    </Container>
  );
};

export default GiveClasses;
