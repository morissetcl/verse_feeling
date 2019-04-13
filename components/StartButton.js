import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import i18n from '../src/i18n'

class StartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity
           style = {styles.container}
           onPress={() => this.state.value.navigate('StateOfMind')}>
           <Text style = {styles.text}>
              {i18n.t('homepage.start')}
           </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#05004e',
    alignItems: 'center',
    padding: 20,
    width: '100%'
  },
  text: {
    color: 'white',
    display: 'flex',
    textAlign: 'center',
    fontSize: 18
  }
})

export default StartButton
