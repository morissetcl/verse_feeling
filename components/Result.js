import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import React from 'react'
import { StyleSheet, View, Text, Button, FlatList, Dimensions } from 'react-native'
import verses from '../helpers/verses'
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateOfMind: props.navigation.state.params.stateOfMind,
      need: props.navigation.state.params.need,
      extra: props.navigation.state.params.extra,
      progress: 100
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
        <View style={styles.result_container}>
          <FontAwesomeIcon icon={ faQuoteLeft } size={150} color={ '#dadddf' } style={{ position: 'absolute', top: 50, left: 10 }} />
          <FontAwesomeIcon icon={ faQuoteRight } size={150} color={ '#dadddf' } style={{ position: 'absolute', bottom: 50, right: 10 }} />

          <FlatList
            data={this.retrieveVerse()}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <Text style={styles.result}>{item.overview}</Text> }
          />
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
  result_container: {
    flex: 5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding: 10
  }
})

export default Result
