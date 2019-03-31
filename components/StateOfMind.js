import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import Need from './Need'

class StateOfMind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'joie'
    }
  }

  render() {
    var radio_props = [
      {label: 'Dans la joie', value: 'joie' },
      {label: "Dans l'anxiété", value: 'anxiété' },
      {label: 'Dans la fatigue', value: 'fatigue' },
      {label: 'Dans la tristesse', value: 'tristess' },
      {label: 'Dans la reconnaissance', value: 'reconnaissance' }
    ];
    return (
      <View style={styles.main_container}>
        <Text style={styles.title}>Dans quel état d'esprit vous trouvez vous aujourd'hui ?</Text>
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
         onPress={() => this.props.navigation.navigate("Need")}
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

export default StateOfMind
