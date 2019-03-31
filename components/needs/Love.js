import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

class Love extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'joie'
    }
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

export default Love
