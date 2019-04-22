// Navigation/Navigation.js
import i18n from '../src/i18n'
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
import { fadeIn } from 'react-navigation-transitions';

const SearchStackNavigator = createStackNavigator(
  {
    StateOfMind: {
      screen: StateOfMind,
      navigationOptions: {
        title: i18n.t('navigation.StateOfMind')
      },
    },
    Need: {
      screen: Need,
      navigationOptions: {
        title: i18n.t('navigation.need')
      },
    },
    Homepage: {
      screen: Homepage
    },
    Love: {
      screen: Love,
      navigationOptions: {
        title: i18n.t('Love')
      },
    },
    Courage: {
      screen: Courage,
      navigationOptions: {
        title: i18n.t('Courage')
      },
    },
    Health: {
      screen: Health,
      navigationOptions: {
        title: i18n.t('Health')
      },
    },
    Faith: {
      screen: Faith,
      navigationOptions: {
        title: i18n.t('Faith')
      },
    },
    Forgiveness: {
      screen: Forgiveness,
      navigationOptions: {
        title: i18n.t('Forgiveness')
      },
    },
    Praises: {
      screen: Praises,
      navigationOptions: {
        title: i18n.t('Praises')
      },
    },
    Result: {
      screen: Result,
      navigationOptions: {
        title: i18n.t('navigation.result')
      },
    },
  },
  {
    headerTintColor: 'red',
    initialRouteName: 'Homepage',
    transitionConfig: () => fadeIn(500)
  }
)

export default createAppContainer(SearchStackNavigator)
