import React from 'react'
import { StyleSheet, View, Text, Button, Image, Animated, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSmileBeam, faPray, faHeart, faBible } from '@fortawesome/free-solid-svg-icons'
import i18n from '../src/i18n'
import Tabs from './Tabs'
import PureChart from 'react-native-pure-chart';
import { getFeelings } from '../api/bible'
import { Constants } from 'expo';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceId: Constants.installationId,
      joy: [],
      anxiety: [],
      tire: [],
      sad: [],
      recognition: [],
      loaded: false,
      etat: ''
    }
  }

  static navigationOptions = { header: null }

  componentDidMount() {
    getFeelings(this.state.deviceId).then(data => {
      const coucou = data['feelings']
      if (coucou.length > 0){
        for(var i in coucou) {
          if (coucou[i]['mood'] == 'Joy') {
            this.state.joy.push(coucou)
          } else if (coucou[i]['mood'] == 'Anxiety') {
            this.state.anxiety.push(coucou)
          } else if (coucou[i]['mood'] == 'Tire') {
            this.state.tire.push(coucou)
          } else if (coucou[i]['mood'] == 'Sad') {
            this.state.sad.push(coucou)
          } else {
            this.state.recognition.push(coucou)
          }
        }
      } else {
        this.setState({ etat: 'vide' })
      }
      this.setState({ loaded: true })
      this.forceUpdate();
    })
  }

  render() {
    let sampleData = [
        {
          value: this.state.joy.length,
          label: 'Joie',
          color: '#3fc1c9',
        }, {
          value: this.state.anxiety.length,
          label: 'Anxiété',
          color: '#364f6b'
        }, {
          value: this.state.tire.length,
          label: 'Fatigue',
          color: '#fce38a'
        }, {
          value: this.state.sad.length,
          label: 'Triste',
          color: '#fc5185'
        }, {
          value: this.state.recognition.length,
          label: 'Reconnaissant',
          color: '#480032'
        }
      ]

    return (
        <View style={styles.container}>
          <Tabs>
            <View title="VERSET" style={styles.content}>
              <ImageBackground source = {require('../assets/read-bible-light.jpg')} style = {styles.image} />
              <Text style={styles.title}> {i18n.t('homepage.step_1')} </Text>
              <TouchableOpacity
                style = {styles.containerh}
                onPress={(value) => { this.props.navigation.navigate('StateOfMind') }}>
                <Text style = {styles.text}>
                  {i18n.t('homepage.start')}
                </Text>
              </TouchableOpacity>
            </View>
            <View title="GRAPHIQUE" style={styles.content}>
              <Text  style={styles.titre_graphique}>Votre état d'esprit sur 2019</Text>
              <Text  style={styles.sous_titre_graphique}>Cliquez sur le graphique pour les détails</Text>
              { this.state.loaded ?
                  <View style={styles.piechart} >
                    { this.state.etat != 'vide' ?
                      <PureChart data={sampleData} type='pie' size={300} />
                      : <Text style={{ padding: 30, flex: 1, textAlign: 'center' }}> Vous n'avez pas encore de données, vous devez effectuer au moins une recherche de verset pour accèder à votre graphique. </Text>
                    }
                  </View>
                : <ActivityIndicator size="large" color="#0000ff" />
              }
            </View>
          </Tabs>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '120%',
    justifyContent: 'center'
  },
  sous_titre_graphique: {
    display: 'flex',
    textAlign: 'center',
    position: 'relative',
    bottom: 30,
    fontSize: 12,
    color: '#01676b'
  },
  titre_graphique: {
    display: 'flex',
    textAlign: 'center',
    position: 'relative',
    bottom: 30,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#01676b'
  },
  containerh: {
    borderColor: 'transparent',
    backgroundColor: '#01676b',
    padding: 15,
    display: 'flex',
    alignItems: 'center',
    width: '60%',
    marginLeft: '20%',
    marginBottom: '10%',
    marginTop: '20%',
    borderRadius: 30,
    borderWidth: 2
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
    flex: 1,
    display: 'flex',
    textAlign: 'center',
    fontWeight: '100',
    fontSize: 20,
    position: 'relative',
    paddingTop: 100,
    paddingRight: 25,
    paddingLeft: 25,
    color: 'white'
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
    fontWeight: '100',
    color: 'white'
  },
  piechart: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 60,
    width: '100%'
  }
})

export default Homepage
