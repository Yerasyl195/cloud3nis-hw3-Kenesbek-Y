import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View, Alert } from 'react-native';

export default function EditNoteScreen({ route, navigation }) {
  const { prevTitle, prevText, index, editHandler } = route.params;
  const [title, setValueTitle] = useState(prevTitle);
  const [text, setValueText] = useState(prevText);

  const onChangedTitle = (title) => {
    setValueTitle(title);
  }
  const onChangedText = (text) => {
    setValueText(text);
  }
  return (
    <View>
      <TextInput defaultValue={prevTitle} styles={styles.input} onChangeText={onChangedTitle} placeholder='Title' />
      <TextInput defaultValue={prevText} styles={styles.input} onChangeText={onChangedText} placeholder='Description' />
      <Button color='red' onPress={() => {
        if (title == '') {
          Alert.alert("Empty title")
          return
        }
        editHandler(title, text, index);
        navigation.goBack();
      }} title="Edit" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 5,
    borderColor: 'red',
    padding: 10,
    marginVertical: 30,
    marginHorizontal: '20%',
    width: '60%',
  }
});
