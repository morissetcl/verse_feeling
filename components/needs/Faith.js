import { Badge } from 'react-native-elements'
import i18n from '../../src/i18n'
import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity, Dimensions } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPray, faCloudSun } from '@fortawesome/free-solid-svg-icons'
import ProgressBarAnimated from 'react-native-progress-bar-animated';
const style = require('../../style');

class Faith extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'joie',
      need: props.navigation.state.params.need,
      stateOfMind: props.navigation.state.params.stateOfMind,
      progress: 60
    }
  }

  selectValueAndRedirect(item) {
    this.props.navigation.navigate('Result', { need: this.state.need, stateOfMind: this.state.stateOfMind, extra: item.value })
  }

  render() {
    const barWidth = Dimensions.get('screen').width;
    var radio_props = [
      {label: "L'espoir que je met en Jésus", value: 'Hope' },
      {label: "La crainte de Dieu", value: 'Fear' }
    ];
    return (
      <View style={style.main_container}>
        <ProgressBarAnimated
          width={barWidth}
          value={this.state.progress}
          borderColor='#f4f3f3'
          barAnimationDuration={0}
          borderRadius={0}
          backgroundColor='#05004e'
        />
        <FontAwesomeIcon icon={ faCloudSun } size={150} color={ '#fce38a' } style={{ position: 'absolute', top: 20, right: 0 }} />
        <FontAwesomeIcon icon={ faPray } size={150} color={ '#3fc1c9' } style={{ position: 'absolute', bottom: 0, left: 10 }} />

        <Text style={style.title}>Quel côté de votre Foi voulez-vous renforcer ?</Text>
          <View style={style.badges}>
            <Badge badgeStyle={style.badge} value={i18n.t(this.state.stateOfMind)} status="error" />
            <Badge badgeStyle={style.badge} value={i18n.t(this.state.need)} status="error" />
          </View>
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

export default Faith
