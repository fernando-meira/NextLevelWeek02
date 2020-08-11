import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  border-width: 1px;
  border-radius: 8px;
  margin-bottom: 16px;
  border-color: #e6e5f0;

  overflow: hidden;
  background-color: #fff;
`;

export const Profile = styled.View`
  padding: 24px;

  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image.attrs({
  source: {
    uri:
      "https://avatars1.githubusercontent.com/u/52580705?s=460&u=507ae3538daf3d5968d1fdbfe811350338acbb41&v=4",
  },
})`
  width: 64px;
  height: 64px;
  border-radius: 32px;

  background-color: #eee;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  color: #32264d;
  font-size: 20px;
  font-family: "Archivo_700Bold";
`;

export const Subject = styled.Text`
  color: #6a6180;
  font-size: 12px;
  margin-top: 4px;
  font-family: "Poppins_400Regular";
`;

export const Bio = styled.Text`
  margin: 0 24px 24px;

  color: #6a6180;
  font-size: 14px;
  line-height: 24px;
  font-family: "Poppins_400Regular";
`;

export const Footer = styled.View`
  background-color: #fafafc;
  padding: 24px;
  align-items: center;
`;

export const Price = styled.Text`
  color: #6a6180;
  font-size: 14px;
  font-family: "Poppins_400Regular";
`;

export const PriceValue = styled.Text`
  font-size: 16px;
  color: #8257e5;
  font-family: "Archivo_700Bold";
`;

export const ButtonContainer = styled.View`
  margin-top: 16px;

  flex-direction: row;
`;

export const FavoriteButton = styled(RectButton)`
  width: 56px;
  height: 56px;
  margin-right: 8px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  background-color: #8257e5;
`;

export const Favorited = styled(RectButton)`
  width: 56px;
  height: 56px;
  margin-right: 8px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  background-color: #e33d3d;
`;

export const ContactButton = styled(RectButton)`
  margin-right: 8px;
  border-radius: 8px;

  flex: 1;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  background-color: #04d361;
`;

export const ContactButtonText = styled.Text`
  margin-left: 16px;

  color: #fff;
  font-size: 16px;
  font-family: "Archivo_700Bold";
`;
