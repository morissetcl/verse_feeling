import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity, Dimensions } from 'react-native'
import Need from './Need'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSmileBeam, faSadTear } from '@fortawesome/free-solid-svg-icons'
import ProgressBarAnimated from 'react-native-progress-bar-animated';

class StateOfMind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'joie',
      progress: 0
    }
  }

  selectValueAndRedirect(item) {
    this.props.navigation.navigate("Need", { stateOfMind: item.value})
  }

  render() {
    const barWidth = Dimensions.get('screen').width;
    var radio_props = [
      {label: 'Dans la joie', value: 'Joy' },
      {label: "Dans l'anxiété", value: 'Anxiety' },
      {label: 'Dans la fatigue', value: 'Tire' },
      {label: 'Dans la tristesse', value: 'Sad' },
      {label: 'Dans la reconnaissance', value: 'Recognition' }
    ];
    return (
      <View style={styles.main_container}>
        <ProgressBarAnimated
          width={barWidth}
          value={this.state.progress}
          borderColor='#f4f3f3'
        />
        <FontAwesomeIcon icon={ faSadTear } size={150} color={ '#fce38a' } style={{ position: 'absolute', top: 20, right: 0 }} />
        <FontAwesomeIcon icon={ faSmileBeam } size={150} color={ '#3fc1c9' } style={{ position: 'absolute', bottom: 0, left: 10 }} />

        <Text style={styles.title}>Dans quel état d'esprit vous trouvez vous aujourd'hui ?</Text>
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

export default StateOfMind
