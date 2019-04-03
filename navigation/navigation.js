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

const SearchStackNavigator = createStackNavigator(
  {
    StateOfMind: {
      screen: StateOfMind,
      navigationOptions: {
        title: "Etat d'esprit 1/3"
      }
    },
    Need: {
      screen: Need,
      navigationOptions: {
        title: "Besoins 2/3"
      }
    },
    Love: {
      screen: Love,
      navigationOptions: {
        title: "Amour 3/3"
      }
    },
    Courage: {
      screen: Courage,
      navigationOptions: {
        title: "Courage 3/3"
      }
    },
    Health: {
      screen: Health,
      navigationOptions: {
        title: "Santé 3/3"
      }
    },
    Faith: {
      screen: Faith,
      navigationOptions: {
        title: "Foi 3/3"
      }
    },
    Forgiveness: {
      screen: Forgiveness,
      navigationOptions: {
        title: "Pardon 3/3"
      }
    },
    Praises: {
      screen: Praises,
      navigationOptions: {
        title: "Louange 3/3"
      }
    },
    Result: {
      screen: Result,
      navigationOptions: {
        title: "Result 3/3"
      }
    }
  },
  {
    initialRouteName: 'StateOfMind'
  }
)

export default createAppContainer(SearchStackNavigator)
