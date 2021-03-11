import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
  },
  keepContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  aboutTitle: {
    fontSize: 20,
    textAlign: "center",
  },
  aboutMain: {
    fontSize: 30,
    textAlign: "center",
    color: "#1b1b1b",
  },
  aboutCenter: {
    textAlign: "center",
  },
  aboutContainer: {
    flex: 1,
    marginTop: 40,
  },
  made: {
    fontSize: 18,
    marginTop: 40,
    letterSpacing: 2,
  },
  favorite: {
    position: "absolute",
    color: "red",
    paddingVertical: 3,
    marginVertical: 3,
  },
  titleText: {
    fontSize: 18,
    textAlign: "center",
  },
  font: {
    fontSize: 20,
  },
  card: {
    borderRadius: 6,
    fontSize: 18,
    padding: 10,
    margin: 10,
    backgroundColor: "#eee",
    marginHorizontal: 4,
    marginVertical: 6,
  },
  mainCardStyle: {
    marginHorizontal: 10,
  },
  plusbtn: {
    position: "absolute",
    color: "black",
    backgroundColor: "#eee",
    marginHorizontal: 10,
    marginVertical: 10,
    right: 0,
    bottom: 0,
    borderRadius: 50,
  },
  delbtn: {
    position: "absolute",
    color: "black",
    right: 0,
    padding: 5,
    margin: 5,
  },
  fullView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  closebtn: {
    position: "absolute",
    color: "black",
    backgroundColor: "#eee",
    marginHorizontal: 10,
    marginVertical: 10,
    right: 0,
    top: 0,
    borderRadius: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 15,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 2,
  },
  modalContent: {
    flex: 1,
    padding: 5,
    backgroundColor: "#fff",
  },
  errText: {
    color: "skyblue",
    fontWeight: "bold",
    marginBottom: 1,
    marginTop: 1,
    textAlign: "center",
  },
  keepTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10, //
    margin: 10, //
    backgroundColor: "#eee",
  },
  keepBody: {
    fontSize: 17,
    padding: 10,
    margin: 10,
    backgroundColor: "#eee",
    textAlign: "center",
  },
});
