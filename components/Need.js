import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

class Need extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'joie',
      stateOfMind: props.navigation.state.params.stateOfMind
    }
  }

  render() {
    var radio_props = [
      {label: "D'amour", value: 'Love' },
      {label: "De courage", value: 'Courage' },
      {label: "De guérison", value: 'Health' },
      {label: "D'être renforcer dans votre foi", value: 'Faith' },
      {label: "De patience", value: 'Patience' },
      {label: "De louer Dieu", value: 'Praises' }
    ];
    return (
      <View style={styles.main_container}>
        <Text style={styles.title}>De quoi avez-besoin aujourd'hui ?</Text>
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
         onPress={() => this.props.navigation.navigate(this.state.value, { stateOfMind: this.state.stateOfMind, need: this.state.value})}
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

export default Need
