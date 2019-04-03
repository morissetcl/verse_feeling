import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPray, faCloudSun } from '@fortawesome/free-solid-svg-icons'

class Faith extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'joie',
      need: props.navigation.state.params.need,
      stateOfMind: props.navigation.state.params.stateOfMind
    }
  }

  selectValueAndRedirect(item) {
    this.props.navigation.navigate('Result', { need: this.state.need, stateOfMind: this.state.stateOfMind, extra: item.value })
  }

  render() {
    var radio_props = [
      {label: "L'espoir que je met en Jésus", value: 'Hope' },
      {label: "La crainte de Dieu", value: 'Fear' }
    ];
    return (
      <View style={styles.main_container}>
        <FontAwesomeIcon icon={ faCloudSun } size={150} color={ '#fce38a' } style={{ position: 'absolute', top: 0, right: 0 }} />
        <FontAwesomeIcon icon={ faPray } size={150} color={ '#3fc1c9' } style={{ position: 'absolute', bottom: 0, left: 10 }} />

        <Text style={styles.title}>Quel côté de votre Foi voulez-vous renforcer ?</Text>
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

export default Faith
