import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: #8257e5;
`;

export const ImageBackgroundContent = styled.ImageBackground`
  width: 80%;

  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
  line-height: 37px;
  font-family: "Archivo_700Bold";
`;

export const TitleDescription = styled.Text`
  margin-top: 24px;

  color: #d4c2ff;
  font-size: 16px;
  line-height: 26px;
  font-family: "Poppins_400Regular";
`;

export const Button = styled(RectButton)`
  width: 90%;
  height: 58px;
  margin: 40px 0;
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  background-color: #04d361;
`;

export const OkText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: "Archivo_700Bold";
`;
