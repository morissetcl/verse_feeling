// Components/Search.js
import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'

class Verse extends React.Component {
  constructor(props) {
    super(props)
    // Ici on va créer les propriétés de notre component custom Search
  }
  render() {
    return (
      <View style={ styles.card_container }>
        <View style={ styles.header_verse }>
          <Text style={styles.title}>{this.props.verse.title}</Text>
          <Text style={styles.title}>{this.props.verse.vote_average}</Text>
        </View>
        <Text style={styles.description_text} numberOfLines={3}>{this.props.verse.overview}</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  card_container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'red',
    padding: 10
  },
  header_verse: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: 'bold'
  }
})

export default Verse
