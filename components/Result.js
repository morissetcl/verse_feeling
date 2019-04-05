import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import React from 'react'
import { StyleSheet, View, Text, Button, FlatList, Dimensions } from 'react-native'
import verses from '../helpers/verses'
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { getVerseFromBibleApiWithSearchedText } from '../api/bible'

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateOfMind: props.navigation.state.params.stateOfMind,
      need: props.navigation.state.params.need,
      extra: props.navigation.state.params.extra,
      progress: 100,
      verses: []
    }
  }

  componentDidMount() {
    getVerseFromBibleApiWithSearchedText(this.retrieveVerse()).then(data => {
      this.state.verses = { text: data.text, verse: data.reference }
      this.forceUpdate();
    })
  }


  retrieveVerse() {
    var filtered_verses = []
    verses.map((item, key) =>
      item.tags.join() == this.formattedTags() ? filtered_verses.push(item) : ''
    );
    random_verse = filtered_verses[Math.floor(Math.random() * filtered_verses.length)];
    return random_verse.verse_number
  }

  formattedTags() {
    var tags = this.state.stateOfMind + ',' + this.state.need + ',' + this.state.extra
    return tags
  }

  render() {
    const barWidth = Dimensions.get('screen').width;
    return (
      <View style={styles.main_container}>
        <ProgressBarAnimated
          width={barWidth}
          value={this.state.progress}
          borderColor='#f4f3f3'
          barAnimationDuration={0}
          borderRadius={0}
          backgroundColor='#05004e'
        />
        <FontAwesomeIcon icon={ faQuoteLeft } size={150} color={ '#dadddf' } style={{ position: 'absolute', top: 50, left: 10 }} />
        <FontAwesomeIcon icon={ faQuoteRight } size={150} color={ '#dadddf' } style={{ position: 'absolute', bottom: 50, right: 10 }} />
        <View style={styles.result_container}>
          <Text style={styles.verse}>{this.state.verses['verse']}</Text>
          <Text style={styles.result}>{this.state.verses['text']}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#f4f3f3'
  },
  result: {
    fontSize: 18,
    lineHeight: 30
  },
  verse: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  result_container: {
    paddingTop:'50%',
    alignItems:'center',
    justifyContent:'center',
    padding: 10
  }
})

export default Result
