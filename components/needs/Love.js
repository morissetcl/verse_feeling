import { Badge } from 'react-native-elements'
import i18n from '../../src/i18n'
import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSmileBeam, faHeart } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from '../communs/ProgressBar'
const style = require('../communs/style');

class Love extends React.Component {
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

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#01676b'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

  render() {
    var radio_props = [
      {label: "L'amour de mes parents", value: 'Parent' },
      {label: "L'amour de mes enfants", value: 'Child' },
      {label: "L'amour de mon conjoint", value: 'Partner' },
      {label: "L'amour du Seigneur", value: 'Lord' },
      {label: "L'amour d'un(e) ami(e)", value: 'Friends' }
    ];
    return (
      <View style={style.main_container}>
        <ProgressBar value={this.state.progress}/>
        <FontAwesomeIcon icon={ faHeart } size={150} color={ '#c8d9eb' } style={{ position: 'absolute', top: 20, right: 0 }} />
        <FontAwesomeIcon icon={ faHeart } size={150} color={ '#c8d9eb' } style={{ position: 'absolute', bottom: 0, left: 10 }} />

        <Text style={style.title}>Quel amour recherchez-vous ?</Text>
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

export default Love
