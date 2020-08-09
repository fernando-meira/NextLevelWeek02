import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 40,

    flex: 1,
    justifyContent: "center",

    backgroundColor: "#8257e5",
  },

  banner: {
    width: "100%",
    resizeMode: "contain",
  },

  title: {
    marginTop: 40,

    color: "#fff",
    fontSize: 20,
    lineHeight: 30,
    fontFamily: "Poppins_400Regular",
  },

  titleBold: {
    fontFamily: "Poppins_600SemiBold",
  },

  buttonsContainer: {
    marginTop: 40,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  button: {
    height: 150,
    padding: 24,
    width: "48%",
    borderRadius: 8,

    justifyContent: "space-between",
  },

  buttonPrimaty: {
    backgroundColor: "#9871f5",
  },

  buttonSecondary: {
    backgroundColor: "#04d361",
  },

  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Archivo_700Bold",
  },

  totalConnections: {
    maxWidth: "90%",
    marginTop: 40,

    fontSize: 20,
    color: "#d4c2ff",
    fontFamily: "Poppins_400Regular",
  },
});

export default styles;
