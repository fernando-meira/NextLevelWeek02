import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";

import logoImg from "../../assets/images/logo.png";
import backItem from "../../assets/images/icons/back.png";

import { Container, TopBar, Title, Header } from "./styles";

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
  const { navigate } = useNavigation();

  const handleGoBack = () => {
    navigate("Landing");
  };

  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backItem} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </TopBar>

      <Header>
        <Title>{title}</Title>

        {headerRight}
      </Header>

      {children}
    </Container>
  );
};

export default PageHeader;
