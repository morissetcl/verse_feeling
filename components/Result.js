import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import React from 'react'
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import verses from '../helpers/verses'

class Result extends React.Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      stateOfMind: props.navigation.state.params.stateOfMind,
      need: props.navigation.state.params.need,
      extra: props.navigation.state.params.extra
    }
  }

  retrieveVerse() {
    var filtered_verses = []
    verses.map((item, key) =>
      item.tags.join() == this.formattedTags() ? filtered_verses.push(item) : ''
    );
    random_verse = filtered_verses[Math.floor(Math.random() * filtered_verses.length)];
    return [random_verse]
  }

  formattedTags() {
    var tags = this.state.stateOfMind + ',' + this.state.need + ',' + this.state.extra
    return tags
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Text style={styles.title}>{verses.data}</Text>
        <FlatList
          data={this.retrieveVerse()}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Text>{item.overview}</Text> }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})

export default Result
