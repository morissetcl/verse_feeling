import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import Need from './Need'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSmileBeam, faSadTear } from '@fortawesome/free-solid-svg-icons'

class StateOfMind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'joie'
    }
  }

  selectValueAndRedirect(item) {
    this.props.navigation.navigate("Need", { stateOfMind: item.value})
  }

  render() {
    var radio_props = [
      {label: 'Dans la joie', value: 'Joy' },
      {label: "Dans l'anxiété", value: 'Anxiety' },
      {label: 'Dans la fatigue', value: 'Tire' },
      {label: 'Dans la tristesse', value: 'Sad' },
      {label: 'Dans la reconnaissance', value: 'Recognition' }
    ];
    return (
      <View style={styles.main_container}>
        <FontAwesomeIcon icon={ faSadTear } size={150} color={ '#fce38a' } style={{ position: 'absolute', top: 0, right: 0 }} />
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
    flex: 1
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
    backgroundColor: '#34699a',
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
    color: '#00204a'
  },
  text: {
    color: 'white'
  }
})

export default StateOfMind
