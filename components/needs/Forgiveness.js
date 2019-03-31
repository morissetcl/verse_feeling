import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

class Forgiveness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'joie',
      need: props.navigation.state.params.need,
      stateOfMind: props.navigation.state.params.stateOfMind
    }
  }

  render() {
    var radio_props = [
      {label: "Parceque j'ai pêché", value: 'Sin' },
      {label: "Car je me suis éloigné du Seigneur", value: 'Distant' }
    ];
    return (
      <View style={styles.main_container}>
        <Text style={styles.title}>Pardon ?</Text>
        <RadioForm
         radio_props={radio_props}
         initial= 'joie'
         formHorizontal={false}
         labelHorizontal={true}
         buttonColor={'#2196f3'}
         animation={true}
         onPress={(value) => {this.setState({value:value})}}
       />
       <Text style={styles.title}>{this.state.value}</Text>
       <Button
         onPress={() => this.props.navigation.navigate('Result', { need: this.state.need, stateOfMind: this.state.stateOfMind, extra: this.state.value })}
         title="Suivant"
       />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})

export default Forgiveness
