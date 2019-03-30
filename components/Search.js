// Components/Search.js
import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native'
import Verse from './Verse'
import movies from '../helpers/movies'

class Search extends React.Component {
  render() {
    return (
      <View  style={ styles.main_container }>
        <TextInput placeholder='Titre du film' style={ styles.textinput }/>
        <Button title='Rechercher' onPress={() => {}}/>
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Verse verse={item}/> }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    paddingLeft: 5,
    marginTop: 20
  }
})

export default Search
