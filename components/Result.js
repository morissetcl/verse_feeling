import React from 'react'
import i18n from '../src/i18n'
import { StyleSheet, View, Text, Button, FlatList, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Badge } from 'react-native-elements'
import verses from '../helpers/verses'
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faQuoteLeft, faQuoteRight, faRedoAlt, faHome } from '@fortawesome/free-solid-svg-icons'
import { getVerseFromBibleApiWithSearchedText } from '../api/bible'
import ProgressBar from './communs/ProgressBar'
const style = require('./communs/style');
import { StackActions, NavigationActions } from 'react-navigation';

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

  retrieveVerse() {
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

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#01676b'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

  render() {
    const backHome = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Homepage' })],
    });

    return (

      <View style={style.main_container}>
        <ProgressBar value={this.state.progress}/>
        <FontAwesomeIcon icon={ faQuoteLeft } size={150} color={ '#c8d9eb' } style={{ position: 'absolute', top: 100, left: 10 }} />
        <FontAwesomeIcon icon={ faQuoteRight } size={150} color={ '#c8d9eb' } style={{ position: 'absolute', bottom: 70, right: 10 }} />
        {this.state.loaded ?
          <View style={styles.result_container}>
            <View style={styles.result_container}>
              <ScrollView>
              <Text style={styles.verse}>{this.state.verses['verse']}</Text>
              <View style={style.badges}>
                <Badge badgeStyle={style.badge} value={i18n.t(this.state.stateOfMind)} status="error" />
                <Badge badgeStyle={style.badge} value={i18n.t(this.state.need)} status="error" />
                <Badge badgeStyle={style.badge} value={i18n.t(this.state.extra)} status="error" />
              </View>
              <Text style={styles.result}>{this.state.verses['text']}</Text>
              </ScrollView>
            </View>
          </View>
          :  <ActivityIndicator size="large" color="#0000ff" />
        }
        <View style = {styles.bottom_buttons}>
          <TouchableOpacity onPress = {() => this.props.navigation.dispatch(backHome)}>
            <FontAwesomeIcon icon={ faHome } size={28} color={ '#ffff' } />
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.retrieveVerse()}>
            <FontAwesomeIcon icon={ faRedoAlt } size={25} color={ '#ffff' } />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bottom_buttons: {
    backgroundColor: '#01676b',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom:0,
    left:0,
    width: '100%',
    height: '12%',
    alignItems: 'center'
  },
  result_container: {
    paddingBottom: '5%'
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

  }
})

export default Result
