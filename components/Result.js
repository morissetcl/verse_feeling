import React from 'react'
import i18n from '../src/i18n'
import { StyleSheet, View, Text, Button, FlatList, Dimensions, ScrollView, ActivityIndicator } from 'react-native'
import { Badge } from 'react-native-elements'

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
      verses: [],
      loaded: false
    }
  }

  componentDidMount() {
    const tags = this.formattedTags()
    getVerseFromBibleApiWithSearchedText(tags).then(data => {
      random_verse = data['verses'][Math.floor(Math.random() * data['verses'].length)];
      this.state.verses = { text: random_verse.content, verse: random_verse.name }
      this.setState({ loaded: true })
      this.forceUpdate();
    })
  }

  formattedTags() {
    var tags = { need: this.state.need, theme: this.state.extra }
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
        <FontAwesomeIcon icon={ faQuoteLeft } size={150} color={ '#dadddf' } style={{ position: 'absolute', top: 100, left: 10 }} />
        <FontAwesomeIcon icon={ faQuoteRight } size={150} color={ '#dadddf' } style={{ position: 'absolute', bottom: 70, right: 10 }} />
        {this.state.loaded ?
          <View style={styles.result_container}>
            <ScrollView style={styles.result_container}>
            <Text style={styles.verse}>{this.state.verses['verse']}</Text>
            <View style={styles.badges}>
              <Badge badgeStyle={styles.badge} value={i18n.t(this.state.stateOfMind)} status="error" />
              <Badge badgeStyle={styles.badge} value={i18n.t(this.state.need)} status="error" />
              <Badge badgeStyle={styles.badge} value={i18n.t(this.state.extra)} status="error" />
            </View>
            <Text style={styles.result}>{this.state.verses['text']}</Text>
            </ScrollView>
          </View>
          :  <ActivityIndicator size="large" color="#0000ff" />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  result_container: {
    paddingBottom: '5%'
  },
  main_container: {
    flex: 1,
    backgroundColor: '#f4f3f3',
  },
  result: {
    fontSize: 18,
    lineHeight: 30,
    padding: 20,
    textAlign: 'justify',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '20%'
  },
  verse: {
    paddingTop: '5%',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent'

  },
  badges: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '5%'
  },
  badge: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 12,
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10
  }
})

export default Result
