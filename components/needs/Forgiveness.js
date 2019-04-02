import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'

class Forgiveness extends React.Component {
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
      {label: "Parceque j'ai pêché", value: 'Sin' },
      {label: "Car je me suis éloigné du Seigneur", value: 'Distant' }
    ];
    return (
      <View style={styles.main_container}>
        <Text style={styles.title}>Pardon ?</Text>
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
  },
  text: {
    display: 'flex',
    textAlign: 'center'
  }
})

export default Forgiveness
