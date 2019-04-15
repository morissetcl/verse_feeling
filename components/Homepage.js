import React from 'react'
import { StyleSheet, View, Text, Button, Image, Animated, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSmileBeam, faPray, faHeart, faBible } from '@fortawesome/free-solid-svg-icons'
import i18n from '../src/i18n'
import Tabs from './Tabs'

class Homepage extends React.Component {

  static navigationOptions = { header: null }

  render() {
    return (
        <View style={styles.container}>
          <Tabs>
            <View title="VERSET" style={styles.content}>
            <FontAwesomeIcon icon={ faSmileBeam } size={100} color={ '#c8d9eb' } style={{ position: 'absolute', top: 30, left: 60 }} />
              <Text style={styles.title}> {i18n.t('homepage.step_1')} </Text>
              <FontAwesomeIcon icon={ faPray } size={100} color={ '#c8d9eb' } style={{ position: 'absolute', top: 160, right: 20 }} />
              <Text style={styles.title}>{i18n.t('homepage.step_2')}</Text>
              <FontAwesomeIcon icon={ faBible } size={100} color={ '#c8d9eb' } style={{ position: 'absolute', bottom: 160, left: 100 }} />
              <Text style={styles.title}>{i18n.t('homepage.step_3')}</Text>
              <TouchableOpacity
                style = {styles.containerh}
                onPress={(value) => { this.props.navigation.navigate('StateOfMind') }}>
                <Text style = {styles.text}>
                  {i18n.t('homepage.start')}
                </Text>
              </TouchableOpacity>
            </View>
            <View title="GRAPHIQUE" style={styles.content}>
              <Text style={styles.text}>
                Components you define will end up rendering as native platform widgets
              </Text>
            </View>
          </Tabs>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  containerh: {
    padding: 10,
    backgroundColor: '#49beb7',
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    marginLeft: '10%',
    marginBottom: '10%',
    marginTop: '10%',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white'
  },
  title_1: {
    flex: 2,
    display: 'flex',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'relative',
    top: '5%',
    paddingRight: 25,
    paddingLeft: 25,
    color: 'white'
  },
  title: {
    flex: 3,
    display: 'flex',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    position: 'relative',
    paddingRight: 25,
    paddingLeft: 25,
    color: '#01676b'
  },
  container: {
    flex: 1,                            // Take up all screen
    backgroundColor: '#01676b'         // Background color
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: '20%'
  },
  header: {
    margin: 10,                         // Add margin
    color: '#FFFFFF',                   // White color
    fontSize: 26                       // Bigger font size
  },
  text: {
    marginHorizontal: 20,               // Add horizontal margin
    textAlign: 'center',                // Center
    fontSize: 18,
    color: 'white'
  }
})

export default Homepage
