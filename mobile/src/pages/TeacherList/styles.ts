import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;

  background: #f0f0f7;
`;

export const TeacherListContainer = styled(ScrollView)`
  margin: -40px 16px 0 16px;
`;

export const SearchForm = styled.View`
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  color: #d4c2ff;
  font-family: "Poppins_400Regular";
`;

export const Input = styled.TextInput.attrs({
  placeholderColor: "#c1bccc",
})`
  height: 54px;
  margin-top: 4px;
  padding: 0 16px;
  border-radius: 8px;
  margin-bottom: 16px;

  justify-content: center;

  background-color: #fff;
`;
export const InputGroup = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

export const SubmitButton = styled(RectButton)`
  height: 56px;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #04d361;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: "Archivo_700Bold";
`;
