import React from 'react'
import { StyleSheet, View, Text, Button, Image, Animated, TouchableOpacity } from 'react-native'
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
      recognition: []
    }
  }

  static navigationOptions = { header: null }

  componentDidMount() {
    getFeelings(this.state.deviceId).then(data => {
      const feeling = data['feelings']
      for(var i in feeling) {
        if (feeling[i]['mood'] == 'Joy') {
          this.state.joy.push(feeling)
        } else if (feeling[i]['mood'] == 'Anxiety') {
          this.state.anxiety.push(feeling)
        } else if (feeling[i]['mood'] == 'Tire') {
          this.state.tire.push(feeling)
        } else if (feeling[i]['mood'] == 'Sad') {
          this.state.sad.push(feeling)
        } else {
          this.state.recognition.push(feeling)
        }
        this.forceUpdate();
      }
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
                <Text  style={styles.titre_graphique}>Votre état d'esprit sur 2019</Text>
                <View style={styles.piechart} >
                  <PureChart data={sampleData} type='pie' size={300} />
                </View>
                <Text style={{textAlign: 'center'}}>Cliquez sur le graphique pour plus de détails</Text>
            </View>
          </Tabs>
        </View>
    )
  }
}

const styles = StyleSheet.create({
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
