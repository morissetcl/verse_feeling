import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'

class Love extends React.Component {
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
      {label: "L'amour de mes parents", value: 'Parent' },
      {label: "L'amour de mes enfants", value: 'Child' },
      {label: "L'amour de mon conjoint", value: 'Partner' },
      {label: "L'amour du Seigneur", value: 'Lord' },
      {label: "L'amour d'un(e) ami(e)", value: 'Friends' }
    ];
    return (
      <View style={styles.main_container}>
        <Text style={styles.title}>Quel amour recherchez-vous ?</Text>
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
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
    padding: 20,
    width: '100%'
  },
  title: {
    display: 'flex',
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'relative',
    top: '5%',
    padding: 10
  }
})

export default Love
