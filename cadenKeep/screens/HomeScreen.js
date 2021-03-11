import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm.js";
// import uuid from "uuid/v4";
import uuid from "react-uuid";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import { GlobalStyles } from "../styles/global.js";
export default function HomeScreen({ navigation }) {
  const [modal, setModal] = useState(false);

  const [notes, setNotes] = useState([
    { title: "this is demo", body: "this is body", key: "1" },
    { title: "this is demo 2", body: "this is body 2", key: "2" },
  ]);

  const addNote = (note) => {
    note.key = uuid();
    setNotes((currentNotes) => {
      return [note, ...currentNotes];
    });
    setModal(false);
  };

  const pressHolder = (key) => {
    // console.log("i am clicked");
    setNotes((prevNotes) => {
      return prevNotes.filter((notes) => notes.key != key);
    });
  };

  return (
    <View style={GlobalStyles.fullView}>
      <Modal visible={modal} animationType="slide">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={GlobalStyles.modalContent}>
            <MaterialIcons
              style={GlobalStyles.closebtn}
              name="close"
              size={30}
              onPress={() => setModal(false)}
            />

            <ReviewForm addNote={addNote} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={GlobalStyles.mainCardStyle}
            onPress={() => navigation.navigate("KeepScreen", item)}
          >
            <View style={GlobalStyles.card}>
              <Text style={GlobalStyles.titleText}>{item.title}</Text>
              <MaterialIcons
                style={GlobalStyles.delbtn}
                name="delete"
                size={24}
                onPress={() => pressHolder(item.key)}
              />
            </View>
          </TouchableOpacity>
        )}
      />
      <MaterialIcons
        style={GlobalStyles.plusbtn}
        name="add"
        size={50}
        onPress={() => setModal(true)}
      />
    </View>
  );
}
