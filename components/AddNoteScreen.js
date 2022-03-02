import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View, Alert } from 'react-native';

export default function AddNoteScreen({ route, navigation }) {
  const [title, setValueTitle] = useState('');
  const [text, setValueText] = useState('');

  const { addHandler } = route.params;

  const onChangedTitle = (title) => {
    setValueTitle(title);
  }
  const onChangedText = (text) => {
    setValueText(text);
  }
  return (
    <View>
      <TextInput styles={styles.input} onChangeText={onChangedTitle} placeholder='Title' />
      <TextInput styles={styles.input} onChangeText={onChangedText} placeholder='Description' />
      <Button color='green' onPress={() => {
        if (text == '') {
          Alert.alert("Empty note")
          return
        }
        addHandler(title, text);
        navigation.goBack();
      }} title="Add the note" />
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
