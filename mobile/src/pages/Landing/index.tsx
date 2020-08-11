import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import api from "../../services/api";

import styles from "./styles";
import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";

const Landing = () => {
  const { navigate } = useNavigation();

  const [connections, setConnections] = useState(0);

  useEffect(() => {
    async function fetchConnections() {
      try {
        const { data } = await api.get("connections");

        setConnections(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchConnections();
  }, []);

  const handleNavigateToGiveClassesPage = () => {
    navigate("GiveClasses");
  };

  const handleNavigateToStudyPages = () => {
    navigate("Study");
  };

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToStudyPages}
          style={[styles.button, styles.buttonPrimaty]}
        >
          <Image source={studyIcon} />

          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />

          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {connections.total} conexões realizadas{" "}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
};

export default Landing;
