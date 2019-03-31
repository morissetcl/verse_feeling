// Navigation/Navigation.js

import { createStackNavigator, createAppContainer } from 'react-navigation'
import Search from '../components/Search'
import StateOfMind from '../components/StateOfMind'
import Need from '../components/Need'
import Love from '../components/needs/Love'
import Courage from '../components/needs/Courage'

const SearchStackNavigator = createStackNavigator(
  {
    StateOfMind: {
      screen: StateOfMind,
      navigationOptions: {
        title: "Etat d'esprit"
      }
    },
    Need: {
      screen: Need,
      navigationOptions: {
        title: "Besoins"
      }
    },
    Love: {
      screen: Love,
      navigationOptions: {
        title: "Amour"
      }
    },
    Courage: {
      screen: Courage,
      navigationOptions: {
        title: "Courage"
      }
    }
  },
  {
    initialRouteName: 'StateOfMind'
  }
)

export default createAppContainer(SearchStackNavigator)
