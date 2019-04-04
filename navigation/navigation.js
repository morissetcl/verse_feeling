// Navigation/Navigation.js

import { createStackNavigator, createAppContainer } from 'react-navigation'
import Search from '../components/Search'
import StateOfMind from '../components/StateOfMind'
import Need from '../components/Need'
import Love from '../components/needs/Love'
import Courage from '../components/needs/Courage'
import Result from '../components/Result'
import Health from '../components/needs/Health'
import Faith from '../components/needs/Faith'
import Forgiveness from '../components/needs/Forgiveness'
import Praises from '../components/needs/Praises'
import Homepage from '../components/Homepage'

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
    Homepage: {
      screen: Homepage
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
    },
    Health: {
      screen: Health,
      navigationOptions: {
        title: "Santé"
      }
    },
    Faith: {
      screen: Faith,
      navigationOptions: {
        title: "Foi"
      }
    },
    Forgiveness: {
      screen: Forgiveness,
      navigationOptions: {
        title: "Pardon"
      }
    },
    Praises: {
      screen: Praises,
      navigationOptions: {
        title: "Louange"
      }
    },
    Result: {
      screen: Result,
      navigationOptions: {
        title: "Result"
      }
    }
  },
  {
    initialRouteName: 'Homepage'
  }
)

export default createAppContainer(SearchStackNavigator)
