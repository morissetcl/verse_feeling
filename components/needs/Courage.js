import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

class Courage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'joie'
    }
  }

  render() {
    var radio_props = [
      {label: "Pour mon travail", value: 'Work' },
      {label: "Pour lutter contre la tentation", value: 'Tentation' },
      {label: "Pour dire la vérité", value: 'Truth' }
    ];
    return (
      <View style={styles.main_container}>
        <Text style={styles.title}>Quel courage recherchez-vous ?</Text>
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
         onPress={() => this.props.navigation.navigate(this.state.value)}
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

export default Courage
