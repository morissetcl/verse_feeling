import React from 'react'
import { Badge } from 'react-native-elements'
import i18n from '../src/i18n'
import { StyleSheet, View, Text, Button, TouchableOpacity, Dimensions } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPray, faHeart } from '@fortawesome/free-solid-svg-icons'
import ProgressBarAnimated from 'react-native-progress-bar-animated';
const style = require('../style');

class Need extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'joie',
      stateOfMind: props.navigation.state.params.stateOfMind,
      progress: 33
    }
  }

  selectValueAndRedirect(item) {
    this.props.navigation.navigate(item.value, { stateOfMind: this.state.stateOfMind, need: item.value})
  }

  render() {
    const barWidth = Dimensions.get('screen').width;
    var radio_props = [
      {label: "D'amour", value: 'Love' },
      {label: "De Pardon", value: 'Forgiveness' },
      {label: "De courage", value: 'Courage' },
      {label: "De guérison", value: 'Health' },
      {label: "D'être renforcer dans votre foi", value: 'Faith' },
      {label: "De louer Dieu", value: 'Praises' }
    ];
    return (
      <View style={style.main_container}>
        <ProgressBarAnimated
          width={barWidth}
          value={this.state.progress}
          backgroundColorOnComplete="#6CC644"
          borderColor='#f4f3f3'
          barAnimationDuration={0}
          borderRadius={0}
          backgroundColor='#05004e'
        />

        <FontAwesomeIcon icon={ faPray } size={150} color={ '#fce38a' } style={{ position: 'absolute', top: 20, right: 0 }} />
        <FontAwesomeIcon icon={ faHeart } size={150} color={ '#3fc1c9' } style={{ position: 'absolute', bottom: 0, left: 10 }} />

        <Text style={style.title}>De quoi avez-besoin aujourd'hui ?</Text>
        <View style={style.badges}>
          <Badge badgeStyle={style.badge} value={i18n.t(this.state.stateOfMind)} status="error" />

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

export default Need
