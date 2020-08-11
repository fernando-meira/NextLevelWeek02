import React, { useState } from "react";
import { Image } from "react-native";

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

const TeacherItem = () => {
  const [favorite, setFavorite] = useState(true);

  return (
    <Container>
      <Profile>
        <Avatar />

        <ProfileInfo>
          <Name>Fernando Meira</Name>

          <Subject>Cálculo</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>
        Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo
        commodo, ut interdum diam laoreet. Sed non consequat odio. Interagi no
        mé, cursus quis, vehicula ac nisi. Posuere libero varius. Nullam a nisl
        ut ante blandit hendrerit. Aenean sit amet nisi. Quem num gosta di mé,
        boa gentis num é.
      </Bio>

      <Footer>
        <Price>
          Proço/hora <PriceValue>R$ 20,00 </PriceValue>{" "}
        </Price>

        <ButtonContainer>
          {favorite ? (
            <Favorited>
              <Image source={unfavoriteIcon} />
            </Favorited>
          ) : (
            <FavoriteButton>
              <Image source={heartOutlineIcon} />
            </FavoriteButton>
          )}

          <ContactButton>
            <Image source={whatsappIcon} />

            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
