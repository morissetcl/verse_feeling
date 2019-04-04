import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity, Dimensions } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPray, faHeart } from '@fortawesome/free-solid-svg-icons'
import ProgressBarAnimated from 'react-native-progress-bar-animated';

class Need extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'joie',
      stateOfMind: props.navigation.state.params.stateOfMind,
      progress: 33
    }
  }

  selectValueAndRedirect(item) {
    this.props.navigation.navigate(item.value, { stateOfMind: this.state.stateOfMind, need: item.value})
  }

  render() {
    const barWidth = Dimensions.get('screen').width;
    var radio_props = [
      {label: "D'amour", value: 'Love' },
      {label: "De Pardon", value: 'Forgiveness' },
      {label: "De courage", value: 'Courage' },
      {label: "De guérison", value: 'Health' },
      {label: "D'être renforcer dans votre foi", value: 'Faith' },
      {label: "De louer Dieu", value: 'Praises' }
    ];
    return (
      <View style={styles.main_container}>
        <ProgressBarAnimated
          width={barWidth}
          value={this.state.progress}
          backgroundColorOnComplete="#6CC644"
          borderColor='#f4f3f3'
          barAnimationDuration={0}
          borderRadius={0}
          backgroundColor='#05004e'
        />

        <FontAwesomeIcon icon={ faPray } size={150} color={ '#fce38a' } style={{ position: 'absolute', top: 20, right: 0 }} />
        <FontAwesomeIcon icon={ faHeart } size={150} color={ '#3fc1c9' } style={{ position: 'absolute', bottom: 0, left: 10 }} />

        <Text style={styles.title}>De quoi avez-besoin aujourd'hui ?</Text>
        <View style={{ flex: 5, display: 'flex', alignItems: 'center', padding: '15%' }}>
          {
           radio_props.map((item, index) => (
              <TouchableOpacity
                 key = {item.value}
                 style = {styles.container}
                 onPress={(value) => { this.selectValueAndRedirect(item) }}>
                 <Text style = {styles.text}>
                    {item.label }
                 </Text>
              </TouchableOpacity>
           ))
          }

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
  action_button: {
    flex: 1
  },
  coucou: {
    width: 200,
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    borderRadius:50,
    borderWidth: 1,
    borderColor: '#fff',
    overflow: 'hidden'
  },
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#05004e',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    borderRadius: 10
  },
  title: {
    display: 'flex',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    position: 'relative',
    top: '5%',
    padding: 10,
    color: '#05004e'
  },
  text: {
    color: 'white'
  }
})

export default Need
