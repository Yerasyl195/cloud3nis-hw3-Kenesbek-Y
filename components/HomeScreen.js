import React, { useState } from 'react';
import { TouchableHighlight, Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [listOfItems, setListOfItems] = useState([
    { title: 'План на день', text: 'Сделать зарядку, пойти на пары, прочитать 80 страниц книги', index: 0 },
    { title: 'План на неделю', text: 'Сходить в спортзал, сдать 3 дедлайна, закончить курсовую работу', index: 1 }
  ])

  const addHandler = (title, text) => {
    setListOfItems((list) => {
      return [
        ...list,
        { title: title, text: text, index: list.length }
      ]
    })
  }

  const editHandler = (new_title, new_text, edited_index) => {
    setListOfItems((list) => {
      let res = []
      for (let i = 0; i < list.length; i++) {
        if (i == edited_index) {
          res.push({ title: new_title, text: new_text, index: i })
          continue
        }
        res.push(list[i])
      }
      return res
    })
  }

  return (
    <View>
      <Button title="Add" onPress={() => { navigation.navigate('AddNote', { addHandler }) }} />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) =>
        (<TouchableHighlight onPress={() => navigation.navigate('EditNote', { prevTitle: item.title, prevText: item.text, index: item.index, editHandler: editHandler })}>
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </TouchableHighlight>)
        } />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    marginTop: 20,
    width: '60%',
    marginLeft: '20%'
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  }
});
