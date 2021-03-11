import React from "react";
import { View, TextInput, Text, Button } from "react-native";
import { Formik } from "formik";
import { GlobalStyles } from "../styles/global.js";
import * as yup from "yup";

const ReviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
});

export default function ReviewForm({ addNote }) {
  return (
    <View style={GlobalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "" }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          //   console.log(values);
          actions.resetForm();
          addNote(values);
        }}
      >
        {(props) => (
          <View style={GlobalStyles.modalContent}>
            <TextInput
              style={GlobalStyles.input}
              placeholder="Enter the title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />
            <Text style={GlobalStyles.errText}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              multiline
              minHeight={60}
              style={GlobalStyles.input}
              placeholder="Add the description..."
              onChangeText={props.handleChange("body")}
              value={props.values.body}
            />
            <Text style={GlobalStyles.errText}>
              {props.touched.body && props.errors.body}
            </Text>

            <Button
              title="SUBMIT"
              color="skyblue"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
