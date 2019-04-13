import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import Need from './Need'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSmileBeam, faSadTear } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from './communs/ProgressBar'
const style = require('./communs/style');

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
    var radio_props = [
      {label: 'Dans la joie', value: 'Joy' },
      {label: "Dans l'anxiété", value: 'Anxiety' },
      {label: 'Dans la fatigue', value: 'Tire' },
      {label: 'Dans la tristesse', value: 'Sad' },
      {label: 'Dans la reconnaissance', value: 'Recognition' }
    ];
    return (
      <View style={style.main_container}>
        <ProgressBar value={this.state.progress}/>
        <FontAwesomeIcon icon={ faSadTear } size={150} color={ '#fce38a' } style={{ position: 'absolute', top: 20, right: 0 }} />
        <FontAwesomeIcon icon={ faSmileBeam } size={150} color={ '#3fc1c9' } style={{ position: 'absolute', bottom: 0, left: 10 }} />

        <Text style={style.title}>Dans quel état d'esprit vous trouvez vous aujourd'hui ?</Text>

        <View style={{ flex: 5, display: 'flex', alignItems: 'center', paddingLeft: '15%', paddingRight: '15%', paddingTop: '5%' }}>
          {
           radio_props.map((item, index) => (
              <TouchableOpacity
                 key = {item.value}
                 style = {style.container}
                 onPress={(value) => { this.selectValueAndRedirect(item) }}>
                 <Text style = {style.text}>
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

export default StateOfMind
