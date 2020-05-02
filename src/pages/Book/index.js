import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles';

const Book = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inclua seu novo livro...</Text>

      <TextInput
        placeholder='Título'
        style={styles.input}
      />

      <TextInput
        style={styles.input}
        placeholder='descrição'
        multiline={true}
        numberOfLines={4}
      />

      <View style={styles.buttomContainer}>

        <TouchableOpacity style={styles.cameraButtom}>
          <Icon name='photo-camera' size={40} color='#fff' />
        </TouchableOpacity>


        <TouchableOpacity style={styles.cadastrarButtom}>
          <Text style={styles.buttomText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelarButtom}>
          <Text style={styles.buttomText}>Cancelar</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
}

export default Book
