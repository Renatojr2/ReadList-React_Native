import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const Main = () => {
  const Data = [
    {
      id: '1',
      title: 'A menina que roubava livros',
      anotation: 'melhor livro que ja li',
      read: false,
      photo: null
    },
    {
      id: '2',
      title: 'python',
      anotation: 'melhor livro que ja li',
      read: false,
      photo: null
    },
    {
      id: '3',
      title: 'c#',
      anotation: 'melhor livro que ja li',
      read: false,
      photo: null
    },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Lista de Leitura</Text>
        <TouchableOpacity style={styles.addbuttom}>
          <Icon name='add' size={30} color='#fff' />
        </TouchableOpacity>
      </View>
      <FlatList
        data={Data}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemButtom}>
            <Text style={styles.textItem}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Main