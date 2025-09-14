import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 20,
    marginRight: '85%',
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 4,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top", // keeps text at top in Android
  },
  hint: {
    alignSelf: "flex-start",
    fontSize: 12,
    color: "gray",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#333",
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});