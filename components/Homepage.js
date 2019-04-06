import React from 'react'
import { StyleSheet, View, Text, Button, Image, Animated, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPray, faHeart } from '@fortawesome/free-solid-svg-icons'

class Homepage extends React.Component {

  // selectValueAndRedirect(item) {
  //   this.props.navigation.navigate(item.value, { stateOfMind: this.state.stateOfMind, need: item.value})
  // }
  static navigationOptions = { header: null }

  render() {
    return (
      <View style={styles.main_container}>
        <Image source={require('../assets/biblemind.png')}  style={styles.logo} />
        <View style={styles.main_container}>
          <Text style={styles.title}>Find the verse what you need in 3 questions</Text>
          <TouchableOpacity
             style = {styles.container}
             onPress={(value) => { this.props.navigation.navigate('StateOfMind') }}>
             <Text style = {styles.text}>
                Commencez
             </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'white'
  },
  logo: {
    marginTop: '20%',
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#05004e',
    alignItems: 'center',
    padding: 20,
    width: '100%'
  },
  title: {
    flex: 2,
    display: 'flex',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'relative',
    top: '5%',
    paddingRight: 45,
    paddingLeft: 45,
    color: '#05004e'
  },
  subtitle: {
    color: 'red'
  },
  text: {
    color: 'white',
    display: 'flex',
    textAlign: 'center',
    fontSize: 18
  }
})

export default Homepage
